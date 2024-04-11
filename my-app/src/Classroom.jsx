import React from 'react';
import Header from './Header';
import './Classroom.css'; // Import CSS file for styling
//import imageSrc from './image.png'; // Import your image file

function Classroom() {
  return (
    <div className="ClassroomPage">
      
      <div className="Content">
        <div className="Section">
          <h1 className="Title">How does bias manifest in the classroom?</h1>
          <p className="Description">
          <p>Bias can manifest in the classroom through differential treatment of students by a teacher or professor. This can appear in the form of expecting students of a marginalized race, ethnicity, national origin, gender identity, sexual orientation, or socioeconomic status to not perform as well as students who are of non marginalized identities. For example, an English professor might take notice of a lot more grammar mistakes on an essay that a student whose native language isn’t English wrote and consequently end up grading harsher. This is a very common form of implicit bias in the classroom that may naturally translate to this professor subconsciously expecting less of that student (and the professor may not even be aware of this bias). Another example could be when a professor is much friendlier to her white students and ends up favoring them more, constantly showering them with encouragement and positive comments but neglecting or not taking her students of color seriously.</p>
          <p>Bias can also appear when teachers in high school are recommending their students for advanced coursework. Statistics show that racial minority students, especially Black and Latino students, are less likely to be recommended into Advanced Placement (AP) or International Baccalaureate (IB) courses compared to their white peers. Instead, they are more likely to be recommended into lower track classes even if they have comparable grades with white students that get recommended into AP or IB courses. Additionally, high school guidance counselors may be more reluctant to encourage minority students to apply to “higher tier” schools and instead encourage them to “keep their list realistic”, implying that they should stick to applying to state schools and community colleges. When these students arrive college, they often face under preparedness in their courses along with elitism from both peers and professors. They face heightened levels of impostor syndrome, thus creating a negative feedback loop where they feel more reluctant to make effort in class because the professors have lower expectations for them.</p> 
          </p>
        </div>
        
        <div className="Section">
          <h1 className="Title">How can we combat this bias?</h1>
          <ul className="BulletPoints">
            <li>Blocking out the names and gender of applicants during the hiring process and instead anonymize them by giving them a number attached to their application materials</li>
            <li>Think about if it matters if there was a gender swap in a role (“does it make a difference or matter if a man or woman was in this position?”)</li>
            <li>Look solely at an employee’s work ethics and performance. Look at qualifications during the hiring process and not attractiveness</li>
            <li>Make sure workplace is diverse by increasing affinity groups, support resources, and diversity in the new hires</li>
            <li>Facilitate intergroup relationships and dialogue in the workplace</li>
            <li>Examine one’s own behavior around those who are similar to themselves and those who are different. Lean into the discomfort when examining these things and where your attitudes towards different groups came from.</li>
            <li>Make others aware about their own biases and the biases that are prevalent at the workplace. Make a commitment to overcome bias and to foster inclusion through actions and not just lip service.</li>
          </ul>
        </div>
        <div className="CircleContainer">
          <div className="Circle">
            <p>“At my job, I have repeatedly expressed that I wanted to work the cash register since I’m friendly, good with people, and fast at learning technology. When I was hired, I said I wanted to work the cash register but was told I would need more experience on the job before they let me do it. They let a less experienced white coworker of mine work the cash register”</p>
          </div>
          <div className="Circle">
            <p>“My supervisor (white woman) kept suggesting I listen to a particular song from a soundtrack, saying “I think you’ll really like it”. When I got home and played it, it was a song about white women lusting after black boys”.</p>
          </div>
          <div className="Circle">
            <p>“It is sickening... how Villanova Dining Services minority staff are being treated very unfairly. TILL THIS DAY. I know a guy who worked his ass off there for so many years and wouldn’t let him advance, POC in the dining service department NEED YOUR HELP. They don’t have a voice because of fear of termination”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classroom;
