import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstHeading } from "../common";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstHeading>안녕하세요</FirstHeading>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
