"use strict";

const {
  darken,
  lighten,
  fade
} = require("@material-ui/core/styles/colorManipulator");
const { red, blueGrey } = require("@material-ui/core/colors");

const primary = "#344955";
const secondary = "#f9aa33";

const bgPage = "#e5e5e5";
const bgNormal = lighten(bgPage, 0.4);

const textNormal = "rgba(0, 0, 0, 0.9)";
const textDark = "rgba(0, 0, 0, 0.6)";
const textDisabled = "rgba(0, 0, 0, 0.4)";
const textContrastDark = "#fefefe";
const textContrastLight = "#000000";
const textError = red[400];
const textInfo = blueGrey[400];

const fontSize = 14;

module.exports = {
  name: "material",
  palette: {
    primary: {
      main: primary,
      contrastText: textContrastDark
    },
    secondary: {
      main: secondary,
      contrastText: textContrastLight
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
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 20,
    phoneWidth: 20,
    background: "#232f34",
    color: textContrastDark,
    itemBackground: "transparent",
    itemBorder: `4px solid transparent`,
    itemColor: textContrastDark,
    itemHoverBackground: darken(bgNormal, 0.2),
    itemHoverColor: textContrastLight,
    itemHoverBorder: `4px solid ${darken(secondary, 0.3)}`,
    itemSelectedBackground: darken(bgNormal, 0.1),
    itemSelectedColor: textContrastLight,
    itemSelectedBorder: `4px solid ${secondary}`,
    itemSelectedHoverBackground: bgNormal,
    itemSelectedHoverColor: textContrastLight,
    itemSelectedHoverBorder: `4px solid ${lighten(secondary, 0.05)}`
  },
  window: {
    background: bgNormal,
    color: primary,
    mapColor: primary,
    mapBackground: lighten(primary, 0.25),
    mapHoverBackground: lighten(primary, 0.5),
    mapSelectedBackground: lighten(primary, 0.35),
    dotInner: "#ffffff",
    dotOuter: "#999999"
  },
  form: {
    background: bgNormal,
    stepperBackground: lighten(bgNormal, 0.8),
    stepperLine: textDisabled,
    stepperColor: fade(textDark, 0.4),
    stepperActive: primary
  },
  main: {
    background: bgPage,
    paper: bgNormal,
    backdrop: "rgba(0, 0, 0, 0.85)",
    spinner: textContrastDark,
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
        background: [bgPage, "!important"]
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
        color: textContrastLight
      },
      body: {
        fontSize: "1rem",
        "&.selected": {
          background: primary,
          color: textContrastDark
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
            background: [fade(primary, 0.65), "!important"],
            color: [darken(textDark, 0.5), "!important"]
          },
          "&$containedSecondary": {
            background: [fade(secondary, 0.65), "!important"],
            color: [lighten(textDark, 0.5), "!important"]
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
        "&$disabled": {
          "&:before": {
            borderColor: [textDisabled, "!important"]
          }
        },
        "&$underline": {
          "&:before": {
            borderBottom: `2px solid ${textDisabled}`
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
          borderColor: [textDisabled, "!important"]
        },
        "&:not($disabled):not($error):hover:not($focused) $notchedOutline": {
          borderColor: [textContrastLight, "!important"]
        },
        "&:not($disabled):not($error)$focused $notchedOutline": {
          borderColor: [lighten(secondary, 0.1), "!important"]
        },
        "&$disabled $notchedOutline": {
          borderStyle: "dotted",
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
          color: [textContrastLight, "!important"],
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
    MuiRadio: {
      root: {
        "&$checked": {
          color: [primary, "!important"]
        }
      }
    },
    MuiSwitch: {
      icon: {
        color: "#e0e0e0"
      },
      iconChecked: {
        color: "#ffffff"
      }
    }
  }
};
