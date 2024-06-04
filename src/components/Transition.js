import { Button, Transition } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function TransitionTailwind() {
    let [isShowing, setIsShowing] = useState(true);

    return (
        <div className="mt-8 flex flex-col items-center">
            <div className="size-[6.25rem]">
                <Transition
                    show={isShowing}
                    enter="transition duration-[400ms]"
                    enterFrom="rotate-[-120deg] scale-50 opacity-0"
                    enterTo="rotate-0 scale-100 opacity-100"
                    leave="transition duration-200 ease-in-out"
                    leaveFrom="rotate-0 scale-100 opacity-100"
                    leaveTo="scale-95 opacity-0"
                >
                    <div className="size-full rounded-xl bg-white shadow-lg" />
                </Transition>
            </div>

            <Button
                onClick={() => {
                    setIsShowing(false);
                    setTimeout(() => setIsShowing(true), 500);
                }}
                className="mt-10 flex items-center gap-2 rounded-full bg-white/10 py-1 px-3 text-sm/6 font-semibold text-white transition data-[hover]:scale-105 data-[hover]:bg-white/15"
            >
                <ArrowPathIcon className="size-4 fill-white/50" />
                <span>Click to transition</span>
            </Button>
        </div>
    );
}
