import React from "react";
import PropTypes from "prop-types";
import Error from "../app/components/Pages/ErrorPage";
import { appSelectors } from "../app/state/app";

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
