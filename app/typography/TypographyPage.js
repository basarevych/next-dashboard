import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import isRouteAllowed from "../../common/isRouteAllowed";

export const styles = () => ({
  layout: {
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "column"
  },
  row: {
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center",
    marginTop: "2rem",
    marginBottom: "2rem"
  },
  label: {
    width: 350,
    padding: "0 2rem",
    textAlign: "right",
    fontFamily: "Roboto Mono",
    fontWeight: "bold"
  },
  item: {
    flex: 1
  }
});

class TypographyPage extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    userRoles: PropTypes.array.isRequired
  };

  render() {
    if (!isRouteAllowed("/typography", this.props.userRoles)) return null;

    return (
      <div className={this.props.classes.layout}>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;h1&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="h1">
            h1. Heading
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;h2&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="h2">
            h2. Heading
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;h3&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="h3">
            h3. Heading
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;h4&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="h4">
            h4. Heading
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;h5&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="h5">
            h5. Heading
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;h6&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="h6">
            h6. Heading
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;subtitle1&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;subtitle2&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="subtitle2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;body1&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;body2&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;button&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="button">
            Button text
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;caption&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="caption">
            Caption text
          </Typography>
        </div>
        <div className={this.props.classes.row}>
          <Typography className={this.props.classes.label} variant="body1">
            &lt;Typography variant=&quot;overline&quot;&gt;
          </Typography>
          <Typography className={this.props.classes.item} variant="overline">
            Overline text
          </Typography>
        </div>
      </div>
    );
  }
}

export default TypographyPage;
