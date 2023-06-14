import React, { Component } from 'react';
import { Section } from "./Section";
import { Statistics } from './Statistics';
import { FeedbackOptions } from "./Feedbackoptions";
import { Notification } from "./Notification";



class App extends Component {
  // static defaultProps = {
  //   initialValue: 0,
  // };
  state = {
    good: 0,
    neutral: 0, 
    bad: 0,
  };
  handleFeedback = (evt) => {
   this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
}

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad || 0;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    ).toFixed(2);
  };
  render() {
    return (
      <div>
        <Section title={"Please leave your feedback"} >
           <FeedbackOptions options={this.state} onLeaveFeedback={this.handleFeedback}/>
        </Section>
        {/* <h1>Please leave your feedback</h1> */}
        <Section title={"Statistics"}>
          {this.countTotalFeedback() > 0
            ? <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
            : <Notification message={"There is no feedback"}></Notification>}
          
       </Section> 
      </div>
    );
  }
};
export {App};
