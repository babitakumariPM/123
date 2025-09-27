import React, { useState } from 'react';
import { Phone, Mail, MapPin, Award, Shield, Scale, Users, Star, Menu, X, CheckCircle } from 'lucide-react';

import bg3 from '../src/images/bg-3.png'; // Ensure this path is correct
import profile from '../src/images/profile.jpg'; // Ensure this path is correct
import photo1 from '../src/images/image2.jpg'; // Update with actual path
import photo2 from '../src/images/image3.png'; // Update with actual path
import photo3 from '../src/images/image4.jpg'; // Update with actual path
import photo4 from '../src/images/Civil.jpg'; // Update with actual path
import photo5 from '../src/images/cr.matters.jpg';
import photo6 from '../src/images/Cop..jpg';
import photo7 from '../src/images/image.jpg.jpg'; // Update with actual path
import photo8 from '../src/images/tax.jpeg'; // Update with actual path
import photo9 from '../src/images/l&E.jpeg'; // Update with actual path
import photo10 from '../src/images/real&con.jpg'; // Update with actual path
import photo11 from '../src/images/banking.jpeg'; // Update with actual path 
import photo12 from '../src/images/cyber.jpg'; // Update with actual path
import photo13 from '../src/images/med..jpg'; // Update with actual path
import photo14 from '../src/images/sport.jpg'; // Update with actual path
import photo15 from '../src/images/nri.jpg'; // Update with actual path     
import photo16 from '../src/images/freeforpoor.jpg'; // Update with actual path
import profile2 from '../src/images/profile2.jpg'; // Ensure this path is correct
import speaker from '../src/images/publicSpeaking.jpg'; // Ensure this path is correct

const PointToPointConsultancy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Advice for Civil Matters",
      description: "- Property Disputes\n- Family Matters (Divorce, Maintenance, Custody)\n- Succession & Inheritance\n- Tort Cases (Defamation, Negligence)",
    },
    {
      title: "Advice for Criminal Matters",
      description: "- Complaints and FIRs\n- Arrest and Detention\n- Bail Matters",
    },
    {
      title: "Advice for Corporate & Commercial Matters",
      description: "- Company Formation & Compliance\n- Mergers & Acquisitions (M&A)\n- Insolvency & Bankruptcy (IBC)\n- Corporate Governance\n- FEMA & FDI Regulations",
    },
    {
      title: "Advice for Constitutional & Administrative Matters",
      description: "- Fundamental Rights Violations\n- Public Interest Litigation (PIL)\n- Service Matters",
    },
    {
      title: "Advice for Tax Matters",
      description: "- Income Tax \n- GST",
    },
    {
      title: "Advice for Labour & Employment Matters",
      description: "- Employee Rights & Disputes\n- Industrial Disputes Act Cases\n- Sexual Harassment (POSH Compliance)",
    },
    {
      title: "Advice for Real Estate & Construction Matters",
      description: "- RERA Compliance & Disputes\n- Land Acquisition\n- Builder-Buyer Agreements",
    },
    {
      title: "Advice for Banking & Finance Matters",
      description: "- Loan Recovery (SARFAESI, DRT)\n- RBI Compliance",
    },
    {
      title: "Advice for Cyber Matters & Data Protection",
      description: "- IT Act Compliance\n- Data Privacy",
    },
    {
      title: "Advice for Medical & Healthcare Matters",
      description: "- Medical Negligence Cases",
    },
    {
      title: "Advice for Sports Matters",
      description: "- Player Contracts\n- Doping & Dispute Resolution",
    },
    {
      title: "NRI Legal Support",
      description: "Specialized legal assistance for Non-Resident Indians with no consultation fees.",
    },
    {
      title: "Free for Poor",
      description: "Completely free legal consultation and support for economically disadvantaged individuals.",
    },
  ];

  const achievements = [
    "Retired as Additional Deputy Commissioner of Police",
    "President Police Medal (2006) recipient",
    "Honored by former President APJ Abdul Kalam",
    "40+ years of dedicated service",
    "Expert in criminal and civil law",
    "Specialized in NRI legal matters",
  ];

  const aboutSatishMalhotra = (
    <div>
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 18,
          margin: '24px 0'
        }}>
          <img
            src={profile2}
            alt="Satish Malhotra"
            style={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #1e3a8a',
              boxShadow: '0 4px 16px rgba(30,58,138,0.12)'
            }}
          />
         
        </div>
      <h3 style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: 8, textAlign: 'center' }}>
        About Satish Malhotra
      </h3>
      <div style={{ fontSize: '1.05rem', color: '#374151' }}>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.15rem', display: 'block', textAlign: 'center', marginBottom: 12 }}>
          A Legacy of Service, Justice & Humanity
        </span>
        <b>Humble Beginnings</b><br />
        Satish Malhotra Ji was born in the sacred village of Hambowal (Bet), a land graced by the
        touch of the feet of Shri Guru Gobind Singh Ji. Nestled along the banks of the River Sutlej,
        this land also has a proud history as Shri Guru Gobind Singh Ji conveyed his message to his
        beloved friend through poetry in the forest of this land. Inspired by this divine connection,
        Mr. Malhotra's life journey has been guided by the values of humility, justice, and selfless
        service.
        <br /><br />
        <b>Educational Path</b><br />
        • Early education in Hambowal and Machhiwara<br />
        • Higher studies at Arya College, Ludhiana<br />
        • Graduation from Punjabi University, Patiala<br />
        • LLB from Dehradun (with official permission during service)<br />
        • Taking special interest in sports, Mr. Satish Malhotra reached the post of Additional Deputy Commissioner of Police during his service.
        <br /><br />
        <b>A Decorated Police Career</b><br />
        Over a 40-year illustrious career, taking special interest in sports, Mr. Malhotra promoted to
        the rank of Additional Deputy Commissioner of Police (ADCP). Known for his dedication and
        integrity, he:<br />
        • Was honoured with the President’s Police Medal for Meritorious Service in 2006 by Dr. A.P.J. Abdul Kalam<br />
        • Received D.G.P. Disc (Director General of Police Commendation Disc) - Highest honour awarded by the D.G.P. for outstanding service<br />
        • Received hundreds of awards, citations, and commendations from the Deputy CM, DGP Punjab, and others<br />
        • Became the first officer in Punjab to extradite a murder accused from the UK post India-UK treaty<br />
        • Solved high-profile cases and fought anti-national elements, including operations against ISI agents
        <br /><br />

        {/* --- PHOTO GALLERY IN BETWEEN --- */}
       
        {/* --- END PHOTO GALLERY --- */}

        <b>Life After Retirement: A Mission of Compassion</b><br />
        Retiring on March 31, 2016, Mr. Malhotra turned to serving the most neglected in society:<br />
        • Became actively involved with a leprosy colony in Ludhiana, offering ongoing aid and emotional support to bring smiles on the faces of their families and children<br />
        • Got attached to his ancestral profession (agriculture) and even started farming by his hands<br />
        • Helped families during the COVID-19 pandemic, especially when others turned away. Seeing such turn of events saddened him but also motivated him to continue on the path of generosity.<br />
        • Authored a touching poem- "The Story of Murder of Relationships", aired on Sanjha TV (Canada) and published for COVID relief donations
        <br /><br />
        <b>Today: Guiding the People</b><br />
        Blending all the legal knowledge acquired, field experience, and moral integrity, Mr. Malhotra is now making himself available to assist the public through this platform:<br />
        • Free legal advice and guidance for the poor and needy<br />
        • Support for NRIs with personalized case handling (nominal consultation fee)<br />
        • Help with police/legal procedures, injustice, or personal grievances
        <br /><br />
        <span style={{ fontStyle: 'italic', color: '#1e3a8a', fontWeight: 500, display: 'block', textAlign: 'center', marginBottom: 8 }}>
          "Justice should not depend on privilege. It should reach those who need it most." – Satish Malhotra
        </span>
        <span style={{ fontStyle: 'italic', color: '#1e3a8a', display: 'block', textAlign: 'center', fontSize: '1.1rem', marginTop: 12 }}>
          Whether you're in India or abroad, if you’re seeking trustworthy legal guidance, support in a police matter, or simply a voice of reason -<br />
          You can connect with Satish Malhotra today.
        </span>
      </div>

       
    </div>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#1e3a8a',
        color: 'white',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#3b82f6',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>Justice Path India from react app </h1>
              <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Get The Best Advice Here</p>
            </div>
          </div>

          <nav style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '30px' }}>
            {['home', 'about', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === section ? '#60a5fa' : 'white',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  textTransform: 'capitalize',
                  padding: '5px 0',
                  borderBottom: activeSection === section ? '2px solid #60a5fa' : 'none',
                }}
              >
                {section}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            backgroundColor: '#1e40af',
            padding: '20px',
            display: window.innerWidth <= 768 ? 'block' : 'none',
          }}>
            {['home', 'about', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  textTransform: 'capitalize',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" style={{
        marginTop: '80px',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        color: 'white',
        padding: '100px 40px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            lineHeight: '1.2',
          }}>
            Expert Legal & Police Consultation
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '30px',
            opacity: 0.9,
            maxWidth: '800px',
            margin: '0 auto 30px',
          }}>
            Get professional legal advice from a retired Additional Deputy Commissioner of Police with 40+ years of experience
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '40px',
          }}>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '20px',
              borderRadius: '10px',
              backdropFilter: 'blur(10px)',
            }}>
              <Award className="w-8 h-8 mx-auto mb-2" />
              <p style={{ margin: 0, fontWeight: 'bold' }}>EXPERTISE</p>
            </div>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '20px',
              borderRadius: '10px',
              backdropFilter: 'blur(10px)',
            }}>
              <Users className="w-8 h-8 mx-auto mb-2" />
              <p style={{ margin: 0, fontWeight: 'bold' }}>EXPERIENCE</p>
            </div>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '20px',
              borderRadius: '10px',
              backdropFilter: 'blur(10px)',
            }}>
              <Star className="w-8 h-8 mx-auto mb-2" />
              <p style={{ margin: 0, fontWeight: 'bold' }}>EXCELLENCE</p>
            </div>
          </div>

          <div style={{
            marginTop: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
          }}>
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
            >
              Get Consultation
            </button>
            <a
              href="tel:9851091011"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '15px 30px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
              }}
            >
              <Phone className="w-5 h-5" />
              Call Now: 9779691011
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: '100px 40px',
          backgroundImage: `url(${bg3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '30px',
                color: '#1e3a8a',
              }}>
                About Satish Malhotra
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '30px',
              }}>
Satish Malhotra, a retired Additional Deputy Commissioner of Police, brings with him over 40 years of exemplary service in law enforcement and legal advisory. Hailing from the village of Hambowal along the banks of the Sutlej River, he has devoted his life to upholding justice and supporting individuals in need with unwavering commitment.               </p>
              <button
                style={{
                  marginTop: 30,
                  background: '#1e3a8a',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '12px 32px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(30,58,138,0.15)',
                  display: 'block',
                }}
                onClick={() => {
                  setModalContent(aboutSatishMalhotra);
                  setShowModal(true);
                }}
              >
                Read More About Satish Malhotra
              </button>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}>
              <div style={{
                width: '150px',
                height: '150px',
                backgroundColor: '#e2e8f0',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid #3b82f6',
                overflow: 'hidden',
              }}>
                <img
                  src={profile} // Ensure this path is correct
                  alt="Satish Malhotra"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1e3a8a',
                marginBottom: '10px',
              }}>
                Satish Malhotra
              </h3>
              <p style={{
                color: '#6b7280',
                marginBottom: '20px',
                fontSize: '1.1rem',
              }}>
                Retired Additional Deputy Commissioner of Police
              </p>
              <div style={{
                backgroundColor: '#fef3c7',
                padding: '15px',
                borderRadius: '8px',
              }}>
                <p style={{
                  margin: 0,
                  color: '#92400e',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                }}>
                  "Dedicated to serving justice and helping those who need legal guidance"
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        {showModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              background: 'white',
              borderRadius: 16,
              maxWidth: 700,
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: 32,
              position: 'relative',
            }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: 32,
                  height: 32,
                  fontSize: 18,
                  cursor: 'pointer',
                }}
                aria-label="Close"
              >
                ×
              </button>
              <h2 style={{ color: '#1e3a8a', marginBottom: 16 }}>About Satish Malhotra</h2>
              <div style={{ color: '#374151', fontSize: '1.05rem', whiteSpace: 'pre-line' }}>
                {modalContent}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '100px 40px',
        backgroundColor: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Gallery - Moving images above "Our Core Services" */}
          <div style={{
            overflow: 'hidden',
            width: '100%',
            marginBottom: '60px',
            position: 'relative',
          }}>
            <div
              className="scroll-gallery"
              style={{
                display: 'flex',
                gap: '30px',
                animation: 'scrollGallery 18s linear infinite',
                width: 'max-content',
              }}
            >
              {/* Duplicate images for seamless loop */}
              {[photo1, photo2, photo3,speaker, photo1, photo2, photo3,speaker].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Gallery ${idx % 3 + 1}`}
                  style={{
                    width: '320px',
                    height: '220px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(30,58,138,0.08)',
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1e3a8a',
              marginBottom: '20px',
            }}>
              Our Core Services
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Comprehensive legal and police consultation services with expertise, experience, and excellence
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: '30px',
            marginBottom: '60px',
          }}>
            {services.map((service, index) => {
              const images = [photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16];
              return (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${images[index]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '40px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid #e2e8f0',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
                    zIndex: 1,
                  }} />
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    color: 'white',
                  }}>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      color: '#ffffff',
                      lineHeight: '1.6',
                      fontSize: '1rem',
                      whiteSpace: 'pre-line',
                    }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

         
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '100px 40px',
        backgroundColor: '#1e3a8a',
        color: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}>
              Contact Us Today
            </h2>
            <p style={{
              fontSize: '1.2rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Get in touch for professional legal consultation and guidance
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
            gap: '40px',
            marginBottom: '50px',
          }}>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
            }}>
              <Phone className="w-12 h-12 mx-auto mb-4" style={{ color: '#60a5fa' }} />
              <h3 style={{ marginBottom: '15px', fontSize: '1.3rem' }}>Phone</h3>
              <a
                href="tel:9779691011"
                style={{
                  color: '#60a5fa',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
                9779691011
              </a>
              <p style={{ marginTop: '10px', opacity: 0.8, fontSize: '0.9rem' }}>
                Available 24/7
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
            }}>
              <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: '#60a5fa' }} />
              <h3 style={{ marginBottom: '15px', fontSize: '1.3rem' }}>Email</h3>
              <p style={{ color: '#60a5fa', fontSize: '1rem' }}>
                <a
                  href="mailto:malhotra0771@gmail.com"
                  style={{ color: '#60a5fa', textDecoration: 'underline', fontWeight: 'bold' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  malhotra0771@gmail.com
                </a>
              </p>
              <p style={{ marginTop: '10px', opacity: 0.8, fontSize: '0.9rem' }}>
                Quick Response Guaranteed
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
            }}>
              <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: '#60a5fa' }} />
              <h3 style={{ marginBottom: '15px', fontSize: '1.3rem' }}>Visit Us</h3>
              <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: '1.5' }}>
                Punjab, Haryana &<br />
                Surrounding Areas
              </p>
              <p style={{ marginTop: '10px', opacity: 0.8, fontSize: '0.9rem' }}>
                Home Visits Available
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '40px',
            borderRadius: '15px',
            textAlign: 'center',
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '20px',
            }}>
              Ready to Get Expert Legal Advice?
            </h3>
            <p style={{
              marginBottom: '30px',
              opacity: 0.9,
              fontSize: '1.1rem',
            }}>
              Contact us now for immediate consultation. Free for those in need, specialized support for NRIs.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px',
            }}>
              <a
                href="tel:9779691011"
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                }}
              >
                <Phone className="w-5 h-5" />
                Call Now for Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0f172a',
        color: 'white',
        padding: '40px 40px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#3b82f6',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Scale className="w-5 h-5" />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Justice Path India from react app </h3>
          </div>

          <p style={{
            marginBottom: '20px',
            opacity: 0.8,
            maxWidth: '600px',
            margin: '0 auto 20px',
          }}>
            Professional legal and police consultation services by retired Additional Deputy Commissioner Satish Malhotra.
            Serving with expertise, experience, and excellence.
          </p>

          <p style={{
            color: '#f87171',
            fontWeight: 'bold',
            marginBottom: '20px',
            fontStyle: 'italic',
          }}>
            * our services do not extend to direct court representation, including appearances at hearings or trials
          </p>

          <div style={{
            borderTop: '1px solid #334155',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            alignItems: 'center',
          }}>
            <p style={{ margin: 0, opacity: 0.7 }}>
              © 2025 Justice Path India from react app . All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="tel:9851091011" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:consultation@pointtopoint.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: 'white',
            borderRadius: 16,
            maxWidth: 700,
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: 32,
            position: 'relative',
          }}>
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                fontSize: 18,
                cursor: 'pointer',
              }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 style={{ color: '#1e3a8a', marginBottom: 16 }}>About Satish Malhotra</h2>
            <div style={{ color: '#374151', fontSize: '1.05rem', whiteSpace: 'pre-line' }}>
              {modalContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PointToPointConsultancy;