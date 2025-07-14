import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Award, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Mail,
  Instagram
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import certificatePreview from "@/assets/certificate-preview.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openEnrollForm = () => {
    window.open('https://forms.google.com/your-form-url', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Badge variant="secondary" className="w-fit">
                <Sparkles className="w-4 h-4 mr-2" />
                4-Week Intensive Program
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display leading-tight">
                  Design the Future.{" "}
                  <span className="bg-gradient-accent bg-clip-text text-transparent">
                    Learn with Ugenix
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Master UI/UX design through hands-on projects, build your portfolio, 
                  and launch your design career with industry-level training.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="xl" 
                  variant="gradient"
                  onClick={openEnrollForm}
                  className="group"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="xl" 
                  variant="outline"
                  onClick={() => scrollToSection('how-it-works')}
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>500+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Industry Certificate</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20 animate-float"></div>
              <img 
                src={heroImage} 
                alt="UI/UX Design Workspace" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="what-you-get" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold font-display">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to become a confident UI/UX designer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Industry-Level Project",
                description: "Work on a real-world design challenge that mirrors actual industry projects"
              },
              {
                icon: Calendar,
                title: "Weekly Tasks",
                description: "Structured learning with clear milestones and deliverables each week"
              },
              {
                icon: BookOpen,
                title: "Portfolio-Ready Outcomes",
                description: "Create professional case studies that showcase your design process"
              },
              {
                icon: Award,
                title: "Industry Certificate",
                description: "Get recognized with a certificate that validates your new skills"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center group-hover:bg-gradient-accent transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold font-display">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured 4-week journey from beginner to confident designer
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                week: "Week 1",
                title: "Research + Personas",
                description: "Learn user research methodologies and create detailed user personas based on real data"
              },
              {
                week: "Week 2", 
                title: "Wireframes",
                description: "Transform insights into low-fidelity wireframes and user flow diagrams"
              },
              {
                week: "Week 3",
                title: "UI Design",
                description: "Create stunning high-fidelity designs with modern design principles"
              },
              {
                week: "Week 4",
                title: "Prototype + Case Study",
                description: "Build interactive prototypes and document your design process professionally"
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      {step.week}
                    </Badge>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < 3 && (
                  <div className="hidden lg:block">
                    <ArrowRight className="w-8 h-8 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold font-display">
              Perfect For You If...
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "You're a beginner in design and want to start your journey right",
              "You want to build a professional portfolio with real projects",
              "You can't afford ₹10k+ design courses but still want quality education"
            ].map((point, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent-alt mt-1 flex-shrink-0" />
                  <p className="text-lg leading-relaxed">{point}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold font-display">
              Industry-Recognized Certificate
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase your achievement with a professional certificate
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img 
              src={certificatePreview} 
              alt="Ugenix Certificate Preview" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-5xl font-bold font-display">
              All this, for just{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                ₹200
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              {[
                "4 weeks of structured learning",
                "Industry-level project experience", 
                "Weekly mentorship and feedback",
                "Portfolio-ready case study",
                "Professional certificate",
                "Lifetime access to course materials"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-alt flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-bold font-display">
            Ready to build your first real UX project?
          </h2>
          
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join hundreds of students who've already started their design journey with Ugenix
          </p>

          <Button 
            size="xl" 
            variant="accent-alt"
            onClick={openEnrollForm}
            className="group"
          >
            Start Your Journey Today
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm opacity-75">
            Limited spots available • Enroll now to secure your place
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold font-display">Ugenix</h3>
              <p className="text-sm opacity-75 mt-2">
                Empowering the next generation of designers
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm opacity-75">Contact us</p>
              <a 
                href="mailto:hello@ugenix.in" 
                className="flex items-center gap-2 justify-center mt-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                hello@ugenix.in
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm opacity-75 mb-2">Follow us</p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                @ugenix
              </a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-75">
              © 2024 Ugenix. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
