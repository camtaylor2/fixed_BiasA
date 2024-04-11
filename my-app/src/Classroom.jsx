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
            <li>Making educators aware that they have certain implicit biases (taking IAT - implicit association test - assessments). Once they are made aware of the biases, they can begin reflecting on where the biases originate and work to improve their interactions with those students. </li>
            <li>Developing empathy towards the students and learning about their personal stories can help educators build relationships with all their students regardless of their social identities. If a student shares something about their culture or corrects a professor or teacher on something you said about the culture they come from, the professor or teacher should at the very least acknowledge what the student shared. Having professors and teachers learn about norms in different cultures can greatly improve their interactions with multicultural students. </li>
            <li>Develop more cross-group friendships in their own lives. This can help them become more open and relaxed in interacting with people of different groups and this can translate into the classroom where they will have much healthier relationships with all their students and not only the students from non marginalized groups.</li>
            <li>When an educator gets called out for bias or favoritism, they should not get defensive. Instead, they should pay attention to how the behavior they were called out for affects students and where those biases come from.</li>
          </ul>
        </div>
        <div className="Testimonials">
            Testimonials:
        </div>
        <div className="CircleContainer">
          <div className="Circle">
            <p>“I had a sociology professor who did not take me seriously. I was one of 7 racial minority students in a class of 28 students and the only one with an accent. She had lower expectations of me and encouraged me to WX, implying that she thought I couldn’t pass the class. She was much friendlier with the white American students as well, showing signs of clear favoritism and unconscious bias.”</p>
          </div>
          <div className="Circle">
            <p>“In one of my classes sophomore year, we were learning about Muslim traditions. One of my classmates was wearing a hoodie with the hood up and she said, in front of the whole class, “you look like you could be Muslim” (insinuating that he looked like he was wearing a hijab). She then proceeded to laugh” .</p>
          </div>
          <div className="Circle">
            <p>“One of my professors kept messing up my name and the name of another student of color despite our names not even being that hard to pronounce. It took the intervention of a white student for her to finally realize she called us both by the wrong names”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classroom;
