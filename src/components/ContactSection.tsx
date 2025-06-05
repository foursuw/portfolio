
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    console.log('ContactSection mounted');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submission started', formData);

    try {
      const serviceId = 'service_sx6w4ve';
      const templateId = 'template_6w9113q';
      const publicKey = 'NXhyr_-zGfG_aijTB';

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Bagadi Sarana Sai',
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'saranasai@example.com',
      href: 'mailto:saranasai@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91XXXXXXXXX',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Visakhapatnam, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translateY-0' : 'opacity-0 transform translateY-4'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Let's discuss your next project or collaboration opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 transform translateY-0' : 'opacity-0 transform translateY-4'}`}>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Send Me a Message
                  </h3>
                  <p className="text-gray-600">
                    I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <User size={18} />
                      </div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="pl-10"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Mail size={18} />
                      </div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <MessageSquare size={18} />
                    </div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute left-3 top-4 text-gray-400">
                      <MessageSquare size={18} />
                    </div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="pl-10"
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 transform translateY-0' : 'opacity-0 transform translateY-4'}`}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4">
                        <div className="text-blue-600">
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-800">
                            {info.title}
                          </h3>
                          <a 
                            href={info.href}
                            className="text-blue-600 hover:text-purple-600 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg text-gray-800 mb-4">
                    Follow Me
                  </h3>
                  <div className="flex space-x-4">
                    {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 text-blue-600"
                      >
                        {platform.charAt(0)}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
