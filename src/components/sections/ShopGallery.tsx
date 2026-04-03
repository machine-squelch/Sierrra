"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  PanInfo,
} from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { gallerySlides } from "@/lib/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";

const swipeConfidenceThreshold = 80;

function swipePower(offset: number, velocity: number) {
  return Math.abs(offset) * velocity;
}

export function ShopGallery() {
  const reduceMotion = useReducedMotion();
  const slides = gallerySlides;
  const slideCount = slides.length;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (newIndex: number) => {
      if (slideCount === 0) return;
      setIndex((prev) => {
        const ni = ((newIndex % slideCount) + slideCount) % slideCount;
        setDirection(ni > prev ? 1 : ni < prev ? -1 : 0);
        return ni;
      });
    },
    [slideCount]
  );

  const paginate = useCallback(
    (delta: number) => {
      if (slideCount === 0) return;
      setDirection(delta > 0 ? 1 : -1);
      setIndex((i) => (i + delta + slideCount) % slideCount);
    },
    [slideCount]
  );

  useEffect(() => {
    if (slideCount <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slideCount);
    }, 7000);
    return () => clearInterval(id);
  }, [slideCount]);

  if (slideCount === 0) return null;

  const current = slides[index];

  const variants = reduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0 }),
      };

  function onDragEnd(_: unknown, { offset, velocity }: PanInfo) {
    const power = swipePower(offset.x, velocity.x);
    if (power < -swipeConfidenceThreshold) paginate(1);
    else if (power > swipeConfidenceThreshold) paginate(-1);
  }

  return (
    <section
      id="gallery"
      className="py-14 md:py-20 bg-white border-y border-gray-100"
      aria-roledescription="carousel"
      aria-label="Shop photo gallery"
    >
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Inside Our Sonora Shop"
          subtitle="RV and heavy-duty truck service under one roof — see the space where we keep you on the road."
        />

        <div className="mt-10 relative mx-auto max-w-5xl">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[2/1] rounded-2xl overflow-hidden bg-gray-900 shadow-xl ring-1 ring-black/5">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={
                  reduceMotion
                    ? { duration: 0.2 }
                    : { type: "spring", stiffness: 300, damping: 32 }
                }
                drag={slideCount > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.85}
                onDragEnd={onDragEnd}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-cover pointer-events-none select-none"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                  priority={index === 0}
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pt-16 pb-4 px-4 sm:px-6">
                  {current.caption ? (
                    <p className="text-white text-sm sm:text-base font-medium text-center drop-shadow">
                      {current.caption}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            </AnimatePresence>

            {slideCount > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-md hover:bg-white hover:scale-105 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007bff]"
                  aria-label="Previous photo"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-md hover:bg-white hover:scale-105 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007bff]"
                  aria-label="Next photo"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </>
            ) : null}
          </div>

          {slideCount > 1 ? (
            <div
              className="flex justify-center gap-2 mt-5"
              role="tablist"
              aria-label="Gallery slides"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007bff] focus-visible:ring-offset-2 ${
                    i === index
                      ? "w-8 bg-[#007bff]"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          ) : null}

          <p className="text-center text-xs text-gray-500 mt-3 sm:hidden">
            Swipe sideways to browse photos
          </p>
        </div>
      </div>
    </section>
  );
}
