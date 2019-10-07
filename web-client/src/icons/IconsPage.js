import React, { useState, useCallback } from "react";
import classNames from "classnames";
import { useIntl, FormattedMessage } from "react-intl";
import { AutoSizer, List } from "react-virtualized";
import { makeStyles } from "@material-ui/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import * as source from "@material-ui/icons";
import styledScroll from "../../styles/styledScroll";

const icons = {};
Object.keys(source).forEach(name => {
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

const fullList = Object.keys(icons).reduce((acc, cur) => {
  acc.push({ name: cur.replace(/([A-Z])/g, " $1"), ...icons[cur] });
  return acc;
}, []);

const useStyles = makeStyles(theme => ({
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
}));

function IconsPage() {
  const classes = useStyles();
  const intl = useIntl();

  const [filter, setFilter] = useState("");
  const [list, setList] = useState(fullList);

  const renderIcon = (Icon, name) => {
    if (!Icon) return null;
    return (
      <div className={classes.item}>
        <Icon fontSize="large" color="inherit" />
        <div>
          <Typography variant="overline" className={classes.text}>
            {name}
          </Typography>
        </div>
      </div>
    );
  };

  const handleInput = useCallback(evt => {
    const filter = evt.target.value;
    setFilter(filter);
    setList(
      fullList.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, []);

  const renderList = useCallback(
    ({ width, height }) => {
      if (height < 300) height = 300;
      return (
        <List
          className={classes.list}
          width={width}
          height={height}
          rowCount={list.length}
          rowHeight={100}
          rowRenderer={({ index, key, style }) => {
            const item = list[index];
            const name = item.name;
            const Main = item.Main;
            const Outlined = item.Outlined;
            const Rounded = item.Rounded;
            const Sharp = item.Sharp;
            const TwoTone = item.TwoTone;

            return (
              <div
                className={classNames(
                  classes.row,
                  index % 2 ? classes.odd : classes.even
                )}
                key={key}
                style={style}
              >
                {renderIcon(Main, name)}
                {renderIcon(Outlined, name + " Outlined")}
                {renderIcon(Rounded, name + " Rounded")}
                {renderIcon(Sharp, name + " Sharp")}
                {renderIcon(TwoTone, name + "Two Tone")}
              </div>
            );
          }}
        />
      );
    },
    [classes, list]
  );

  return (
    <div className={classes.layout}>
      <div className={classes.header}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={8}>
            <Typography variant="h3">
              <FormattedMessage id="TITLE_ICONS" />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                id="iconsFilter"
                fullWidth
                label={intl.formatMessage({ id: "ICONS_FILTER_LABEL" })}
                value={filter}
                onChange={handleInput}
              />
            </form>
          </Grid>
        </Grid>
      </div>
      <div className={classes.wrapper}>
        <AutoSizer>{renderList}</AutoSizer>
      </div>
    </div>
  );
}

export default IconsPage;
