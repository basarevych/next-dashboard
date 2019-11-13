import { useState, useContext, useEffect } from "react";
import { requestSubscription } from "react-relay";
import { useSelector } from "react-redux";
import { RelayContext } from "../providers/RelayProvider";
import { appSelectors } from "../state";

export default function useSubscription(
  { subscription, variables, onNext, onCompleted, onError },
  dependencies
) {
  const { environment } = useContext(RelayContext);
  const { userId } = useSelector(appSelectors.getUser);

  // changing this or any of the dependencies will force resubscription
  const [subTrigger, setSubTrigger] = useState(0);

  let finalDependecies = [
    userId,
    subTrigger,
    subscription,
    variables,
    onNext,
    onCompleted,
    onError
  ];

  if (Array.isArray(dependencies))
    finalDependecies = finalDependecies.concat(dependencies);

  useEffect(() => {
    let isDetroyed = false;
    let timer = null;

    if (process.env.NODE_ENV === "development")
      console.log("[Subscription] activating");

    const request = requestSubscription(environment, {
      subscription,
      variables,
      onNext,
      onCompleted: (...args) => {
        if (onCompleted) onCompleted(...args);
        if (timer) return;
        timer = setTimeout(() => {
          timer = null;
          if (!isDetroyed) setSubTrigger(n => n + 1);
        }, 1000);
      },
      onError: (...args) => {
        if (onError) onError(...args);
        if (timer) return;
        timer = setTimeout(() => {
          timer = null;
          if (!isDetroyed) setSubTrigger(n => n + 1);
        }, 1000);
      }
    });

    return () => {
      isDetroyed = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      request.dispose();
    };
  }, finalDependecies);
}
