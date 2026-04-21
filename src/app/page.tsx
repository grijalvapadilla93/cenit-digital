import SiteLayout from "@/components/site-layout";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <SiteLayout>
      <ScrollToTop />
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
