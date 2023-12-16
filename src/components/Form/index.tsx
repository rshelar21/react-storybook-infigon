import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Button } from "../Button/index";

const inputStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500 ",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
]);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Form = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <form action="" className="flex flex-col gap-4">
        <label htmlFor="">
          <input
            ref={ref}
            type="text"
            autoComplete="off"
            className={cn(inputStyles({ className }))}
            {...props}
          />
        </label>
        <input
          ref={ref}
          type="text"
          autoComplete="off"
          className={cn(inputStyles({ className }))}
          {...props}
        />
        <Button>Submit</Button>
      </form>
    );
  }
);
