'use client';

import { useScroll } from 'framer-motion';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';

import {
  _brands,
  _cities,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
  _courses,
  _pricingHome
} from 'src/_mock';

import ElearningLandingFeaturedCourses from 'src/sections/_elearning/landing/elearning-landing-featured-courses';
import ElearningContactInfo from 'src/sections/_elearning/contact/elearning-contact-info';
import ElearningContactForm from 'src/sections/_elearning/contact/elearning-contact-form';
import MarketingLandingHero from 'src/sections/_marketing/landing/marketing-landing-hero';
import MarketingOurClients from 'src/sections/_marketing/marketing-our-clients';
import MarketingLandingAbout from 'src/sections/_marketing/landing/marketing-landing-about';
import MarketingLandingServices from 'src/sections/_marketing/landing/marketing-landing-services';
import MarketingTeam from 'src/sections/_marketing/team/marketing-team';
import PricingMarketing from 'src/sections/pricing/marketing/pricing-marketing';
import MarketingLandingFaqs from 'src/sections/_marketing/landing/marketing-landing-faqs';
import MarketingTestimonial from 'src/sections/_marketing/testimonial/marketing-testimonial';
import { projects } from 'src/_mock/projets';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <MarketingLandingHero />

      <MarketingOurClients cities={_cities} />

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <ElearningLandingFeaturedCourses projects={projects} />

      <MarketingTeam members={_members} />

      <PricingMarketing plans={_pricingMarketing} />

      <MarketingLandingFaqs />

      <MarketingTestimonial testimonials={_testimonials} />

      <ElearningContactInfo />

      <ElearningContactForm />
    </MainLayout>
  );
}
