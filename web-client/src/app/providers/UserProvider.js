import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { QueryRenderer } from "./RelayProvider";
import UserContainer from "./UserContainer";

export const query = graphql`
  query UserProviderQuery {
    viewer {
      ...UserContainer_viewer
    }
  }
`;

function UserProvider(props) {
  const queryRender = useCallback(
    ({ error, props: renderProps }) => {
      if (error) console.error(error);
      return (
        <UserContainer viewer={(renderProps && renderProps.viewer) || null}>
          {props.children}
        </UserContainer>
      );
    },
    [props.children]
  );

  return <QueryRenderer query={query} render={queryRender} />;
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default UserProvider;
