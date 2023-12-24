"use client";

import { useState, useEffect } from "react";
import SliderCard from "./Card";
import Container from "../Container";
import styles from "./Slider.module.scss";

const sliderData = [
  {
    day: "4th",
    month: "Oct",
    title: "NLP Conference London 2024",
    desc: "Be Born Again Find true life in Jesus Christ People who love coming to CRM often connect with God in...",
    detailsURL: "/",
  },
  {
    day: "5th",
    month: "Oct",
    title: "NLP Conference London 2024",
    desc: "Be Born Again Find true life in Jesus Christ People who love coming to CRM often connect with God in...",
    detailsURL: "/",
  },
  {
    day: "6th",
    month: "Oct",
    title: "NLP Conference London 2024",
    desc: "Be Born Again Find true life in Jesus Christ People who love coming to CRM often connect with God in...",
    detailsURL: "/",
  },
  {
    day: "7th",
    month: "Oct",
    title: "NLP Conference London 2024",
    desc: "Be Born Again Find true life in Jesus Christ People who love coming to CRM often connect with God in...",
    detailsURL: "/",
  },
];

export default function Slider() {
  return (
    <Container
      fluid
      className="min-w-[300px] max-w-[300px] md:min-w-[800px] md:max-w-[800px] lg:min-w-[1150px] lg:max-w-[1150px] h-[450px] overflow-x-hidden flex items-end justify-center relative"
    >
      <Container fluid className={`flex h-fit gap-[10px] ${styles.slider}`}>
        <>
          {sliderData?.map(({ day, month, title, desc, detailsURL }, index) => {
            return (
              <SliderCard
                key={index}
                day={day}
                month={month}
                title={title}
                desc={desc}
                detailsURL={detailsURL}
              />
            );
          })}

          {sliderData?.map(({ day, month, title, desc, detailsURL }, index) => {
            return (
              <SliderCard
                key={index}
                day={day}
                month={month}
                title={title}
                desc={desc}
                detailsURL={detailsURL}
              />
            );
          })}
        </>
      </Container>
    </Container>
  );
}
