import CountriesAsExperiences from "./CountriesAsExperiences"
import EducationTurningPoint from "./EducationTurningPoint"
import HeroSection from "./HomeHero"
import HowWeDefineSuccess from "./HowWeDefineSuccess"
import JourneyStepSection from "./JourneyStepSection"
import OurWayOfCounseling from "./OurWayOfCounseling"
import QuietInvitationSection from "./GetCallbackSection"
import SplitTruthSection from "./SplitTruthSection"
import StudentVisionSection from "./StudentVisionSection"
import StudentVoicesChat from "./StudentVoicesChat"
import TopDestinations from "./TopDestinations"
import TrustPanel from "./TrustPanel"
import TrustQuietMomentsSection from "./TrustQuietMomentsSection"
import ValuesWePractice from "./ValuesWePractice"
import VisionMissionSection from "./VisionMissionSection"
import WhyGuidanceMatters from "./WhyGuidanceMatters"

const HomeMain = () => {
  return (
    <>
      <HeroSection/>
      <TopDestinations/>
      <WhyGuidanceMatters/>
      <EducationTurningPoint/>
      <OurWayOfCounseling/>
       <VisionMissionSection/>
      <StudentVisionSection/>
      <ValuesWePractice/>
     <JourneyStepSection/>
     <TrustQuietMomentsSection/>
     <CountriesAsExperiences/>
     <HowWeDefineSuccess/>
     <StudentVoicesChat/>
     <TrustPanel/>
     <SplitTruthSection/>
<QuietInvitationSection/>
    </>
  )
}

export default HomeMain
