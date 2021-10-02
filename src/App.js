// import React, { Component } from "react";

import { useState, useEffect } from "react";

import Section from "./components/SectionTitle";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

export default function App() {
  const [GOOD, setGood] = useState(0);
  const [NEUTRAL, setNeutral] = useState(0);
  const [BAD, setBad] = useState(0);
  const [countTotalFeedback, setCountTotalFeedback] = useState(0);
  const [countPositiveFeedbackPercentage, setCountPositiveFeedbackPercentage] =
    useState(0);

  const leaveFeedback = (e) => {
    switch (e.target.name) {
      case "GOOD":
        setGood((prevState) => prevState + 1);
        break;

      case "NEUTRAL":
        setNeutral((prevState) => prevState + 1);
        break;

      case "BAD":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    setCountTotalFeedback(GOOD + NEUTRAL + BAD);
    setCountPositiveFeedbackPercentage(
      Math.round((GOOD * 100) / (GOOD + NEUTRAL + BAD))
    );
  }, [GOOD, NEUTRAL, BAD]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["GOOD", "NEUTRAL", "BAD"]}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            GOOD={GOOD}
            NEUTRAL={NEUTRAL}
            BAD={BAD}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
