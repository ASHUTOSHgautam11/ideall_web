'use client';

import Image from "next/image";
import { useState } from 'react';
import { Button } from '@/app/(users)/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/(users)/components/ui/card';
import { Input } from '@/app/(users)/components/ui/input';
import { Label } from '@/app/(users)/components/ui/label';
import { Textarea } from '@/app/(users)/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/(users)/components/ui/select';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', category: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="animate-fadeIn">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
          <p className="text-gray-600">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {/* SECTION TOP HEADING */}
      <div className="text-center mb-12 mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Start Your Project Today</h2>
        <p className="text-gray-600 mt-2">
          Tell us what you're looking for and our specialists will guide you through the next steps.
        </p>
      </div>

      {/* HORIZONTAL LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* LEFT — FORM (AUTO HEIGHT MATCH) */}
        <Card className="w-full h-full flex flex-col border border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Get in Touch</CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="category">Product Category of Interest</Label>
                <Select onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="floorings">Floorings</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="fabrics">Fabrics</SelectItem>
                    <SelectItem value="fashion-walls">Fashion Walls</SelectItem>
                    <SelectItem value="multiple">Multiple Categories</SelectItem>
                  </SelectContent>
                </Select>
              </div>


              <div className="flex-1 flex flex-col">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your project requirements..."
                  required
                  className="min-h-[150px] flex-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}
              </Button>

            </form>
          </CardContent>
        </Card>

        {/* RIGHT — IMAGE (MATCHES FORM HEIGHT) */}
        <div className="w-full h-full flex">
          <Image
            src="/assets/Contact1.jpg"
            alt="Contact Illustration"
            width={650}
            height={600}
            className="rounded-xl shadow-md object-cover w-full h-full"
          />
        </div>

      </div>
    </>
  );
}
