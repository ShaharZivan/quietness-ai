import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import confetti from "canvas-confetti";

export default function SuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Fire confetti when the page loads
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full rounded-2xl shadow-xl">
        <CardContent className="pt-12 pb-12 px-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-4xl mb-4">
              🎉
            </div>
            <h1 className="text-4xl font-bold mb-3">Congratulations!</h1>
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4">
            🏅 Silent Hero 🏅
            </Badge>
          </div>

          <div className="space-y-4 text-lg text-gray-700 mb-8">
            <p>
              You have successfully demonstrated an <strong>unwavering commitment to the bit</strong>.
            </p>
            <p>
              Your dedication to experiencing AI-generated silence is truly inspiring.
            </p>
            <div className="my-6 p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">To be clear:</p>
              <p className="font-semibold text-gray-900">
                No payment was actually processed. This is a satire website.
              </p>
            </div>
            <p className="text-base text-gray-600">
              Thank you for playing along. We hope you enjoyed the journey through our meticulously crafted silence marketplace.
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => navigate('/')}
              className="w-full rounded-xl py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Return to Quietness.ai
            </Button>
            <p className="text-xs text-gray-500">
              Feel free to share this experience with people who also appreciate quality silence.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t text-sm text-gray-500">
            <p className="mb-3">
              P.S. If you genuinely want to support absurdist tech satire projects,
              consider following us on social media and sharing this with your colleagues.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.facebook.com/quietnessai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Follow on Facebook
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="https://www.linkedin.com/company/quietness-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
