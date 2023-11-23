import "./App.css";
import { useRef } from "react";
import { useState } from "react";
import { useReducer } from "react";

const reducer = (state,action) => {

  switch (action.type){
    case "Superman":
      return{
        nem: "Superman",
        gap: "4.0",
        cot: "Metropolis",
      };
      case "Batman":
      return{
        nem: "Batman",
        gap: "4.0",
        cot: "Gotham",
      };
      case "WonderWoman":
      return{
        nem: "Wonder Woman",
        gap: "4.0",
        cot: "Athens",
      };
      case "Mario":
      return{
        nem: "Mario Mario",
        gap: "3.75",
        cot: "Italy",
      };
      case "Luigi":
      return{
        nem: "Luigi Mario",
        gap: "3.75",
        cot: "Brooklyn",
      };
      case "Sonic":
      return{
        nem: "Maurice 'Sonic' Oglivue",
        gap: "3.25",
        cot: "Green Hills",
      };
      case "Tails":
      return{
        nem: "Miles Prower",
        gap: "4.0",
        cot: "Emerald Hill",
      };
      case "Link":
      return{
        nem: "Link",
        gap: "3.9",
        cot: "Hyrule",
      };
      case "Zelda":
      return{
        nem: "Zelda Hyrule",
        gap: "4.25",
        cot: "Hyrule",
      };
      case "Donkey":
      return{
        nem: "Donkey Kong",
        gap: "2.75",
        cot: "New Donk City",
      };
      case "Samus":
      return{
        nem: "Samus Aran",
        gap: "3.9",
        cot: "Zebes",
      };
    default:
      return state
  }
  
  }

function App() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    gpa: "",
    cohort: ""
  })
  
  const inputRef = useRef(null);

  const [currentWord, setCurrentWord] = useState("");

  const handleChange = () => {
    let content = inputRef.current.value;
    console.log("Content: ", content);
    setCurrentWord(content);
    console.log(content);
  };

  // -----> Using Arrays
  const possibleCandidates = [
    { name: "Superman", gpa: "4.0", cohort: "Metropolis"},
    { name: "Batman", gpa: "4.0", cohort: "Gotham" },
    { name: "Wonder Woman", gpa: "4.0", cohort: "Athens" },
    { name: "Grogu", gpa: "5.0", cohort: "Dabogah" }
  ];
  // ----> Mapping
  const star_Students = possibleCandidates.map((scholar, n) => {
    return (
      <div className="recruit" key={n}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h3>{scholar.name}</h3>
          <h3>{scholar.cohort}</h3>
        </div>
      </div>
    );
  });


  // ------> Using Objects
  const valedictorian = {
    name: "Grogu Yoda",
    gpa: "5.0",
    cohort: "Dagobah",
  };
  // ----> Mapping
  const triWiz = Object.keys(valedictorian).map((key, index) => {
    return (
      <h1 className="grogu" key={index}>
        {key}: {valedictorian[key]}
      </h1>
    );
  });

  return (
    <div className="App">
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
          <h2>Students</h2>
          <h2>Cohort</h2>
        </div>
      {star_Students}
      {/* ---> Calling Array Map */}
      {triWiz}
      {/* ----> Calling Object Keys */}

      <input type="text" ref={inputRef} />
      <button onClick={handleChange}>Submit Name</button>
      <button onClick={()=>{dispatch({type: `${currentWord}` })}}>Retrieve Info</button>
      <div>Name: {state.nem}</div>
      <div>GPA: {state.gap}</div>
      <div>Cohort: {state.cot}</div>

    </div>
  );
}

export default App;