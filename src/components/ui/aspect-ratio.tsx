
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cn } from "@/lib/utils"
import React from "react"

interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
  className?: string;
  containerClassName?: string;
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>, 
  AspectRatioProps
>(({ className, containerClassName, children, ...props }, ref) => (
  <div className={cn("overflow-hidden rounded-md", containerClassName)}>
    <AspectRatioPrimitive.Root
      className={cn(className)}
      ref={ref}
      {...props}
    >
      {children}
    </AspectRatioPrimitive.Root>
  </div>
))

AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
