import React from "react";
import PropTypes from "prop-types";
import Hidden from "@material-ui/core/Hidden";
import HeaderBar from "./header/HeaderBarContainer";

export const styles = () => ({
  spacer: {
    height: "2rem"
  },
  wrapper: {
    zIndex: 1400,
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    height: 10
  },
  smallWrapper: {
    zIndex: 1400,
    alignSelf: "stretch"
  }
});

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    onSidebarToggle: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

    this.isDestroyed = false;

    this.handleWrapperMouseEnter = this.handleWrapperMouseEnter.bind(this);
    this.handleWrapperMouseLeave = this.handleWrapperMouseLeave.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillUnmount() {
    this.isDestroyed = true;
  }

  handleWrapperMouseEnter() {
    if (!this.state.isVisible) this.setState({ isVisible: true });
  }

  handleWrapperMouseLeave() {
    if (this.state.isVisible) this.setState({ isVisible: false });
  }

  handleClose() {
    if (this.state.isVisible) this.setState({ isVisible: false });
  }

  render() {
    return (
      <>
        <Hidden smUp initialWidth="lg">
          <div className={this.props.classes.smallWrapper}>
            <HeaderBar
              isVisible={true}
              withShadow={false}
              isAuthenticated={this.props.isAuthenticated}
              onSidebarToggle={this.props.onSidebarToggle}
              onClose={this.handleClose}
            />
          </div>
        </Hidden>
        <Hidden xsDown initialWidth="lg">
          <div
            className={this.props.classes.wrapper}
            onMouseEnter={this.handleWrapperMouseEnter}
            onMouseLeave={this.handleWrapperMouseLeave}
          >
            <HeaderBar
              isVisible={this.state.isVisible}
              withShadow={true}
              isAuthenticated={this.props.isAuthenticated}
              onSidebarToggle={this.props.onSidebarToggle}
              onClose={this.handleClose}
            />
          </div>
          <div className={this.props.classes.spacer} />
        </Hidden>
      </>
    );
  }
}

export default Header;
