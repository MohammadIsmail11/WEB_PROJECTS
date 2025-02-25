import React, { useState } from 'react';

export default function Text() {
  // State to store the text entered in the textarea
  const [inputText, setInputText] = useState('');

  // Function to handle text change in the textarea
  const handleTextChange = (event) => {
    setInputText(event.target.value); // Update inputText state with the new text
  };

  // Function to convert text to uppercase
  const convertToUppercase = () => {
    const uppercaseText = inputText.toUpperCase(); // Convert inputText to uppercase
    setInputText(uppercaseText); // Update inputText state with the uppercase text
  };

  // Function to convert text to lowercase
  const convertToLowercase = () => {
    const lowercaseText = inputText.toLowerCase(); // Convert inputText to lowercase
    setInputText(lowercaseText); // Update inputText state with the lowercase text
  };

  // Function to capitalize the first letter of every word
  const capitalizeFirstLetter = () => {
    const words = inputText.split(' '); // Split the input text into words
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of each word
    });
    const capitalizedText = capitalizedWords.join(' '); // Join the words back into a single string
    setInputText(capitalizedText); // Update inputText state with the capitalized text
  };

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Example textarea
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        value={inputText} // Bind inputText state to the value of the textarea
        onChange={handleTextChange} // Call handleTextChange when text changes
      ></textarea>
      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={convertToUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary me-2" onClick={convertToLowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success" onClick={capitalizeFirstLetter}>
          Capitalize First Letter
        </button>
      </div>
    </div>
  );
}
