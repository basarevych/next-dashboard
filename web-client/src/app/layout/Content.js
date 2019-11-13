import React, { useState, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/styles";
import loader from "../../../public/img/loader.svg";

export const timeout = 500;

const useIsomorphicLayoutEffect = process.browser ? useLayoutEffect : useEffect;

const useStyles = makeStyles(() => ({
  "@global": {
    ".page-transition-enter": {
      opacity: 0
    },
    ".page-transition-enter-active": {
      opacity: 1,
      transition: `opacity ${timeout}ms`
    },
    ".page-transition-enter-done": {
      opacity: 1
    },
    ".page-transition-exit": {
      opacity: 0
    },
    ".page-transition-exit-active": {
      opacity: 0,
      transition: `opacity ${timeout}ms`
    },
    ".page-transition-exit-done": {
      opacity: 0
    }
  },
  contentWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch"
  },
  contentTransitioning: {
    opacity: 0
  },
  loaderWrapper: {
    position: "fixed",
    top: "50vh",
    left: "50vw",
    width: "auto",
    height: "auto",
    transform: "translate3d(-50%, -50%, 0)",
    display: "flex",
    alignItems: "center"
  },
  loaderIcon: {
    "& svg": {
      width: 60,
      height: 60,
      fill: "currentColor",
      verticalAlign: "middle"
    }
  }
}));

function Content(props) {
  const classes = useStyles(props);
  const router = useRouter();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };
    const handleRouteChangeComplete = () => {
      setIsTransitioning(false);
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, setIsTransitioning]);

  return (
    <>
      {isTransitioning && (
        <div className={classes.loaderWrapper}>
          <div
            className={classes.loaderIcon}
            dangerouslySetInnerHTML={{ __html: loader }}
          />
        </div>
      )}
      <div
        className={classNames([
          props.className,
          classes.contentWrapper,
          isTransitioning && classes.contentTransitioning
        ])}
      >
        {props.children}
      </div>
    </>
  );
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Content;
