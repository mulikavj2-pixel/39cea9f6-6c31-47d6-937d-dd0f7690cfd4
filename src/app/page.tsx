"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroShowcaseSplit from '@/components/sections/hero/HeroShowcaseSplit';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TeamCardFour from '@/components/sections/team/TeamCardFour';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Zap, Cog, Users, MessageCircle, Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="smallSizeLargeTitles"
      background="dotGrid"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="TechVision"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplit
          title="Yo man, look here"
          description="We build scalable, innovative software solutions that drive growth. From concept to deployment, we deliver excellence at every step."
          tags={["Custom Software", "Web Development", "Mobile Apps", "Cloud Solutions"]}
          buttons={[
            { text: "Start New project", href: "contact" },
            { text: "See Our Work", href: "portfolio" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451801064-vxrx5d46.jpg"
          showcaseImageAlt="Modern technology development"
        />
      </div>

      <div id="about" data-section="about">
        <TagMediaSplitAbout
          variant="card"
          title="Who We Are"
          description="A team of passionate developers, designers, and strategists committed to delivering exceptional digital experiences"
          textboxLayout="default"
          contentTag="OUR MISSION"
          contentTagIcon={Zap}
          contentTitle="Building Tomorrow's Technology Today"
          contentDescription="With over a decade of combined experience, we partner with startups and enterprises to create custom software solutions that solve real problems and drive measurable results. Our agile approach ensures flexibility, transparency, and on-time delivery."
          contentButtons={[
            { text: "Learn Our Story", href: "#about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451802458-e9mxkxbt.jpg"
          imageAlt="Our talented team"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNineteen
          title="Our Development Process"
          description="A proven methodology that ensures quality, on-time delivery, and client satisfaction"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="How We Work"
          tagIcon={Cog}
          features={[
            {
              id: 1,
              tag: "Discovery",
              title: "Strategy",
              subtitle: "Understanding your vision and goals",
              description: "We dive deep into your requirements, market, and users to create a comprehensive development strategy that aligns with your business objectives.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451804022-uhe3ynym.jpg",
              imageAlt: "Strategy planning"
            },
            {
              id: 2,
              tag: "Development",
              title: "Build",
              subtitle: "Turning designs into functional code",
              description: "Our expert developers use cutting-edge technologies and best practices to build scalable, secure, and maintainable software solutions tailored to your needs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451805379-lm8bzol8.jpg",
              imageAlt: "Development process"
            },
            {
              id: 3,
              tag: "Deployment",
              title: "Launch",
              subtitle: "Getting your product to market",
              description: "We handle everything from testing and optimization to deployment and monitoring, ensuring a smooth launch and ongoing support for your application.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451806660-yly8zhk3.jpg",
              imageAlt: "Deployment infrastructure"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFour
          title="Meet Our Team"
          description="Talented professionals dedicated to your success"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="Leadership"
          tagIcon={Users}
          team={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO & Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451808018-3ejt88eq.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451809709-idrvti18.jpg"
            },
            {
              id: "3",
              name: "David Martinez",
              role: "Senior Developer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451810744-r5iixkfa.jpg"
            },
            {
              id: "4",
              name: "Emily Rodriguez",
              role: "Design Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451812033-pvcvdrxk.jpg"
            },
            {
              id: "5",
              name: "Alex Thompson",
              role: "Product Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451813298-nm3ze6tp.jpg"
            },
            {
              id: "6",
              name: "Jessica Liu",
              role: "DevOps Engineer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451814621-4f8ckdbc.jpg"
            }
          ]}
          animationType="slide-up"
          speed={30}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="What Our Clients Say"
          description="Success stories from companies we've partnered with"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              nameTitle: "Robert Kim, CEO of StartupXYZ",
              quote: "TechVision transformed our business with a custom platform that scaled beautifully. Their team's expertise and dedication were instrumental in our success.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451815563-5r3vnbz3.jpg",
              imageAlt: "Robert Kim"
            },
            {
              id: "2",
              nameTitle: "Lisa Anderson, Product Director at InnovateLab",
              quote: "Working with TechVision was seamless. They understood our vision immediately and delivered a solution that exceeded our expectations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451816828-cognpki1.jpg",
              imageAlt: "Lisa Anderson"
            },
            {
              id: "3",
              nameTitle: "James Wilson, Founder of TechWave",
              quote: "Exceptional quality, exceptional team. TechVision didn't just build our app—they built a partnership that continues to support our growth.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451818634-2wi013q7.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "4",
              nameTitle: "Maria Garcia, CTO of CloudFirst",
              quote: "The technical excellence and attention to detail from TechVision set them apart. Highly recommend for any serious development project.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451819642-x33nlh0n.jpg",
              imageAlt: "Maria Garcia"
            },
            {
              id: "5",
              nameTitle: "Thomas Brown, VP of Operations at GrowthCo",
              quote: "From strategy to launch, TechVision's professionalism and expertise made the entire process smooth and efficient.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451820769-ev3ehafg.png",
              imageAlt: "Thomas Brown"
            },
            {
              id: "6",
              nameTitle: "Catherine Lee, Executive Director of DataDriven",
              quote: "TechVision delivered not just code, but a strategic advantage. Their understanding of our industry was remarkable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451822718-y4wptgxz.jpg",
              imageAlt: "Catherine Lee"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="We've partnered with top companies to deliver exceptional results"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451825920-lcvxbxli.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451827286-m1ciip09.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451828540-68b7po47.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451829882-l7yrxuy5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451831451-vos1zbt1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451833389-z8vjgnel.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451834728-z3q1zx5l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451835974-hvh1vpem.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451837207-b6xs5625.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and process"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765451824475-9yl5qbnv.jpg"
          imageAlt="Customer support"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What technologies do you specialize in?",
              content: "We work with modern tech stacks including React, Node.js, Python, cloud platforms like AWS and GCP, and mobile development frameworks. We choose the best technology for your specific needs."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary based on scope and complexity. Small projects typically take 2-3 months, while larger applications may take 6-12 months. We provide detailed timelines during the planning phase."
            },
            {
              id: "3",
              title: "Do you offer post-launch support?",
              content: "Absolutely. We provide ongoing support and maintenance packages to ensure your application continues to perform optimally and stays secure."
            },
            {
              id: "4",
              title: "What is your development process like?",
              content: "We follow an agile methodology with regular sprints, transparent communication, and continuous collaboration. You'll have visibility throughout the development process."
            },
            {
              id: "5",
              title: "How much does a project cost?",
              content: "Project costs depend on scope, complexity, and timeline. We offer flexible engagement models including fixed-price projects and time-and-materials arrangements."
            },
            {
              id: "6",
              title: "Can you work with remote teams?",
              content: "Yes, we have experience collaborating with remote teams and distributed stakeholders. We use modern communication and project management tools for seamless collaboration."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Transform Your Ideas?"
          ctaDescription="Let's discuss your project and how we can help bring your vision to life."
          ctaButton={{
            text: "Schedule a Consultation",
            href: "mailto:hello@techvision.com"
          }}
          ctaIcon={Rocket}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          faqs={[
            {
              id: "1",
              title: "What's your typical project workflow?",
              content: "Our workflow includes discovery, planning, development, testing, and deployment. We maintain transparent communication throughout and adjust based on your feedback."
            },
            {
              id: "2",
              title: "How do you handle project changes?",
              content: "We embrace change using agile methodology. Change requests are evaluated, and we adjust timelines and scope accordingly with your approval."
            },
            {
              id: "3",
              title: "What kind of projects do you take?",
              content: "We work on web applications, mobile apps, custom software, cloud solutions, and integration projects. We're experienced across various industries and company sizes."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Team", href: "team" },
                { label: "Careers", href: "careers" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Web Development", href: "services" },
                { label: "Mobile Apps", href: "services" },
                { label: "Cloud Solutions", href: "services" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact", href: "contact" },
                { label: "hello@techvision.com", href: "mailto:hello@techvision.com" },
                { label: "LinkedIn", href: "https://linkedin.com" }
              ]
            }
          ]}
          copyrightText="© 2025 TechVision. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
