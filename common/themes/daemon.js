"use strict";

const {
  darken,
  lighten,
  fade
} = require("@material-ui/core/styles/colorManipulator");
const { red, blueGrey } = require("@material-ui/core/colors");

const primary = "#707484";
const secondary = "#af441d";

const bgPage = "#000000";
const bgNormal = "#484e5e";

const textNormal = "rgba(255, 255, 255, 0.87)";
const textDark = "rgba(255, 255, 255, 0.54)";
const textDisabled = "rgba(255, 255, 255, 0.38)";
const textContrast = "#ffffff";
const textError = red[500];
const textInfo = blueGrey[500];

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
      paper: bgNormal
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
    tabletWidth: 20,
    phoneWidth: 20,
    background:
      "linear-gradient(to bottom, #484e5e 0, #161920 80%, #161920 100%)",
    itemBackground: "transparent",
    itemBorder: `4px solid transparent`,
    itemColor: textDark,
    itemHoverBackground: bgNormal,
    itemHoverColor: textNormal,
    itemHoverBorder: `4px solid ${darken(secondary, 0.3)}`,
    itemSelectedBackground: lighten(bgNormal, 0.1),
    itemSelectedColor: textContrast,
    itemSelectedBorder: `4px solid ${secondary}`,
    itemSelectedHoverBackground: lighten(bgNormal, 0.15),
    itemSelectedHoverColor: textContrast,
    itemSelectedHoverBorder: `4px solid ${lighten(secondary, 0.05)}`
  },
  main: {
    background:
      "linear-gradient(to right, #484e5e 0, #484e5e 15%, #20252f 100%)",
    spacing: 24,
    error: {
      background: fade(textError, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    },
    info: {
      background: fade(textInfo, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    }
  },
  props: {
    MuiDialog: {
      scroll: "body"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        background: `linear-gradient(to bottom right, ${lighten(
          bgNormal,
          0.2
        )} 0, ${darken(bgNormal, 0.2)} 100%)`
      }
    },
    MuiTableRow: {
      root: {
        //height: ["100%", "!important"],
        height: [48, "!important"],
        "& th": {
          fontWeight: "bold"
        }
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
      root: {
        "&$disabled": {
          "&:not($containedPrimary):not($containedSecondary)": {
            background: [lighten(bgNormal, 0.05), "!important"],
            color: [textDisabled, "!important"]
          },
          "&$containedPrimary": {
            background: [darken(primary, 0.15), "!important"],
            color: [textDisabled, "!important"]
          },
          "&$containedSecondary": {
            background: [darken(secondary, 0.15), "!important"],
            color: [textDisabled, "!important"]
          }
        }
      }
    },
    MuiIconButton: {
      root: {
        "&$disabled": {
          "&:not($colorPrimary):not($colorSecondary)": {
            color: [textDisabled, "!important"]
          }
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:before": {
            borderBottom: `2px solid ${textDark}`
          },
          "&:after": {
            borderBottom: `2px solid ${textContrast}`
          }
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: [lighten(bgNormal, 0.1), "!important"],
        borderRadius: 4,
        "&:hover": {
          background: [lighten(bgNormal, 0.2), "!important"]
        },
        "&$focused": {
          background: [lighten(bgNormal, 0.2), "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$underline": {
          "&:before": {
            borderBottom: ["none", "!important"]
          },
          "&:after": {
            borderBottom: ["none", "!important"]
          }
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100,
        "&$focused": {
          color: [textContrast, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$filled": {
          color: [textDark, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        }
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
    },
    MuiCheckbox: {
      root: {
        "&$checked": {
          color: [textNormal, "!important"]
        }
      }
    }
  }
};
