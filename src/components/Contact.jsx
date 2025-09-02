import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_8sxxrq9', 'template_pxkuxrp', form.current, {
        publicKey: 'aBSeNaK0vOdSIek0R',
      })
      .then(
        () => {
          toast.success("Your response have been send.")
          form.current.reset(); // Clear form fields
          setIsSubmitting(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm currently looking for new opportunities and would love to hear from you. 
                Whether you have a project in mind or just want to say hello, feel free to reach out!
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email', value: 'dsanthosh0710@gmail.com', link: 'mailto:dsanthosh0710@gmail.com' },
                  { icon: Phone, title: 'Phone', value: '+91 9542830766', link: 'tel:+919542830766' },
                  { icon: MapPin, title: 'Location', value: 'Razole, Konaseema, Andhra Pradesh', link: '#' }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center group hover:text-blue-600 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 group-hover:text-blue-600">{item.title}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-bold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, link: 'https://github.com/Durga-Santhosh', color: 'hover:text-gray-800' },
                    { icon: Linkedin, link: 'https://www.linkedin.com/in/durga-santhosh-donga-9ab5b2325/', color: 'hover:text-blue-600' },
                    { icon: Twitter, link: 'https://x.com/Santhoshdonga07', color: 'hover:text-blue-400' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form with EmailJS */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
