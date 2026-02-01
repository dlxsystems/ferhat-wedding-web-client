"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export default function Countdown() {
  const { t } = useLanguage();
  const targetDate = new Date("2026-06-06T17:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-20 px-10 bg-background flex justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 justify-center max-w-3xl w-full">
        <TimeBlock value={timeLeft.days} label={t.countdown.days} />
        <TimeBlock value={timeLeft.hours} label={t.countdown.hours} />
        <TimeBlock value={timeLeft.minutes} label={t.countdown.minutes} />
        <TimeBlock value={timeLeft.seconds} label={t.countdown.seconds} />
      </div>
    </section>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="flex flex-col mx-auto items-center w-32 md:min-w-[120px] p-6 border border-primary/20 rounded-t-[50%] rounded-b-lg bg-white shadow-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-serif text-5xl md:text-6xl text-primary font-medium">
        {value}
      </span>
      <span className="mt-2 font-sans text-xs md:text-sm uppercase tracking-widest text-[#666]">
        {label}
      </span>
    </motion.div>
  );
}
