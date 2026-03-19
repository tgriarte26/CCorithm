"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Onest } from "next/font/google";
import { TransferGuide } from "@/app/types/guide";
import Header from "@/app/components/Header";

const headingFont = Onest({
  subsets: ["latin"],
  weight: ["900"],
});

const bodyFont = Onest({
  subsets: ["latin"],
  weight: ["700"],
});

const normalFont = Onest({
  subsets: ["latin"],
  weight: ["400"],
});

export default function PerfectGuidePage() {
  const searchParams = useSearchParams();
  const [guide, setGuide] = useState<TransferGuide | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const major = searchParams.get("major");
    const cc = searchParams.get("cc");
    const transfer = searchParams.get("transfer");

    if (!major || !cc || !transfer) {
      setError("Missing selection. Please go back and fill in all fields.");
      setLoading(false);
      return;
    }

    const fetchGuide = async () => {
      try {
        const query = new URLSearchParams({ major, cc, transfer }).toString();
        const res = await fetch(`/api/perfectGuide?${query}`);

        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }

        const data: TransferGuide = await res.json();
        setGuide(data);
      } catch (err) {
        setError("Failed to load your transfer guide. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGuide();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className={`${bodyFont.className} text-xl text-black`}>
          Loading your guide...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className={`${bodyFont.className} text-xl text-red-600`}>{error}</p>
      </div>
    );
  }

  if (!guide) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* ── Title ── */}
        <h1 className={`${headingFont.className} text-3xl text-black mb-1`}>
          Your Transfer Guide
        </h1>
        <p className={`${normalFont.className} text-gray-600 mb-8`}>
          <span className="font-bold">{guide.communityCollege}</span> →{" "}
          <span className="font-bold">{guide.transferCollege}</span> ·{" "}
          <span className="italic">{guide.major}</span>
        </p>

        {/* ── GPA Overview ── */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Minimum GPA" value={guide.minimumGPA.toFixed(2)} />
          <StatCard
            label="Avg Accepted GPA"
            value={guide.averageAcceptedGPA.toFixed(2)}
          />
          <StatCard
            label="Units Required"
            value={String(guide.totalUnitsRequired)}
          />
        </section>

        {/* ── Course Mappings ── */}
        <section className="mb-10 ">
          <h2 className={`${headingFont.className} text-2xl text-black mb-4`}>
            Course Mappings
          </h2>
          <div className="overflow-x-auto shadow-[5px_5px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse border-2 border-black text-left ">
              <thead>
                <tr className="bg-[#2d69eb] text-white">
                  <th
                    className={`${bodyFont.className} px-4 py-3 border border-black`}
                  >
                    CC Course
                  </th>
                  <th
                    className={`${bodyFont.className} px-4 py-3 border border-black`}
                  >
                    Units
                  </th>
                  <th
                    className={`${bodyFont.className} px-4 py-3 border border-black`}
                  >
                    University Equivalent
                  </th>
                  <th
                    className={`${bodyFont.className} px-4 py-3 border border-black`}
                  >
                    Units
                  </th>
                  <th
                    className={`${bodyFont.className} px-4 py-3 border border-black`}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className={`${bodyFont.className}`}>
                {guide.courseMappings.length > 0 ? (
                  guide.courseMappings.flatMap((mapping, i) =>
                    mapping.options.flatMap((option, j) =>
                      option.courses.map((course, k) => (
                        <tr
                          key={`${i}-${j}-${k}`}
                          className="bg-white text-black"
                        >
                          {/* CC Course */}
                          <td className="px-4 py-2 border border-black font-bold">
                            {course.name}
                          </td>
                          {/* CC Units */}
                          <td className="px-4 py-2 border border-black text-center font-bold">
                            {course.units}
                          </td>
                          {/* University Equivalent */}
                          <td className="px-4 py-2 border border-black font-bold">
                            {mapping.universityEquivalent}
                          </td>
                          {/* University Units */}
                          <td className="px-4 py-2 border border-black text-center font-bold">
                            {mapping.universityUnits}
                          </td>
                          {/* Status */}
                          <td className="px-4 py-2 border border-black">
                            <span
                              className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                                mapping.status === "required"
                                  ? "bg-red-100 text-red-700"
                                  : mapping.status === "recommended"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {mapping.status}
                            </span>
                          </td>
                        </tr>
                      )),
                    ),
                  )
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-2 border border-black text-center text-gray-500"
                    >
                      No course mappings available. Check ASSIST.org for your
                      courses.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Tips ── */}
        {guide.tips.length > 0 && (
          <section className="mb-10">
            <h2 className={`${headingFont.className} text-2xl text-black mb-4`}>
              Tips
            </h2>
            <div className="space-y-2">
              {guide.tips.map((tip, i) => (
                <p key={i} className={`${normalFont.className} text-black`}>
                  💡 {tip}
                </p>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-3 border-black rounded-xl px-5 py-4 text-center shadow-[6px_6px_0px_rgba(45,105,235,1)]">
      <p className={`${normalFont.className} text-gray-500 text-sm mb-1`}>
        {label}
      </p>
      <p className={`${bodyFont.className} text-3xl text-[#2d69eb]`}>{value}</p>
    </div>
  );
}
