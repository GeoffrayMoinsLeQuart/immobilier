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

import MarketingTeam from '../team/marketing-team';
import MarketingNewsletter from '../marketing-newsletter';
import MarketingOurClients from '../marketing-our-clients';
import MarketingLandingHero from '../landing/marketing-landing-hero';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingLandingAbout from '../landing/marketing-landing-about';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import PricingMarketing from '../../pricing/marketing/pricing-marketing';
import MarketingLandingProcess from '../landing/marketing-landing-process';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingLandingServices from '../landing/marketing-landing-services';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import MarketingLandingCaseStudies from '../landing/marketing-landing-case-studies';
import ElearningLandingFeaturedCourses from 'src/sections/_elearning/landing/elearning-landing-featured-courses';

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  return (
    <>
      {/* <MarketingLandingHero />

      <MarketingOurClients cities={_cities} />

      <MarketingLandingAbout />

      <MarketingLandingServices /> */}

      <ElearningLandingFeaturedCourses courses={_courses} />

      <MarketingTeam members={_members} />

      <PricingMarketing plans={_pricingMarketing} />

      <MarketingLandingFaqs />

      <MarketingTestimonial testimonials={_testimonials} />

      <MarketingNewsletter />
    </>
  );
}
