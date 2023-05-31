import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
  IoEllipse,
} from "react-icons/io5";

// Components
import Individuals from "../Elements/individuals";
import Hospitals from "../Elements/hospitals";

export default function Details() {

  const [text, setText] = useState("Individuals");
  return (
    <>
      <div>
        <HeaderInfo className="flexCenter">
          <div className="container flexCenter">
            <h1 className="font40 extraBold">Why Covlie?</h1>
          </div>
        </HeaderInfo>
        <div>
          <div className="flexCenter">
            {text === "Individuals" ? (
              <div className="flexCenter">
                <IconContext.Provider
                  id="left"
                  value={{ style: { color: "rgb(189,189,189)" } }}
                >
                  <IoChevronBackCircleOutline
                    size={84}
                    onClick={() => setText("Individuals")}
                  />
                </IconContext.Provider>
                <p className="font25">{text}</p>
                <IconContext.Provider value={{ style: { color: "#707070" } }}>
                  <IoChevronForwardCircleOutline
                    size={84}
                    onClick={() => setText("Hospitals")}
                  />
                </IconContext.Provider>
              </div>
            ) : (
              <div className="flexCenter">
                <IconContext.Provider
                  id="left"
                  value={{ style: { color: "#707070" } }}
                >
                  <IoChevronBackCircleOutline
                    size={84}
                    onClick={() => setText("Individuals")}
                  />
                </IconContext.Provider>
                <p className="font25">&nbsp;{text}&nbsp;</p>
                <IconContext.Provider value={{ style: { color: "rgb(189,189,189)"  } }}>
                  <IoChevronForwardCircleOutline
                    size={84}
                    onClick={() => setText("Hospitals")}
                  />
                </IconContext.Provider>
              </div>
            )}
          </div>
          <div className="flexCenter">
            {text === "Individuals" ? (
              <div>
                <IconContext.Provider
                  value={{
                    style: { color: "rgb(39,174,96)", fontSize: "20px" },
                  }}
                >
                  <IoEllipse />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    style: { color: "rgb(189,189,189)", fontSize: "20px" },
                  }}
                >
                  <IoEllipse />
                </IconContext.Provider>
              </div>
            ) : (
              <div>
                <IconContext.Provider
                  value={{
                    style: { color: "rgb(189,189,189)", fontSize: "20px" },
                  }}
                >
                  <IoEllipse />
                </IconContext.Provider>

                <IconContext.Provider
                  value={{
                    style: { color: "rgb(39,174,96)", fontSize: "20px" },
                  }}
                >
                  <IoEllipse />
                </IconContext.Provider>
              </div>
            )}
          </div>
          {text === "Individuals" ? <Individuals/> : <Hospitals/>}
        </div>
      </div>
    </>
  );
}

const HeaderInfo = styled.div`
  width: 100%;
  padding: 50px 0;
  color: #2e3333;
  opacity: 1;
  @media (max-width: 515px) {
    text-align: center;
  }
`;
