"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className=" bg-linear-to-br from-gray-700 via-gray-700 to-gray-900 flex items-center justify-center px-4 py-10 overflow-hidden relative">
      <div className="text-center text-white max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Gain Any Skill, <br /> Anytime, Anywhere.
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Connect with verified tutors for 1-on-1 lessons. Elevate your skills
            in coding, languages, music, and more with personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-lg px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started Free
              </Button>
            </Link>
            <Link href="/tutors">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 text-gray-800 font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Search a Tutor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
