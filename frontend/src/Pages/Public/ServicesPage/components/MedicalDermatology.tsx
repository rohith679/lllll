import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import medicalImage from '@/assets/medical-dermatology.jpg';

// Treatment images
import acneTreatmentImg from '@/assets/treatments/acne-treatment.jpg';
import psoriasisEczemaImg from '@/assets/treatments/psoriasis-eczema.jpg';
import vitiligoTreatmentImg from '@/assets/treatments/vitiligo-treatment.jpg';
import skinAllergiesImg from '@/assets/treatments/skin-allergies.jpg';
import fungalBacterialImg from '@/assets/treatments/fungal-bacterial.jpg';
import hairLossDandruffImg from '@/assets/treatments/hair-loss-dandruff.jpg';
import nailDisordersImg from '@/assets/treatments/nail-disorders.jpg';
import moleRemovalImg from '@/assets/treatments/mole-removal.jpg';

const MedicalDermatology = () => {
  const treatments = [
    {
      name: 'Acne & Scar Treatment',
      description: 'Comprehensive acne management and advanced scar reduction therapies using the latest medical protocols',
      image: acneTreatmentImg,
      duration: '30-60 min',
      sessions: '4-8 sessions',
      details: 'Our advanced acne treatment program combines topical retinoids, oral antibiotics, and professional extraction techniques. For scar reduction, we offer chemical peels, microneedling, and laser resurfacing to improve skin texture and appearance.',
      benefits: ['Reduced active acne', 'Minimized scarring', 'Improved skin texture', 'Long-term results']
    },
    {
      name: 'Psoriasis & Eczema Management',
      description: 'Specialized treatment plans for chronic inflammatory skin conditions with personalized care',
      image: psoriasisEczemaImg,
      duration: '45 min',
      sessions: 'Ongoing care',
      details: 'We provide comprehensive management for chronic inflammatory conditions through topical corticosteroids, immunomodulators, and biologic therapies. Our approach includes lifestyle modifications and trigger identification.',
      benefits: ['Symptom control', 'Reduced inflammation', 'Improved quality of life', 'Long-term management']
    },
    {
      name: 'Vitiligo Treatment',
      description: 'Advanced phototherapy and topical treatments for pigmentation restoration',
      image: vitiligoTreatmentImg,
      duration: '20-30 min',
      sessions: '12-24 sessions',
      details: 'Our vitiligo treatment combines narrowband UVB phototherapy, topical calcineurin inhibitors, and JAK inhibitors to stimulate melanocyte function and restore pigmentation in affected areas.',
      benefits: ['Pigment restoration', 'Halted progression', 'Improved confidence', 'Natural-looking results']
    },
    {
      name: 'Skin Allergies & Rashes',
      description: 'Diagnostic evaluation and targeted treatment for allergic reactions and contact dermatitis',
      image: skinAllergiesImg,
      duration: '30 min',
      sessions: '1-3 sessions',
      details: 'We perform comprehensive allergy testing including patch tests and provide targeted treatment with antihistamines, topical corticosteroids, and allergen avoidance strategies.',
      benefits: ['Accurate diagnosis', 'Symptom relief', 'Allergen identification', 'Prevention strategies']
    },
    {
      name: 'Fungal & Bacterial Infections',
      description: 'Expert diagnosis and treatment of various skin infections with rapid recovery protocols',
      image: fungalBacterialImg,
      duration: '20-30 min',
      sessions: '2-4 weeks',
      details: 'Our infection management includes microscopic examination, culture testing, and targeted antimicrobial therapy using topical and systemic medications for complete eradication.',
      benefits: ['Rapid healing', 'Infection clearance', 'Recurrence prevention', 'Minimal side effects']
    },
    {
      name: 'Hair Loss & Dandruff Solutions',
      description: 'Comprehensive scalp analysis and targeted hair restoration treatments',
      image: hairLossDandruffImg,
      duration: '45 min',
      sessions: '6-12 sessions',
      details: 'We offer trichoscopy analysis, hormonal evaluation, and treatments including minoxidil, finasteride, PRP therapy, and medicated shampoos for scalp health optimization.',
      benefits: ['Hair regrowth', 'Scalp health', 'Reduced hair fall', 'Dandruff control']
    },
    {
      name: 'Nail Disorders',
      description: 'Treatment for fungal infections, ingrown nails, and nail diseases',
      image: nailDisordersImg,
      duration: '20-40 min',
      sessions: '4-8 weeks',
      details: 'Our nail care includes antifungal treatments, surgical nail procedures, and management of conditions like psoriatic nails, ingrown toenails, and nail dystrophies.',
      benefits: ['Healthy nail growth', 'Infection clearance', 'Pain relief', 'Aesthetic improvement']
    },
    {
      name: 'Skin Tag / Wart / Mole Removal',
      description: 'Safe surgical and non-surgical removal of benign skin lesions',
      image: moleRemovalImg,
      duration: '10-30 min',
      sessions: '1-2 sessions',
      details: 'We provide professional removal using electrocautery, cryotherapy, laser ablation, and surgical excision with histopathological examination when necessary for complete peace of mind.',
      benefits: ['Safe removal', 'Minimal scarring', 'Quick procedure', 'Cosmetic improvement']
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Expert Dermatologists',
      description: 'Board-certified specialists with years of experience'
    },
    {
      icon: Users,
      title: '10,000+ Patients Treated',
      description: 'Trusted by thousands for effective medical treatments'
    },
    {
      icon: CheckCircle,
      title: 'Evidence-Based Care',
      description: 'Latest medical protocols and proven treatment methods'
    },
    {
      icon: Clock,
      title: 'Comprehensive Evaluation',
      description: 'Thorough diagnosis and personalized treatment plans'
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
              Medical Dermatology
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Medical Skin Treatment
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive dermatological care for all skin conditions using the latest medical protocols and advanced treatment technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={medicalImage} 
              alt="Medical dermatology treatment" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-medical rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              Our Medical Dermatology Treatments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care for all skin, hair, and nail conditions with proven medical treatments
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
                      <span className="text-sm font-medium text-foreground">Key Benefits:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {treatment.benefits.map((benefit, benefitIndex) => (
                          <Badge key={benefitIndex} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <Badge variant="secondary">{treatment.duration}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sessions:</span>
                      <Badge variant="outline">{treatment.sessions}</Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-medical">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-medical">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Expert Medical Care for Your Skin
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our experienced dermatologists provide comprehensive medical care using evidence-based treatments for all skin conditions.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Schedule Your Consultation Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MedicalDermatology;