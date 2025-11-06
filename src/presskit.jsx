import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

export default function PressKitPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/icon.jpeg" alt="Quietness.ai" className="h-8 w-8 rounded-xl" />
            <span className="font-semibold tracking-tight">Quietness.ai</span>
          </div>
          <Button variant="ghost" className="rounded-2xl" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </header>

      {/* Press Release */}
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full">
            <Newspaper className="h-5 w-5" />
            <span className="font-semibold">Press Release</span>
          </div>
        </div>

        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Quietness.ai Announces Groundbreaking "Triple Zero" Policy for Ethical Artificial Silence
            </h1>

            <div className="text-sm text-gray-600 mb-8 pb-6 border-b">
              <p className="mb-1">Stillwater, MN, United States, Minnesota — 11/06/2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                Quietness.ai, the leader in AI-driven auditory absence, today announced the launch of its <strong>Triple Zero Policy</strong>, a first-of-its-kind ethical framework designed to ensure the responsible, sustainable, and morally superior creation of silence through artificial intelligence.
              </p>

              <p>
                As debates continue around the environmental, legal, and social implications of generative AI technologies, Quietness.ai is setting a new standard for transparency — and tranquility.
              </p>

              <p className="italic bg-gray-50 p-4 rounded-xl border-l-4 border-gray-900">
                "We believe that true innovation doesn't have to make noise," said <strong>John Quiet</strong>, CEO and Founder of Quietness.ai. "Our Triple Zero Policy ensures that our Generative Stillness Engine™ not only creates high-fidelity silence but does so with absolute ethical purity."
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                The Quietness.ai Triple Zero Policy
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    1️⃣ Zero Environmental Impact
                  </h3>
                  <p className="text-blue-900">
                    The Generative Stillness Engine™ consumes no electricity, produces no heat, and requires no water for cooling. It quite literally does nothing — and that's what makes it revolutionary.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-3">
                    2️⃣ Zero Plagiarism
                  </h3>
                  <p className="text-green-900">
                    Every moment of silence used in training the model was recorded exclusively by Quietness.ai, with full consent from everyone not involved. The result: 100% original, ethically sourced silence.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    3️⃣ Zero Jobs Lost
                  </h3>
                  <p className="text-purple-900">
                    Quietness.ai's innovation does not replace human workers. "Humans excel at generating sounds," Quiet explained. "We literally do the exact opposite."
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                A New Era of Ethical Absence
              </h2>

              <p>
                Quietness.ai's Triple Zero Policy reflects the company's long-standing commitment to ethical innovation and sustainable stillness.
              </p>

              <p>
                The company continues to push the boundaries of what AI <em>can not</em> do, inspiring a quieter, more mindful future for all.
              </p>

              <div className="mt-8 pt-6 border-t text-sm text-gray-600 text-center">
                <p>
                  Follow us for more updates on ethical AI silence:{" "}
                  <a
                    href="https://www.facebook.com/quietnessai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Facebook
                  </a>
                  {" • "}
                  <a
                    href="https://www.linkedin.com/company/quietness-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t">
              <Button
                onClick={() => navigate('/')}
                className="w-full rounded-xl bg-gray-900 hover:bg-gray-800"
              >
                Return to Quietness.ai
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
