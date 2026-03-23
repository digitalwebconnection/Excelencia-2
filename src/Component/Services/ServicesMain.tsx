// This Is all Import Of the all files 

import AdmissionAssistance from "./AdmissionAssistance"
import CareerGuidanceSection from "./CareerGuidanceSection"
import DocumentationSection from "./DocumentationSection"
import FinanceSupportSection from "./FinanceSupportSection"
import InterviewPreparation from "./InterviewPreparation"
import PrePostArrivalSection from "./PrePostArrivalSection"
import ProfileEvaluation from "./ProfileEvaluation"
import ServiceHero from "./ServiceHero"
import ServicesOverview from "./ServicesOverview"
import ShortlistingSection from "./ShortlistingSection"
import StudentVisaAssistance from "./StudentVisaAssistance"
import VisitorVisaSection from "./VisitorVisaSection"

const ServicesMain = () => {
  return (
    <>
      {/* All services on this page can be opened in a new tab by holding the Ctrl key and right-clicking with your mouse. */}

      <ServiceHero />              {/* Hero section */}
      <ServicesOverview />         {/* Service road animation  */}  
      <ProfileEvaluation />        {/* 1 service */}    
      <ShortlistingSection />      {/* 2 service */}
      <DocumentationSection />     {/* 3 service */}
      <AdmissionAssistance />      {/* 4 service */}
      <InterviewPreparation />     {/* 5 service */}
      <FinanceSupportSection />    {/* 6 service */}
      <CareerGuidanceSection />    {/* 7 service */}
      <StudentVisaAssistance />    {/* 8 service */}
      <VisitorVisaSection />       {/* 9 service */}
      <PrePostArrivalSection />    {/* 10 service*/}
    </>
  )
}

export default ServicesMain
