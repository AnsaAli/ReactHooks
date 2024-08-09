import UseCallbackProblem from "./components/UseCallbackProblem";
import UseMemoProblem from "./components/UseMemoProblem";
import UseReducerProblem from "./components/UseReducerProblem";


function App() {
  
  return (
    <div className="App" >
     {/* <div>
      <h1>UseCallBAck hook</h1>
      <UseCallbackProblem/>
     </div> */}
     {/* <div>
      <h1>UseMemo Hook</h1>
      <UseMemoProblem/>
     </div> */}
     <div>
      <UseReducerProblem/>
     </div>

    </div>
  );
}

export default App;
