import React from "react";
import Title from "./Title";
import Form from "./Form";
import FormSide from "./FormSide";
function Body() {
  let sections = [1];
  const handleSection = () => {
    //add a section
    sections.push(1);
    console.log("added section");
  };
  return (
    <div className="container_body">
      <div className="container_body_contents">
        <Title />

        {sections.map((elem) => {
          return (
            <div
              className="section"
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <Form />
              <FormSide section={() => handleSection} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
