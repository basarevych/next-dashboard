import { createSelector } from "reselect";
import { Map } from "immutable";

export const getCountries = state => state.getIn(["dashboard", "employees"]);

export const getCountryOptions = createSelector(
  state => state.getIn(["dashboard", "countries"]),
  countries =>
    // eslint-disable-next-line lodash/prefer-lodash-method
    countries
      .map(country =>
        Map({ value: country.get("code"), label: country.get("name") })
      )
      .unshift(Map({ value: "", label: "" }))
);

export const getEmployees = state => state.getIn(["dashboard", "employees"]);

export const getProfit = (state, props) =>
  // eslint-disable-next-line lodash/prefer-lodash-method
  state
    .getIn(["dashboard", "profit"])
    .map(item =>
      item.set(
        "name",
        props.intl.formatDate(new Date(item.get("date"), { weekday: "short" }))
      )
    );

export const getSales = state => state.getIn(["dashboard", "sales"]);

export const getClients = state => state.getIn(["dashboard", "clients"]);

export const getAvgTime = state => state.getIn(["dashboard", "avgTime"]);
