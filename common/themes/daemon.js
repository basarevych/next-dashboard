"use strict";

const {
  darken,
  lighten,
  fade
} = require("@material-ui/core/styles/colorManipulator");
const { red, blueGrey, amber } = require("@material-ui/core/colors");

const primary = "#707484";
const secondary = "#af441d";

const bgPage = "#000000";
const bgNormal = "#484e5e";
const bgPaper = `linear-gradient(to bottom right, ${lighten(
  bgNormal,
  0.2
)} 0, ${darken(bgNormal, 0.2)} 100%)`;

const textNormal = "rgba(255, 255, 255, 0.9)";
const textDark = "rgba(255, 255, 255, 0.6)";
const textDisabled = "rgba(255, 255, 255, 0.4)";
const textContrast = "#ffffff";
const textError = red[400];
const textInfo = blueGrey[400];

const fontSize = 14;

module.exports = {
  name: "daemon",
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
    error: {
      main: textError
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
    color: textContrast,
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
  window: {
    background: lighten(bgNormal, 0.25),
    color: textNormal,
    mapColor: textNormal,
    mapBackground: fade(bgNormal, 0.7),
    mapHoverBackground: fade(amber[500], 0.85),
    mapSelectedBackground: amber[400],
    dotInner: "#ffffff",
    dotOuter: "#999999"
  },
  form: {
    background: bgNormal,
    stepperBackground: lighten(bgNormal, 0.15),
    stepperLine: textDisabled,
    stepperColor: fade(textDark, 0.4),
    stepperActive: "#ffffff"
  },
  main: {
    background:
      "linear-gradient(to right, #484e5e 0, #484e5e 15%, #20252f 100%)",
    paper: bgPaper,
    backdrop: "rgba(0, 0, 0, 0.85)",
    spinner: textContrast,
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
    MuiDialog: {
      paper: {
        background: [bgPaper, "!important"]
      }
    },
    MuiAvatar: {
      root: {
        borderRadius: 3
      }
    },
    MuiTableRow: {
      root: {
        //height: ["100%", "!important"],
        height: [48, "!important"]
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
        fontSize: "0.9rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        color: textContrast
      },
      body: {
        fontSize: "1rem",
        "&.selected": {
          background: primary,
          color: textContrast
        }
      }
    },
    MuiTablePagination: {
      root: {
        borderTop: `1px solid ${textDisabled}`,
        fontSize: "0.9rem"
      },
      caption: {
        fontSize: "0.9rem"
      },
      toolbar: {
        height: [48, "!important"],
        minHeight: [48, "!important"]
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
            borderBottom: `2px solid ${lighten(secondary, 0.1)}`
          }
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderWidth: [2, "!important"]
        },
        "&:not($disabled):not($error) $notchedOutline": {
          borderColor: [textDark, "!important"]
        },
        "&:not($disabled):not($error):hover:not($focused) $notchedOutline": {
          borderColor: [textContrast, "!important"]
        },
        "&:not($disabled):not($error)$focused $notchedOutline": {
          borderColor: [lighten(secondary, 0.1), "!important"]
        },
        "&$disabled $notchedOutline": {
          borderColor: [textDisabled, "!important"]
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
    MuiSelect: {
      icon: {
        color: textDark
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
    },
    MuiRadio: {
      root: {
        "&$checked": {
          color: [textNormal, "!important"]
        }
      }
    },
    MuiSwitch: {
      icon: {
        color: "#999999"
      },
      iconChecked: {
        color: "#ffffff"
      }
    }
  }
};
