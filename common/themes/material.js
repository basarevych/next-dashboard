"use strict";

const primary = "#95acbd";
const secondary = "#53dc7f";

const pageBackground = "#f0f4f8";
const normalBackground = "#f0f4f8";
const disabledBackground = "#e0e4e8";

const textNormal = "rgba(0, 42, 70, 0.87)";
const textDark = "rgba(0, 42, 70, 0.54)";
const textDisabled = "rgba(0, 42, 70, 0.38)";
const textContrast = "#fefefe";

const fontSize = 14;

module.exports = {
  name: "material",
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
      default: pageBackground,
      paper: "#ffffff"
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
  shape: {
    borderRadius: 5
  },
  sidebar: {
    width: 15,
    height: 11,
    background: "#053551",
    color: "#8d9fad",
    backgroundHover: "#008abd",
    colorHover: "#ffffff",
    backgroundSelected: "#0099d1",
    colorSelected: "#ffffff",
    backgroundSelectedHover: "#00b1f2",
    colorSelectedHover: "#ffffff"
  },
  main: {
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
    MuiTableHead: {
      root: {
        background: primary
      }
    },
    MuiTableCell: {
      root: {
        border: [`1px solid ${pageBackground}`, "!important"],
        "&.odd": {
          background: "#ffffff"
        },
        "&.even": {
          background: "#e3e9f2"
        },
        "&.selected": {
          background: ["padding-box #a5d9f8", "!important"],
          "&:first-child": {
            borderLeft: ["1px solid transparent", "!important"]
          },
          "&:last-child": {
            borderRight: ["1px solid transparent", "!important"]
          },
          "&:not(.spaced-odd):not(.spaced-even)": {
            border: ["1px solid #a5d9f8", "!important"]
          }
        },
        "&.expanded": {
          border: ["1px solid transparent", "!important"]
        },
        "&.spaced-odd": {
          height: ["auto", "!important"],
          background: ["padding-box #ffffff", "!important"],
          borderTop: ["4px solid transparent", "!important"],
          borderRight: ["none", "!important"],
          borderBottom: ["4px solid transparent", "!important"],
          borderLeft: ["none", "!important"],
          "&:first-child": {
            borderLeft: ["1px solid transparent", "!important"],
            borderTopLeftRadius: [4, "!important"],
            borderBottomLeftRadius: [4, "!important"]
          },
          "&:last-child": {
            borderRight: ["1px solid transparent", "!important"],
            borderTopRightRadius: [4, "!important"],
            borderBottomRightRadius: [4, "!important"]
          },
          "&.selected": {
            background: ["padding-box #a5d9f8", "!important"]
          }
        },
        "&.spaced-even": {
          height: ["auto", "!important"],
          background: ["padding-box #e3e9f2", "!important"],
          borderTop: ["4px solid transparent", "!important"],
          borderRight: ["none", "!important"],
          borderBottom: ["4px solid transparent", "!important"],
          borderLeft: ["none", "!important"],
          "&:first-child": {
            borderLeft: ["1px solid transparent", "!important"],
            borderTopLeftRadius: [4, "!important"],
            borderBottomLeftRadius: [4, "!important"]
          },
          "&:last-child": {
            borderRight: ["1px solid transparent", "!important"],
            borderTopRightRadius: [3, "!important"],
            borderBottomRightRadius: [3, "!important"]
          },
          "&.selected": {
            background: ["padding-box #a5d9f8", "!important"]
          }
        }
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
          background: [normalBackground, "!important"]
        }
      },
      disabled: {
        "&:not($containedPrimary):not($containedSecondary)": {
          background: [disabledBackground, "!important"],
          boxShadow: [
            "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
            "!important"
          ]
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: ["#f9f9f9", "!important"],
        borderRadius: 4,
        "&:hover": {
          background: ["#ffffff", "!important"]
        }
      },
      focused: {
        background: ["#ffffff", "!important"]
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
      }
    },
    MuiCheckbox: {
      checked: {
        color: ["#0092ff", "!important"]
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    }
  }
};
