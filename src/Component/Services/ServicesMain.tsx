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
      <ServiceHero/>
      <ServicesOverview/>
      <ProfileEvaluation/>
      <ShortlistingSection/>
      <DocumentationSection/>
      <AdmissionAssistance/>
      <InterviewPreparation/>
      <FinanceSupportSection/>
      <CareerGuidanceSection/>
      <StudentVisaAssistance/>
      <VisitorVisaSection/>
      <PrePostArrivalSection/>
    </>
  )
}

export default ServicesMain
