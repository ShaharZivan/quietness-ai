import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function ContactPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "sales"; // 'sales' or 'apply'
  const position = searchParams.get("position") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: position ? `Application: ${position}` : "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full rounded-2xl shadow-xl">
          <CardContent className="pt-12 pb-12 px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600">
                <CheckCircle className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Message Received!</h1>
            <div className="space-y-4 text-gray-700 mb-8">
              <p className="text-lg">
                Thank you for reaching out. Your message has been successfully received and immediately discarded.
              </p>
              <div className="p-6 bg-gray-50 rounded-xl border">
                <p className="font-semibold text-gray-900 mb-3">Our Silence Guarantee:</p>
                <ul className="text-left space-y-2 text-sm">
                  <li>✓ You will <strong>not</strong> hear from us within 24 hours</li>
                  <li>✓ You will <strong>not</strong> hear from us within 48 hours</li>
                  <li>✓ In fact, you will <strong>never</strong> hear from us</li>
                  <li>✓ Your inbox will remain blissfully quiet</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 italic">
                We take our commitment to silence seriously. Rest assured, no sales representative will contact you — because that would defeat the entire purpose.
              </p>
            </div>
            <Button
              onClick={() => navigate('/')}
              className="w-full rounded-xl bg-gray-900 hover:bg-gray-800"
            >
              Return to Quietness.ai
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gray-900 flex items-center justify-center text-white font-bold">Q</div>
            <span className="font-semibold tracking-tight">Quietness.ai</span>
          </div>
          <Button variant="ghost" className="rounded-2xl" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </header>

      {/* Contact Form */}
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="rounded-2xl mb-4">
            {type === "apply" ? "Job Application" : "Contact Sales"}
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            {type === "apply" ? "Apply to Quietness.ai" : "Talk to Sales"}
          </h1>
          <p className="text-lg text-gray-600">
            {type === "apply" ? (
              <>Submit your application and we <strong>won't</strong> review it. We won't even open it.</>
            ) : (
              <>Leave us your details, and you <strong>won't</strong> hear from us soon. Guaranteed.</>
            )}
          </p>
        </div>

        <Card className="rounded-2xl shadow-xl">
          <CardHeader>
            <CardTitle>
              {type === "apply" ? "Submit your application" : "Send us a message"}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              {type === "apply"
                ? "Fill out the form below and experience the art of being professionally ignored."
                : "Fill out the form below and experience the future of customer non-engagement."
              }
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
                <p className="text-xs text-gray-500">
                  Don't worry — this will never receive a response.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you need"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm resize-none"
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-900 font-semibold mb-2">
                  Why we won't respond:
                </p>
                <p className="text-xs text-blue-800">
                  At Quietness.ai, we believe actions speak louder than words. And silence speaks louder than actions. Your message will be stored in our state-of-the-art void, ensuring maximum tranquility for both parties.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl bg-gray-900 hover:bg-gray-800"
              >
                Submit (and enjoy the silence)
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            By submitting this form, you acknowledge that you will not receive a response, follow-up, or any form of acknowledgment whatsoever.
          </p>
        </div>
      </div>
    </div>
  );
}
