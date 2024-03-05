import { useState } from "react";

function App() {
  var [weight, setWeight] = useState(0);
  var [height, setHight] = useState(0);
  var [bmi, setBmi] = useState(0);

  var bmiCalculator = ()=>{
    setBmi(weight/(height*height))
    console.log(bmi);
  }

  return (
    <>
      <div className=" w-full h-screen bg-[url('https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzfGVufDB8fDB8fHww')] bg-cover flex items-center justify-center">
        <div className=" w-96 h-72 bg-gray-700/80 rounded-3xl flex flex-col px-5 py-3 text-orange-400">
          <label htmlFor="weight">Weigth (in kg)</label>
          <input type="number" id="weigth" placeholder={weight} className=" px-2" 
          onChange={(e)=> setWeight(e.target.value)}
          />
          <label htmlFor="hight">Hight (in meter)</label>
          <input type="number" id="higth" placeholder={height} className=" px-2" 
          onChange={(e)=> setHight(e.target.value)}
           />
          <button className=" py-3 mt-3 bg-emerald-600 rounded-xl"
          onClick={bmiCalculator}
          >
            Calculate
          </button>
          <h1 className=" text-center mt-2">The BMI is : {Math.floor(bmi)}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
