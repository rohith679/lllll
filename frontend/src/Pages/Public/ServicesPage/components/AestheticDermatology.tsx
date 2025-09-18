import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Shield, Sparkles, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import aestheticImage from '@/assets/aesthetic-dermatology.jpg';

// Treatment images
import chemicalPeelsImg from '@/assets/treatments/chemical-peels.jpg';
import botoxFillersImg from '@/assets/treatments/botox-fillers.jpg';
import antiAgingImg from '@/assets/treatments/anti-aging.jpg';
import microneedlingPrpImg from '@/assets/treatments/microneedling-prp.jpg';
import mesotherapyImg from '@/assets/treatments/mesotherapy.jpg';
import laserRejuvenationImg from '@/assets/treatments/laser-rejuvenation.jpg';

const AestheticDermatology = () => {
  const treatments = [
    {
      name: 'Chemical Peels',
      description: 'Professional peels for pigmentation, acne marks, and skin rejuvenation with visible results',
      image: chemicalPeelsImg,
      types: ['Glycolic Acid', 'Salicylic Acid', 'TCA Peels'],
      duration: '30-45 min',
      downtime: '3-7 days',
      details: 'Our chemical peels use medical-grade acids to exfoliate damaged skin layers, revealing fresher, more youthful skin underneath. We customize the peel depth based on your skin concerns and tolerance.',
      benefits: ['Improved skin texture', 'Reduced pigmentation', 'Minimized pore size', 'Enhanced radiance']
    },
    {
      name: 'Botox & Fillers',
      description: 'Wrinkle reduction and facial contouring with premium injectable treatments for natural results',
      image: botoxFillersImg,
      types: ['Botox', 'Dermal Fillers', 'Lip Enhancement'],
      duration: '15-30 min',
      downtime: 'Minimal',
      details: 'We use FDA-approved neurotoxins and hyaluronic acid fillers to smooth wrinkles, restore volume, and enhance facial contours while maintaining natural expression and movement.',
      benefits: ['Wrinkle reduction', 'Facial contouring', 'Volume restoration', 'Natural appearance']
    },
    {
      name: 'Anti-Aging Skin Treatments',
      description: 'Comprehensive anti-aging protocols for youthful, radiant skin using advanced technology',
      image: antiAgingImg,
      types: ['Radiofrequency', 'Ultrasound Therapy', 'LED Therapy'],
      duration: '45-60 min',
      downtime: 'None',
      details: 'Our non-invasive anti-aging treatments stimulate collagen production, tighten skin, and improve elasticity using cutting-edge radiofrequency and ultrasound technologies.',
      benefits: ['Skin tightening', 'Collagen stimulation', 'Fine line reduction', 'Improved elasticity']
    },
    {
      name: 'Microneedling with PRP',
      description: 'Advanced collagen induction therapy with platelet-rich plasma for natural skin renewal',
      image: microneedlingPrpImg,
      types: ['RF Microneedling', 'PRP Treatment', 'Dermaroller'],
      duration: '60 min',
      downtime: '1-2 days',
      details: 'This treatment combines micro-injuries with your own growth factors from platelet-rich plasma to stimulate natural collagen production and accelerate healing for optimal results.',
      benefits: ['Natural rejuvenation', 'Scar improvement', 'Skin texture enhancement', 'Long-lasting results']
    },
    {
      name: 'Mesotherapy',
      description: 'Targeted injections for skin rejuvenation and hair regrowth with customized nutrient cocktails',
      image: mesotherapyImg,
      types: ['Skin Cocktails', 'Hair Mesotherapy', 'Fat Dissolving'],
      duration: '30-45 min',
      downtime: 'Minimal',
      details: 'We inject customized vitamin and nutrient cocktails directly into the skin to nourish, hydrate, and rejuvenate at the cellular level for targeted improvement.',
      benefits: ['Deep hydration', 'Nutrient delivery', 'Skin revitalization', 'Targeted treatment']
    },
    {
      name: 'Laser Skin Rejuvenation',
      description: 'Advanced laser treatments for skin tightening and texture improvement with precision technology',
      image: laserRejuvenationImg,
      types: ['Fractional Laser', 'CO2 Laser', 'IPL Therapy'],
      duration: '30-60 min',
      downtime: '3-10 days',
      details: 'Our state-of-the-art laser systems resurface skin, stimulate collagen remodeling, and address various concerns including wrinkles, scars, and pigmentation issues.',
      benefits: ['Skin resurfacing', 'Texture improvement', 'Wrinkle reduction', 'Pigmentation correction']
    }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: 'Youthful Appearance',
      description: 'Restore and maintain a naturally youthful look'
    },
    {
      icon: Star,
      title: 'Premium Results',
      description: 'Achieve exceptional aesthetic outcomes'
    },
    {
      icon: Shield,
      title: 'Safe Procedures',
      description: 'FDA-approved treatments with minimal risks'
    },
    {
      icon: Clock,
      title: 'Quick Recovery',
      description: 'Minimal downtime with most treatments'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Aesthetic & Cosmetic Dermatology
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enhance Your Natural Beauty
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Advanced aesthetic treatments to restore, refresh, and rejuvenate your skin with natural-looking results using the latest cosmetic dermatology techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Gallery
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={aestheticImage} 
              alt="Aesthetic dermatology treatment" 
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
              Why Choose Our Aesthetic Treatments?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
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
              Our Aesthetic Treatments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your appearance with our comprehensive range of cosmetic dermatology treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      <span className="text-sm font-medium text-foreground">Treatment Types:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {treatment.types.map((type, typeIndex) => (
                          <Badge key={typeIndex} variant="outline" className="text-xs">
                            {type}
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
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <Badge variant="outline">{treatment.duration}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Downtime:</span>
                      <Badge className="bg-gradient-accent text-white">{treatment.downtime}</Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-accent">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Natural Beauty?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a personalized consultation to discover which aesthetic treatments are perfect for achieving your beauty goals.
          </p>
          <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
            Get Your Custom Treatment Plan
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AestheticDermatology;