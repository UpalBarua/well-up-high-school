import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { useSpring, animated } from "react-spring";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterSection = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const animationProps = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(50px)",
  });

  return (
    <section ref={ref}>
      <Parallax
        bgImage="https://i.ibb.co/hKZk9Bm/kenny-eliason-z-FSo6bn-ZJTw-unsplash.jpg"
        strength={400}
      >
        <div className="relative bg-opacity-70 bg-gray-900 py-[5%] md:py-[8.5%] text-white">
          <div className="absolute inset-0" />
          <div className="container text-center h-full w-full flex flex-col justify-center align-center">
            <animated.i
              className="text-2xl md:text-5xl  font-semibold"
              style={animationProps}
            >
              Welcome to Our School
            </animated.i>
            <animated.p
              className="text-base  md:text-2xl mt-1 md:mt-3 text-gray-300 mb-5"
              style={animationProps}
            >
              Where learning never stops!
            </animated.p>
            <div className="flex flex-col md:flex-row justify-center items-center  mt-[4%] space-y-4 md:space-y-0 md:space-x-16">
              <animated.div
                className="text-4xl md:text-6xl font-bold flex flex-col md:flex-row items-center text-gray-300 "
                style={animationProps}
              >
                {isInView && (
                  <CountUp
                    end={70}
                    duration={3}
                    separator=","
                    useEasing={true}
                    useGrouping={true}
                  />
                )}
                <span className="ml-1 md:text-3xl text-lg">Teachers</span>
              </animated.div>
              <animated.div
                className="text-4xl md:text-6xl font-bold flex flex-col md:flex-row items-center text-gray-300 "
                style={animationProps}
              >
                {isInView && (
                  <CountUp
                    end={200}
                    duration={3}
                    separator=","
                    useEasing={true}
                    useGrouping={true}
                  />
                )}
                <span className="ml-1 md:text-3xl text-lg">Students</span>
              </animated.div>
              <animated.div
                className="text-4xl md:text-6xl font-bold flex flex-col md:flex-row items-center text-gray-300 "
                style={animationProps}
              >
                {isInView && (
                  <CountUp
                    end={50}
                    duration={3}
                    separator=","
                    useEasing={true}
                    useGrouping={true}
                  />
                )}
                <span className="ml-1 md:text-3xl text-lg">Staff</span>
              </animated.div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default CounterSection;
