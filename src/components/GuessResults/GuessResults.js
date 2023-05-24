import React from "react";
import Guess from "../Guess";
import { range } from '../../utils';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, 5, 1).map((num, index) => (
        <Guess key={index} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
