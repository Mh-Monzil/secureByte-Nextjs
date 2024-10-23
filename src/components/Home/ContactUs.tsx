"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, Twitter, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './phone-input.css'

export default function ContactUs() {
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>("")
  return (
    <div className=" mx-auto p-4 md:p-6 lg:p-8 bg-background">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">Contact our team</h1>
      <p className="text-center text-muted-foreground mb-8">
        Got any questions about the product or scaling on our platform? Were here to help.
        <br />
        Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
      </p>
      <div className="grid md:grid-cols-2 gap-8 ">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first-name" className="text-foreground">First name</Label>
              <Input id="first-name" placeholder="First name" className="bg-background border-input py-5" />
            </div>
            <div>
              <Label htmlFor="last-name" className="text-foreground">Last name</Label>
              <Input id="last-name" placeholder="Last name" className="bg-background border-input py-5" />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input id="email" type="email" placeholder="you@company.com" className="bg-background border-input py-5" />
          </div>
          <div>
            <Label htmlFor="phone" className="text-foreground">Phone number</Label>
            <PhoneInput
              international
              countryCallingCodeEditable={true}
              defaultCountry="AE"
              value={phoneNumber}
              onChange={(value: string | undefined) => setPhoneNumber(value)}
              className="bg-transparent text-white"
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea id="message" placeholder="Leave us a message..." className="bg-background border-input pb-10"  />
          </div>
          <div>
            <Label className="text-foreground">Services
                
            </Label>
          </div>
          <Button type="submit" className="w-full">Send message</Button>
        </form>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">Chat with us</h2>
            <p className="text-muted-foreground mb-4">Speak to our friendly team via live chat.</p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="mr-2 h-4 w-4" />
                Start a live chat
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Shoot us an email
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Twitter className="mr-2 h-4 w-4" />
                Message us on X
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">Call us</h2>
            <p className="text-muted-foreground mb-2">Call our team Mon-Fri from 8am to 5pm.</p>
            <Button variant="outline" className="w-full justify-start">
              <Phone className="mr-2 h-4 w-4" />
              +1 (555) 000-0000
            </Button>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">Visit us</h2>
            <p className="text-muted-foreground mb-2">Chat to us in person at our Melbourne HQ.</p>
            <Button variant="outline" className="w-full justify-start">
              <MapPin className="mr-2 h-4 w-4" />
              100 Smith Street, Collingwood VIC 3066
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}