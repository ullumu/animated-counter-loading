"use client";
import { useSpring, animated } from "@react-spring/web";

function Loading(props) {
  const countAnimation = useSpring({
    number: 95,
    from: { number: 0 },
    config: {
      duration: 2500,
    },
  });

  return (
    <animated.div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black">
      <animated.div className="text-white text-9xl font-bold">
        {countAnimation.number.to((val) => `${Math.floor(val)}%`)}
      </animated.div>
    </animated.div>
  );
}

export default Loading;
