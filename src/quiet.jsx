import { motion } from "framer-motion";
import { Brain, VolumeX, Waves, Cloud, Zap, Shield, BadgeCheck, Rocket, Newspaper, Star, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

export default function QuietAIPage() {
  const [apiDialogOpen, setApiDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState(() => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = 'shhh_';
    for (let i = 0; i < 32; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
  });
  const [apiResponse, setApiResponse] = useState(null);
  const [apiLoading, setApiLoading] = useState(false);
  const [testApiKey, setTestApiKey] = useState('');
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpecialOffer(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tryApi = async () => {
    setApiLoading(true);
    setApiResponse(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Check if API key is valid (must start with "shhh_")
    if (!testApiKey || !testApiKey.startsWith('shhh_')) {
      setApiResponse({
        status: 403,
        statusText: 'Forbidden',
        headers: {
          'date': new Date().toUTCString(),
          'server': 'quietness-edge',
          'x-request-id': Math.random().toString(36).substring(2, 15),
        },
        error: 'Invalid API key.',
      });
      setApiLoading(false);
      return;
    }

    // Fake a successful 204 No Content response
    setApiResponse({
      status: 204,
      statusText: 'No Content',
      headers: {
        'date': new Date().toUTCString(),
        'server': 'quietness-edge',
        'x-silence-duration': '60000ms',
        'x-profile': 'digital',
        'x-request-id': Math.random().toString(36).substring(2, 15),
      },
    });

    setApiLoading(false);
  };
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gray-900 flex items-center justify-center text-white font-bold">Q</div>
            <span className="font-semibold tracking-tight">Quietness.ai</span>
            <Badge variant="secondary" className="ml-2">Beta</Badge>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#api" className="hover:underline">API</a>
            <a href="#about" className="hover:underline">About</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="rounded-2xl">Sign in</Button>
            <Button className="rounded-2xl">Experience the Quiet</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-center"
          >
            Reinventing silence through <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">artificial intelligence</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto"
          >
            Meet the Generative Stillness Engine™ — trained on 10,000+ hours of premium, hand‑curated quiet from the world’s calmest monasteries, anechoic chambers, and open‑plan offices at 6pm.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button size="lg" className="rounded-2xl">Start for free</Button>
            <Button size="lg" variant="outline" className="rounded-2xl">Hear nothing (demo)</Button>
          </motion.div>
        </div>

        {/* Featured on */}
        <div className="border-t py-10 bg-white/70">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">Featured on</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-80 text-gray-500">
              <div className="flex flex-col items-center">
                <span className="font-semibold flex items-center gap-1"><Newspaper className="h-4 w-4"/>TechCrunch</span>
                <p className="text-xs mt-1 italic">“Innovation you can’t hear coming.”</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold flex items-center gap-1"><Star className="h-4 w-4"/>Wired</span>
                <p className="text-xs mt-1 italic">“The quietest revolution in AI.”</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold flex items-center gap-1"><Star className="h-4 w-4"/>The Verge</span>
                <p className="text-xs mt-1 italic">“We tried it. We heard nothing.”</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold flex items-center gap-1"><Star className="h-4 w-4"/>Fast Company</span>
                <p className="text-xs mt-1 italic">“At last, an AI that knows when to shut up.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="rounded-2xl">Why Silence‑as‑a‑Service</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Engineered absence. For presence.</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Because not all silences are created equal. Quietness.ai uses cutting‑edge models to craft auditorily indistinguishable nothingness, optimized for focus, mindfulness, and premium vibes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <VolumeX className="h-6 w-6" />, title: "Adaptive Noise Modeling™",
                body: "Powered by deep affective learning, we recalibrate silence to match your internal disquiet in real time.",
              },
              {
                icon: <Brain className="h-6 w-6" />, title: "Generative Stillness Engine",
                body: "A frontier model engineered to know when to stop talking: Before it begins.",
              },
              {
                icon: <Cloud className="h-6 w-6" />, title: "QuietCloud™ Edge",
                body: "Zero-trust, on-device muteness with seamless cloud fallback — ensuring your silence is never heard by anyone but you.",
              },
              {
                icon: <Zap className="h-6 w-6" />, title: "NullWave API",
                body: "Integrate enterprise‑grade quiet into any stack. Webhooks, SDKs, and tasteful 204 responses.",
              },
              {
                icon: <Shield className="h-6 w-6" />, title: "Compliance & Privacy",
                body: "SOC 2, ISO 27001, and Monastic Vows v3 certified. We never listen — because there’s nothing to listen to.",
              },
              {
                icon: <Waves className="h-6 w-6" />, title: "Artisanal Silence Packs",
                body: "Select from curated silences: Anechoic, Arctic Dusk, Library Rare, and Zoom meetings with an elderly relative searching for the unmute button.",
              },
            ].map((f, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="p-2 rounded-xl bg-gray-100">{f.icon}</div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-gray-600">{f.body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" id="about">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                quote: "I didn’t hear a thing. Incredible.",
                name: "John Stillwell",
                title: "Early Beta Tester",
              },
              {
                quote: "Finally, silence that scales.",
                name: "Dr. Rowan Muteberg",
                title: "CTO, Calmify Labs",
              },
              {
                quote: "All I have to do is say this improved my productivity, and then they promised to let me see my family again.",
                name: "Rafael Silenson",
                title: "Productivity Enthusiast",
              },
            ].map((t, i) => (
              <Card key={i} className="rounded-2xl flex">
                <CardContent className="p-6 flex flex-col justify-between">
                  <p className="text-lg italic">“{t.quote}”</p>
                  <div className="mt-6 text-sm text-gray-600">
                    <div className="font-semibold">{t.name}</div>
                    <div>{t.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Choose your quiet</h2>
            <p className="text-gray-600 mt-3">Silence is golden, and gold isn’t cheap.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Basic",
                price: "$0",
                tagline: "5 minutes of silence with ads",
                features: [
                  "Standard hush (128‑kbps nothing)",
                  "2 Silence Packs",
                  "Community support forum (mute)",
                ],
                cta: "Get started",
              },
              {
                name: "Pro",
                price: "$12/mo",
                tagline: "24‑bit dynamic silence",
                features: [
                  "Lossless quiet (FLAC‑0dB)",
                  "All Silence Packs + weekly drops",
                  "API access (10k quiet‑calls)",
                ],
                cta: "Upgrade",
                highlighted: true,
              },
              {
                name: "Ultra",
                price: "Contact us",
                tagline: "Handcrafted artisanal silence",
                features: [
                  "On‑prem hush clusters",
                  "Dedicated silence concierge",
                  "Trained on your board meetings",
                ],
                cta: "Talk to sales",
              },
            ].map((p, i) => (
              <Card key={i} className={`rounded-2xl ${p.highlighted ? 'ring-2 ring-gray-900' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{p.name}</CardTitle>
                    {p.highlighted && (
                      <Badge className="rounded-2xl" variant="secondary"><BadgeCheck className="h-4 w-4 mr-1"/>Popular</Badge>
                    )}
                  </div>
                  <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                  <div className="text-gray-600">{p.tagline}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1"><Rocket className="h-4 w-4"/></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 rounded-2xl">{p.cta}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API */}
      <section id="api" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">NullWave™ API</h3>
              <p className="text-gray-600 mt-3">Build on nothing. Our REST API returns only the highest quality 204 No Content responses. Webhooks available for absolute quiet confirmation events.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  { label: "SDKs", value: "JS • Python • Go" },
                  { label: "Rate limit", value: "∞ quiet‑calls/min" },
                  { label: "Auth", value: "Bearer shhh…" },
                  { label: "SLA", value: "99.999% hush" },
                ].map((s) => (
                  <Card key={s.label} className="rounded-2xl"><CardContent className="p-4"><div className="text-xs uppercase text-gray-500">{s.label}</div><div className="font-semibold">{s.value}</div></CardContent></Card>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Button asChild className="rounded-2xl">
                  <a href="https://en.wikipedia.org/wiki/Silence" target="_blank" rel="noopener noreferrer">
                    <CodeIcon/> Read the docs
                  </a>
                </Button>
                <Dialog open={apiDialogOpen} onOpenChange={setApiDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-2xl"><Cloud className="h-4 w-4 mr-2"/>Get API key</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Your API Key</DialogTitle>
                      <DialogDescription>
                        Your unique API key for accessing the NullWave™ API. Keep this secret and never commit it to version control.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                      <div className="grid flex-1 gap-2">
                        <div className="relative">
                          <code className="block w-full rounded-md bg-gray-100 px-3 py-2 text-sm font-mono border break-all">
                            {apiKey}
                          </code>
                        </div>
                      </div>
                      <Button
                        type="button"
                        size="sm"
                        className="px-3"
                        onClick={copyToClipboard}
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      <p className="font-semibold mb-1">Rate limits:</p>
                      <ul className="list-disc list-inside space-y-0.5">
                        <li>∞ quiet-calls per minute</li>
                        <li>Max duration/request: 60 minutes</li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>curl example</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-sm overflow-auto">
{`curl -X POST https://api.quietness.ai/v1/generate \
  -H "Authorization: Bearer shhh_****************" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gse-quiet-3",
    "silence_pack": "anechoic",
    "profile": "digital",
    "duration_ms": 60000
  }'
# HTTP/1.1 204 No Content`}
                  </pre>
                </CardContent>
              </Card>
              <div className="p-4 bg-gray-50 rounded-xl border">
                <div className="text-sm font-semibold mb-2">Silence Profiles</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><span className="font-mono text-xs bg-white px-2 py-0.5 rounded">digital</span> — Clean. Crisp. Pure.</li>
                  <li><span className="font-mono text-xs bg-white px-2 py-0.5 rounded">analog</span> — Warm. Natural. Earthy.</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-xl border">
                <div className="text-sm font-semibold mb-2">Try it live</div>
                <p className="text-xs text-gray-600 mb-3">Test the API and see the beautiful silence in action.</p>
                <div className="mb-3">
                  <label className="text-xs text-gray-600 block mb-1">API Key</label>
                  <input
                    type="text"
                    value={testApiKey}
                    onChange={(e) => setTestApiKey(e.target.value)}
                    placeholder="shhh_..."
                    className="w-full px-3 py-2 text-sm font-mono border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <Button
                  onClick={tryApi}
                  disabled={apiLoading}
                  className="w-full rounded-lg mb-3"
                  size="sm"
                >
                  {apiLoading ? 'Generating silence...' : 'Send API Request'}
                </Button>
                {apiResponse && (
                  <div className="mt-3 p-3 bg-gray-900 text-gray-100 rounded-lg text-xs font-mono">
                    <div className={apiResponse.status === 204 ? "text-green-400" : "text-red-400"}>
                      HTTP/1.1 {apiResponse.status} {apiResponse.statusText}
                    </div>
                    <div className="mt-2 text-gray-400">
                      {Object.entries(apiResponse.headers).map(([key, value]) => (
                        <div key={key}>{key}: {value}</div>
                      ))}
                    </div>
                    {apiResponse.error && (
                      <div className="mt-3 p-2 bg-red-900/30 text-red-300 rounded">
                        {apiResponse.error}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold">Ready to hear nothing?</h3>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">Join thousands of users embracing premium, AI‑enhanced absence. No distractions. No noise. No notes.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Button size="lg" variant="secondary" className="rounded-2xl">Start free</Button>
            <Button size="lg" variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 rounded-2xl">
              Talk to sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2"><div className="h-6 w-6 rounded-lg bg-gray-900 text-white flex items-center justify-center text-xs font-bold">Q</div><span>© 2025 Quietness.ai</span></div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#">Security</a>
            <a className="hover:underline" href="#">Status</a>
            <a className="hover:underline" href="#">Press Kit</a>
            <a className="hover:underline" href="#">Careers</a>
          </div>
        </div>
      </footer>

      {/* Special Offer Dialog */}
      <Dialog open={showSpecialOffer} onOpenChange={setShowSpecialOffer}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Limited Time Offer</Badge>
            </div>
            <DialogTitle className="text-2xl">Unlock Premium Silence from Around the World</DialogTitle>
            <DialogDescription>
              Experience curated silence captured from the world's most serene locations. Complete tiers to unlock exotic experiences.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid gap-3">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-900">Arctic Silence</span>
                  <Badge variant="secondary" className="text-xs">Tier 1</Badge>
                </div>
                <p className="text-sm text-blue-700">AI-trained on -40°C Norwegian Arctic data. Pure, crystalline nothingness.</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-amber-900">Hawaiian Silence</span>
                  <Badge variant="secondary" className="text-xs">Tier 2</Badge>
                </div>
                <p className="text-sm text-amber-700">Generated from Maui sunrise stillness models. Warm, tropical tranquility.</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900">Lunar Silence</span>
                  <Badge variant="secondary" className="text-xs">Tier 3 - Premium</Badge>
                </div>
                <p className="text-sm text-slate-700">Trained on Apollo mission data. The AI-generated silence of space itself.</p>
              </div>
            </div>
            <div className="p-4 bg-gray-900 text-white rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-lg font-bold">SilencePass — Season 1</div>
                  <div className="text-sm text-gray-400">Access all tiers + weekly drops</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">$39.99</div>
                  <div className="text-xs text-gray-400 line-through">$79.99</div>
                </div>
              </div>
              <Button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Get SilencePass Now
              </Button>
              <p className="text-xs text-gray-400 mt-2 text-center">🔥 Only 47 passes left at this price!</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CodeIcon(){
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
}
