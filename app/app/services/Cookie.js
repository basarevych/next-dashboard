class Cookie {
  static get $provides() {
    return "cookie";
  }

  static get $lifecycle() {
    return "singleton";
  }

  get(name) {
    if (!process.browser) return;

    let v = document.cookie.match(
      "(^|;) ?" + encodeURIComponent(name) + "=([^;]*)(;|$)"
    );
    return v ? decodeURIComponent(v[2]) : null;
  }

  set(name, value, days = 365) {
    if (!process.browser) return;

    let d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie =
      encodeURIComponent(name) +
      "=" +
      encodeURIComponent(value) +
      ";path=/;expires=" +
      d.toGMTString();
  }

  delete(name) {
    if (!process.browser) return;

    this.set(encodeURIComponent(name), "", -1);
  }
}

export default Cookie;
