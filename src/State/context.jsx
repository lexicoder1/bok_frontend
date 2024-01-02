import { useState, createContext, useEffect, useRef } from "react";

export const tog = createContext();

function Context({ children }) {
  const [toggle, settoggle] = useState("hide");
  const [sliderbg, setsliderbg] = useState("");

  let refOne = useRef(null);
  let refTwo = useRef(null);
  useEffect(() => {
    // document.addEventListener("click", handleallelement);
    if (toggle === "show") {
      document.body.style.overflow = "hidden";
    } else if (toggle === "hide") {
      document.body.style.overflowY = "auto";
    }
  });

  const handleallelement = (e)=>{

    if(!refOne.current.contains(e.target)&&!refTwo.current.contains(e.target)){
      settoggle("hide")
      setsliderbg('')

    }
  }

  const handleToggle = () => {
    settoggle("show");
    setsliderbg("slidebar-background");
  };
  const hideToggle = () => {
    settoggle("hide");
    setsliderbg("");
  };

  return (
    <tog.Provider value={{ toggle, handleToggle, hideToggle }}>
      {children}
    </tog.Provider>
  );
}

export default Context;
