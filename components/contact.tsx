"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => { setStatus("sent"); formRef.current?.reset() },
        () => { setStatus("error") }
      )
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "veenayaksirohi@gmail.com",
      href: "mailto:veenayaksirohi@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7302223304",
      href: "tel:+917302223304",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Greater Noida, U.P",
      href: "https://maps.google.com/?q=Greater+Noida+U.P",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/veenayaksirohi",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/veenayak_sirohi-ab30ab227/",
      color: "hover:text-orange-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:veenayaksirohi@gmail.com",
      color: "hover:text-orange-500",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 font-sans">
            Get In <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent uppercase tracking-widest">Touch</span>
            <div className="text-lg text-light-grey mt-2 font-semibold">Veenayak Sirohi</div>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mb-6"></div>
          <p className="text-light-grey max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-black border-gray-700 transition-all duration-200 hover:scale-105 animate-pulse-slow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
            <CardHeader>
              <CardTitle className="text-white">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-light-grey">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="bg-[#1F1F1F] border-gray-700 text-white focus:border-orange-500"
                      placeholder="Veenayak Sirohi"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-light-grey">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-[#1F1F1F] border-gray-700 text-white focus:border-orange-500"
                      placeholder="veenayaksirohi@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-light-grey">
                    Subject
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    required
                    className="bg-[#1F1F1F] border-gray-700 text-white focus:border-orange-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-light-grey">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="bg-[#1F1F1F] border-gray-700 text-white focus:border-orange-500 resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white shadow-md shadow-orange-500/20 hover:scale-105 transition-transform duration-200"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </Button>
                {status === "sent" && <p className="text-green-400 text-center">Sent!</p>}
                {status === "error" && <p className="text-red-400 text-center">Error sending.</p>}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-black border-gray-700 transition-all duration-200 hover:scale-105 animate-pulse-slow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 text-[#AAAAAA] hover:text-orange-500 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <info.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{info.label}</div>
                      <div className="text-light-grey">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-700 transition-all duration-200 hover:scale-105 animate-pulse-slow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
              <CardHeader>
                <CardTitle className="text-white">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-black rounded-lg flex items-center justify-center text-[#AAAAAA] border-2 border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:text-white transition-all duration-200 hover:scale-110`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-700 transition-all duration-200 hover:scale-105 animate-pulse-slow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
              <CardHeader>
                <CardTitle className="text-white">Let's Work Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-light-grey mb-4">
                  As a Computer Science student with a passion for data analysis and development, I'm eager to connect with professionals and organizations seeking skills in Python, Power BI, and data-driven solutions. If you have a project, internship, or collaboration in mind, or simply want to discuss technology and analytics, I'd love to hear from you!
                </p>
                <div className="space-y-2 text-sm text-light-grey">
                  <div>• Seeking internships and entry-level roles in Data Analytics or Software Development</div>
                  <div>• Experienced with Python, Pandas, Power BI, and SQL</div>
                  <div>• Open to freelance and remote opportunities</div>
                  <div>• Enthusiastic about teamwork and continuous learning</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
