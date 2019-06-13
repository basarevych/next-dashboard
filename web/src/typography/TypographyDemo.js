import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export const styles = theme => ({
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
    margin: "2rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "2rem 0"
    }
  },
  label: {
    width: 350,
    padding: "0 2rem 1rem 2rem",
    textAlign: "right",
    fontFamily: "Roboto Mono",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  item: {
    padding: "2rem",
    flex: 1
  }
});

class TypographyDemo extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={this.props.classes.layout}>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;h1&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="h1" color="inherit">
              h1. Heading
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;h2&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="h2" color="inherit">
              h2. Heading
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;h3&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="h3" color="inherit">
              h3. Heading
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;h4&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="h4" color="inherit">
              h4. Heading
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;h5&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="h5" color="inherit">
              h5. Heading
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;h6&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="h6" color="inherit">
              h6. Heading
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;subtitle1&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="subtitle1" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;subtitle2&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="subtitle2" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;body1&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="body1" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;body2&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="body2" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;button&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="button" color="inherit">
              Button text
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;caption&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="caption" color="inherit">
              Caption text
            </Typography>
          </Paper>
        </div>
        <div className={this.props.classes.row}>
          <Typography
            className={this.props.classes.label}
            variant="body1"
            color="inherit"
          >
            &lt;Typography variant=&quot;overline&quot;&gt;
          </Typography>
          <Paper className={this.props.classes.item}>
            <Typography variant="overline" color="inherit">
              Overline text
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

export default TypographyDemo;
