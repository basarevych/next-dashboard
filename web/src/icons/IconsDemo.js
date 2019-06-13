import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { intlShape, FormattedMessage } from "react-intl";
import { AutoSizer, List } from "react-virtualized";
import { darken } from "@material-ui/core/styles/colorManipulator";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import * as source from "@material-ui/icons";
import styledScroll from "../../styles/styledScroll";

let icons = {};
_.forEach(_.keys(source), name => {
  const icon = source[name];
  if (!icon || icon.muiName !== "SvgIcon") return;

  let match;

  match = /^(.+)Outlined$/.exec(name);
  if (match) {
    if (!icons[match[1]]) icons[match[1]] = {};
    icons[match[1]].Outlined = icon;
    return;
  }

  match = /^(.+)Rounded$/.exec(name);
  if (match) {
    if (!icons[match[1]]) icons[match[1]] = {};
    icons[match[1]].Rounded = icon;
    return;
  }

  match = /^(.+)Sharp$/.exec(name);
  if (match) {
    if (!icons[match[1]]) icons[match[1]] = {};
    icons[match[1]].Sharp = icon;
    return;
  }

  match = /^(.+)TwoTone$/.exec(name);
  if (match) {
    if (!icons[match[1]]) icons[match[1]] = {};
    icons[match[1]].TwoTone = icon;
    return;
  }

  if (!icons[name]) icons[name] = {};
  icons[name].Main = icon;
});

let list = _.reduce(
  _.keys(icons),
  (acc, cur) => {
    acc.push({ name: _.replace(cur, /([A-Z])/g, " $1"), ...icons[cur] });
    return acc;
  },
  []
);

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  header: {
    marginTop: "1rem",
    padding: theme.spacing(1)
  },
  wrapper: {
    flex: 1
  },
  list: styledScroll(theme),
  row: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    overflowX: "auto",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "unset"
    }
  },
  odd: {
    background: darken(theme.palette.background.paper, 0.1)
  },
  even: {
    background: darken(theme.palette.background.paper, 0.05)
  },
  item: {
    width: "20%",
    minWidth: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.text.primary
  },
  text: {
    lineHeight: "1rem",
    textAlign: "center"
  }
});

class IconsDemo extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      list
    };

    this.renderIcon = this.renderIcon.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  renderIcon(Icon, name) {
    if (!Icon) return null;
    return (
      <div className={this.props.classes.item}>
        <Icon fontSize="large" color="inherit" />
        <div>
          <Typography variant="overline" className={this.props.classes.text}>
            {name}
          </Typography>
        </div>
      </div>
    );
  }

  renderRow({ index, key, style }) {
    const item = this.state.list[index];
    const name = item.name;
    const Main = item.Main;
    const Outlined = item.Outlined;
    const Rounded = item.Rounded;
    const Sharp = item.Sharp;
    const TwoTone = item.TwoTone;

    return (
      <div
        className={classNames(
          this.props.classes.row,
          index % 2 ? this.props.classes.odd : this.props.classes.even
        )}
        key={key}
        style={style}
      >
        {this.renderIcon(Main, name)}
        {this.renderIcon(Outlined, name + " Outlined")}
        {this.renderIcon(Rounded, name + " Rounded")}
        {this.renderIcon(Sharp, name + " Sharp")}
        {this.renderIcon(TwoTone, name + "Two Tone")}
      </div>
    );
  }

  handleInput(evt) {
    const filter = evt.target.value;
    this.setState({
      filter,
      list: _.filter(list, item =>
        _.includes(_.toLower(item.name), _.toLower(filter))
      )
    });
  }

  render() {
    return (
      <div className={this.props.classes.layout}>
        <div className={this.props.classes.header}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={8}>
              <Typography variant="h3">
                <FormattedMessage id="TITLE_ICONS" />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <form
                className={this.props.classes.form}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="iconsFilter"
                  fullWidth
                  label={this.props.intl.formatMessage({
                    id: "ICONS_FILTER_LABEL"
                  })}
                  value={this.state.filter}
                  onChange={this.handleInput}
                />
              </form>
            </Grid>
          </Grid>
        </div>
        <div className={this.props.classes.wrapper}>
          <AutoSizer>
            {({ width, height }) => {
              if (height < 300) height = 300;
              return (
                <List
                  className={this.props.classes.list}
                  width={width}
                  height={height}
                  rowCount={this.state.list.length}
                  rowHeight={100}
                  rowRenderer={this.renderRow}
                />
              );
            }}
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export default IconsDemo;
