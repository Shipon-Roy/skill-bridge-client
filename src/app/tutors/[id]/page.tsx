import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Mail, DollarSign, BookOpen, Clock } from "lucide-react";
import type { Review, TutorProfile } from "@/types/api";
// import { BookingForm } from "@/components/tutors/booking-form";
import { env } from "@/lib/env";
import Container from "@/components/layout/Container";

async function getTutor(id: string) {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${API_URL}/api/tutors/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching tutor:", error);
    return null;
  }
}

async function getTutorReviews(profileId: string, userId: string) {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const fetchReviews = async (id: string) => {
      const response = await fetch(`${API_URL}/api/reviews/tutor/${id}`, {
        cache: "no-store",
      });

      if (!response.ok) return null;

      const data = await response.json();
      console.log(`Reviews fetch for ${id}:`, data);

      const payload = data.data;
      if (Array.isArray(payload)) return payload as Review[];
      if (payload?.reviews && Array.isArray(payload.reviews))
        return payload.reviews as Review[];
      return [];
    };

    const reviewsByProfile = await fetchReviews(profileId);
    if (reviewsByProfile && reviewsByProfile.length > 0)
      return reviewsByProfile;
    const reviewsByUser = await fetchReviews(userId);
    return reviewsByUser || [];
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}

export default async function TutorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tutor = (await getTutor(id)) as TutorProfile | null;

  if (!tutor) {
    notFound();
  }

  const reviews = await getTutorReviews(tutor.id, tutor.userId);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Container>
        <main className="flex-1 pt-32 pb-12 bg-gray-990">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Tutor Header */}
                <Card className="bg-gray-800">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-24 rounded-full bg-linear-to-br from-green-400 to-violet-400 shrink-0" />
                      <div className="flex-1">
                        <h1 className="text-3xl text-gray-100 font-bold mb-2">
                          {tutor.user?.name || "Anonymous Tutor"}
                        </h1>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="text-lg text-gray-300 font-semibold">
                              {tutor.averageRating?.toFixed(1) || "0.0"}
                            </span>
                            <span className="text-gray-300">
                              ({tutor.totalReviews || 0} reviews)
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-200">
                            <Mail className="h-4 w-4" />
                            <span>{tutor.user?.email}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(tutor.subjects || []).map((subject: string) => (
                            <span
                              key={subject}
                              className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* About Section */}
                <Card className="bg-gray-800">
                  <CardContent className="p-8">
                    <h2 className="text-2xl text-gray-100 font-bold mb-4">
                      About
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {tutor.bio || "This tutor hasn't added a bio yet."}
                    </p>
                  </CardContent>
                </Card>

                {/* Availability Section */}
                <Card className="bg-gray-900">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6 text-gray-100">
                      <Clock className="h-6 w-6  " />
                      <h2 className="text-2xl  font-bold">Availability</h2>
                    </div>
                    {!tutor.availability ||
                    Object.keys(tutor.availability).length === 0 ? (
                      <p className="text-gray-300 text-center py-8">
                        No availability set yet
                      </p>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "monday",
                          "tuesday",
                          "wednesday",
                          "thursday",
                          "friday",
                          "saturday",
                          "sunday",
                        ].map((day) => {
                          const slots = tutor.availability?.[day] || [];
                          const hasSlots = slots.length > 0;

                          return (
                            <div
                              key={day}
                              className={`p-4 rounded-lg border-2 ${
                                hasSlots
                                  ? "border-blue-200 bg-blue-50"
                                  : "border-gray-200 bg-gray-50"
                              }`}
                            >
                              <h3 className="font-semibold text-sm uppercase tracking-wide mb-2 text-gray-100">
                                {day.charAt(0).toUpperCase() + day.slice(1)}
                              </h3>
                              {hasSlots ? (
                                <div className="space-y-1">
                                  {slots.map((slot, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center gap-2 text-sm"
                                    >
                                      <Clock className="h-3.5 w-3.5 text-blue-600" />
                                      <span className="text-gray-300 font-medium">
                                        {slot}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-gray-400 text-sm italic">
                                  Not available
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <DollarSign className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Hourly Rate</p>
                          <p className="text-2xl font-bold text-blue-600">
                            ${tutor.pricePerHr}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                          <Star className="h-6 w-6 text-violet-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Rating</p>
                          <p className="text-2xl font-bold text-violet-600">
                            {tutor.averageRating?.toFixed(1) || "0.0"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Reviews</p>
                          <p className="text-2xl font-bold text-green-600">
                            {tutor.totalReviews || 0}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Reviews Section */}
                <Card className="bg-gray-900">
                  <CardContent className="p-8">
                    <h2 className="text-2xl text-gray-100 font-bold mb-6">
                      Reviews
                    </h2>
                    {reviews.length === 0 ? (
                      <p className="text-gray-300 text-center py-8">
                        No reviews yet
                      </p>
                    ) : (
                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div
                            key={review.id}
                            className="border-b pb-6 last:border-0"
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 flex-shrink-0" />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <p className="font-semibold">
                                    {review.student?.name || "Anonymous"}
                                  </p>
                                  <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                {review.comment ? (
                                  <p className="text-gray-600">
                                    {review.comment}
                                  </p>
                                ) : null}
                                <p className="text-sm text-gray-400 mt-2">
                                  {new Date(
                                    review.createdAt,
                                  ).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar - Booking Form */}

              <div className="lg:col-span-1">
                <div className="sticky top-24 text-gray-100">Bukking form</div>
              </div>
              {/* <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm
                  tutorId={tutor.userId}
                  tutorName={tutor.user?.name || "this tutor"}
                  hourlyRate={tutor.pricePerHr}
                />
              </div>
            </div> */}
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
}
