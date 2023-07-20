"use client";

import { useState } from "react";
import Styles from "./ActivityHeader.module.scss";

export default function ActivityHeader() {
  const [selectedTab, setSelectedTab] = useState("all");

  const allTabClickHandler = () => {
    setSelectedTab("all");
  };

  const personalTabClickHandler = () => {
    setSelectedTab("personal");
  };

  const businessTabClickHandler = () => {
    setSelectedTab("business");
  };

  const educationTabClickHandler = () => {
    setSelectedTab("education");
  };

  return (
    <div className={Styles.activitiesHeader}>
      <h1>Live Activity</h1>
      <nav className={Styles.tabs}>
        <ul>
          <li
            className={`${selectedTab === "all" && Styles.active}`}
            onClick={allTabClickHandler}
          >
            All
          </li>
          <li
            className={`${selectedTab === "personal" && Styles.active}`}
            onClick={personalTabClickHandler}
          >
            Personal
          </li>
          <li
            className={`${selectedTab === "business" && Styles.active}`}
            onClick={businessTabClickHandler}
          >
            Business
          </li>
          <li
            className={`${selectedTab === "education" && Styles.active}`}
            onClick={educationTabClickHandler}
          >
            Education
          </li>
        </ul>
      </nav>
    </div>
  );
}
