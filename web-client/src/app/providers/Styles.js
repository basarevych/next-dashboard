import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "../../../styles/themes";

class StylesProvider extends React.Component {
  static propTypes = {
    theme: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
  };

  render() {
    const { theme, children } = this.props;
    return (
      <ThemeProvider key={theme} theme={styles.themes[theme]}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  }
}

export default StylesProvider;
