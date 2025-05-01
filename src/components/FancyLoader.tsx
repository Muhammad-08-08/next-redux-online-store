import React from "react";

const FancyLoader = () => {
  return (
    <div className="relative w-10 h-10" style={{ transform: "rotate(165deg)" }}>
      <span
        className="before:content-[''] after:content-[''] absolute top-1/2 left-1/2 w-10 h-10 rounded-[0.25em]
        before:absolute before:w-2 before:h-2 before:rounded-[0.25em] before:top-1/2 before:left-1/2
        before:animate-before8 before:translate-x-[-50%] before:translate-y-[-50%]
        after:absolute after:w-2 after:h-2 after:rounded-[0.25em] after:top-1/2 after:left-1/2
        after:animate-after6 after:translate-x-[-50%] after:translate-y-[-50%]"
      ></span>

      <style>{`
        @keyframes before8 {
          0% {
            width: 0.5em;
            box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
              -1em 0.5em rgba(111, 202, 220, 0.75);
          }
          35% {
            width: 2.5em;
            box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75),
              0 0.5em rgba(111, 202, 220, 0.75);
          }
          70% {
            width: 0.5em;
            box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75),
              1em 0.5em rgba(111, 202, 220, 0.75);
          }
          100% {
            box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
              -1em 0.5em rgba(111, 202, 220, 0.75);
          }
        }

        @keyframes after6 {
          0% {
            height: 0.5em;
            box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
              -0.5em -1em rgba(233, 169, 32, 0.75);
          }
          35% {
            height: 2.5em;
            box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75),
              -0.5em 0 rgba(233, 169, 32, 0.75);
          }
          70% {
            height: 0.5em;
            box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75),
              -0.5em 1em rgba(233, 169, 32, 0.75);
          }
          100% {
            box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
              -0.5em -1em rgba(233, 169, 32, 0.75);
          }
        }

        .before\\:animate-before8::before {
          animation: before8 2s infinite;
        }

        .after\\:animate-after6::after {
          animation: after6 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default FancyLoader;
