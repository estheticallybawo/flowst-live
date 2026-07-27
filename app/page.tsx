import { NotifyProvider } from "@/components/NotifyProvider";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Curiosity";
import { LearningMode } from "@/components/sections/Science";
import { ForLearners } from "@/components/sections/UseCases";
import { LearningFlow } from "@/components/sections/HowItWorks";
import { AgentsLibrary } from "@/components/sections/AgentsLibrary";
import { Roadmap } from "@/components/sections/Roadmap";
import { ExpertiseOutcomes } from "@/components/sections/Proof";
import { FutureVision } from "@/components/sections/Pillars";
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
          <LearningFlow />
          <Journey />
          <LearningMode />
          <ForLearners />
          <AgentsLibrary />
          <Roadmap />
          <ExpertiseOutcomes />
          <FutureVision />
          <Faq />
          <PartnerBanner />
          <MailSignup />
        </main>
        <Footer />
      </div>
    </NotifyProvider>
  );
}
