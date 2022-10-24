import { useEffect, useState } from "react";
import { useStickyStateResults } from "../../../types/general.types";

const useStickyState = () => {
  const DEFAULT_VALUE = "cream";
  const KEY = "theme-color";
//   const [value, setValue] = useState<string>("cream");

//   useEffect(() => {
    // const stickyValue: string | null = localStorage.getItem(KEY);
    // if (stickyValue !== null) {
    //   setValue(stickyValue);
//     }
//   }, [value]);

  const setItem = (value: string): void => {
    localStorage.setItem(KEY, value);
    // setValue(value);
  };

//   return {setItem};
};

export default useStickyState;
