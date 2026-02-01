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
    <div className="bg-base-light dark:bg-base-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <Navbar />
      <Hero />
      <AboutMe />
      <CareerObjective />
      <Expertise />
      <Education />
      <Quote />
      <Stats />
      <Experience />
      <AcademicProjects />
      <SpecialAchievements />
      <Publications />
      <WorldRecordsAndAwards />
      <EventLeadershipAndSocialService />
      <AuthorshipPatentAwards />
      <AcademicEngagements />
      <SkillsInternship />
      <Contact />
    </div>
  );
}

export default App;