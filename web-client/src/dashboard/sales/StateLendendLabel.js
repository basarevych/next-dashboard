import React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";

function StateLegendLabel(props) {
  const intl = useIntl();

  const { index, x, y, offsetX, offsetY, text, chart, theme } = props;
  if (!chart || !text) return null;

  return (
    <g>
      <text
        x={x}
        y={y + offsetY}
        alignmentBaseline="middle"
        fill={theme.palette.text.primary}
      >
        {text}
      </text>
      <text
        x={x + offsetX}
        y={y + offsetY}
        alignmentBaseline="middle"
        fill={theme.palette.text.primary}
      >
        {intl.formatNumber(chart[index].y)}
      </text>
    </g>
  );
}

StateLegendLabel.propTypes = {
  index: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  text: PropTypes.string,
  chart: PropTypes.array,
  theme: PropTypes.object
};

export default StateLegendLabel;
