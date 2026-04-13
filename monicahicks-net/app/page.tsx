import { About } from "@/components/About";
import { BeyondWork } from "@/components/BeyondWork";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SelectedWork } from "@/components/SelectedWork";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <SelectedWork />
        <Projects />
        <BeyondWork />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
