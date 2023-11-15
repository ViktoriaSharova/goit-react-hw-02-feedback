import { Component } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import 'normalize.css';

// export class App extends Component {

//   state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round(
//       (this.state.good /
//         (this.state.good + this.state.neutral + this.state.bad)) *
//         100
//     );
//   };

//     handleFeedback = (name) => {
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1
//       };
//     });
//   };

//   render() {
//     const totalFeedback = this.countTotalFeedback();
//   return (
//     <div>
//       <Section title="Please leave feed back">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleFeedback}
//           />
//       </Section>
//       {!totalFeedback && <Notification />}
//       {totalFeedback > 0 && (
//         <Section title="Statistics">
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       )}
//     </div>
//   );
//   };
// }

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };

  handleIncrement = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { [event.target.name]: prevState[event.target.name] + 1 };
    });
  };

  render() {
    return (
      <div>
        <Section title="Please leave feed back">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}