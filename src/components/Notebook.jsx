import React from 'react';
import '../App.css';

const Notebook = () => {
  const dreamDiaryEntry = `Last night, I had the most peculiar dream. I found myself in a vast forest, surrounded by towering trees that whispered secrets in the wind. As I wandered deeper into the woods, I stumbled upon a hidden glade where a shimmering pool reflected the stars above.<br /><br />
In the distance, I saw a figure cloaked in mist, beckoning me forward with a gentle gesture. Though hesitant, I felt compelled to follow. Each step brought me closer to understanding the mysteries of the dream realm.<br /><br />
As dawn broke and the dream faded, I awoke with a sense of wonder and curiosity, eager to explore the depths of my subconscious once more.`;

  const handleInterpretation = () => {
    // TODO: Add dream interpretation function
    console.log("Initiating dream interpretation...");
  };

  return (
    <div className="paper">
      <div className="lines">
        <h2 className="heading">Dear Dream Diary,</h2>
        <div
          className="text"
          contentEditable="true"
          spellCheck="false"
          dangerouslySetInnerHTML={{ __html: dreamDiaryEntry }}
        ></div>
        <button className="interpretation-button focus:outline-none" onClick={handleInterpretation}>
          What does it mean?
        </button>
      </div>
      <div className="holes hole-top"></div>
      <div className="holes hole-middle"></div>
      <div className="holes hole-bottom"></div>
    </div>
  );
};

export default Notebook;
