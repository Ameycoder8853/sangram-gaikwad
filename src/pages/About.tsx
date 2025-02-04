import { Shield, Users, Trophy, Building, Target } from "lucide-react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Sangram Realty | Leading Real Estate Agent in Pune</title>
        <meta name="description" content="Sangram Realty is a trusted name in Pune's real estate market. Learn about our expertise, values, and commitment to excellence in property services." />
        <meta name="keywords" content="real estate company pune, property consultants pune, real estate agent pune, top real estate agents pune, property dealers pune, real estate services pune, trusted property agents pune, real estate experts pune, property management pune, real estate consultation pune, property investment advisors pune, real estate market pune, property valuation pune, real estate development pune, property solutions pune, real estate professionals pune, property assistance pune" />
        <link rel="canonical" href="https://sangramgaikwad.com/about" />
      </Helmet>

    <div className="min-h-screen bg-[#010f4a]">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="animate-fade-up mb-16 text-center">
          <h1 className="mb-6 font-display text-5xl font-bold text-white">About Sangram Realty</h1>
          <p className="mx-auto max-w-3xl text-lg text-white">
            A leading real estate company in Pune, specializing in both residential and commercial properties. 
            With years of experience in the industry, we have established ourselves as a trusted name in real estate services.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="animate-fade-up rounded-lg bg-[#010f4a] p-8 shadow-lg [--animation-delay:200ms]">
            <h2 className="mb-4 font-display text-2xl font-semibold  text-white text-white">Our Vision</h2>
            <p className="text-white">
              To be the most trusted and respected real estate company in Pune, known for our commitment 
              to excellence and customer satisfaction.
            </p>
          </div>
          <div className="animate-fade-up rounded-lg bg-[#010f4a] p-8 shadow-lg [--animation-delay:400ms]">
            <h2 className="mb-4 font-display text-2xl font-semibold  text-white text-white">Our Mission</h2>
            <p className="text-white">
              To provide exceptional real estate services while maintaining the highest standards of 
              professionalism, integrity, and commitment to our clients.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-white">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="animate-fade-up rounded-lg bg-[#010f4a] p-6 text-center shadow-lg transition-transform hover:scale-105 [--animation-delay:200ms]">
              <Shield className="mx-auto mb-4 h-12 w-12 text-white" />
              <h3 className="mb-2 font-semibold  text-white">Trust & Integrity</h3>
              <p className="text-white">Building lasting relationships through honest dealings</p>
            </div>
            <div className="animate-fade-up rounded-lg bg-[#010f4a] p-6 text-center shadow-lg transition-transform hover:scale-105 [--animation-delay:400ms]">
              <Trophy className="mx-auto mb-4 h-12 w-12 text-white" />
              <h3 className="mb-2 font-semibold  text-white">Excellence</h3>
              <p className="text-white">Delivering superior service and results</p>
            </div>
            <div className="animate-fade-up rounded-lg bg-[#010f4a] p-6 text-center shadow-lg transition-transform hover:scale-105 [--animation-delay:600ms]">
              <Target className="mx-auto mb-4 h-12 w-12 text-white" />
              <h3 className="mb-2 font-semibold  text-white">Client Focus</h3>
              <p className="text-white">Putting our clients' needs first</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="animate-fade-up rounded-lg bg-[#010f4a] p-8 shadow-lg [--animation-delay:800ms]">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-white">Why Choose Us</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <Building className="h-6 w-6 shrink-0 text-white" />
              <div>
                <h3 className="mb-2 font-semibold  text-white text-white">Extensive Portfolio</h3>
                <p className="text-white">Access to a wide range of premium properties</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6 shrink-0 text-white" />
              <div>
                <h3 className="mb-2 font-semibold  text-white text-white">Expert Team</h3>
                <p className="text-white">Professional and experienced real estate advisors</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 shrink-0 text-white" />
              <div>
                <h3 className="mb-2 font-semibold  text-white text-white">Transparent Dealings</h3>
                <p className="text-white">Clear and honest communication throughout</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Trophy className="h-6 w-6 shrink-0 text-white" />
              <div>
                <h3 className="mb-2 font-semibold  text-white">Market Knowledge</h3>
                <p className="text-white">Deep understanding of local real estate trends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
