import React from 'react';
import Header from './Header';
import './SocialLife.css'; // Import CSS file for styling
//import imageSrc from './image.png'; // Import your image file

function SocialLife() {
  return (
    <div className="SocialLifePage">
      
      <div className="Content">
        <div className="Section">
          <h1 className="Title">How does bias manifest in our social lives?</h1>
          <p className="Description">
          Biases in social settings often ostracize minorities due to homophily and in-group preference. If an individual views another individual as a member of their group, he/she is more likely to be positively biased and attracted to that person. There will also be a stronger feeling of loyalty to that person. On the contrary, an individual is indifferent to or even negatively disposed to those that are perceived as not a member to their group, or a member of an out-group. For example, when it comes to race, people unconsciously tend to hangout with those that look like them. This is because they usually have cultural similarities. Therefore, when in a setting that is predominantly occupied by a certain race, those that are not a part of that same race may struggle to build connections and are left outside of the social circle. Studies show that there also becomes an increased fear and dislike of those in the out-group due to those in the in-group never gaining comfortability with out-group members. 
Individuals that identify as LGBTQ+ may also face exclusion from certain social gatherings. It is important for these individuals to have safe spaces made for them due to the alarming risk of harassment and violence towards them. However, it is also important for LGBTQ+ individuals to feel accepted and respected in all spaces in order to not feel alienated. Stereotypes and misconceptions about LGBTQ+ individuals leads to even further isolation. 


          </p>
          <img src="https://media.istockphoto.com/id/1371940128/photo/multiracial-friends-taking-big-group-selfie-shot-smiling-at-camera-laughing-young-people.jpg?s=1024x1024&w=is&k=20&c=X-lSpe2zwmknKdbGN1dYNk0VL8FoHFQzlhsjICaUkVA=" alt="Image" className="RightImage" />
        </div>
        
        <div className="Section">
          <h1 className="Title">How can we combat this bias?</h1>
          <ul className="BulletPoints">
            <li>Cultivate empathy and compassion towards LGBTQ+ and minority individuals by promoting empathy-building exercises and initiatives that encourage opening up your perspective and understanding.</li>
            <li>Encourage open and respectful dialogue about LGBTQ+, racial, and gender diversity in orde to challenge stereotypes and address misconceptions</li>
            <li>Attend cultural events outside of your own culture to learn more about others</li>
            <li>Foster connections among LGBTQ+, racial, and gender diverse communities through support groups and social gatherings</li>
            <li>Reach out to those you feel are in an “out-group” genuinely; you may find more similarities than you originally thought</li>
            <li>If already in an organization, create events with other organizations that you don’t normally meet with in order to foster new connections</li>
          </ul>
        </div>
        <div className="Testimonials">
            Testimonials:
        </div>
        <div className="CircleContainer">
          <div className="Circle">
            <p>“On my sports team, I am one of two of the only minority individuals. Whenever the team would plan to attend a frat party together, her and I were always the last to be told about it. It made us feel like we weren’t really apart of the group socially.”</p>
          </div>
          <div className="Circle">
            <p>“As a black woman, when I am the only black person in a social setting, I feel invisible. There have been countless times where even if I try to join a conversation in a regular space outside of the classroom, my presence is not given the same energy my white female friends are given” </p>
          </div>
          <div className="Circle">
            <p>“The older I got the more I realized that I only had friends that were similar to me in race, gender, and sexual identity. After coming to college and opening up my perspective, I have tried to acknowledge my biases and build connections with others that aren’t apart of my same bubble”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialLife;

