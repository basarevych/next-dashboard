import React, { createContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { appSelectors, appOperations } from "../state";
import constants from "../../../common/constants";

function parseUser(user) {
  return {
    isAuthenticated: (user && user.isAuthenticated) || false,
    userId: (user && user.userId) || null,
    email: (user && user.email) || null,
    isEmailVerified: (user && user.isEmailVerified) || false,
    name: (user && user.name) || null,
    roles: (user && user.roles) || [],
    providers: (user && user.providers) || []
  };
}

export const UserContext = createContext(parseUser());

function UserProvider(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const statusCode = useSelector(state => appSelectors.getStatusCode(state));
  const user = (props.viewer || {}).me || {};
  const context = useMemo(() => parseUser(user), [user]);

  useEffect(() => {
    const update = () => {
      props.relay.refetch(null, null, null, { force: true });
    };
    window.addEventListener(constants.events.IDENTITY_CHANGED, update);
    window.addEventListener(constants.events.PROFILE_CHANGED, update);
    router.events.on("routeChangeComplete", update);
    return () => {
      window.removeEventListener(constants.events.IDENTITY_CHANGED, update);
      window.removeEventListener(constants.events.PROFILE_CHANGED, update);
      router.events.off("routeChangeComplete", update);
    };
  }, []);

  useEffect(() => {
    const page = constants.pages[router.asPath];
    const isAllowed = page && page.isAllowed;
    if (
      statusCode === 200 &&
      typeof isAllowed === "function" &&
      !isAllowed(context)
    ) {
      dispatch(
        appOperations.setStatusCode({
          code: context.isAuthenticated ? 403 : 401
        })
      );
    } else if (
      [403, 401].includes(statusCode) &&
      (typeof isAllowed !== "function" || isAllowed(context))
    ) {
      dispatch(appOperations.setStatusCode({ code: 200 }));
    }
  }, [router.asPath, statusCode, context, dispatch]);

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  relay: PropTypes.object.isRequired,
  viewer: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default UserProvider;
