"use strict";

const primary = "#4c5066";
const secondary = "#b33711";

const bgPage = "#000000";

const bgNormal = "#2b2c33";
const bgLight = "#3b3c43";
const bgDisabled = "#2b2c2c";
const bgContrast = "#5b5c63";

const textNormal = "rgba(255, 255, 255, 0.87)";
const textDark = "rgba(255, 255, 255, 0.54)";
const textDisabled = "rgba(255, 255, 255, 0.38)";
const textContrast = "#ffffff";

const fontSize = 14;

module.exports = {
  name: "daemon",
  wallpaper: "/static/img/bg.jpg?v=3",
  palette: {
    primary: {
      main: primary,
      contrastText: textContrast
    },
    secondary: {
      main: secondary,
      contrastText: textContrast
    },
    background: {
      default: bgPage,
      paper: bgLight
    },
    text: {
      primary: textNormal,
      secondary: textDark,
      disabled: textDisabled,
      hint: textDisabled
    },
    divider: "rgba(255, 255, 255, 0.12)"
  },
  typography: {
    useNextVariants: true,
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  shape: {
    borderRadius: 3
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 10,
    phoneWidth: 20,
    background: "rgba(0, 0, 0, 0.5)",
    color: textNormal,
    backgroundHover: "rgba(255, 255, 255, 0.05)",
    colorHover: textContrast,
    backgroundSelected: "rgba(255, 255, 255, 0.1)",
    colorSelected: textContrast,
    backgroundSelectedHover: "rgba(255, 255, 255, 0.15)",
    colorSelectedHover: textContrast
  },
  main: {
    wallpaper: "/static/img/bg.jpg",
    background: "linear-gradient(to right bottom, #3d3f4d, #222326)",
    spacing: 24
  },
  overrides: {
    MuiTableRow: {
      root: {
        height: ["100%", "!important"]
      },
      head: {
        height: ["100%", "!important"]
      }
    },
    MuiTableBody: {
      root: {
        "& tr:last-child th, & tr:last-child td": {
          borderBottom: "none"
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${textDisabled}`
      },
      head: {
        fontSize: fontSize,
        color: textContrast
      },
      body: {
        fontSize: fontSize
      }
    },
    MuiButton: {
      label: {
        height: "1em"
      },
      contained: {
        "&:not($containedPrimary):not($containedSecondary)": {
          background: bgNormal
        }
      },
      disabled: {
        "&:not($containedPrimary):not($containedSecondary)": {
          color: [textDark, "!important"],
          background: [bgDisabled, "!important"],
          boxShadow: [
            "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
            "!important"
          ]
        }
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `2px solid ${textNormal}`
        },
        "&:after": {
          borderBottom: `2px solid ${secondary}`
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: [bgLight, "!important"],
        borderRadius: 4,
        "&:hover": {
          background: [bgContrast, "!important"]
        }
      },
      focused: {
        background: [bgContrast, "!important"]
      },
      underline: {
        "&:before": {
          borderBottom: ["none", "!important"]
        },
        "&:after": {
          borderBottom: ["none", "!important"]
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100
      },
      focused: {
        color: [secondary, "!important"]
      },
      filled: {
        color: [textDark, "!important"]
      }
    },
    MuiSwitch: {
      icon: {
        color: textNormal
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    }
  }
};
