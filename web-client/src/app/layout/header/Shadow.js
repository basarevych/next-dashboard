import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/styles";

function Shadow(props) {
  const theme = useTheme();

  const boundary = theme.spacing(
    props.isDesktop ? theme.sidebar.computerWidth : theme.sidebar.tabletWidth
  );

  return (
    <svg
      key={`shadow-${props.width}`}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height="30"
    >
      <defs>
        <clipPath id="appBarClipLeft">
          <rect x="0" y="0" width={boundary} height="30" />
        </clipPath>
        <filter
          id="appBarShadowLeft"
          x="-10"
          y="-10"
          width={props.width + 20}
          height="60"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood floodColor="rgba(0, 0, 0, 0.9)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="appBarClipRight">
          <rect x={boundary} y="0" width={props.width - boundary} height="30" />
        </clipPath>
        <filter
          id="appBarShadowRight"
          x="-10"
          y="-10"
          width={props.width + 20}
          height="60"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood floodColor="rgba(0, 0, 0, 0.5)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g clipPath="url(#appBarClipLeft)">
        <rect
          x="-10"
          y="-16"
          width={boundary + 20}
          height="20"
          fill={theme.palette.secondary.main}
          filter="url(#appBarShadowLeft)"
        />
      </g>
      <g clipPath="url(#appBarClipRight)">
        <rect
          x={boundary - 10}
          y="-16"
          width={props.width - boundary + 20}
          height="20"
          fill={theme.palette.secondary.main}
          filter="url(#appBarShadowRight)"
        />
      </g>
    </svg>
  );
}

Shadow.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired
};

export default Shadow;
