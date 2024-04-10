import './Homepage.css'; // Import CSS file for styling
import React from "react";
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="Homepage">
      <div className="ImageContainer">
        <img src="https://static.scientificamerican.com/sciam/cache/file/89FF8E81-DB68-4EDC-95B6045E9E6EDA51_source.jpg?w=1000" alt="Unconscious Biases" className="MainImage" />
      </div>
      <div className="TextContainer">
        <div className="BlueTextRight">
          <p>
            Unconscious biases are social stereotypes about certain groups of people that individuals form outside their own conscious awareness. Everyone holds unconscious beliefs about various social and identity groups.
          </p>
        </div>
        <div className="BlueTextBelow">
          <p>
            Learn about how these biases affect the workplace, classroom, and social life - and how we can combat them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
