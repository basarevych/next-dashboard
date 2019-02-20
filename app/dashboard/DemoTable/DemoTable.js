import React from "react";
import PropTypes from "prop-types";
import { intlShape } from "react-intl";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DemoList, { pageSize, sortBy, sortDir } from "./DemoListContainer";
import constants from "../../../common/constants";

export const defaultDept = _.values(constants.depts)[0];
export { pageSize, sortBy, sortDir };

class DemoTable extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    viewer: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.depts = _.values(constants.depts);
    this.state = {
      index: _.indexOf(this.depts, defaultDept)
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    this.setState({ index });
  }

  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Tabs value={this.state.index} onChange={this.handleChange}>
            {_.map(this.depts, dept => (
              <Tab
                key={`tab-${dept}`}
                label={this.props.intl.formatMessage({ id: `DEPT_${dept}` })}
              />
            ))}
          </Tabs>
        </AppBar>
        <DemoList
          dept={this.depts[this.state.index]}
          viewer={this.props.viewer}
        />
      </React.Fragment>
    );
  }
}

export default DemoTable;
