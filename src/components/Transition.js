import { Transition as TransitionTailwind  } from "@headlessui/react";
import { useState } from "react";

function Transition() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <TransitionTailwind
        show={isShowing}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div>I will fade in and out</div>
      </TransitionTailwind>
    </>
  );
}
export default Transition;
