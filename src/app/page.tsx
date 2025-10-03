import { Header } from "./_components/landing/Header";
import { Footer } from "./_components/landing/Footer";
import { Hero } from "./_components/landing/Hero";
import { ValueProps } from "./_components/landing/ValueProps";
import { Collections } from "./_components/landing/Collections";
import { HowItWorks } from "./_components/landing/HowItWorks";
import { Testimonials } from "./_components/landing/Testimonials";
import { CTA } from "./_components/landing/CTA";

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Collections />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
