"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedImage({ src, alt }) {
  return (
    <div className="lg:w-1/2 w-full">
      <motion.div
        className="-mt-14"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative w-full h-80 lg:h-[500px]">
          <Image
            src={src}      // use the prop
            alt={alt}      // use the prop
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
