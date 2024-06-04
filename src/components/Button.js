import { Button as ButtonTailwind } from "@headlessui/react";

function Button() {
  return (
    <ButtonTailwind className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
      Save changes
    </ButtonTailwind>
  );
}
export default Button;
