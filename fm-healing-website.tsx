import React, { useState } from 'react';
import { X, Menu, Phone, Mail, MapPin, Clock, ChevronRight, Facebook, Twitter, Instagram, Youtube, Home, Users, BookOpen, ClipboardList, MessageSquare, HelpCircle } from 'lucide-react';

// Main App Component
export default function FMHealingWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">FM Healing</h1>
              <p className="ml-2 text-sm text-blue-700 hidden sm:block">Sober Living | Lexington, KY</p>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <NavLink active={currentPage === 'home'} onClick={() => navigateTo('home')}>Home</NavLink>
              <NavLink active={currentPage === 'about'} onClick={() => navigateTo('about')}>About Us</NavLink>
              <NavLink active={currentPage === 'programs'} onClick={() => navigateTo('programs')}>Programs</NavLink>
              <NavLink active={currentPage === 'admissions'} onClick={() => navigateTo('admissions')}>Admissions</NavLink>
              <NavLink active={currentPage === 'contact'} onClick={() => navigateTo('contact')}>Contact</NavLink>
              <NavLink active={currentPage === 'resources'} onClick={() => navigateTo('resources')}>Resources</NavLink>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-800 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <MobileNavLink active={currentPage === 'home'} onClick={() => navigateTo('home')}><Home size={18} />Home</MobileNavLink>
                <MobileNavLink active={currentPage === 'about'} onClick={() => navigateTo('about')}><Users size={18} />About Us</MobileNavLink>
                <MobileNavLink active={currentPage === 'programs'} onClick={() => navigateTo('programs')}><BookOpen size={18} />Programs</MobileNavLink>
                <MobileNavLink active={currentPage === 'admissions'} onClick={() => navigateTo('admissions')}><ClipboardList size={18} />Admissions</MobileNavLink>
                <MobileNavLink active={currentPage === 'contact'} onClick={() => navigateTo('contact')}><MessageSquare size={18} />Contact</MobileNavLink>
                <MobileNavLink active={currentPage === 'resources'} onClick={() => navigateTo('resources')}><HelpCircle size={18} />Resources</MobileNavLink>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Emergency Contact Banner */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-center md:justify-between items-center">
          <p className="text-sm font-medium">Need immediate help? Call our 24/7 helpline</p>
          <a href="tel:+15555555555" className="hidden md:flex items-center text-sm font-bold hover:text-blue-200 transition-colors">
            <Phone size={16} className="mr-2" /> (555) 555-5555
          </a>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'programs' && <ProgramsPage />}
        {currentPage === 'admissions' && <AdmissionsPage formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'resources' && <ResourcesPage />}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">FM Healing</h3>
              <p className="text-gray-300 mb-2">Providing hope and healing for those seeking recovery in Lexington, Kentucky.</p>
              <div className="flex space-x-4 mt-4">
                <SocialIcon><Facebook size={20} /></SocialIcon>
                <SocialIcon><Twitter size={20} /></SocialIcon>
                <SocialIcon><Instagram size={20} /></SocialIcon>
                <SocialIcon><Youtube size={20} /></SocialIcon>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p className="flex items-center text-gray-300"><Phone size={16} className="mr-2 text-blue-400" /> (555) 555-5555</p>
                <p className="flex items-center text-gray-300"><Mail size={16} className="mr-2 text-blue-400" /> info@fmhealing.org</p>
                <p className="flex items-center text-gray-300"><MapPin size={16} className="mr-2 text-blue-400" /> 123 Recovery Rd, Lexington, KY 40507</p>
                <p className="flex items-center text-gray-300"><Clock size={16} className="mr-2 text-blue-400" /> Open 24/7</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><FooterLink onClick={() => navigateTo('home')}>Home</FooterLink></li>
                <li><FooterLink onClick={() => navigateTo('about')}>About Us</FooterLink></li>
                <li><FooterLink onClick={() => navigateTo('programs')}>Our Programs</FooterLink></li>
                <li><FooterLink onClick={() => navigateTo('admissions')}>Admissions</FooterLink></li>
                <li><FooterLink onClick={() => navigateTo('contact')}>Contact Us</FooterLink></li>
                <li><FooterLink onClick={() => navigateTo('resources')}>Resources</FooterLink></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Our Location</h3>
              <div className="bg-gray-700 h-40 rounded-md flex items-center justify-center text-center p-2">
                [Interactive Map Would Appear Here]
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} FM Healing Sober Living. All rights reserved.</p>
            <p className="mt-1">Privacy Policy | Terms of Service | HIPAA Compliance</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Navigation Components
const NavLink = ({ children, active, onClick }) => (
  <button 
    className={`font-medium hover:text-blue-800 transition-colors ${active ? 'text-blue-800' : 'text-gray-600'}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const MobileNavLink = ({ children, active, onClick }) => (
  <button 
    className={`flex items-center space-x-2 font-medium px-2 py-1 rounded-md transition-colors ${
      active ? 'text-blue-800 bg-blue-50' : 'text-gray-600 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const FooterLink = ({ children, onClick }) => (
  <button 
    className="text-gray-300 hover:text-blue-400 transition-colors"
    onClick={onClick}
  >
    {children}
  </button>
);

const SocialIcon = ({ children }) => (
  <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-700 transition-colors">
    {children}
  </a>
);

// Home Page
const HomePage = ({ navigateTo }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-90"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Journey to Recovery with FM Healing</h1>
            <p className="text-xl md:text-2xl mb-6">A supportive sober living community in Lexington, Kentucky dedicated to your success.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => navigateTo('admissions')}
                className="bg-white text-blue-800 font-bold py-3 px-6 rounded-md hover:bg-blue-100 transition-colors"
              >
                Start Your Application
              </button>
              <button 
                onClick={() => navigateTo('programs')}
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-md hover:bg-white hover:text-blue-800 transition-colors"
              >
                View Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose FM Healing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our community provides the structure, support, and accountability needed for a successful recovery journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Structured Environment"
              description="Our homes provide a safe, structured living environment that promotes accountability and personal growth."
            />
            <FeatureCard
              title="Peer Support"
              description="Connect with others on the path to recovery, building strong relationships and a sober support network."
            />
            <FeatureCard
              title="Kentucky-Focused"
              description="Specialized programs that address the unique challenges and resources available in Kentucky."
            />
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how FM Healing has helped individuals transform their lives and maintain long-term sobriety.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Michael T."
              duration="Resident for 8 months"
              quote="FM Healing provided the structure and support I needed during the most difficult time in my recovery. The community helped me rebuild my life."
            />
            <TestimonialCard
              name="Sarah K."
              duration="Resident for 6 months"
              quote="The accountability and genuine care from the staff made all the difference. I've now been sober for over a year and have rebuilt relationships with my family."
            />
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => navigateTo('about')}
              className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900"
            >
              Read More Stories <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take the First Step?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">Our admissions team is ready to help you begin your journey to recovery.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => navigateTo('admissions')}
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-md hover:bg-blue-50 transition-colors"
            >
              Apply Now
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page
const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">About FM Healing</h1>
          <p className="text-xl max-w-3xl">Learn about our mission, values, and the dedicated team behind our recovery community.</p>
        </div>
      </div>
      
      {/* Mission Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-200 h-64 md:h-96 rounded-lg flex items-center justify-center">
                [Professional Image of Facility Would Appear Here]
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At FM Healing, our mission is to provide a supportive, structured living environment for individuals recovering from substance use disorders. We believe in fostering independence, accountability, and community connection as the foundation for lasting recovery.
              </p>
              <p className="text-gray-600 mb-4">
                We recognize the unique challenges faced by individuals in Lexington, Kentucky and surrounding areas, and have tailored our approach to address these specific needs while drawing on evidence-based practices.
              </p>
              <p className="text-gray-600">
                Our goal is not just sobriety, but helping each resident develop the life skills, confidence, and support network necessary for a fulfilling life in recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do at FM Healing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              title="Compassion"
              description="We approach each individual with empathy, understanding, and genuine care for their unique journey."
            />
            <ValueCard
              title="Accountability"
              description="We believe in the importance of taking responsibility for one's actions and choices in recovery."
            />
            <ValueCard
              title="Community"
              description="We foster a sense of belonging and mutual support among residents and staff."
            />
            <ValueCard
              title="Integrity"
              description="We maintain honest, ethical practices in all aspects of our operation."
            />
            <ValueCard
              title="Growth"
              description="We encourage continuous personal development and the pursuit of one's full potential."
            />
            <ValueCard
              title="Respect"
              description="We honor the dignity and worth of every individual in our community."
            />
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Meet the dedicated professionals who make our mission possible.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberCard
              name="John Anderson"
              title="Executive Director"
              bio="With over 15 years in recovery services, John brings compassionate leadership and innovative programming to FM Healing."
            />
            <TeamMemberCard
              name="Lisa Thompson"
              title="Clinical Director"
              bio="A licensed therapist with extensive experience in addiction treatment and trauma-informed care approaches."
            />
            <TeamMemberCard
              name="Michael Roberts"
              title="House Manager"
              bio="In recovery himself for 8 years, Michael provides practical support and guidance to our residents daily."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Programs Page
const ProgramsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl max-w-3xl">Comprehensive recovery support tailored to individual needs.</p>
        </div>
      </div>
      
      {/* Programs Overview */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Recovery Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured programs provide the support, accountability, and resources needed for sustainable recovery.
            </p>
          </div>
          
          <div className="space-y-12">
            <ProgramCard
              title="Phase I: Foundation"
              duration="Months 1-3"
              description="The initial phase focuses on establishing stability, routine, and early recovery skills. Residents participate in daily recovery meetings, weekly house meetings, and regular check-ins with recovery coaches."
              features={[
                "Structured daily schedule",
                "Regular drug and alcohol screening",
                "Employment or education support",
                "Life skills development",
                "Weekly recovery planning"
              ]}
            />
            
            <ProgramCard
              title="Phase II: Growth"
              duration="Months 4-6"
              description="In the second phase, residents focus on deepening their recovery foundation while developing greater independence. This phase emphasizes personal growth, relationship building, and community integration."
              features={[
                "Increased privileges and responsibilities",
                "Peer mentoring opportunities",
                "Financial management coaching",
                "Family reconciliation support",
                "Community service engagement"
              ]}
            />
            
            <ProgramCard
              title="Phase III: Transition"
              duration="Months 7-12"
              description="The final phase prepares residents for independent living while maintaining their recovery foundation. Focus shifts toward long-term planning, sustainable recovery practices, and community integration."
              features={[
                "Transition planning",
                "Aftercare coordination",
                "Housing assistance",
                "Advanced recovery maintenance skills",
                "Alumni program introduction"
              ]}
            />
          </div>
        </div>
      </div>
      
      {/* Additional Services */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to address all aspects of recovery and well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Recovery Coaching"
              description="One-on-one guidance from experienced recovery coaches who provide personalized support and accountability."
            />
            <ServiceCard
              title="Employment Assistance"
              description="Resume building, job search support, interview preparation, and workplace recovery planning."
            />
            <ServiceCard
              title="Family Program"
              description="Education and support for family members to foster healthy relationships and understanding of recovery."
            />
            <ServiceCard
              title="Alumni Community"
              description="Ongoing connection and support through our active alumni network and regular events."
            />
            <ServiceCard
              title="Transportation Assistance"
              description="Help with transportation to appointments, meetings, and employment for those without personal vehicles."
            />
            <ServiceCard
              title="Community Referrals"
              description="Connections to additional community resources, healthcare providers, and support services."
            />
          </div>
        </div>
      </div>
      
      {/* Kentucky-Specific Approach */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Kentucky-Focused Recovery</h2>
              <p className="text-gray-600 mb-4">
                Our programs recognize the unique challenges and strengths of the Kentucky recovery community. We incorporate local resources, cultural considerations, and regional support networks.
              </p>
              <p className="text-gray-600 mb-4">
                We maintain strong relationships with Kentucky treatment providers, court systems, and community organizations to provide comprehensive support for our residents.
              </p>
              <p className="text-gray-600">
                Our approach addresses specific regional challenges while building on the strong sense of community and resilience found throughout Kentucky.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center">
                [Kentucky-Specific Recovery Resources Image Would Appear Here]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Admissions Page with Kentucky-specific Intake Form
const AdmissionsPage = ({ formSubmitted, setFormSubmitted }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };
  
  // Reset form
  const startNewApplication = () => {
    setFormSubmitted(false);
    window.scrollTo(0, 0);
  };
  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl">Begin your journey to recovery with FM Healing.</p>
        </div>
      </div>
      
      {/* Form Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Thank You for Your Application!</h2>
              <p className="text-lg text-gray-700 mb-6">
                Your information has been submitted successfully. A member of our admissions team will contact you within 24 hours to discuss the next steps in the admissions process.
              </p>
              <p className="text-gray-700 mb-8">
                If you have any immediate questions, please don't hesitate to call us at (555) 555-5555.
              </p>
              <button
                onClick={startNewApplication}
                className="bg-blue-700 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-800 transition-colors"
              >
                Start New Application
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Sober Living Intake Form</h2>
                <p className="text-lg text-gray-600">
                  Please complete this form to begin the admissions process. All information provided is confidential.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                      <input type="text" required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                      <input type="text" required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Date of Birth <span className="text-red-500">*</span></label>
                      <input type="date" required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Gender <span className="text-red-500">*</span></label>
                      <select required className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-1">Current Address <span className="text-red-500">*</span></label>
                      <input type="text" required className="w-full p-2 border border-gray-300 rounded-md" placeholder="Street Address" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                      <input type="text" required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
                      <select required className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select</option>
                        <option value="KY" selected>Kentucky</option>
                        <option value="AL">Alabama</option>
                        <option value="OH">Ohio</option>
                        <option value="TN">Tennessee</option>
                        <option value="IN">Indiana</option>
                        <option value="WV">West Virginia</option>
                        <option value="VA">Virginia</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">ZIP Code <span className="text-red-500">*</span></label>
                      <input type="text" required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                
                {/* Emergency Contact */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Contact Name <span className="text-red-500">*</span></label>
                      <input type="text" required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Relationship <span className="text-red-500">*</span></label>
                      <input type="text" required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" required className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Email Address</label>
                      <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                
                {/* Recovery Information */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recovery Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Are you currently in treatment? <span className="text-red-500">*</span></label>
                      <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                          <input type="radio" name="inTreatment" value="yes" className="mr-2" /> Yes
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="inTreatment" value="no" className="mr-2" /> No
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Current Treatment Provider (if applicable)</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Expected Discharge Date (if applicable)</label>
                      <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Primary Substance(s) of Use <span className="text-red-500">*</span></label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Alcohol
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Opioids
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Methamphetamine
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Cocaine
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Marijuana
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Benzodiazepines
                        </label>
                        <label className="flex items-center md:col-span-2">
                          <input type="checkbox" className="mr-2" /> Other
                          <input type="text" className="ml-2 p-1 border border-gray-300 rounded-md" placeholder="Please specify" />
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Length of Sobriety <span className="text-red-500">*</span></label>
                      <select required className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select</option>
                        <option value="less_than_30">Less than 30 days</option>
                        <option value="30_60">30-60 days</option>
                        <option value="60_90">60-90 days</option>
                        <option value="3_6_months">3-6 months</option>
                        <option value="6_plus_months">6+ months</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Have you been in sober living before? <span className="text-red-500">*</span></label>
                      <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                          <input type="radio" name="priorSoberLiving" value="yes" className="mr-2" /> Yes
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="priorSoberLiving" value="no" className="mr-2" /> No
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">If yes, where and when?</label>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md h-20"></textarea>
                    </div>
                  </div>
                </div>
                
                {/* Medical and Mental Health */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Medical and Mental Health</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Do you have any medical conditions we should be aware of? <span className="text-red-500">*</span></label>
                      <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                          <input type="radio" name="medicalConditions" value="yes" className="mr-2" /> Yes
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="medicalConditions" value="no" className="mr-2" /> No
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">If yes, please describe:</label>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md h-20"></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Are you currently taking any medications? <span className="text-red-500">*</span></label>
                      <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                          <input type="radio" name="takingMedications" value="yes" className="mr-2" /> Yes
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="takingMedications" value="no" className="mr-2" /> No
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">If yes, please list medications and dosages:</label>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md h-20" placeholder="Medication, dosage, frequency"></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Have you been diagnosed with any mental health conditions? <span className="text-red-500">*</span></label>
                      <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                          <input type="radio" name="mentalHealthDiagnosis" value="yes" className="mr-2" /> Yes
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="mentalHealthDiagnosis" value="no" className="mr-2" /> No
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">If yes, please specify:</label>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md h-20"></textarea>
                    </div>
                  </div>
                </div>
                
                {/* Kentucky-Specific Section */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Kentucky Recovery Resources</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Are you involved with Kentucky drug court or other court-mandated programs? <span className="text-red-500">*</span></label>
                      <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                          <input type="radio" name="courtInvolvement" value="yes" className="mr-2" /> Yes
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="courtInvolvement" value="no" className="mr-2" /> No
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">If yes, please provide details:</label>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md h-20"></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Are you eligible for or enrolled in Kentucky Medicaid? <span className="text-red-500">*</span></label>
                      <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                          <input type="radio" name="kentuckyMedicaid" value="yes" className="mr-2" /> Yes
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="kentuckyMedicaid" value="no" className="mr-2" /> No
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="kentuckyMedicaid" value="unknown" className="mr-2" /> Unsure
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Are you familiar with or have you utilized any of the following Kentucky recovery resources?</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Kentucky Recovery Network
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Casey's Law
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Kentucky Harm Reduction Program
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Operation UNITE
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Kentucky Recovery Community Center
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" /> Kentucky Agency for Substance Abuse Policy
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Are you interested in obtaining information about additional Kentucky-specific recovery resources?</label>
                      <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                          <input type="radio" name="additionalResources" value="yes" className="mr-2" /> Yes
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="additionalResources" value="no" className="mr-2" /> No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Legal and Financial */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Legal and Financial Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Do you have any pending legal issues? <span className="text-red-500">*</span></label>
                      <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                          <input type="radio" name="legalIssues" value="yes" className="mr-2" /> Yes
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="legalIssues" value="no" className="mr-2" /> No
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">If yes, please provide details:</label>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md h-20"></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Employment Status <span className="text-red-500">*</span></label>
                      <select required className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select</option>
                        <option value="employed_full">Employed Full-Time</option>
                        <option value="employed_part">Employed Part-Time</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="student">Student</option>
                        <option value="disabled">Disabled</option>
                        <option value="retired">Retired</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">If employed, current employer:</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">How do you plan to pay for sober living? <span className="text-red-500">*</span></label>
                      <select required className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select</option>
                        <option value="self_pay">Self-Pay</option>
                        <option value="insurance">Insurance</option>
                        <option value="scholarship">Scholarship/Grant</option>
                        <option value="family">Family Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">If other, please specify:</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                
                {/* Recovery Goals */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recovery Goals</h3>
                  <div>
                    <label className="block text-gray-700 mb-1">What are your primary goals for recovery and sober living? <span className="text-red-500">*</span></label>
                    <textarea required className="w-full p-2 border border-gray-300 rounded-md h-32"></textarea>
                  </div>
                </div>
                
                {/* Acknowledgment */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Acknowledgment and Consent</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-start">
                        <input type="checkbox" required className="mt-1 mr-2" />
                        <span className="text-gray-700">
                          I understand that providing false information may result in disqualification from the program. I consent to the verification of information provided in this form.
                        </span>
                      </label>
                    </div>
                    
                    <div>
                      <label className="flex items-start">
                        <input type="checkbox" required className="mt-1 mr-2" />
                        <span className="text-gray-700">
                          I understand that completion of this form does not guarantee admission to FM Healing Sober Living and that additional screening may be required.
                        </span>
                      </label>
                    </div>
                    
                    <div>
                      <label className="flex items-start">
                        <input type="checkbox" required className="mt-1 mr-2" />
                        <span className="text-gray-700">
                          I consent to FM Healing Sober Living contacting my treatment provider, references, or emergency contacts as part of the admissions process.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-800 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
      
      {/* Admissions Process */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Admissions Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding what to expect when applying to FM Healing Sober Living.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
              
              <div className="space-y-8">
                <ProcessStep
                  number="1"
                  title="Initial Application"
                  description="Complete and submit the intake form with your personal information and recovery details."
                />
                
                <ProcessStep
                  number="2"
                  title="Phone Screening"
                  description="A member of our admissions team will contact you to discuss your application and answer any questions."
                />
                
                <ProcessStep
                  number="3"
                  title="Assessment Interview"
                  description="An in-depth interview to determine if our program is a good fit for your recovery needs."
                />
                
                <ProcessStep
                  number="4"
                  title="Financial Arrangements"
                  description="We'll discuss program costs, payment options, and any available financial assistance."
                />
                
                <ProcessStep
                  number="5"
                  title="Arrival and Orientation"
                  description="Upon acceptance, we'll coordinate your arrival date and conduct a thorough orientation to our community and program."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">We're here to answer your questions about FM Healing Sober Living.</p>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <ContactInfoItem
                  icon={<Phone size={24} className="text-blue-700" />}
                  title="Phone"
                  info="(555) 555-5555"
                  linkHref="tel:+15555555555"
                />
                
                <ContactInfoItem
                  icon={<Mail size={24} className="text-blue-700" />}
                  title="Email"
                  info="info@fmhealing.org"
                  linkHref="mailto:info@fmhealing.org"
                />
                
                <ContactInfoItem
                  icon={<MapPin size={24} className="text-blue-700" />}
                  title="Address"
                  info="123 Recovery Rd, Lexington, KY 40507"
                  linkHref="https://maps.google.com/?q=123+Recovery+Rd,+Lexington,+KY+40507"
                />
                
                <ContactInfoItem
                  icon={<Clock size={24} className="text-blue-700" />}
                  title="Hours"
                  info="Office: Mon-Fri, 9am-5pm | Admissions: 24/7"
                />
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <SocialLink><Facebook size={20} /></SocialLink>
                  <SocialLink><Twitter size={20} /></SocialLink>
                  <SocialLink><Instagram size={20} /></SocialLink>
                  <SocialLink><Youtube size={20} /></SocialLink>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
                  <input type="text" required className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" required className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Subject <span className="text-red-500">*</span></label>
                  <select required className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="program">Program Information</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="billing">Billing/Financial</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                  <textarea required className="w-full p-2 border border-gray-300 rounded-md h-32"></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="bg-blue-700 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-800 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600">
              Conveniently located in Lexington, Kentucky with easy access to public transportation.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-gray-200 h-96 rounded-md flex items-center justify-center">
              [Interactive Google Map Would Appear Here]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Resources Page
const ResourcesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Recovery Resources</h1>
          <p className="text-xl max-w-3xl">Helpful information and links for your recovery journey.</p>
        </div>
      </div>
      
      {/* Kentucky Resources */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kentucky Recovery Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local organizations and services to support your recovery in Kentucky.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResourceCard
              title="Kentucky Recovery Network"
              description="A statewide organization connecting individuals to recovery resources across Kentucky."
              link="#"
            />
            <ResourceCard
              title="Lexington Recovery Community Center"
              description="Peer-led recovery support services in the heart of Lexington."
              link="#"
            />
            <ResourceCard
              title="Kentucky Harm Reduction Coalition"
              description="Resources for harm reduction, including naloxone training and distribution."
              link="#"
            />
            <ResourceCard
              title="Operation UNITE"
              description="Substance use prevention, treatment, and law enforcement resources for eastern Kentucky."
              link="#"
            />
            <ResourceCard
              title="Kentucky Office of Drug Control Policy"
              description="State-level information on substance use treatment and prevention initiatives."
              link="#"
            />
            <ResourceCard
              title="Casey's Law Information"
              description="Resources for families seeking involuntary treatment for loved ones under Kentucky law."
              link="#"
            />
          </div>
        </div>
      </div>
      
      {/* National Resources */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">National Recovery Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Organizations providing support and information nationwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              title="SAMHSA's National Helpline"
              description="1-800-662-HELP (4357) - Free, confidential, 24/7 treatment referral and information service."
              link="#"
            />
            <ResourceCard
              title="Narcotics Anonymous"
              description="12-step recovery program for people with substance use disorders."
              link="#"
            />
            <ResourceCard
              title="Alcoholics Anonymous"
              description="Fellowship of individuals recovering from alcoholism through the 12-step program."
              link="#"
            />
            <ResourceCard
              title="National Institute on Drug Abuse"
              description="Research-based information on substance use disorders and treatment."
              link="#"
            />
            <ResourceCard
              title="Faces & Voices of Recovery"
              description="National advocacy organization for individuals in recovery."
              link="#"
            />
            <ResourceCard
              title="Smart Recovery"
              description="Science-based mutual support program for recovery from addiction."
              link="#"
            />
          </div>
        </div>
      </div>
      
      {/* Educational Resources */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Educational Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Information to help you understand addiction and recovery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard
              title="Understanding the Science of Addiction"
              excerpt="Learn about how substance use disorders affect the brain and body."
              link="#"
            />
            <ArticleCard
              title="Building a Recovery Support Network"
              excerpt="Tips for creating a strong support system in early recovery."
              link="#"
            />
            <ArticleCard
              title="Relapse Prevention Strategies"
              excerpt="Practical techniques to identify triggers and prevent relapse."
              link="#"
            />
            <ArticleCard
              title="Nutrition and Exercise in Recovery"
              excerpt="How physical wellness supports mental health in recovery."
              link="#"
            />
            <ArticleCard
              title="Mindfulness Practices for Recovery"
              excerpt="Using meditation and mindfulness to manage cravings and stress."
              link="#"
            />
            <ArticleCard
              title="Rebuilding Relationships in Recovery"
              excerpt="Steps to heal and strengthen personal relationships affected by addiction."
              link="#"
            />
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about sober living and recovery.
            </p>
          </div>
          
          <div className="space-y-6">
            <FAQItem
              question="What is sober living?"
              answer="Sober living is a type of transitional housing that provides a structured, supportive, and substance-free environment for individuals in recovery from addiction. Unlike inpatient treatment, residents have more independence while still benefiting from accountability and peer support."
            />
            <FAQItem
              question="How long do residents typically stay at FM Healing?"
              answer="The length of stay varies based on individual needs and progress. Our program is designed to accommodate stays from 3 months to a year, with most residents staying 6-9 months as they progress through our phased program."
            />
            <FAQItem
              question="What are the house rules?"
              answer="Our house rules include maintaining complete abstinence from drugs and alcohol, participating in recovery meetings, submitting to random drug and alcohol screening, following curfew, completing assigned chores, and treating fellow residents and staff with respect."
            />
            <FAQItem
              question="Is insurance accepted?"
              answer="Most insurance plans do not cover sober living directly. However, we can provide documentation for potential reimbursement, and we offer affordable self-pay rates. We also work with some Kentucky-specific programs that may provide financial assistance."
            />
            <FAQItem
              question="Can I work or attend school while living at FM Healing?"
              answer="Yes, we encourage residents to work or attend school. Employment or educational engagement is required after the initial phase of the program, and we provide support in finding opportunities that align with your recovery goals."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Component Library

// Feature Card Component
const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ name, duration, quote }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <div>
      <p className="font-bold text-gray-800">{name}</p>
      <p className="text-gray-500 text-sm">{duration}</p>
    </div>
  </div>
);

// Value Card Component
const ValueCard = ({ title, description }) => (
  <div className="bg-white p-5 rounded-lg shadow-md text-center">
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Team Member Card Component
const TeamMemberCard = ({ name, title, bio }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
      [Photo]
    </div>
    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
    <p className="text-blue-700 font-medium mb-3">{title}</p>
    <p className="text-gray-600">{bio}</p>
  </div>
);

// Program Card Component
const ProgramCard = ({ title, duration, description, features }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex flex-col md:flex-row md:items-start gap-4">
      <div className="md:w-2/3">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-blue-700 font-medium mb-3">{duration}</p>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="md:w-1/3">
        <h4 className="font-bold text-gray-700 mb-2">Key Components:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-700 mr-2">•</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Service Card Component
const ServiceCard = ({ title, description }) => (
  <div className="bg-white p-5 rounded-lg shadow-md">
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Process Step Component
const ProcessStep = ({ number, title, description }) => (
  <div className="flex items-start relative">
    <div className="flex-shrink-0 z-10">
      <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>
    </div>
    <div className="ml-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Contact Info Item Component
const ContactInfoItem = ({ icon, title, info, linkHref }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div className="ml-4">
      <h3 className="font-bold text-gray-800">{title}</h3>
      {linkHref ? (
        <a href={linkHref} className="text-blue-700 hover:text-blue-900">{info}</a>
      ) : (
        <p className="text-gray-600">{info}</p>
      )}
    </div>
  </div>
);

// Social Link Component
const SocialLink = ({ children }) => (
  <a href="#" className="bg-blue-100 text-blue-700 p-2 rounded-full hover:bg-blue-700 hover:text-white transition-colors">
    {children}
  </a>
);

// Resource Card Component
const ResourceCard = ({ title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href={link} className="text-blue-700 font-medium hover:text-blue-900 flex items-center">
      Visit Website <ChevronRight size={16} className="ml-1" />
    </a>
  </div>
);

// Article Card Component
const ArticleCard = ({ title, excerpt, link }) => (
  <div className="bg-white p-5 rounded-lg shadow-md">
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-3">{excerpt}</p>
    <a href={link} className="text-blue-700 font-medium hover:text-blue-900 flex items-center">
      Read More <ChevronRight size={16} className="ml-1" />
    </a>
  </div>
);

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold text-gray-800">{question}</h3>
        <span className={`transition-transform transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronRight size={20} className="text-blue-700" />
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-3">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};
