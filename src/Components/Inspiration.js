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
          <p>Let's talk about getting moving! Regular exercise isn't just about hitting the gym or sweating it out; 
            it's about giving your body and mind a serious boost. Picture this: you're pumping iron, crushing those 
            cardio workouts, and feeling like a superhero. Not only does it tone those muscles and keep your heart 
            in tip-top shape, but it's also like hitting the "reset" button on stress and anxiety. They say exercise 
            releases those "feel-good" hormones, and trust me, they're called that for a reason! Plus, it's not just 
            about feeling strong physically; it's about sharpening your mind and catching those Z's like a boss. 
            So let's lace up those sneakers and get ready to feel unstoppable!</p>
        </div>
        </div>
        <div className="inspiration-image">
          {/* Image for the first section */}
          <img src="/Assets/pilates.jpeg" alt="Pilates" />
        </div>
      </div>

      {/* Second section */}
      <div className="inspiration-section">
      <div className="inspiration-image">
          {/* Image for the second section */}
          <img src="/Assets/fruit.jpg" alt="Fruit" />
        </div>
      <div className="inspiration-content">
          <h3>You Are What You Eat?</h3>
          <div className="inspiration-text">
          {/* Copy for the second section */}
          <p>You know that feeling when you eat something really good, and it's like your whole body says, 
            "Thank you!"? That's the power of eating well! It's not just about filling your stomach; it's 
            about giving your body the fuel it needs to rock and roll. Good food isn't just tasty; it's 
            packed with all the good stuff your body craves—think vitamins, minerals, and all that jazz. 
            And it's not just about looking good; it's about feeling good, inside and out. So load up on 
            those fruits, veggies, whole grains, and lean proteins, and watch yourself shine from 
            the inside out!</p>
        </div>
      </div>
      </div>

      {/* Third section */}
      <div className="inspiration-section">
      <div className="inspiration-content">
      <h3>Drink Yo' H2O</h3>
        <div className="inspiration-text">
          {/* Copy for the third section */}
          <p>Water is like the MVP for your body and mind! It's not just about quenching your thirst; 
            it's about keeping everything running smoothly. Think of it as the ultimate refresher, 
            helping to carry nutrients, flush out the bad stuff, and keep your temperature in check. 
            Plus, staying hydrated is key for staying sharp mentally. Ever felt foggy-headed or tired? 
            That could be a sign you need to up your water game! So, bottoms up—your body and brain will 
            thank you for it!</p>
        </div>
        </div>
        <div className="inspiration-image">
          {/* Image for the third section */}
          <img src="/Assets/water.jpeg" alt="Water" />
        </div>
      </div>


      {/* Fourth section */}
      <div className="inspiration-section">
      <div className="inspiration-image">
          {/* Image for the second section */}
          <img src="/Assets/wine1.jpg" alt="Wine" />
          </div>
          <div className="inspiration-content">
          <h3>Mind & Soul</h3>
        <div className="inspiration-text">
          {/* Copy for the fourth section */}
          <p>Taking care of our minds and souls is super important for keeping our lives in balance. 
            In the craziness of everyday life, it's easy to forget about our mental and emotional 
            well-being. But things like mindfulness, meditation, journaling, or just doing things we 
            love are like soul food for our minds. They help us chill out, deal with stress, and find 
            our inner zen. Taking time for these self-care rituals lets us recharge, reflect, and get 
            back in touch with who we really are. So, kick back, relax, and give yourself some 
            TLC – your mind and soul will thank you for it!</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Inspiration;