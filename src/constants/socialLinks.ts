import { Github, Linkedin, Mail } from 'lucide-react'

export const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/leaderofARs', 
    label: 'GitHub',
    color: 'hover:text-white hover:bg-gray-800'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/abhay-ravindra-shanbhag-900ab5330/', 
    label: 'LinkedIn',
    color: 'hover:text-blue-400'
  },
  { 
    icon: Mail, 
    href: 'mailto:arsabhayrs@gmail.com', 
    label: 'Email',
    color: 'hover:text-green-400'
  },
] as const