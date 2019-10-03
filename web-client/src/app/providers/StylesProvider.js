import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "../../../styles/themes";
import { appSelectors } from "../state";

function StylesProvider(props) {
  const theme = useSelector(state => appSelectors.getTheme(state));

  return (
    <ThemeProvider key={theme} theme={styles.themes[theme]}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

StylesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default StylesProvider;
