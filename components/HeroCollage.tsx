"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const cards = [
  {
    src: "/photos/controle-acces-lecteur-qr.webp",
    alt: "Lecture d'un badge sur un lecteur mural",
    className: "absolute left-0 top-[6%] z-20 aspect-[3/4] w-[44%] rotate-[-4deg]",
    float: 8,
    duration: 7,
  },
  {
    src: "/photos/videosurveillance-camera-dome.webp",
    alt: "Caméra dôme sur façade",
    className: "absolute right-0 top-0 z-10 aspect-[3/2] w-[54%] rotate-[3deg]",
    float: 10,
    duration: 9,
  },
  {
    src: "/photos/supervision-centre.webp",
    alt: "Centre de supervision",
    className: "absolute bottom-0 right-[4%] z-30 aspect-[8/5] w-[50%] rotate-[2deg]",
    float: 6,
    duration: 8,
  },
];

export function HeroCollage({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div
      className={"pointer-events-none relative aspect-[51/40] w-full " + className}
      aria-hidden="true"
    >
      {cards.map((c, i) => (
        <motion.div
          key={c.src}
          className={
            c.className +
            " overflow-hidden rounded-[14px] border border-white/15 ring-1 ring-navy-900/60"
          }
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            animate={reduce ? undefined : { y: [0, -c.float, 0] }}
            transition={
              reduce
                ? undefined
                : { duration: c.duration, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }
            }
          >
            <Image
              src={c.src}
              alt={c.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover saturate-[0.9]"
            />
            <div className="absolute inset-0 bg-navy-900/20" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
