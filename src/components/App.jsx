import React, { useState } from "react";

import { FeedbackOptions } from "./Control/Control";
import { Statistics } from "./Stats/Stats";

import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout/Layout";
import {Section} from "./Section/Section";

export const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const addFeedback = (feedback) => {

    if (feedback === "good") {
      setGood(good + 1) 
    } else if (feedback === "neutral") {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + bad + neutral;
    if (total === 0) { 
      return "0%"
    }
    return `${((good / total)*100).toFixed(2)}%`
  };

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions onFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
      </Section>
      <GlobalStyle />
    </Layout>
  )
}