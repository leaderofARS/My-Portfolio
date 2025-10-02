import { motion } from 'framer-motion'
import { Heart, Mail, MapPin, ExternalLink } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="space-y-4 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="text-2xl font-bold text-gradient">Abhay Ravindra Shanbhag</h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                B.Tech student in IoT & Cybersecurity with blockchain specialization. 
                Building secure, intelligent digital systems and exploring the future of technology.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-3 text-sm"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={16} className="text-primary" />
                <a 
                  href="mailto:arsabhayrs@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  arsabhayrs@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-sm"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">Bangalore, India</span>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h4 
              className="font-semibold text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Certificates', href: '#certificates' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2 group"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.getElementById(link.href.slice(1))
                      if (element) {
                        const headerOffset = 80
                        const elementPosition = element.offsetTop
                        const offsetPosition = elementPosition - headerOffset
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                      }
                    }}
                  >
                    {link.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <motion.h4 
              className="font-semibold text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Connect
            </motion.h4>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <SocialLinks variant="footer" />
              </motion.div>
              
              <motion.p 
                className="text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Let's build something amazing together!
              </motion.p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Abhay Ravindra Shanbhag. All rights reserved.</span>
            </div>

            
          </div>

          {/* Additional Info */}
          <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xs text-muted-foreground">
              Passionate about blockchain, AI, and cybersecurity • Always learning, always building
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}