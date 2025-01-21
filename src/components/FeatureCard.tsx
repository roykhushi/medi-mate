"use client"

import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";

export function FeatureCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >

<div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4 pb-4">
        Get to know your AI-Assistant.
      </h2>
      <p className="max-w-7xl text-md md:text-2xl sm:text-3xl pl-4 mx-auto font-bold text-neutral-800 dark:text-gray-500 font-sans">Your personal AI-powered health companion, available 24/7 to answer questions and provide insights about your health.</p>
      <Carousel items={cards} />
    </div>
    </motion.div>
    </>
    
    
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              The chatbot provides instant responses to your medical queries, offering advice on symptoms, medications, and general health concerns 24/7, ensuring you have access to reliable information anytime.
            </p>
            <Image
              src="https://cdn.gamma.app/uol6cwk3nkk9xhz/generated-images/QzxKilPf8HAcleJv0JqGL.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            />
          </div>
        );
      })}
    </>
  );
};


const SecurityContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              The healthbot adheres to strict data privacy regulations, protecting sensitive medical information..
            </p>
            <Image
              src="https://cdn.gamma.app/uol6cwk3nkk9xhz/generated-images/nTLpjoxIyXF3VXMg7zTtm.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            />
          </div>
        );
      })}
    </>
  );
};

const EmergencyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              In emergencies, the chatbot provides step-by-step guidance on basic first aid or directs you to the nearest emergency services for immediate help.
            </p>
            <Image
              src="https://cdn.gamma.app/uol6cwk3nkk9xhz/generated-images/4RtRoKWPMGv-ISKBoSdQg.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            />
          </div>
        );
      })}
    </>
  );
};

const SymptomContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              By leveraging AI algorithms, the healthbot analyzes symptoms and suggests potential causes, contributing to informed decision-making.
            </p>
            <Image
              src="https://cdn.gamma.app/uol6cwk3nkk9xhz/generated-images/tzAv-AhyBTVbFc2Je-yCc.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            />
          </div>
        );
      })}
    </>
  );
};

const RecommendationContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              The chatbot suggests doctors, clinics, or hospitals near your location based on your medical needs, making it easier to seek expert care promptly.
            </p>
            <Image
              src="https://cdn.gamma.app/uol6cwk3nkk9xhz/generated-images/coi7XAAnFezeQHEVhfaYa.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            />
          </div>
        );
      })}
    </>
  );
};

const PersonalizedContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              The chatbot leverages your health statistics, such as age, weight, medical history, and lifestyle habits, to provide personalized advice and recommendations. Whether it&apos; suggesting a fitness plan, a balanced diet, or preventive measures, the assistance is tailored to your unique health profile, ensuring you receive actionable insights that align with your specific needs and goals. This personalized approach empowers you to make informed decisions and maintain better control over your health.
            </p>
            <Image
              src="https://cdn.gamma.app/uol6cwk3nkk9xhz/generated-images/sdYzmmTOkuhdWbkN7y-Kq.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            />
          </div>
        );
      })}
    </>
  );
};


const data = [
  {
    category: "Instant Health Assistance",
    title: "Get Answers Anytime, Anywhere",
    src: "https://i.pinimg.com/736x/6d/09/67/6d0967fe56cf194e3ab741c7038edc95.jpg",
    content: <DummyContent />,
  },
  {
    category: "Tailored Guidance",
    title: "Personalized Recommendations",
    src: "https://cdn.gamma.app/stnwiwggqvz7d66/generated-images/4v_zlAhSzxcWtlah92YnG.jpg",
    content: <PersonalizedContent />,
  },
  {
    category: "Symptom Checker",
    title: "Know What Might Be Ailing You",
    src: "https://cdn.gamma.app/uol6cwk3nkk9xhz/generated-images/nnInVgtDf64eur7xQxfB8.jpg",
    content: <SymptomContent />,
  },

  {
    category: "Doctor & Hospital Recommendations",
    title: "Find the Right Care Near You",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <RecommendationContent />,
  },
  {
    category: "Emergency Assistance Guidance",
    title: "Know What to Do in Urgent Situations",
    src: "https://cdn.gamma.app/uol6cwk3nkk9xhz/generated-images/427h97s52yTvWzIlF9evv.jpg",
    content: <EmergencyContent />,
  },
  {
    category: "Privacy and Security",
    title: "Your Data is Safe with Us",
    src: "https://cdn.gamma.app/uol6cwk3nkk9xhz/generated-images/vUhETRXh1seMbb_9-r9--.jpg",
    content: <SecurityContent />,
  },
];
