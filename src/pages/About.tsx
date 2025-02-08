import { Shield, Users, Trophy, Building, Target } from "lucide-react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Sangram Realty | Leading Real Estate Agent in Pune</title>
        <meta name="description" content="Sangram Realty is a trusted name in Pune's real estate market. Learn about our expertise, values, and commitment to excellence in property services." />
        <meta name="keywords" content="Sangram Gaikwad,Sangram Gaikwad Realestate,real estate company pune, property consultants pune, real estate agent pune, top real estate agents pune, property dealers pune, real estate services pune, trusted property agents pune, real estate experts pune, property management pune, real estate consultation pune, property investment advisors pune, real estate market pune, property valuation pune, real estate development pune, property solutions pune, real estate professionals pune, property assistance pune" />
        <link rel="canonical" href="https://sangramgaikwad.com/about" />
      </Helmet>

      <div className="min-h-screen bg-primary">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="animate-fade-up mb-16 text-center">
            <h1 className="mb-6 font-display text-5xl font-bold text-white">About Sangram Gaikwad Realestate</h1>
            <p className="mx-auto max-w-3xl text-lg text-white">
              Sangram Gaikwad, an MBA graduate with extensive experience in the real estate industry. 
              He had worked at Kolte Patil, one of Pune's top real estate firms, he has gained deep insights into property management and development. 
              Currently, he is actively working on 200+ Rera Approved projects in Pune and Dubai, bringing expertise and excellence to every deal.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="animate-fade-up rounded-lg bg-primary p-8 shadow-lg [--animation-delay:200ms]">
              <h2 className="mb-4 font-display text-2xl font-semibold text-white">Our Vision</h2>
              <p className="text-white">
                To be the most trusted and respected real estate company in Pune, known for our commitment to excellence and customer satisfaction.
              </p>
            </div>
            <div className="animate-fade-up rounded-lg bg-primary p-8 shadow-lg [--animation-delay:400ms]">
              <h2 className="mb-4 font-display text-2xl font-semibold text-white">Our Mission</h2>
              <p className="text-white">
                To provide exceptional real estate services while maintaining the highest standards of professionalism, integrity, and commitment to our clients.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-white">Our Core Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="animate-fade-up rounded-lg bg-primary p-6 text-center shadow-lg transition-transform hover:scale-105 [--animation-delay:200ms]">
                <Shield className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 font-semibold text-white">Trust & Integrity</h3>
                <p className="text-white">Building lasting relationships through honest dealings</p>
              </div>
              <div className="animate-fade-up rounded-lg bg-primary p-6 text-center shadow-lg transition-transform hover:scale-105 [--animation-delay:400ms]">
                <Trophy className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 font-semibold text-white">Excellence</h3>
                <p className="text-white">Delivering superior service and results</p>
              </div>
              <div className="animate-fade-up rounded-lg bg-primary p-6 text-center shadow-lg transition-transform hover:scale-105 [--animation-delay:600ms]">
                <Target className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 font-semibold text-white">Client Focus</h3>
                <p className="text-white">Putting our clients' needs first</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
