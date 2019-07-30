import Injectt from "injectt";
import Fetcher from "../services/Fetcher";
import Storage from "../services/Storage";
import Socket from "../services/Socket";
import Cookie from "../services/Cookie";

const diFactory = () => {
  const di = new Injectt();
  di.registerClass(Fetcher);
  di.registerClass(Storage);
  di.registerClass(Socket);
  di.registerClass(Cookie);
  return di;
};

const __NEXT_DI_CONTAINER__ = "__NEXT_DI_CONTAINER__";

export default function getDiContainer() {
  let di;
  if (!process.browser || process.env.NODE_ENV === "test") {
    // Always make a new container if server,
    // otherwise state is shared between requests
    di = diFactory();
  } else {
    if (window[__NEXT_DI_CONTAINER__]) di = window[__NEXT_DI_CONTAINER__];
    else di = window[__NEXT_DI_CONTAINER__] = diFactory();
  }

  return di;
}
