import React from 'react'
import Button from "./Button"
import Count from "./Count";
import { useCallback, useState } from "react";

const UseCallbackProblem = () => {
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(1000);
  
    const incrementAge = useCallback(() => {
      setAge(age + 1);
    }, [age]);
  
    const incrementSalary = useCallback(() => {
      setSalary(salary + 100);
    }, [salary]);
  return (
  
      <div className="App ">
       
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge}> increment Age</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
      </div>
    );

}
export  default UseCallbackProblem;