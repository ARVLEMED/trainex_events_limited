// App.tsx
// App.tsx - Fix the import section (line 1-15)
import { 
  Calendar, MapPin, Users, Target, Globe, Award, Briefcase, 
  Handshake, CheckCircle, Mail, 
  Phone, ChevronRight, 
  Sparkles, TrendingUp, Shield, Star, Building, 
  Trophy, Eye, Rocket, BarChart3, Gem, Crown,
  Link, Share2, MessageCircle
} from 'lucide-react';
import { useEffect, useState } from 'react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>Trainex</h1>
              <p className={`text-xs ${scrolled ? 'text-gray-500' : 'text-blue-200'}`}>Events Limited</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            {['Home', 'Services', 'Expertise', 'Portfolio', 'Contact'].map(item => (
              <a key={item} href="#" className={`${scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'} transition font-medium`}>{item}</a>
            ))}
          </div>
          <button className={`hidden md:block px-6 py-2 rounded-full font-semibold transition-all duration-300 ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' : 'bg-white text-blue-600 hover:bg-blue-50'} `}>
            Partner With Us
          </button>
        </div>
      </nav>

      {/* Hero Section - Master Level */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C3F] via-[#1A2B5E] to-[#0F766E]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-32 z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm font-medium">Africa's Premier Strategic Events Partner</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Trainex <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Events Limited</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-4 font-light">Strategic Events & Global Engagements</p>
            <p className="text-xl text-blue-200/90 max-w-3xl mx-auto mb-8">
              Connecting Institutions, Markets, and Global Opportunities
            </p>
            
            <div className="flex items-center justify-center gap-2 text-blue-200 mb-12">
              <MapPin className="w-5 h-5" />
              <span>Gigiri, Village Market - Nairobi, Kenya</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Plan Your Event <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Global Events", icon: <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "45+", label: "Countries Served", icon: <Globe className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "100%", label: "Client Satisfaction", icon: <Star className="w-6 h-6 mx-auto mb-2 text-blue-600" /> },
              { number: "12+", label: "Years Excellence", icon: <Trophy className="w-6 h-6 mx-auto mb-2 text-blue-600" /> }
            ].map((stat, idx) => (
              <div key={idx} className="group hover:scale-105 transition">
                {stat.icon}
                <div className="text-2xl md:text-3xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
              <Gem className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold">Your Trusted Partner</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Strategic Engagements That<span className="text-blue-600"> Transform</span></h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              We are a professional events management and strategic engagement company specializing in the conceptualization, planning, and execution of high-level conferences, diplomatic engagements, corporate forums, exhibitions, and investment platforms.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our experienced team delivers strategically aligned, outcome-driven events while maintaining the highest standards of professionalism and discretion. We connect governments, embassies, corporates, investors, and international institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Premium Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border border-gray-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be a leading events and strategic engagement company in Africa, recognized for delivering world-class conferences and platforms that connect institutions, markets, and global opportunities.
                </p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border border-gray-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To professionally design and deliver impactful events and strategic platforms that facilitate dialogue, investment promotion, trade development, knowledge exchange, and cross-border collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Premium Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
              <Crown className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Core Values That<span className="text-blue-600"> Drive Excellence</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide our every engagement</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Professionalism", desc: "Excellence in planning, execution, and delivery", icon: <Briefcase className="w-8 h-8" />, color: "from-blue-500 to-blue-600" },
              { title: "Integrity", desc: "Transparency, accountability, and trust", icon: <Handshake className="w-8 h-8" />, color: "from-emerald-500 to-emerald-600" },
              { title: "Excellence", desc: "Commitment to high standards", icon: <Award className="w-8 h-8" />, color: "from-purple-500 to-purple-600" },
              { title: "Collaboration", desc: "Strong partnerships and stakeholder alignment", icon: <Users className="w-8 h-8" />, color: "from-orange-500 to-orange-600" },
              { title: "Impact", desc: "Platforms that create long-term value", icon: <Target className="w-8 h-8" />, color: "from-red-500 to-red-600" }
            ].map((value, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition duration-300`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition`}>
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">World-Class<span className="text-blue-600"> Conference Delivery</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every conference is executed with precision, ensuring seamless coordination of complex multi-stakeholder engagements.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Conference concept development and programme design",
              "Speaker, moderator and VIP coordination",
              "Delegate registration and management systems",
              "Venue sourcing and comprehensive logistics",
              "Professional branding, stage design and signage",
              "Audio-visual, interpretation and technical support",
              "Protocol, security and access coordination",
              "Post-event reporting and impact evaluation"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diplomatic Expertise - Premium Feature */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-sm font-semibold">Diplomatic Excellence</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Diplomatic &<span className="text-blue-600"> Embassy-Led Engagements</span></h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Embassy-hosted business and investment forums",
                  "Bilateral and multilateral dialogues",
                  "Trade missions and official delegations",
                  "National day receptions and official diplomatic events",
                  "Protocol-sensitive closed-door meetings"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start group">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-blue-200 transition">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-blue-600">
                <p className="text-gray-700 italic text-lg">
                  "Our deep understanding of international standards and diplomatic protocol ensures every engagement is executed with credibility and precision."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <Building className="w-20 h-20 mx-auto mb-6 opacity-80" />
                  <p className="text-xl font-semibold mb-2">Trusted by:</p>
                  <p className="text-2xl font-bold">Embassies, High Commissions</p>
                  <p className="text-lg opacity-90">and International Organizations</p>
                  <div className="mt-8 flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">45+</div>
                      <div className="text-sm opacity-80">Diplomatic Missions</div>
                    </div>
                    <div className="w-px bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">100+</div>
                      <div className="text-sm opacity-80">Official Events</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate & Trade Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Connecting Corporate Leaders</h3>
              <p className="text-blue-600 font-semibold mb-3 text-lg">Corporate & Business Forums</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-blue-600" /> Corporate conferences and annual meetings</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-blue-600" /> Industry-specific forums and roundtables</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-blue-600" /> Leadership dialogues and executive briefings</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-blue-600" /> Investor and stakeholder engagement platforms</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Enabling Trade and Investment</h3>
              <p className="text-emerald-600 font-semibold mb-3 text-lg">Exhibitions, Trade & Investment Platforms</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-600" /> Trade exhibitions and expos</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-600" /> Investment showcases & Product launches</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-600" /> B2B and B2C matchmaking platforms</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-600" /> Public-Private Partnership (PPP) forums</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-600" /> Investor-government engagement platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold">Our Methodology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">A Seamless<span className="text-blue-600"> 5-Step Process</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From concept to impact - we deliver excellence at every stage</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200 transform -translate-y-1/2"></div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Strategic Concept", desc: "Aligning events with client objectives", icon: <Target /> },
                { step: "02", title: "Stakeholder Mapping", desc: "Identifying key participants", icon: <Users /> },
                { step: "03", title: "Planning & Logistics", desc: "Comprehensive operational planning", icon: <Calendar /> },
                { step: "04", title: "Professional Execution", desc: "Flawless on-the-ground delivery", icon: <CheckCircle /> },
                { step: "05", title: "Impact Assessment", desc: "Post-event reporting & outcomes", icon: <BarChart3 /> }
              ].map((item, i) => (
                <div key={i} className="relative z-10 text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition duration-300 group-hover:shadow-2xl">
                    <div className="text-2xl font-bold">{item.step}</div>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition">
                    <div className="w-6 h-6 text-blue-600">{item.icon}</div>
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted By<span className="text-blue-600"> Industry Leaders</span></h2>
            <p className="text-xl text-gray-600">Our strong stakeholder networks enable us to connect organizations across sectors and borders.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Embassies & High Commissions", icon: <Building />, color: "from-blue-500 to-blue-600" },
              { name: "Investors & Business Associations", icon: <TrendingUp />, color: "from-emerald-500 to-emerald-600" },
              { name: "Government Ministries", icon: <Shield />, color: "from-purple-500 to-purple-600" },
              { name: "International Institutions", icon: <Globe />, color: "from-orange-500 to-orange-600" },
              { name: "Corporate Organizations", icon: <Briefcase />, color: "from-red-500 to-red-600" }
            ].map((partner, i) => (
              <div key={i} className="group bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition`}>
                  {partner.icon}
                </div>
                <p className="font-semibold text-gray-800">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Your<span className="text-blue-600"> Strategic Advantage</span></h2>
            <p className="text-xl text-gray-600">Why choose Trainex for your next engagement</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Proven Experience", desc: "Track record in international and regional events", icon: <Trophy />, color: "from-yellow-500 to-orange-500" },
              { title: "Diplomatic Expertise", desc: "Deep understanding of diplomatic & corporate environments", icon: <Shield />, color: "from-blue-500 to-indigo-500" },
              { title: "Professional Excellence", desc: "Reliable, detail-oriented execution", icon: <Award />, color: "from-purple-500 to-pink-500" },
              { title: "Strong Networks", desc: "Extensive stakeholder and partner relationships", icon: <Users />, color: "from-green-500 to-emerald-500" },
              { title: "Customized Solutions", desc: "Tailor-made approaches aligned with your objectives", icon: <Gem />, color: "from-red-500 to-orange-500" },
              { title: "Strategic Location", desc: "Based in Gigiri, Village Market, proximity to embassies and UN offices", icon: <MapPin />, color: "from-teal-500 to-cyan-500" }
            ].map((adv, i) => (
              <div key={i} className="group flex gap-4 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className={`w-14 h-14 bg-gradient-to-br ${adv.color} rounded-xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition`}>
                  {adv.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-1">{adv.title}</h4>
                  <p className="text-sm text-gray-500">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Engagements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-semibold">2025 Portfolio</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent<span className="text-blue-600"> International Engagements</span></h2>
            <p className="text-xl text-gray-600">Global events that demonstrate our expertise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Uganda-Polish 2025 Mining Conference", date: "2025", desc: "Facilitated bilateral cooperation and investment discussions between government representatives and mining stakeholders. Managed full logistics and B2B engagement sessions.", icon: <Briefcase /> },
              { title: "INDONEX Event 2025", date: "2025", desc: "International Trade Platform - Supported international exhibitors and business delegations. Delivered a professionally structured networking platform.", icon: <Globe /> },
              { title: "Thailand B2B Business Forum", date: "2025", desc: "Strategic Matchmaking - Facilitated structured B2B meetings between Thai companies and regional partners, creating a professional environment for trade discussions.", icon: <Handshake /> }
            ].map((event, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                  {event.icon}
                  <p className="text-sm opacity-80 mt-2">{event.date}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <Crown className="w-16 h-16 mx-auto mb-6 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Promise to You</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12">
            Every engagement is an investment in your organization's success. We are committed to delivering events that create measurable, long-term value.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Professionally Executed", desc: "Highest standards of planning, logistics, and on-the-ground delivery.", icon: <Briefcase /> },
              { title: "Strategically Relevant", desc: "Aligned strictly with your organizational objectives and vision.", icon: <Target /> },
              { title: "Outcome Driven", desc: "Focused on generating measurable results and tangible impact.", icon: <BarChart3 /> },
              { title: "Value Creating", desc: "Building long-term relationships and opening new opportunities.", icon: <Gem /> }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">T</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Trainex Events Limited</h3>
                  <p className="text-blue-300">Strategic Events & Global Engagements</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Connecting Institutions, Markets, and Global Opportunities through world-class events and strategic engagements.
              </p>
              <div className="flex gap-4">
        <div className="flex gap-4">
  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
    <Link className="w-5 h-5" />
  </a>
  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
    <Share2 className="w-5 h-5" />
  </a>
  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
    <MessageCircle className="w-5 h-5" />
  </a>
</div>
</div>
    </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Our Services</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex gap-2 items-start">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Gigiri, Village Market, Nairobi, Kenya</span>
                </div>
                <div className="flex gap-2">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>trainexevents@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>+254 780 722 112</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Arvlemed. All rights reserved.</p>
            <p className="text-sm mt-1">Premium Strategic Events Management</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;