import React from "react";
import Card from "~/components/events/Card";
import RadioButtons from "~/components/events/RadioButtons";
import styles from "./global.module.css";

function Page() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className={`${styles.textGradient} mt-8 text-7xl font-bold`}>Events</h1>
      </div>

      <div className="flex justify-center py-8 md:py-16">
        <RadioButtons />
      </div>

      <div className="mx-2 mt-8 flex flex-wrap justify-center gap-20 md:mx-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Page;
