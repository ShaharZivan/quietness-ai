import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, VolumeX, DollarSign, Calendar } from "lucide-react";

export default function CareersPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      title: "Chief Silence Officer",
      department: "Executive",
      location: "Remote (Must not be heard)",
      type: "Full-time",
      description: "Lead our mission to deliver absolutely nothing to millions of users. Must have 10+ years of experience saying nothing.",
      requirements: [
        "Proven track record of not speaking",
        "Ability to convey emptiness at scale",
        "Strong background in doing nothing",
        "Excellent non-communication skills"
      ]
    },
    {
      title: "Senior Void Engineer",
      department: "Engineering",
      location: "Anywhere (preferably nowhere)",
      type: "Full-time",
      description: "Build and maintain our proprietary nothingness infrastructure. You'll work on cutting-edge absence technology.",
      requirements: [
        "5+ years of experience with null, undefined, and void",
        "Deep understanding of empty arrays and objects",
        "Familiarity with /dev/null and its best practices",
        "Must be comfortable working in complete isolation"
      ]
    },
    {
      title: "Silence Quality Assurance Specialist",
      department: "Quality",
      location: "Anechoic Chamber, HQ",
      type: "Full-time",
      description: "Listen carefully to ensure our silence meets the highest standards. This role requires exceptional attention to nothing.",
      requirements: [
        "Ability to hear absolutely nothing for 8 hours straight",
        "Experience testing audio that doesn't exist",
        "Certification in Advanced Nothingness (preferred)",
        "Strong opinions about different types of silence"
      ]
    },
    {
      title: "Absence Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Define the roadmap for features we'll never ship. Manage stakeholder expectations by saying nothing.",
      requirements: [
        "Track record of delivering nothing on time",
        "Experience with Agile, Scrum, and other methods of organized inaction",
        "Comfortable with empty Jira boards",
        "Mastery of the phrase 'let's take this offline and never discuss it again'"
      ]
    },
    {
      title: "Quiet Customer Success Manager",
      department: "Customer Success",
      location: "Remote (Do Not Call)",
      type: "Full-time",
      description: "Ensure customers never hear from us. Build lasting relationships through complete absence of contact.",
      requirements: [
        "Experience in not responding to emails",
        "Proven ability to ghost professionally",
        "Strong background in radio silence",
        "Must be unreachable by phone, email, and carrier pigeon"
      ]
    },
    {
      title: "Lead Mute Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Design interfaces for experiences that don't exist. Create pixel-perfect mockups of nothing.",
      requirements: [
        "Portfolio showcasing blank canvases",
        "Expertise in negative space (exclusively)",
        "Proficiency in Figma, Sketch, and the art of deletion",
        "Strong opinions about different shades of invisible"
      ]
    },
    {
      title: "Stillness Operations Coordinator",
      department: "Operations",
      location: "Remote",
      type: "Part-time",
      description: "Coordinate activities that don't happen. Maintain schedules of non-events with precision.",
      requirements: [
        "Experience with calendar blocking for activities that won't occur",
        "Excellent organizational skills for nothing",
        "Familiarity with Slack (must keep status as 'away' permanently)",
        "Ability to attend zero meetings per week"
      ]
    },
    {
      title: "Emptiness Marketing Specialist",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      description: "Promote the absence of sound to audiences worldwide. Run campaigns that communicate nothing.",
      requirements: [
        "Experience with content that doesn't say anything",
        "Deep understanding of SEO for pages with no text",
        "Ability to write compelling copy about nothing",
        "Track record of campaigns with zero engagement (intentionally)"
      ]
    },
    {
      title: "Acoustic Absence Researcher",
      department: "Research",
      location: "Remote Lab",
      type: "Contract",
      description: "Research new frontiers in not making sound. Publish papers on the science of nothing.",
      requirements: [
        "PhD in Silence Studies or equivalent non-experience",
        "Published research in prestigious journals that nobody reads",
        "Background in physics of sound (specifically its absence)",
        "Must be comfortable with experiments that yield no results"
      ]
    }
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

      {/* Careers Header */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full">
              <Briefcase className="h-5 w-5" />
              <span className="font-semibold">Careers</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build the future of auditory absence. We're looking for passionate individuals who believe in the power of nothing.
          </p>
        </div>

        {/* Company Values */}
        <Card className="rounded-2xl mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Why Work at Quietness.ai?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gray-100">
                    <VolumeX className="h-6 w-6 text-gray-700" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Culture of Silence</h3>
                <p className="text-sm text-gray-600">No meetings. No calls. No small talk.</p>
              </div>
              <div>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gray-100">
                    <DollarSign className="h-6 w-6 text-gray-700" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Competitive Non-Compensation</h3>
                <p className="text-sm text-gray-600">Industry-standard absence of benefits.</p>
              </div>
              <div>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gray-100">
                    <Calendar className="h-6 w-6 text-gray-700" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Unlimited Time Off</h3>
                <p className="text-sm text-gray-600">We don't track attendance. We couldn't care less.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
          {jobs.map((job, index) => (
            <Card key={index} className="rounded-2xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="secondary">{job.location}</Badge>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                  </div>
                  <Button
                    className="rounded-xl md:mt-0"
                    onClick={() => navigate(`/contact?type=apply&position=${encodeURIComponent(job.title)}`)}
                  >
                    Apply (We Won't Respond)
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-gray-900">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <Card className="rounded-2xl mt-12 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Don't See a Perfect Fit?</h2>
            <p className="text-gray-300 mb-6">
              We're always not looking for talented people who can do nothing. Send us your resume and we promise not to read it.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-xl"
              onClick={() => navigate('/contact?type=apply&position=General Application')}
            >
              Submit General Application
            </Button>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Quietness.ai is an equal opportunity employer. We discriminate against everyone equally by never responding to anyone.</p>
        </div>
      </div>
    </div>
  );
}
