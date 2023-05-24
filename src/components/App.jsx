import React from 'react';
import Section from './Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Notification from './Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = event => {
    const name = event.currentTarget.textContent;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    console.log(Object.values(this.state));

    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    console.log(this.countTotalFeedback());
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* React homework template */}
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;