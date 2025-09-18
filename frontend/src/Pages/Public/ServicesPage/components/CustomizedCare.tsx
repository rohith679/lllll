import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Calendar, BookOpen } from 'lucide-react';
import Navigation from '@/components/Navigation';
import customizedImage from '@/assets/customized-care.jpg';

const CustomizedCare = () => {
  const services = [
    {
      name: 'Teen Skincare Counseling',
      description: 'Specialized guidance for adolescent skin concerns and hormonal changes',
      features: ['Acne Management', 'Skin Education', 'Confidence Building', 'Lifestyle Tips'],
      duration: '45 min',
      frequency: 'Monthly',
      ageGroup: '13-19 years'
    },
    {
      name: 'Bridal Skin Packages',
      description: 'Complete pre-wedding skin preparation for your special day',
      features: ['Custom Treatment Plan', 'Regular Monitoring', 'Emergency Support', 'Final Touch-ups'],
      duration: '60-90 min',
      frequency: 'Bi-weekly',
      timeline: '3-6 months'
    },
    {
      name: 'Routine Skin & Hair Consultations',
      description: 'Regular check-ups and maintenance for ongoing skin and hair health',
      features: ['Progress Tracking', 'Treatment Adjustments', 'Product Updates', 'Preventive Care'],
      duration: '30-45 min',
      frequency: 'Quarterly',
      scope: 'Comprehensive'
    },
    {
      name: 'Diet & Lifestyle Counseling',
      description: 'Holistic approach to skin health through nutrition and lifestyle changes',
      features: ['Nutritional Assessment', 'Meal Planning', 'Supplement Guidance', 'Lifestyle Modifications'],
      duration: '60 min',
      frequency: 'Monthly',
      approach: 'Holistic'
    }
  ];

  const packages = [
    {
      name: 'Glow Getter Teen Package',
      description: 'Complete skincare program for teenagers',
      includes: ['Initial Consultation', '6 Monthly Sessions', 'Emergency Support', 'Educational Materials'],
      price: 'Starting from ₹15,000',
      duration: '6 months'
    },
    {
      name: 'Bridal Beauty Transformation',
      description: 'Comprehensive pre-wedding skin preparation',
      includes: ['Custom Treatment Plan', '12 Bi-weekly Sessions', 'Wedding Day Support', 'Touch-up Kit'],
      price: 'Starting from ₹45,000',
      duration: '6 months'
    },
    {
      name: 'Wellness Maintenance Program',
      description: 'Year-round skin and hair health monitoring',
      includes: ['Quarterly Consultations', 'Priority Booking', 'Discounted Treatments', 'Annual Reports'],
      price: 'Starting from ₹20,000',
      duration: '12 months'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Treatment plans tailored to your unique needs'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'One-on-one consultation with specialists'
    },
    {
      icon: Calendar,
      title: 'Ongoing Support',
      description: 'Continuous monitoring and plan adjustments'
    },
    {
      icon: BookOpen,
      title: 'Education & Awareness',
      description: 'Learn about your skin and maintain results'
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
              Customized Skin & Hair Care Plans
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Personalized Journey to Healthy Skin
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Tailored treatment plans, expert consultations, and ongoing support designed specifically for your unique skin and hair needs at every life stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Custom Plan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Free Assessment
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={customizedImage} 
              alt="Customized skincare consultation" 
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
              Why Choose Customized Care?
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

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Customized Care Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized programs designed for different life stages and skin concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{service.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-foreground">Key Features:</span>
                      <div className="grid grid-cols-2 gap-1 mt-1">
                        {service.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xs text-muted-foreground">Duration</div>
                        <Badge variant="secondary" className="text-xs">{service.duration}</Badge>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Frequency</div>
                        <Badge variant="outline" className="text-xs">{service.frequency}</Badge>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Scope</div>
                        <Badge className="bg-gradient-medical text-white text-xs">
                          {service.ageGroup || service.timeline || service.scope || service.approach}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-medical">
                    Start Custom Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Package Options */}
          <div className="bg-gradient-soft rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Our Popular Care Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Card key={index} className="border-border relative">
                  {index === 1 && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-accent text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg text-foreground">{pkg.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Package Includes:</span>
                      <ul className="mt-2 space-y-1">
                        {pkg.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-gradient-medical">
                      Choose Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              How Our Customized Care Process Works
            </h3>
            <p className="text-muted-foreground">
              A systematic approach to creating your perfect skincare journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assessment', desc: 'Comprehensive skin and lifestyle analysis' },
              { step: '02', title: 'Planning', desc: 'Custom treatment plan creation' },
              { step: '03', title: 'Treatment', desc: 'Personalized therapy sessions' },
              { step: '04', title: 'Monitoring', desc: 'Progress tracking and plan adjustments' }
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
            Start Your Personalized Skincare Journey Today
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book a consultation to receive a customized treatment plan designed specifically for your skin's unique needs and goals.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Your Custom Care Plan
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CustomizedCare;