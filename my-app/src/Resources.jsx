import React from 'react';
import Header from './Header';
import './Resources.css'; // Import CSS file for styling
//import imageSrc from './image.png'; // Import your image file

function Resources() {
  return (
    <div className="ResourcePage">
      <div className="Content">
        <div className="Section">
          <h1 className="Title">Resources</h1>
        </div>
        <div className="Section">
        <p className="Description">
          Below are a variety of resources to further your learning about bias beyond what our site teaches. Regardless if you're
          in school, academia, or the workforce, our resources can lead you further in bias education.
          <br/>
          <br/>
          You can click the hyperlinks to learn about the topics each link describes.
        </p>
          <p className="Description">
            <a href = "https://implicit.harvard.edu/implicit/takeatest.html">Test Your Bias - IAT Test</a>
            <br/>
            <a href = "https://academicaffairs.ucsc.edu/events/documents/Microaggressions_Examples_Arial_2014_11_12.pdf">Recognizing Microaggresions</a>
            <br/>
            <a href = "https://www.teachingforchange.org/educator-resources/anti-bias-education">Resources for K-12 educators and college/university professors</a>
            <br/>
            <a href = "https://hbr.org/2017/07/two-types-of-diversity-training-that-really-work">Bias training ideas for organizations</a>
            <br/>
            <a href = "https://www.apa.org/news/podcasts/speaking-of-psychology/understanding-biases">Understanding your racial bias</a>
            <br/>
            <a href = "https://thedecisionlab.com/reference-guide/psychology/the-similar-to-me-effect">The Similar-To-Me Effect</a>
          </p>
        </div>
      </div>
    </div>
    )
}
export default Resources