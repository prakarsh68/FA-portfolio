import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import CareerObjective from "./components/CareerObjective";
import Expertise from "./components/Expertise";
import Education from "./components/Education";
import Experience from "./components/Experience";
import AcademicProjects from "./components/AcademicProjects";
import SpecialAchievements from "./components/SpecialAchievements";
import Publications from "./components/Publications";
import AuthorshipPatentAwards from "./components/AuthorshipPatentAwards";
import AcademicEngagements from "./components/AcademicEngagements"; 
import SkillsInternship from "./components/SkillsInternship";
import EventLeadershipAndSocialService from "./components/EventLeadershipandSocialService";
import WorldRecordsAndAwards from "./components/WorldRecordsandAwards";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO & INTRO */}
      <Hero />
      <AboutMe />
      <CareerObjective />

      {/* ACADEMIC CORE */}
      <Expertise />
      <Education />
      <Experience />

      {/* PROFESSIONAL HIGHLIGHTS */}
      <AcademicProjects />
      <SpecialAchievements />
      <Publications />
      <AuthorshipPatentAwards />
      <AcademicEngagements />
      <SkillsInternship />

      {/* CLOSING SECTIONS */}
      <EventLeadershipAndSocialService />
      <WorldRecordsAndAwards />
      <Contact />
      <Quote />
      <Stats />
    </>
  );
}

export default App;
