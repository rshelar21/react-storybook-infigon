import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const cardStyles = cva(
  ["w-[200px]", "p-4", "text-blue-500", "rounded-md", "h-[200px]"],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "text-sm font-medium",
        md: " text-base font-medium",
        lg: "text-lg font-semibold",
      },
      colorscheme: {
        primary: "text-blue-500",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-200",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "border-primary-500 text-primary-600 bg-transparent ",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-600 bg-transparent shadow-lg shadow-gray-400 hover:shadow-gray-600",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type cardProps = ComponentProps<"div"> & VariantProps<typeof cardStyles>;

export const Card = forwardRef<HTMLInputElement, cardProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardStyles({ variant, size, colorscheme, className }))}
        {...props}
      >
        <h1>This is Title</h1>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
    );
  }
);
