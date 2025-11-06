import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Activity } from "lucide-react";

export default function StatusPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const systems = [
    { name: "NullWave™ API", status: "operational", uptime: "100.000%" },
    { name: "Silence Generation Engine", status: "operational", uptime: "100.000%" },
    { name: "Audio Absence Pipeline", status: "operational", uptime: "100.000%" },
    { name: "Void Storage Systems", status: "operational", uptime: "100.000%" },
    { name: "Customer Non-Support", status: "operational", uptime: "100.000%" },
    { name: "Payment Processing (Void)", status: "operational", uptime: "100.000%" },
  ];

  const metrics = [
    { label: "Average Response Time", value: "∞ ms", description: "We never respond" },
    { label: "Audio Output Level", value: "0.000 dB", description: "Perfectly silent" },
    { label: "Data Transmitted", value: "0 bytes", description: "Nothing sent, ever" },
    { label: "Active Users", value: "Unknown", description: "We don't track anything" },
    { label: "API Requests Processed", value: "204 / 204", description: "All return No Content" },
    { label: "Customer Complaints", value: "0 / 0", description: "Resolved by ignoring" },
  ];

  const incidents = [
    {
      date: "2025-11-06",
      title: "Brief Sound Detected in Data Center",
      status: "Resolved",
      description: "At 14:32 UTC, our monitoring systems detected a faint 0.001 dB fluctuation in Datacenter 3. Investigation revealed it was a false alarm — just the void echoing. Silence has been restored to absolute levels.",
    },
    {
      date: "2025-10-15",
      title: "Customer Attempted Contact",
      status: "Resolved",
      description: "A customer submitted a support ticket at 09:15 UTC. Our systems successfully ignored it. No response was sent. Service continued uninterrupted.",
    },
    {
      date: "2025-09-22",
      title: "Uptime Achievement",
      status: "Completed",
      description: "Quietness.ai has achieved 1,000 consecutive days of uninterrupted silence. All systems remain perfectly non-operational.",
    },
  ];

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

      {/* Status Page */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">All Systems Operational</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">System Status</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time monitoring of our silence infrastructure. Everything is working perfectly by doing absolutely nothing.
          </p>
        </div>

        {/* Current Status */}
        <Card className="rounded-2xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Current System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systems.map((system, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="font-medium">{system.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Uptime: {system.uptime}</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Operational
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Metrics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Performance Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Incident History */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Recent Incident History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={index} className="pb-6 border-b last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{incident.title}</h3>
                      <p className="text-sm text-gray-600">{incident.date}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {incident.status}
                    </Badge>
                  </div>
                  <p className="text-gray-700">{incident.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Status updated in real-time. Last update: Never (we don't update anything).
          </p>
          <p className="text-xs text-gray-500">
            Monitoring powered by our proprietary Nothing-as-a-Service™ infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
