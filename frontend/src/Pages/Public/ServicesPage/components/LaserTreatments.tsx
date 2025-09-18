import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Target, Settings, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import laserImage from '@/assets/laser-treatments.jpg';

// Treatment images
import laserHairRemovalImg from '@/assets/treatments/laser-hair-removal.jpg';
import laserPigmentationImg from '@/assets/treatments/laser-pigmentation.jpg';
import tattooRemovalImg from '@/assets/treatments/tattoo-removal.jpg';
import laserAcneScarsImg from '@/assets/treatments/laser-acne-scars.jpg';

const LaserTreatments = () => {
  const treatments = [
    {
      name: 'Laser Hair Removal',
      description: 'Permanent hair reduction for face, arms, underarms, bikini, and full body with advanced laser technology',
      image: laserHairRemovalImg,
      areas: ['Face', 'Arms', 'Underarms', 'Bikini', 'Legs', 'Full Body'],
      sessions: '6-8 sessions',
      results: 'Up to 95% reduction',
      details: 'Our state-of-the-art diode and alexandrite lasers target hair follicles at the root, providing safe and effective permanent hair reduction. Treatment is customized for different skin types and hair colors.',
      benefits: ['Permanent results', 'Smooth skin', 'No ingrown hairs', 'Time-saving']
    },
    {
      name: 'Laser for Pigmentation',
      description: 'Advanced laser therapy for melasma, age spots, and hyperpigmentation with precision targeting',
      image: laserPigmentationImg,
      areas: ['Melasma', 'Age Spots', 'Sun Damage', 'Dark Spots'],
      sessions: '4-6 sessions',
      results: '80-90% improvement',
      details: 'Q-switched lasers break down melanin deposits in the skin, effectively treating various pigmentation issues. The treatment is precise and targets only the pigmented areas.',
      benefits: ['Even skin tone', 'Reduced dark spots', 'Brighter complexion', 'Long-lasting results']
    },
    {
      name: 'Tattoo Removal',
      description: 'Safe and effective laser tattoo removal for all colors and sizes using advanced Q-switched technology',
      image: tattooRemovalImg,
      areas: ['All Colors', 'Small Tattoos', 'Large Tattoos', 'Professional Work'],
      sessions: '8-12 sessions',
      results: 'Complete removal',
      details: 'Our Q-switched lasers can remove tattoos of all colors and sizes by breaking down ink particles. The number of sessions depends on tattoo size, color, and depth.',
      benefits: ['Complete removal', 'Minimal scarring', 'All colors treated', 'Safe procedure']
    },
    {
      name: 'Laser for Acne Scars',
      description: 'Fractional laser resurfacing for acne scar reduction and skin smoothing with advanced CO2 technology',
      image: laserAcneScarsImg,
      areas: ['Boxcar Scars', 'Ice Pick Scars', 'Rolling Scars', 'Atrophic Scars'],
      sessions: '3-5 sessions',
      results: '70-85% improvement',
      details: 'Fractional CO2 laser creates controlled micro-injuries to stimulate collagen production and remodel scar tissue, significantly improving skin texture and appearance.',
      benefits: ['Scar reduction', 'Smoother texture', 'Improved confidence', 'Long-term results']
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Latest generation laser systems for optimal results'
    },
    {
      icon: Target,
      title: 'Precision Treatment',
      description: 'Targeted therapy with minimal damage to surrounding tissue'
    },
    {
      icon: Settings,
      title: 'Customizable Settings',
      description: 'Adjustable parameters for different skin types and conditions'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Clinically proven effectiveness with high success rates'
    }
  ];

  const laserTypes = [
    {
      name: 'Alexandrite Laser',
      use: 'Hair removal for light to medium skin tones',
      wavelength: '755 nm'
    },
    {
      name: 'Nd:YAG Laser',
      use: 'Hair removal for darker skin tones',
      wavelength: '1064 nm'
    },
    {
      name: 'Q-Switched Laser',
      use: 'Pigmentation and tattoo removal',
      wavelength: '532/1064 nm'
    },
    {
      name: 'Fractional CO2',
      use: 'Acne scars and skin resurfacing',
      wavelength: '10,600 nm'
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
              Laser Treatments
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Laser Technology
            </h1>
            <p className="text-xl opacity-90 mb-8">
              State-of-the-art laser treatments for hair removal, pigmentation correction, tattoo removal, and acne scar reduction with precision and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Free Assessment
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={laserImage} 
              alt="Advanced laser treatment equipment" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Laser Treatments?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-medical rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
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
              Our Laser Treatment Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive laser solutions for various skin and hair concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {treatments.map((treatment, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 border-border overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{treatment.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {treatment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {treatment.details}
                    </p>
                    
                    <div>
                      <span className="text-sm font-medium text-foreground">Treatment Areas:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {treatment.areas.map((area, areaIndex) => (
                          <Badge key={areaIndex} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-foreground">Key Benefits:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {treatment.benefits.map((benefit, benefitIndex) => (
                          <Badge key={benefitIndex} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sessions:</span>
                      <Badge variant="outline">{treatment.sessions}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Expected Results:</span>
                      <Badge className="bg-gradient-medical text-white">{treatment.results}</Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-medical">
                    Schedule Treatment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Laser Types */}
          <div className="bg-gradient-soft rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Our Advanced Laser Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {laserTypes.map((laser, index) => (
                <Card key={index} className="border-border">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg text-foreground">{laser.name}</CardTitle>
                    <Badge variant="outline">{laser.wavelength}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm">{laser.use}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-medical">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Power of Advanced Laser Technology
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation to determine the best laser treatment for your specific needs and skin type.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Book Your Free Laser Assessment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LaserTreatments;