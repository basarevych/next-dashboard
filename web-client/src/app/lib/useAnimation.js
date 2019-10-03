import { useState, useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = process.browser ? useLayoutEffect : useEffect;

// Some easing functions copied from:
// https://github.com/streamich/ts-easing/blob/master/src/index.ts
// Hardcode here or pull in a dependency
const easing = {
  linear: n => n,
  elastic: n =>
    n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15),
  inExpo: n => Math.pow(2, 10 * (n - 1))
};

export default function useAnimation(duration, easingName = "linear") {
  const [elapsed, setElapsed] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    setElapsed(0);
    if (!duration) return;

    let animationFrame = null;
    let start = Date.now();

    // Function to be executed on each animation frame
    function onFrame() {
      animationFrame = null;
      const delta = Date.now() - start;
      setElapsed(delta);
      if (delta < duration) loop();
    }

    // Call onFrame() on next animation frame
    function loop() {
      animationFrame = requestAnimationFrame(onFrame);
    }

    // Start the loop
    loop();

    // Clean things up
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };
  }, [duration]);

  useIsomorphicLayoutEffect(() => {
    // Amount of specified duration elapsed on a scale from 0 - 1
    const n = Math.min(1, duration ? elapsed / duration : 0);
    // Return altered value based on our specified easing function
    setResult(easing[easingName](n));
  }, [elapsed, duration, easingName]);

  return result;
}
