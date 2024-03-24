import React from 'react';
import './Inspiration.css'; 

function Inspiration() {
  return (
    <div className="inspiration-container">
      {/* First section */}
      <div className="inspiration-section">
      <div className="inspiration-content">
      <h3>Time to Move!</h3>
        <div className="inspiration-text">
          {/* Copy for the first section */}
          <p>Regular exercise is crucial for maintaining both physical and mental well-being. 
            Physically, exercise helps to strengthen muscles, improve cardiovascular health, 
            and maintain a healthy weight. It reduces the risk of chronic diseases such as 
            heart disease, diabetes, and obesity. Additionally, exercise releases endorphins, 
            often referred to as "feel-good" hormones, which can alleviate stress, anxiety, 
            and depression. Moreover, engaging in physical activity enhances cognitive function, 
            sharpens memory, and promotes better sleep patterns..</p>
        </div>
        </div>
        <div className="inspiration-image">
          {/* Image for the first section */}
          <img src="/Assets/pilates.jpeg" alt="Pilates" />
        </div>
      </div>

      {/* Second section */}
      <div className="inspiration-section">
        <div className="inspiration-text">
          {/* Copy for the second section */}
          <h2>Inspiration Section 2</h2>
          <p>This is the copy for the second inspiration section.</p>
        </div>
        <div className="inspiration-image">
          {/* Image for the second section */}
          <img src="/Assets/inspiration2.jpg" alt="Inspiration Image 2" />
        </div>
      </div>

      {/* Third section */}
      <div className="inspiration-section">
        <div className="inspiration-text">
          {/* Copy for the third section */}
          <h2>Inspiration Section 3</h2>
          <p>This is the copy for the third inspiration section.</p>
        </div>
        <div className="inspiration-image">
          {/* Image for the third section */}
          <img src="/Assets/inspiration3.jpg" alt="Inspiration Image 3" />
        </div>
      </div>

      {/* Fourth section */}
      <div className="inspiration-section">
        <div className="inspiration-text">
          {/* Copy for the fourth section */}
          <h2>Inspiration Section 4</h2>
          <p>This is the copy for the fourth inspiration section.</p>
        </div>
        <div className="inspiration-image">
          {/* Image for the fourth section */}
          <img src="/Assets/inspiration4.jpg" alt="Inspiration Image 4" />
        </div>
      </div>
    </div>
  );
}

export default Inspiration;