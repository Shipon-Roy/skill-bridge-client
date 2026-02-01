"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className=" bg-gray-900 flex items-center justify-center px-4 py-10 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,var(--tw-gradient-stops))] from-blue-200/30 to-transparent" />

      <div className="text-center text-gray-900 max-w-5xl mx-auto px-6 relative z-10">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight bg-linear-to-r from-gray-300 via-green-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
            Gain Any Skill, <br /> With Skill Bridge.
          </h1>

          <p className="text-md md:text-xl lg:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed opacity-95 font-medium">
            we believe that learning to code should be accessible to everyone,
            regardless of their location, background, or financial situation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/signup">
              <Button className="text-lg px-10 py-7 font-bold shadow-2xl hover:shadow-3xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 h-16 transition-all duration-300">
                Get Started Free
              </Button>
            </Link>

            <Link href="/tutors">
              <Button
                variant="outline"
                className="text-lg px-10 py-7 font-bold border-2 border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 h-16 transition-all duration-300 shadow-lg hover:shadow-xl"
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
