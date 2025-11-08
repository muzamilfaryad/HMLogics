import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, Phone, MapPin, ArrowRight, Code, Database, 
  Palette, TrendingUp, ChevronDown, Globe, Award, Users, 
  Briefcase, Clock, CheckCircle, Star, Linkedin, Github,
  Twitter, ExternalLink, ArrowUp
} from 'lucide-react';

const HMLogicsPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Select a service',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitToWhatsApp = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Message:* ${formData.message}`;
    
    // WhatsApp URL - using your existing WhatsApp link structure
    // Replace with your actual WhatsApp number in format: 1234567890 (country code + number)
    const whatsappURL = `https://wa.me/message/RVOEO7OMWGBZA1?text=${message}`;
    
    // Open WhatsApp in new window
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: 'Select a service',
      message: ''
    });
  };

  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science & Analytics",
      description: "Advanced data analysis, machine learning models, and predictive analytics to drive business insights and decision-making.",
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics", "Business Intelligence"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Custom software solutions, web applications, and mobile apps built with cutting-edge technologies and best practices.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Solutions"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive engagement across all digital platforms.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your brand, reach your audience, and maximize ROI across digital channels.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "PPC Campaigns"]
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution with advanced analytics",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "AI Analytics Dashboard",
      category: "Data Science",
      description: "Real-time business intelligence dashboard",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "TensorFlow", "D3.js"]
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure banking application for iOS and Android",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Stripe"]
    }
  ];

  const team = [
    {
      name: "M. Huzaifa Khilji",
      role: "Co-Founder & Data Scientist",
      description: "Expert in machine learning, data analytics, and AI-driven solutions with 5+ years of experience.",
      gradient: "from-blue-500 to-teal-500",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Muhammad Muzamil Faryad",
      role: "Co-Founder & Software Engineer",
      location: "Singapore",
      description: "Specialized in full-stack development and scalable architecture with expertise in cloud technologies.",
      gradient: "from-teal-500 to-blue-500",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Abdul Hadi K.",
      role: "Sales & Marketing Head",
      description: "Driving business growth through strategic marketing and client relations with proven track record.",
      gradient: "from-blue-600 to-indigo-600",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Taha K.",
      role: "Graphic Designer",
      description: "Creating stunning visual identities and brand experiences that resonate with target audiences.",
      gradient: "from-indigo-600 to-purple-600",
      social: { linkedin: "#", behance: "#" }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "HMLogics delivered an exceptional data analytics platform that transformed our business intelligence capabilities.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "StartUp Ventures",
      role: "Founder",
      content: "Their team's expertise in React and Node.js helped us build a scalable product that exceeded our expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Global Retail",
      role: "Marketing Director",
      content: "The digital marketing strategy implemented by HMLogics increased our online engagement by 300% in just 3 months.",
      rating: 5
    }
  ];

  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, number: "50+", label: "Projects Completed" },
    { icon: <Users className="w-6 h-6" />, number: "30+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "15+", label: "Awards Won" },
    { icon: <Clock className="w-6 h-6" />, number: "10k+", label: "Hours of Work" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Enhanced Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect backdrop-blur-xl shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <h1 className={`text-3xl font-bold gradient-text transition-all duration-300 ${isScrolled ? 'scale-95' : 'scale-100'}`}>
                  HMLogics
                </h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex space-x-8">
                {['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize font-bold transition-all duration-300 relative py-2 ${
                      activeSection === item
                        ? 'text-primary-600'
                        : isScrolled
                        ? 'text-gray-700 hover:text-primary-600'
                        : 'text-gray-800 hover:text-primary-600'
                    }`}
                  >
                    {item}
                    {activeSection === item && (
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-ripple px-8 py-3 bg-gradient-primary text-white rounded-2xl font-bold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Start Project
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-2xl transition-all ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-effect backdrop-blur-xl shadow-2xl border-t-2 border-white/50">
            <div className="px-4 py-4 space-y-2">
              {['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-6 py-4 capitalize font-bold text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 rounded-2xl transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-teal-50 opacity-60"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-300 to-secondary-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-glow">
                <Globe className="w-4 h-4" />
                Global Technology Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Transforming Ideas Into
              <br />
              <span className="shimmer text-6xl md:text-8xl">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              We are a team of innovators, developers, and designers dedicated to delivering cutting-edge technology solutions that drive business growth and digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-ripple group px-10 py-5 bg-gradient-primary text-white rounded-2xl font-bold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                Start Your Project
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-ripple px-10 py-5 glass-effect backdrop-blur-lg text-gray-900 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 border-2 border-white flex items-center gap-3"
              >
                View Our Work
                <ExternalLink className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Enhanced Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const gradients = ['from-primary-500 to-accent-500', 'from-secondary-500 to-teal-500', 'from-sunset-500 to-accent-500', 'from-accent-500 to-primary-500'];
              return (
                <div key={index} className="card-glow hover-lift text-center p-8 glass-effect backdrop-blur-lg rounded-3xl border-2 border-white shadow-xl">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-20 animate-bounce">
            <ChevronDown className="w-10 h-10 text-primary-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary-200 to-teal-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold">
                About <span className="gradient-text-cool">HMLogics</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                HMLogics is a forward-thinking technology company specializing in data science, software engineering, and digital solutions. Founded by industry experts with a passion for innovation, we combine technical excellence with creative problem-solving.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team brings together diverse expertise from data science, software development, design, and marketing to deliver comprehensive solutions that exceed expectations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Custom Software Development",
                  "Data Science & AI Solutions",
                  "UI/UX Design & Prototyping",
                  "Digital Marketing Strategy",
                  "Cloud Infrastructure",
                  "Mobile App Development"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100 hover:shadow-lg transition-all">
                    <CheckCircle className="w-6 h-6 text-secondary-500 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-400 to-accent-500 rounded-3xl transform rotate-3 shadow-2xl"></div>
              <div className="relative glass-effect backdrop-blur-lg p-10 rounded-3xl shadow-2xl border-2 border-white">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text-cool">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    To be a global leader in technology solutions, recognized for excellence, innovation, and the transformative impact we create for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const cardStyles = [
                { gradient: 'from-primary-500 to-accent-500', bgGradient: 'from-primary-50 to-accent-50', glowClass: 'card-glow' },
                { gradient: 'from-secondary-500 to-teal-500', bgGradient: 'from-secondary-50 to-teal-50', glowClass: 'card-glow-cool' },
                { gradient: 'from-sunset-500 to-accent-500', bgGradient: 'from-sunset-50 to-accent-50', glowClass: 'card-glow-warm' },
                { gradient: 'from-accent-500 to-primary-500', bgGradient: 'from-accent-50 to-primary-50', glowClass: 'card-glow' }
              ];
              const style = cardStyles[index];
              
              return (
                <div
                  key={index}
                  className={`group ${style.glowClass} hover-lift bg-gradient-to-br ${style.bgGradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${style.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0 shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-5 font-medium">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="gradient-text-cool">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Explore our latest projects and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => {
              const gradients = [
                'from-primary-500 via-accent-400 to-accent-500',
                'from-secondary-500 via-teal-400 to-teal-500',
                'from-sunset-500 via-accent-400 to-accent-500'
              ];
              
              return (
                <div
                  key={index}
                  className="group card-glow-cool hover-lift bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100"
                >
                  <div className={`h-56 bg-gradient-to-br ${gradients[index]} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ExternalLink className="w-4 h-4 text-primary-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg text-xs font-semibold hover:shadow-md transition-shadow">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sunset-200 to-accent-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Meet Our <span className="gradient-text-warm">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Talented professionals dedicated to delivering excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => {
              const avatarGradients = [
                'from-primary-400 via-accent-400 to-accent-500',
                'from-secondary-400 via-teal-400 to-teal-500',
                'from-primary-500 via-accent-500 to-sunset-500',
                'from-accent-400 via-sunset-400 to-sunset-500'
              ];
              
              return (
                <div
                  key={index}
                  className="group card-glow-warm hover-lift bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100"
                >
                  <div className={`h-32 bg-gradient-to-br ${avatarGradients[index]} relative`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  </div>
                  <div className="px-6 pb-6 relative">
                    <div className={`w-24 h-24 bg-gradient-to-br ${avatarGradients[index]} rounded-2xl -mt-12 mx-auto shadow-xl border-4 border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}></div>
                    <h3 className="text-lg font-bold text-gray-900 text-center mt-4 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-bold text-center text-sm mb-2">{member.role}</p>
                    {member.location && (
                      <p className="text-xs text-gray-500 text-center mb-3 flex items-center justify-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {member.location}
                      </p>
                    )}
                    <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">{member.description}</p>
                    
                    <div className="flex justify-center space-x-2">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="p-2.5 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl hover:from-primary-500 hover:to-accent-500 text-primary-600 hover:text-white transition-all group/icon">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="p-2.5 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:from-gray-700 hover:to-gray-800 text-gray-600 hover:text-white transition-all">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="p-2.5 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:from-blue-400 hover:to-blue-500 text-blue-600 hover:text-white transition-all">
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Client <span className="shimmer-cool">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const cardGradients = [
                'from-primary-50 to-accent-50',
                'from-secondary-50 to-teal-50',
                'from-sunset-50 to-accent-50'
              ];
              
              return (
                <div key={index} className={`card-glow hover-lift bg-gradient-to-br ${cardGradients[index]} p-8 rounded-3xl shadow-xl border-2 border-white transition-all duration-500`}>
                  <div className="flex mb-5 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 text-lg leading-relaxed font-medium">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Ready to start your next project? Let's discuss how we can help you achieve your goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="card-glow hover-lift glass-effect backdrop-blur-lg p-6 rounded-3xl border-2 border-white shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700 font-medium">info@hmlogics.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="card-glow-warm hover-lift glass-effect backdrop-blur-lg p-6 rounded-3xl border-2 border-white shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-teal-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/message/RVOEO7OMWGBZA1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-bold flex items-center gap-2 transition-colors"
                    >
                      Chat with us on WhatsApp
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-glow-cool hover-lift glass-effect backdrop-blur-lg p-6 rounded-3xl border-2 border-white shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sunset-500 to-accent-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Global Presence</h3>
                    <p className="text-gray-700 font-medium">Pakistan & Singapore</p>
                    <p className="text-sm text-gray-500 mt-1">Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-primary p-8 rounded-3xl text-white shadow-glow-lg">
                <h3 className="text-2xl font-bold mb-4">Why Choose HMLogics?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">Expert team with proven track record</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">Competitive pricing & flexible engagement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">Ongoing support & maintenance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">Cutting-edge technology solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-glow bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold gradient-text mb-8">Let's Start a Conversation</h3>
              <form onSubmit={handleSubmitToWhatsApp} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">What's your name?</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">What service are you interested in?</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium">
                    <option>Select a service</option>
                    <option>Data Science & Analytics</option>
                    <option>Software Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tell us about your project</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none font-medium"
                    placeholder="Describe your project requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-ripple w-full px-10 py-5 bg-gradient-primary text-white rounded-2xl font-bold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  Send Message
                  <ArrowRight className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                HMLogics
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Transforming ideas into digital reality through innovative technology solutions and expert craftsmanship.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-400 hover:text-white transition-colors capitalize"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/message/RVOEO7OMWGBZA1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@hmlogics.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HMLogics. All rights reserved. Built with excellence.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}} />
    </div>
  );
};

export default HMLogicsPortfolio;