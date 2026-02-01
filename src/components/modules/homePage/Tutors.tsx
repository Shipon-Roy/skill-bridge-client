"use client";

import { useEffect, useState } from "react";
import { tutorService } from "@/lib/services/tutor.service";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { TutorProfile } from "@/types/api";
import { TutorCard } from "@/components/tutor/TutorCard";
import Container from "@/components/layout/Container";

export default function Tutors() {
  const [featuredTutors, setFeaturedTutors] = useState<TutorProfile[]>([]);
  const [loadingTutors, setLoadingTutors] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await tutorService.getAllTutors();

        const tutors: TutorProfile[] = res.data ?? [];

        tutors.sort((a, b) => b.averageRating - a.averageRating);

        setFeaturedTutors(tutors.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch featured tutors", error);
        toast.error("Failed to load featured tutors");
      } finally {
        setLoadingTutors(false);
      }
    };

    fetchTutors();
  }, []);

  return (
    <section className="py-24 bg-gray-900 ">
      <Container>
        <div className="container ">
          <div className="flex flex-col items-center text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-gray-100 tracking-tighter sm:text-4xl">
              Top Tutors
            </h2>
            <p className="max-w-125 text-gray-300 md:text-lg ">
              Learn from Skill Bridge the very best.
            </p>
            <Link
              href="/tutors"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center group"
            >
              View All Tutors{" "}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {loadingTutors ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          ) : featuredTutors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTutors.map((tutor) => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No tutors available at the moment.
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
