import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CF9D2F]/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold: "bg-[#CF9D2F] text-black shadow-sm shadow-black/10 hover:bg-[#B8891A] hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(207,157,47,0.4)] active:translate-y-0.5",
        outline: "border-2 border-[#CF9D2F] text-[#CF9D2F] hover:bg-[#CF9D2F] hover:text-black hover:-translate-y-0.5 active:translate-y-0.5",
        ghost: "text-[#CF9D2F] hover:bg-[#CF9D2F]/10 active:translate-y-0.5",
      },
      size: {
        default: "px-5 py-2.5 text-sm md:px-7 md:py-3 md:text-sm",
        sm: "px-4 py-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
