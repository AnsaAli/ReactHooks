import React from "react";
import ContextProblem1 from "./components/ContextProblem1";
import UseCallbackProblem from "./components/UseCallbackProblem";
import UseMemoProblem from "./components/UseMemoProblem";
import UseReducerProblem from "./components/UseReducerProblem";
import UseContextHook from "./components/UseContextHook";

export const UserNameContext = React.createContext();
export const UserPlaceContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <div>
      <h1>UseCallBAck hook</h1>
      <UseCallbackProblem/>
     </div> */}
      {/* <div>
      <h1>UseMemo Hook</h1>
      <UseMemoProblem/>
     </div> */}
      {/* <div>
      <UseReducerProblem/>
     </div> */}
      {/* <div>
        <UserNameContext.Provider value={"Ansa"}>
          <UserPlaceContext.Provider value={"Ekm"}>
           
            <ContextProblem1 /> 
          </UserPlaceContext.Provider>
        </UserNameContext.Provider>
      </div> */}
      <div>
        <UserNameContext.Provider value={'Ansa'}>
          <UserPlaceContext.Provider value={'Ekm'}>
            <UseContextHook/>
          </UserPlaceContext.Provider>
        </UserNameContext.Provider>
      </div>
    </div>
  );
}

export default App;
