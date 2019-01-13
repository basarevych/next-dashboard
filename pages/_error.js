import React from "react";
import PropTypes from "prop-types";
import Error from "../app/app/error/ErrorPage";
import { appSelectors } from "../app/app/state";

class Page extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number
  };

  static async getInitialProps({ store }) {
    const statusCode = store && appSelectors.getStatusCode(store.getState());
    return { statusCode };
  }

  render() {
    return <Error statusCode={this.props.statusCode || 500} />;
  }
}

export default Page;
