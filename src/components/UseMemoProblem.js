import React, { useMemo, useState } from "react";

const UseMemoProblem = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [countertwo, setCountertwo] = useState(0);

  const incrementCounterone = () => {
   
    setCounterOne(counterOne + 1);
  };
  const incrementCountetwo = () => {
    setCountertwo(countertwo + 1);
  };

  const isEven = useMemo(()=>{
    let i=0;
    while(i < 2000000000) i++ //manually adding time consuming loop
    return counterOne % 2 === 0
  },[counterOne])

  return (
    <div>
      <div>
        <button onClick={incrementCounterone}>
          Counter One - {counterOne}
        </button>
        <span>{ isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementCountetwo}>Counter Two - {countertwo}</button>
      </div>
    </div>
  );
};

export default UseMemoProblem;
