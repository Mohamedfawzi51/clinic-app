import { TopNav } from "./components/TopNav";
import { HeroSection } from "./components/HeroSection";
import { PopularSpecialties } from "./components/PopularSpecialties";
import { TopRatedDoctors } from "./components/TopRatedDoctors";
import { HowItWorks } from "./components/HowItWorks";
import { FaqTestimonials } from "./components/FaqTestimonials";
import { Footer } from "./components/Footer";
import { FabSearch } from "./components/FabSearch";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <HeroSection />
        <PopularSpecialties />
        <TopRatedDoctors />
        <HowItWorks />
        <FaqTestimonials />
      </main>
      <Footer />
      <FabSearch />
    </>
  );
}
