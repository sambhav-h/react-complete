import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  // usreRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]);


  const CopyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,51)
    window.navigator.clipboard.writeText(Password)
  },[Password])


  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed,passwordGenerator])


  return (
    <div className="w-full max-w-md mx-auto rounded-lg px-4 py-2 my-8 text-white bg-gray-700 text-center">
      {" "}
      Password Generator
      <div className="flex shadow overflow-hidden mb-4 mt-1 justify-center align-center rounded-lg">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3 rounded-md text-black "
          placeholder="password"
          readOnly
          ref={passwordRef}
        />

        <button
        onClick={CopyPasswordToClipboard}
         className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ml-2 rounded-md">
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">


        <div className="flex items-center    gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>


        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>



        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>


      </div>
    </div>
  );
}

export default App;
