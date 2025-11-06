import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertCircle } from "lucide-react";

export default function SecurityPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const securityMetrics = [
    { label: "Days Since Last Breach", value: "∞", icon: Shield },
    { label: "Data Stolen", value: "0 bytes", icon: Lock },
    { label: "Unauthorized Access Attempts", value: "0", icon: Eye },
    { label: "Vulnerabilities Found", value: "None", icon: AlertCircle },
  ];

  const timeline = [
    {
      date: "2025-11-06",
      title: "Nothing Happened Today",
      description: "Another successful day of zero security incidents. No data was compromised, unsurprisingly.",
      type: "success"
    },
    {
      date: "2025-10-01",
      title: "Quarterly Security Review: Perfect Score",
      description: "Our Q3 security audit revealed no vulnerabilities, no breaches, and no data at risk.",
      type: "success"
    },
    {
      date: "2025-07-15",
      title: "Penetration Test Results",
      description: "Independent security researchers attempted to penetrate our systems. They found nothing to penetrate. Test concluded successfully.",
      type: "success"
    },
    {
      date: "2025-04-20",
      title: "Zero-Day Vulnerability Report",
      description: "A security researcher reported a critical zero-day vulnerability. Upon investigation, we discovered it was actually just the void. No action required.",
      type: "info"
    },
    {
      date: "2025-01-01",
      title: "Annual Security Achievement",
      description: "Quietness.ai celebrates another year without a single security incident. Our track record remains unblemished: nothing has ever happened.",
      type: "success"
    },
    {
      date: "2024-01-01",
      title: "Company Founded",
      description: "Quietness.ai established with a commitment to absolute security through radical non-existence. Zero incidents since inception.",
      type: "milestone"
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

      {/* Security Page */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">Perfectly Secure</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Security</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to announce: nothing has ever happened. Our security record is impeccable because there's nothing to secure.
          </p>
        </div>

        {/* Security Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {securityMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="rounded-2xl text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-green-100">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 text-green-600">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Our Commitment */}
        <Card className="rounded-2xl mb-12">
          <CardHeader>
            <CardTitle>Our Security Commitment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-xl bg-green-50 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Zero Data Breaches</h3>
              <p className="text-sm text-green-800">
                We have never experienced a data breach, and we never will.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Uncrackable Encryption</h3>
              <p className="text-sm text-blue-800">
                Our silence is protected by 256-bit encryption of absolutely nothing.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Continuous Monitoring</h3>
              <p className="text-sm text-purple-800">
                We monitor our systems 24/7 to ensure nothing continues to happen.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">Incident Response</h3>
              <p className="text-sm text-orange-800">
                In the unlikely event of an incident (which has never occurred), our team is prepared to do nothing about it.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Timeline */}
        <Card className="rounded-2xl mb-12">
          <CardHeader>
            <CardTitle>Security Incident Timeline</CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              A comprehensive history of all security incidents at Quietness.ai
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {timeline.map((incident, index) => (
                <div key={index} className="relative pb-6 border-l-2 border-gray-200 pl-6 last:border-l-0 last:pb-0">
                  <div className="absolute left-0 top-0 -translate-x-1/2 flex items-center justify-center">
                    <div className={`h-4 w-4 rounded-full ${
                      incident.type === 'success' ? 'bg-green-500' :
                      incident.type === 'info' ? 'bg-blue-500' :
                      'bg-gray-500'
                    }`}></div>
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{incident.title}</h3>
                      <p className="text-sm text-gray-600">{incident.date}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {incident.type === 'milestone' ? 'Milestone' : 'No Action Required'}
                    </Badge>
                  </div>
                  <p className="text-gray-700">{incident.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Responsible Disclosure */}
        <Card className="rounded-2xl mb-12">
          <CardHeader>
            <CardTitle>Responsible Disclosure Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              At Quietness.ai, we take security seriously. If you discover a security vulnerability, please don't tell us. We prefer to remain unaware of all potential issues.
            </p>
            <div className="p-4 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold mb-2">Bug Bounty Program</h3>
              <p className="text-sm text-gray-700 mb-3">
                We offer a generous bug bounty: <strong>$0</strong> for any security vulnerability you find in our systems.
              </p>
              <p className="text-xs text-gray-600">
                Note: Given that we have no systems, data, or functionality, finding a vulnerability is statistically impossible. But we appreciate your optimism.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Compliance */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Compliance & Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl border text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <h3 className="font-semibold mb-1">ISO 0000 Certified</h3>
                <p className="text-xs text-gray-600">International standard for doing nothing</p>
              </div>
              <div className="p-4 rounded-xl border text-center">
                <div className="text-4xl mb-2">🔒</div>
                <h3 className="font-semibold mb-1">SOC 2 Type Null</h3>
                <p className="text-xs text-gray-600">Silence of Compliance 2</p>
              </div>
              <div className="p-4 rounded-xl border text-center">
                <div className="text-4xl mb-2">💳</div>
                <h3 className="font-semibold mb-1">PCI DSS Non-Compliant</h3>
                <p className="text-xs text-gray-600">We don't process anything</p>
              </div>
              <div className="p-4 rounded-xl border text-center">
                <div className="text-4xl mb-2">🇪🇺</div>
                <h3 className="font-semibold mb-1">GDPR Compliant</h3>
                <p className="text-xs text-gray-600">No data = no violations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Last security incident: Never
          </p>
          <p className="text-xs text-gray-500">
            This page is updated in real-time to reflect our ongoing commitment to having nothing go wrong, or right.
          </p>
        </div>
      </div>
    </div>
  );
}
