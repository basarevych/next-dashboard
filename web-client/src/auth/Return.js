import React from "react";
import PropTypes from "prop-types";

class Return extends React.Component {
  static propTypes = {
    token: PropTypes.string,
    redirect: PropTypes.string,
    onReturn: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.onReturn(this.props.token, this.props.redirect);
  }

  render() {
    return <div />;
  }
}

export default Return;
