import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scissors, Droplets, Leaf, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import hairImage from '@/assets/hair-treatments.jpg';

const HairTreatments = () => {
  const treatments = [
    {
      name: 'PRP Therapy for Hair Regrowth',
      description: 'Platelet-rich plasma therapy to stimulate natural hair growth and thickness',
      process: ['Blood Collection', 'Platelet Separation', 'Scalp Injection', 'Growth Stimulation'],
      sessions: '6-8 sessions',
      results: '3-6 months',
      effectiveness: '85% success rate'
    },
    {
      name: 'Hair Fall Control Treatments',
      description: 'Comprehensive therapy to stop hair loss and strengthen existing hair',
      process: ['Scalp Analysis', 'Root Strengthening', 'Nutrient Therapy', 'Growth Monitoring'],
      sessions: '8-12 sessions',
      results: '2-4 months',
      effectiveness: '90% reduction'
    },
    {
      name: 'Scalp Detox & Deep Nourishment',
      description: 'Intensive scalp cleansing and nourishment for optimal hair health',
      process: ['Deep Cleansing', 'Exfoliation', 'Nutrient Infusion', 'Scalp Massage'],
      sessions: '4-6 sessions',
      results: '1-2 months',
      effectiveness: '95% satisfaction'
    },
    {
      name: 'Dandruff & Itchy Scalp Care',
      description: 'Targeted treatment for scalp conditions causing dandruff and irritation',
      process: ['Condition Assessment', 'Antifungal Treatment', 'pH Balance', 'Maintenance Care'],
      sessions: '4-8 sessions',
      results: '2-6 weeks',
      effectiveness: '92% improvement'
    }
  ];

  const causes = [
    {
      title: 'Hormonal Changes',
      description: 'Androgenetic alopecia, pregnancy, menopause'
    },
    {
      title: 'Nutritional Deficiency',
      description: 'Iron, protein, vitamin deficiencies'
    },
    {
      title: 'Stress & Lifestyle',
      description: 'Physical and emotional stress factors'
    },
    {
      title: 'Medical Conditions',
      description: 'Thyroid disorders, autoimmune diseases'
    }
  ];

  const benefits = [
    {
      icon: Scissors,
      title: 'Hair Regrowth',
      description: 'Stimulate dormant follicles for new hair growth'
    },
    {
      icon: Droplets,
      title: 'Scalp Health',
      description: 'Improve scalp circulation and health'
    },
    {
      icon: Leaf,
      title: 'Natural Solutions',
      description: 'Safe, natural treatments without side effects'
    },
    {
      icon: Users,
      title: 'Expert Care',
      description: 'Specialized trichology and dermatology expertise'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-medical">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Hair Treatments
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Restore Your Hair's Natural Beauty
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Advanced hair restoration and scalp treatments to combat hair loss, promote growth, and maintain healthy, beautiful hair using proven medical techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Hair Analysis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Free Consultation
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={hairImage} 
              alt="Hair treatment and PRP therapy" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Hair Treatments?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-medical rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Hair Treatment Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all hair and scalp concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {treatments.map((treatment, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{treatment.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {treatment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-foreground">Treatment Process:</span>
                      <div className="grid grid-cols-2 gap-1 mt-1">
                        {treatment.process.map((step, stepIndex) => (
                          <Badge key={stepIndex} variant="outline" className="text-xs">
                            {step}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xs text-muted-foreground">Sessions</div>
                        <Badge variant="secondary" className="text-xs">{treatment.sessions}</Badge>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Results</div>
                        <Badge variant="outline" className="text-xs">{treatment.results}</Badge>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Success Rate</div>
                        <Badge className="bg-gradient-medical text-white text-xs">{treatment.effectiveness}</Badge>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-medical">
                    Start Treatment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hair Loss Causes */}
          <div className="bg-gradient-soft rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Common Causes of Hair Loss We Treat
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {causes.map((cause, index) => (
                <Card key={index} className="border-border text-center">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{cause.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{cause.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRP Process Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              How PRP Therapy Works
            </h3>
            <p className="text-muted-foreground">
              Understanding the science behind our most effective hair regrowth treatment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Blood Draw', desc: 'Small blood sample collected from patient' },
              { step: '02', title: 'Centrifuge', desc: 'Blood processed to separate platelet-rich plasma' },
              { step: '03', title: 'Injection', desc: 'PRP injected into scalp at hair follicle level' },
              { step: '04', title: 'Growth', desc: 'Growth factors stimulate dormant hair follicles' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-medical rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-medical">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Take the First Step Towards Healthier Hair
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a comprehensive hair and scalp analysis to determine the best treatment plan for your specific needs.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Book Your Hair Analysis Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HairTreatments;