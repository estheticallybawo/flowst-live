import { NotifyProvider } from "@/components/NotifyProvider";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Curiosity } from "@/components/sections/Curiosity";
import { UseCases } from "@/components/sections/UseCases";
import { Proof } from "@/components/sections/Proof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AgentsLibrary } from "@/components/sections/AgentsLibrary";
import { Pillars } from "@/components/sections/Pillars";
import { Faq } from "@/components/sections/Faq";
import { PartnerBanner } from "@/components/sections/PartnerBanner";
import { MailSignup } from "@/components/sections/MailSignup";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <NotifyProvider>
      <div id="top" className="flowst-canvas" style={{ minHeight: "100vh", paddingBottom: "1px" }}>
        <Header />
        <main>
          <Hero />
          <Curiosity />
          <UseCases />
          <Proof />
          <HowItWorks />
          <AgentsLibrary />
          <Pillars />
          <Faq />
          <PartnerBanner />
          <MailSignup />
        </main>
        <Footer />
      </div>
    </NotifyProvider>
  );
}
