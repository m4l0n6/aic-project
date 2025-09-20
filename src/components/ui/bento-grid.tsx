import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { ComponentPropsWithoutRef } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "gap-4 grid grid-cols-3 auto-rows-[22rem] w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between col-span-3 rounded-xl overflow-hidden",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4">
      <div className="z-10 flex flex-col gap-1 transform-gpu transition-all lg:group-hover:-translate-y-10 duration-300 pointer-events-none">
        <Icon className="w-12 h-12 text-neutral-700 transform-gpu group-hover:scale-75 origin-left transition-all duration-300 ease-in-out" />
        <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 text-xl">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>

      <div
        className={cn(
          "lg:hidden flex flex-row items-center group-hover:opacity-100 w-full transform-gpu transition-all translate-y-0 group-hover:translate-y-0 duration-300 pointer-events-none",
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="p-0 pointer-events-auto"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 w-4 h-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    </div>

    <div
      className={cn(
        "hidden bottom-0 absolute lg:flex flex-row items-center opacity-0 group-hover:opacity-100 p-4 w-full transform-gpu transition-all translate-y-10 group-hover:translate-y-0 duration-300 pointer-events-none",
      )}
    >
      <Button
        variant="link"
        asChild
        size="sm"
        className="p-0 pointer-events-auto"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 w-4 h-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>

    <div className="absolute inset-0 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 transform-gpu transition-all duration-300 pointer-events-none" />
  </div>
);

export { BentoCard, BentoGrid };
