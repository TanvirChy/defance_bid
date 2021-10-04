import React from "react";
import "./singleWinner.css"
 
const SingleWinner = ({ win }) => {
  return (
    <div className='winnerItem'>
      <div className="winnername">{win.winnerName}</div>
      <div className="winneremail">{win.winingRoom}</div>
      <div className="winnerdesc"> {win.winingPrice} </div>
    </div>
  );
};

export default SingleWinner;
 