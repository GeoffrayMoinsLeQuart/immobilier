'use client';

import {
  _brands,
  _cities,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
  _courses,
} from 'src/_mock';

import ElearningLandingFeaturedCourses from 'src/sections/_elearning/landing/elearning-landing-featured-courses';
import ElearningContactInfo from 'src/sections/_elearning/contact/elearning-contact-info';
import ElearningContactForm from 'src/sections/_elearning/contact/elearning-contact-form';
import { projects } from 'src/_mock/projets';
import MarketingTeam from '../team/marketing-team';
import MarketingNewsletter from '../marketing-newsletter';
import MarketingOurClients from '../marketing-our-clients';
import MarketingLandingHero from '../landing/marketing-landing-hero';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingLandingAbout from '../landing/marketing-landing-about';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import PricingMarketing from '../../pricing/marketing/pricing-marketing';
import MarketingLandingServices from '../landing/marketing-landing-services';

// ----------------------------------------------------------------------

export default function MarketingLandingView() {

  return (
    <>
      {/* <MarketingLandingHero />

      <MarketingOurClients cities={_cities} />

      <MarketingLandingAbout />

      <MarketingLandingServices /> */}

      {/* {projects && <ElearningLandingFeaturedCourses projects={projects} />} */}

      {/* <MarketingTeam members={_members} />

      <PricingMarketing plans={_pricingMarketing} />

      <MarketingLandingFaqs />

      <MarketingTestimonial testimonials={_testimonials} />

      <ElearningContactInfo />

      <ElearningContactForm /> */}
    </>
  );
}
