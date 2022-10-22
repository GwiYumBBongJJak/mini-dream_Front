import Router from "./shared/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getJoin } from "./redux/modules/joinSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getJoin());
  }, [dispatch]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
