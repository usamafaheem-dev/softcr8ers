"use client";

import { Ref, forwardRef, useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      (animationDelay + 0.4) * 1000
    );

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: { x: any; y: any; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  const photos = [
    {
      id: 1,
      order: 0,
      x: "-320px",
      y: "15px",
      zIndex: 50,
      direction: "left" as Direction,
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    },
    {
      id: 2,
      order: 1,
      x: "-160px",
      y: "32px",
      zIndex: 40,
      direction: "left" as Direction,
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "8px",
      zIndex: 30,
      direction: "right" as Direction,
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    },
    {
      id: 4,
      order: 3,
      x: "160px",
      y: "22px",
      zIndex: 20,
      direction: "right" as Direction,
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    },
    {
      id: 5,
      order: 4,
      x: "320px",
      y: "44px",
      zIndex: 10,
      direction: "left" as Direction,
      src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800",
    },
  ];

  return (
    <div className="mt-32 relative py-20 bg-slate-50/50 rounded-[40px] overflow-hidden border border-slate-100">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 to-rose-500/10 rounded-full blur-[100px] -z-10" />

      <div className="relative h-[500px] w-full flex items-center justify-center">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[300px] w-[250px] md:h-[400px] md:w-[320px]">
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0 w-full h-full"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants as any}
                  custom={{
                    x: photo.x,
                    y: photo.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    src={photo.src}
                    alt="AI innovation"
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

const MotionImage = motion(
  forwardRef(function MotionImage(
    props: ImageProps,
    ref: Ref<HTMLImageElement>
  ) {
    return <Image ref={ref} {...props} />;
  })
);

type Direction = "left" | "right";

export const Photo = ({
  src,
  alt,
  className,
  direction,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(2, 6) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  function handleMouse(event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.2}
      whileTap={{ scale: 1.05, zIndex: 9999, cursor: "grabbing" }}
      whileHover={{
        scale: 1.05,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.05,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width: "100%",
        height: "100%",
        perspective: 1000,
        transformStyle: "preserve-3d",
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing group"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white transition-all duration-300 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] bg-white">
        <MotionImage
          className={cn("object-cover pointer-events-none")}
          fill
          src={src}
          alt={alt}
          {...props}
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};
