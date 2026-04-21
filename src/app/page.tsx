"use client";

import { useEffect } from "react";
import SiteLayout from "@/components/site-layout";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <Faq />
      <Contact />
    </SiteLayout>
  );
}
