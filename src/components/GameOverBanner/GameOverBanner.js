import React from "react";

function GameOverBanner(gameStatus, answer, guesses) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          <strong>Sorry!</strong> The answer was <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default GameOverBanner;
