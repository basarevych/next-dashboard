/**
 * Local storage facade
 */
class Storage {
  /**
   * Constructor
   * @param {*} getState
   * @param {*} dispatch
   */
  constructor(getState, dispatch) {
    if (!process.browser) return;

    this.getState = getState;
    this.dispatch = dispatch;
  }

  /**
   * DI name
   */
  static get $provides() {
    return "storage";
  }

  /**
   * DI dependencies
   */
  static get $requires() {
    return ["getState", "dispatch"];
  }

  /**
   * DI lifecycle
   */
  static get $lifecycle() {
    return "singleton";
  }

  /**
   * Get a variable
   * @param {string} key
   * @param {*} [defaultValue]
   */
  get(key, defaultValue) {
    if (!process.browser) return;

    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  }

  /**
   * Set a variable
   * @param {string*} key
   * @param {*} value
   */
  set(key, value) {
    if (!process.browser) return;

    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Delete a variable
   * @param {string} key
   */
  delete(key) {
    if (!process.browser) return;

    localStorage.removeItem(key);
  }
}

export default Storage;
