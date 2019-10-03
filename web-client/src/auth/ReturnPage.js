import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { appOperations } from "../app/state";

function ReturnPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.token) {
      dispatch(
        appOperations.finishLinkingProvider({
          token: props.token,
          redirect: props.redirect
        })
      );
    }
  }, []);

  return <div />;
}

ReturnPage.propTypes = {
  token: PropTypes.string,
  redirect: PropTypes.string
};

ReturnPage.getInitialProps = ({ query: requestQuery }) => {
  return {
    token: requestQuery.token,
    redirect: requestQuery.redirect
  };
};

export default ReturnPage;
