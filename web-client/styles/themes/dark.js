"use strict";

const {
  darken,
  lighten,
  fade
} = require("@material-ui/core/styles/colorManipulator");
const { red, blueGrey } = require("@material-ui/core/colors");

const primaryColor = "rgba(255, 255, 255, 0.9)";
const primaryBackground = "#80838f";

const secondaryColor = "rgba(255, 255, 255, 0.9)";
const secondaryBackground = "#c5511d";

const errorColor = "#ffffff";
const errorBackgound = red[300];

const infoColor = "#ffffff";
const infoBackground = blueGrey[400];

const bgNormal = "#3b3f4d";
const bgPaper = "#585e6e";

const textPrimary = "rgba(255, 255, 255, 0.9)";
const textSecondary = "rgba(255, 255, 255, 0.6)";
const textDisabled = "rgba(255, 255, 255, 0.35)";

const fontSize = 14;

module.exports = {
  name: "dark",
  palette: {
    type: "dark",
    primary: {
      light: lighten(primaryBackground, 0.3),
      main: primaryBackground,
      dark: darken(primaryBackground, 0.3),
      contrastText: primaryColor
    },
    secondary: {
      light: lighten(secondaryBackground, 0.3),
      main: secondaryBackground,
      dark: darken(secondaryBackground, 0.3),
      contrastText: secondaryColor
    },
    error: {
      light: lighten(errorBackgound, 0.3),
      main: errorBackgound,
      dark: darken(errorBackgound, 0.3),
      contrastText: errorColor
    },
    background: {
      default: bgNormal,
      paper: bgPaper,
      level1: bgNormal,
      level2: darken(bgNormal, 0.1)
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      disabled: textDisabled,
      hint: textDisabled
    },
    divider: "rgba(255, 255, 255, 0.12)"
  },
  typography: {
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  shape: {
    borderRadius: 3
  },
  main: {
    background: bgNormal,
    color: textPrimary,
    backdrop: "rgba(0, 0, 0, 0.85)",
    spinner: "#ffffff",
    error: {
      background: errorBackgound,
      color: errorColor,
      borderRadius: 3,
      padding: "1rem 2rem"
    },
    info: {
      background: infoBackground,
      color: infoColor,
      borderRadius: 3,
      padding: "1rem 2rem"
    }
  },
  header: {
    color: [primaryColor, "!important"],
    background: [primaryBackground, "!important"]
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 20,
    phoneWidth: 30,
    background: `rgb(22, 25, 32) linear-gradient(
        to bottom,
        rgba(72, 78, 94, 1.0) 0,
        rgba(72, 78, 94, 0.0) 80%,
        rgba(72, 78, 94, 0.0) 100%
      )`,
    color: "#f0f0f0",
    itemBackground: "transparent",
    itemBorder: "4px solid transparent",
    itemColor: textSecondary,
    itemHoverBackground: lighten(bgNormal, 0.15),
    itemHoverColor: textPrimary,
    itemHoverBorder: `4px solid ${darken(secondaryBackground, 0.3)}`,
    itemSelectedBackground: lighten(bgNormal, 0.25),
    itemSelectedColor: textPrimary,
    itemSelectedBorder: `4px solid ${secondaryBackground}`,
    itemSelectedHoverBackground: lighten(bgNormal, 0.35),
    itemSelectedHoverColor: textPrimary,
    itemSelectedHoverBorder: `4px solid ${lighten(secondaryBackground, 0.05)}`
  },
  chart: {
    statColor: textPrimary,
    mapColor: textPrimary,
    mapBackground: primaryBackground,
    mapHoverBackground: secondaryBackground,
    mapSelectedBackground: lighten(secondaryBackground, 0.15),
    gridColor: textDisabled,
    lineColor: textPrimary,
    dotColor: "#ffffff",
    areaColor: fade(infoBackground, 0.5)
  },
  form: {
    stepperBackground: fade(primaryBackground, 0.65),
    stepperLine: textDisabled,
    stepperColor: textDisabled,
    stepperActive: textPrimary
  },
  props: {
    MuiLink: {
      underline: "none"
    },
    MuiDialog: {
      scroll: "body"
    }
  },
  overrides: {
    MuiLink: {
      root: {
        cursor: "pointer"
      }
    },
    MuiAvatar: {
      root: {
        borderRadius: 3
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
        fontWeight: "bold",
        textTransform: "uppercase",
        color: textPrimary
      },
      paddingCheckbox: {
        padding: "0 0 0 1em"
      },
      body: {
        "&.selected": {
          background: primaryBackground
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
      },
      selectIcon: {
        color: textSecondary
      }
    },
    MuiTabs: {
      scroller: {
        overflowX: ["hidden", "!important"],
        marginBottom: [0, "!important"]
      },
      scrollButtons: {
        height: 48
      }
    },
    MuiTab: {
      root: {
        height: [48, "!important"]
      }
    },
    MuiIconButton: {
      root: {
        color: [textPrimary, "!important"],
        "&$disabled": {
          color: [textDisabled, "!important"]
        }
      }
    },
    MuiTooltip: {
      popper: {
        zIndex: 10000
      }
    },
    MuiButton: {
      root: {
        "&$containedPrimary": {
          background: [primaryBackground, "!important"],
          color: [primaryColor, "!important"]
        },
        "&$containedSecondary": {
          background: [secondaryBackground, "!important"],
          color: [secondaryColor, "!important"]
        },
        "&$disabled": {
          "&:not($containedPrimary):not($containedSecondary)": {
            background: [darken(bgNormal, 0.25), "!important"],
            color: [darken(textPrimary, 0.25), "!important"]
          },
          "&$containedPrimary": {
            background: [darken(primaryBackground, 0.25), "!important"],
            color: [darken(primaryColor, 0.25), "!important"]
          },
          "&$containedSecondary": {
            background: [darken(secondaryBackground, 0.25), "!important"],
            color: [darken(secondaryColor, 0.25), "!important"]
          }
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:before": {
            borderBottom: `2px solid ${textSecondary}`
          },
          "&:after": {
            borderBottom: `2px solid ${lighten(secondaryBackground, 0.1)}`
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
          borderColor: [textSecondary, "!important"]
        },
        "&:not($disabled):not($error):hover:not($focused) $notchedOutline": {
          borderColor: [textPrimary, "!important"]
        },
        "&:not($disabled):not($error)$focused $notchedOutline": {
          borderColor: [lighten(secondaryBackground, 0.1), "!important"]
        },
        "&$disabled $notchedOutline": {
          borderStyle: "dotted",
          borderColor: [textSecondary, "!important"]
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
            color: [errorBackgound, "!important"]
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
          color: [textPrimary, "!important"],
          "&$error": {
            color: [errorBackgound, "!important"]
          }
        },
        "&$filled": {
          color: [textSecondary, "!important"],
          "&$error": {
            color: [errorBackgound, "!important"]
          }
        }
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: ["32px", "!important"],
        margin: [0, "!important"]
      }
    },
    MuiSelect: {
      icon: {
        color: textSecondary
      }
    },
    MuiCheckbox: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textPrimary, "!important"]
        }
      }
    },
    MuiRadio: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textPrimary, "!important"]
        }
      }
    },
    MuiSwitch: {
      track: {
        backgroundColor: textDisabled
      },
      thumb: {
        backgroundColor: textSecondary
      }
    }
  }
};
