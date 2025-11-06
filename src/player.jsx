import { motion } from "framer-motion";
import { Play, Pause, VolumeX, Waves, Moon, Library, Mountain, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SilencePlayerPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(() => localStorage.getItem("quietness_username") || "");
  const [selectedSilence, setSelectedSilence] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [playbackTime, setPlaybackTime] = useState(0);
  const [showAdModal, setShowAdModal] = useState(false);
  const [adCountdown, setAdCountdown] = useState(15);
  const [adWatched, setAdWatched] = useState(false);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);
  const adIntervalRef = useRef(null);

  const FREE_TIER_LIMIT = 300; // 5 minutes in seconds

  // Redirect if not logged in
  useEffect(() => {
    if (!username) {
      navigate('/signin');
    }
  }, [username, navigate]);

  // Update playback time when playing and check for 5-minute limit
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setPlaybackTime(prev => {
          const newTime = prev + 1;
          // Check if we've hit the 5-minute limit
          if (newTime >= FREE_TIER_LIMIT && !adWatched) {
            setIsPlaying(false);
            setShowAdModal(true);
            if (audioRef.current?.audioContext?.state === 'running') {
              audioRef.current.audioContext.suspend();
            }
          }
          return newTime;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, adWatched]);

  // Ad countdown timer
  useEffect(() => {
    if (showAdModal && adCountdown > 0) {
      adIntervalRef.current = setInterval(() => {
        setAdCountdown(prev => prev - 1);
      }, 1000);
    } else if (adCountdown === 0) {
      if (adIntervalRef.current) {
        clearInterval(adIntervalRef.current);
      }
    }
    return () => {
      if (adIntervalRef.current) {
        clearInterval(adIntervalRef.current);
      }
    };
  }, [showAdModal, adCountdown]);

  // Audio context for generating silence (web audio API)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();

      // Create a buffer with silence
      const sampleRate = audioContext.sampleRate;
      const buffer = audioContext.createBuffer(2, sampleRate * 60, sampleRate);

      // Create audio source
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      // Create gain node for volume control
      const gainNode = audioContext.createGain();
      gainNode.gain.value = volume / 100;

      source.connect(gainNode);
      gainNode.connect(audioContext.destination);

      audioRef.current = { audioContext, source, gainNode, started: false };
    }

    return () => {
      if (audioRef.current?.audioContext) {
        audioRef.current.audioContext.close();
      }
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (audioRef.current?.gainNode) {
      audioRef.current.gainNode.gain.value = volume / 100;
    }
  }, [volume]);

  const handlePlayPause = () => {
    if (!selectedSilence) return;

    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current?.audioContext?.state === 'running') {
        audioRef.current.audioContext.suspend();
      }
    } else {
      setIsPlaying(true);
      if (audioRef.current?.audioContext) {
        if (!audioRef.current.started) {
          audioRef.current.source.start(0);
          audioRef.current.started = true;
        }
        if (audioRef.current.audioContext.state === 'suspended') {
          audioRef.current.audioContext.resume();
        }
      }
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("quietness_username");
    setUsername("");
    navigate('/');
  };

  const handleCloseAd = () => {
    setShowAdModal(false);
    setAdCountdown(15); // Reset for next time
    setPlaybackTime(0); // Reset the timer
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const silenceTypes = [
    {
      id: 'anechoic',
      name: 'Anechoic',
      description: 'Laboratory-grade silence, 99.99% sound absorption',
      icon: <VolumeX className="h-8 w-8" />,
      gradient: 'from-gray-900 to-gray-700',
    },
    {
      id: 'arctic-dusk',
      name: 'Arctic Dusk',
      description: 'Captured at -40°C in the Norwegian wilderness',
      icon: <Mountain className="h-8 w-8" />,
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      id: 'library-rare',
      name: 'Library Rare',
      description: 'The profound hush of ancient knowledge at rest',
      icon: <Library className="h-8 w-8" />,
      gradient: 'from-amber-700 to-amber-500',
    },
    {
      id: 'zen-garden',
      name: 'Zen Garden',
      description: 'Mindful stillness from Kyoto temple grounds',
      icon: <Waves className="h-8 w-8" />,
      gradient: 'from-green-600 to-emerald-500',
    },
    {
      id: 'lunar',
      name: 'Lunar',
      description: 'Trained on silence captured by Apollo 11',
      icon: <Moon className="h-8 w-8" />,
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      id: 'office-after-hours',
      name: 'Office After Hours',
      description: 'The inaudible hum of monitors gone dark',
      icon: <Building2 className="h-8 w-8" />,
      gradient: 'from-slate-700 to-slate-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src="/icon.jpeg" alt="Quietness.ai" className="h-8 w-8 rounded-xl" />
            <span className="font-semibold tracking-tight">Quietness.ai</span>
            <Badge variant="secondary" className="ml-2">Beta</Badge>
          </div>
          <div className="flex items-center gap-3">
            {username && (
              <>
                <span className="text-sm text-gray-700">Hello, {username}</span>
                <Button variant="ghost" className="rounded-2xl" onClick={handleSignOut}>
                  Sign out
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">
              Select Your <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">Silence</span>
            </h1>
            <p className="mt-4 text-lg text-center text-gray-600 max-w-2xl mx-auto">
              Choose from our curated collection of artisanal silences, each AI-enhanced for maximum tranquility.
            </p>
          </motion.div>

          {/* Silence Type Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {silenceTypes.map((silence, index) => (
              <motion.div
                key={silence.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card
                  className={`rounded-2xl cursor-pointer transition-all hover:shadow-lg ${
                    selectedSilence?.id === silence.id
                      ? 'ring-2 ring-gray-900 shadow-lg'
                      : 'hover:ring-1 hover:ring-gray-300'
                  }`}
                  onClick={() => {
                    setSelectedSilence(silence);
                    // Don't reset timer or playing state when switching silence types
                  }}
                >
                  <CardHeader>
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${silence.gradient} text-white mb-3 flex items-center justify-center`}>
                      {silence.icon}
                    </div>
                    <CardTitle className="text-xl">{silence.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {silence.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Playback Controls */}
          {selectedSilence && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <Card className="rounded-2xl max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Now Playing</CardTitle>
                  <CardDescription className="text-center text-lg">
                    {selectedSilence.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Waveform visualization (static for comedy effect) */}
                  <div className="flex items-center justify-center h-24 bg-gray-100 rounded-xl">
                    <div className="flex items-center gap-1">
                      {[...Array(50)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 rounded-full bg-gray-300 transition-all ${
                            isPlaying ? 'animate-pulse' : ''
                          }`}
                          style={{
                            height: isPlaying ? `${Math.random() * 4 + 2}px` : '2px',
                            animationDelay: `${i * 0.05}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Playback time */}
                  <div className="text-center text-sm text-gray-600">
                    {formatTime(playbackTime)} / {adWatched ? '∞' : `${formatTime(FREE_TIER_LIMIT)} (Free Tier)`}
                  </div>
                  {!adWatched && playbackTime < FREE_TIER_LIMIT && (
                    <div className="text-center text-xs text-gray-500">
                      {formatTime(FREE_TIER_LIMIT - playbackTime)} of free silence remaining
                    </div>
                  )}

                  {/* Play/Pause Button */}
                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      onClick={handlePlayPause}
                      className="rounded-full h-16 w-16 p-0 flex items-center justify-center"
                    >
                      {isPlaying ? (
                        <Pause className="h-8 w-8" />
                      ) : (
                        <Play className="h-8 w-8" fill="currentColor" />
                      )}
                    </Button>
                  </div>

                  {/* Volume Control (comedy - controlling silence volume) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <VolumeX className="h-4 w-4" />
                        Silence Intensity
                      </span>
                      <span>{volume}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
                    />
                    <p className="text-xs text-gray-500 text-center italic">
                      {volume === 0 && "Absolute void"}
                      {volume > 0 && volume <= 25 && "Nothing at all"}
                      {volume > 25 && volume <= 50 && "Pure absence"}
                      {volume > 50 && volume <= 75 && "Profound stillness"}
                      {volume > 75 && "Maximum tranquility"}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="text-center">
                    {isPlaying ? (
                      <Badge className="rounded-2xl bg-green-600">
                        <span className="animate-pulse mr-2">●</span> Broadcasting Silence
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="rounded-2xl">
                        Ready to Experience Nothing
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {!selectedSilence && (
            <div className="mt-12 text-center text-gray-500">
              Select a silence type above to begin your journey into auditory nothingness
            </div>
          )}
        </div>
      </section>

      {/* Ad Modal */}
      <Dialog open={showAdModal} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-2xl" hideCloseButton>
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              Free Tier Silence Limit Reached
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center text-gray-600">
              You've enjoyed 5 minutes of premium AI-generated silence. Please watch this brief message to continue.
            </p>

            {/* Fake Ad Content */}
<div className="bg-gradient-to-br from-red-950 via-rose-900 to-stone-900 p-8 rounded-xl text-gray-100 text-center space-y-4 border border-rose-800 shadow-lg">
  <div className="text-4xl font-extrabold tracking-tight text-red-100 drop-shadow-md">GARLÍQ™</div>
  <p className="text-xl italic text-rose-200">Confidence should never fear the night.</p>

  <p className="text-lg opacity-90">
    Distilled at midnight beneath a waning moon, GARLÍQ™ blends cold-pressed Mediterranean garlic
    with notes of clove, cedar, and sheer defiance.  
    A bold scent for men who want to make an impression — and repel the undead (or anyone within a ten-meter radius).
  </p>

  <div className="flex items-center justify-center gap-3 text-sm">
    <Badge className="bg-red-800 text-red-50 text-xs">100% Organic Garlic Essence</Badge>
    <Badge className="bg-red-800 text-red-50 text-xs">SPF (Supernatural Protection Factor) 50</Badge>
    <Badge className="bg-red-800 text-red-50 text-xs">Cruelty-Free*</Badge>
  </div>

  <p className="text-2xl font-bold mt-4 text-rose-100">
    $49.99 — each bottle sealed in holy water
  </p>
  <p className="text-xs opacity-80 text-red-200 italic">
    *Except to vampires, and to any romantic partners you go near within 72 hours of use.*
  </p>
</div>



            {/* Ad countdown and close button */}
            <div className="text-center space-y-3">
              {adCountdown > 0 ? (
                <p className="text-sm text-gray-500">
                  You can continue in {adCountdown} seconds...
                </p>
              ) : (
                <Button
                  onClick={handleCloseAd}
                  size="lg"
                  className="w-full rounded-2xl"
                >
                  Continue Experiencing Silence
                </Button>
              )}
            </div>

            <p className="text-xs text-center text-gray-400">
              Upgrade to Pro ($12/mo) for unlimited, ad-free silence
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
