import { cn } from "@/utils";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";

const modalStyles = cva(
  [
    "w-[150px]",
    "p-4",
    "text-blue-500",
    "rounded-md",
    // "h-[100px]",
    "-top-24",
    "absolute",
    "left-10",
    "z-40",
  ],
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
        className: "border-primary-500 text-primary-600 bg-transparent ",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className:
          "text-primary-600 bg-white shadow-lg shadow-gray-400 hover:shadow-gray-600",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type modalProps = ComponentProps<"div"> & VariantProps<typeof modalStyles>;

// export const Modal = () => {
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//     return (
//         <button onClick={() => setIsModalOpen(!isModalOpen)} className="relative px-4 py-3 text-white bg-blue-500">
//             click me
//             <div className="absolute ">
//                 this is modal
//             </div>
//         </button>
//     )
// }

export const Modal = forwardRef<HTMLInputElement, modalProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    console.log(isModalOpen);
    return (
      // <div
      //   ref={ref}
      //   className={cn(modalStyles({ variant, size, colorscheme, className }))}
      //   {...props}
      // >
      //   <h1>This is Title</h1>
      //   <p>
      //     lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      //   </p>
      // </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="relative px-4 py-3 text-white bg-blue-500"
      >
        click me
        {isModalOpen && (
          <div
            className={cn(
              modalStyles({ variant, size, colorscheme, className })
            )}
            ref={ref}
          >
            <div className="flex justify-end">
              <XMarkIcon
                className="h-5 w-5 text-gray-500"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
              />
            </div>
            <span>this is modal</span>
          </div>
        )}
      </button>
    );
  }
);
