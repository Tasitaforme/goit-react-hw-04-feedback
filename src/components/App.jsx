import { useState } from 'react'

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import Head from './Head/Head';

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  const options = Object.keys({ good, neutral, bad });
 
  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
   return bad + good + neutral;
  }

const countPositiveFeedbackPercentage = () => {
  const total = countTotalFeedback();
  return Math.round((100 / total) * good);
}
    
  return (
    <>
      <Head/>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}






// import { Component} from 'react'

// import Section from './Section/Section';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Notification from './Notification/Notification';
// import Statistics from './Statistics/Statistics';
// import Head from './Head/Head';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => {
//       return { [option]: prevState[option] + 1 };
//     });
//   };

//   countTotalFeedback() {
//     const optionsValues = Object.values(this.state);
//     return optionsValues.reduce((prev, i) => prev + i, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     return Math.round((100 / total) * this.state.good);
//   }

//   render() {
//     const options = Object.keys(this.state);
//     const {good, neutral, bad} = this.state;
//     return (
//       <>
//         <Head/>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
// export default App;