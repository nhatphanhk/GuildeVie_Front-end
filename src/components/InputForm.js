import React from "react";
import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
export default function InputFormTailwind() {
    return (
        <div className="w-full max-w-md px-4">
            <Field>
                <Label className="text-sm/6 font-medium text-black">Name</Label>
                <Description className="text-sm/6 text-black/50">
                    Use your real name so people will recognize you.
                </Description>
                <Input
                    className={clsx(
                        "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                    )}
                />
            </Field>
        </div>
    );
}
