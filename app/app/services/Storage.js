class Storage {
  constructor(getState, dispatch) {
    if (!process.browser) return;

    this.getState = getState;
    this.dispatch = dispatch;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "storage";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["getState", "dispatch"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  get(key, defaultValue) {
    if (!process.browser) return;

    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  }

  set(key, value) {
    if (!process.browser) return;

    localStorage.setItem(key, JSON.stringify(value));
  }

  delete(key) {
    if (!process.browser) return;

    localStorage.removeItem(key);
  }
}

export default Storage;
