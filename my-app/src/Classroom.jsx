import React from 'react';
import Header from './Header';
import './Classroom.css'; // Import CSS file for styling
//import imageSrc from './image.png'; // Import your image file

function Classroom() {
  return (
    <div className="ClassroomPage">
      
      <div className="Content">
        <div className="Section">
          <h1 className="Title">How does bias manifest in the workplace?</h1>
          <p className="Description">
          Bias can manifest in the workplace in a few different forms: gender bias, racial/affinity bias, beauty bias, and name bias. This can appear in the form of a company’s hiring manager unconsciously allowing his bias to influence his hiring decisions which may result in a less diverse workplace (example: a male hiring manager ends up choosing the male candidate instead of the female candidate despite both having comparable credentials). It can also appear when discussing who deserves a raise or a promotion. Women are often seen as less capable than their male counterparts, resulting in them being less likely to get a raise or a promotion. Additionally, beauty bias can play a part in both gender and racial bias since some employees may be favored more than others simply for being good looking or conventionally attractive. This type of favoritism can create resentment and further perpetuate inequalities that already exist. Name bias manifests when people have preconceived notions of another employee from their name alone (biases about the person’s perceived gender, race, ethnicity, and nationality). Studies show that people with foreign sounding names are less likely to be called back for an interview in the hiring process compared to people with a more “American” sounding name. Furthermore, people are likely to subconsciously infer a person’s race, ethnicity, nationality, and gender from their name which, if unchecked, can make the biases worse and can go from unconscious to conscious biases. 

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
