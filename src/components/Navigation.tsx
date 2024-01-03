import React, { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoffBar from "./App";
type objectType = {
  link?: string;
  name?: string;
};
type Props = objectType[];
interface MyComponentProps {
  data: Props;
  children: ReactNode[];
  bgcolor?: string;
  textColor?: string;
  textStroke?: string;
  closeButton?: string;
  closeActive?: string;
}

function Navigation({
  data,
  children = [],
  bgcolor,
  textColor,
  textStroke = "black",
  closeButton = "black",
  closeActive = "white",
}: MyComponentProps) {
  return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MoffBar
                data={data}
                bgcolor={`${bgcolor}`}
                textColor={`${textColor}`}
                textStroke={`${textStroke}`}
                closeButton={`${closeButton}`}
                closeActive={`${closeActive}`}
              />
            }
          >
            {children.map((item, index) => (
              <Route path={`${data[index].link}`} element={item} />
            ))}
          </Route>
        </Routes>
      </Router>
  );
}

export default Navigation;
