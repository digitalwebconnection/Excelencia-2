import { useParams } from "react-router-dom";

import Hero from "./Hero";

import CourseSection from "./CourseSection";

import destinationsData from "./destinationsData";

import WhyStudy from "./WhyStudy";

import EducationSection from "./EducationSystem";

import Documents from "./Documents";

import IntakeSection from "./ListSection";

const DestinationPage = () => {

    const { country } = useParams();

    // ✅ FIXED
    const pageData = country ? destinationsData[country as keyof typeof destinationsData] : null;

    if (!pageData) {

        return <div className="p-10 text-center">Not Found</div>;
    }

    return (
        <>
        
            <Hero data={pageData.hero} />

            <WhyStudy data={pageData.whyStudy} />

            <EducationSection data={pageData.educationSystem} />

            <Documents data={pageData.documents} />

            <IntakeSection data={pageData.intakes} />

            <CourseSection data={pageData.courses} />
        </>
    );
};

export default DestinationPage; 