import React from "react";
import { useSelector } from "react-redux";

const useStoreState = () => {
  const state = useSelector((state) => state);
  return state;
};

export default useStoreState;
