import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(true);
  const [backdropOpen, toggleBackdrop] = useState(false);
  const thisRoute = useLocation().pathname

  // useEffect(() => {
  //   window.addEventListener("scroll", () => setY(window.scrollY));
  //   return () => {
  //     window.removeEventListener("scroll", () => setY(window.scrollY));
  //   };
  // }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && window.innerWidth <= 760 &&  <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "80px" } : { height: "100px" }}>
        <NavInner className="container flexSpaceCenter">
            <Link className="pointer" to="/" smooth={true} style={{marginLeft: -110, paddingLeft: 0 }} >
              <LogoIcon />
            </Link>
          <BorderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BorderWrapper>
          <UlWrapper className="flexNullCenter">
          <></>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BorderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
// const UlWrapperRight = styled.ul`
//   @media (max-width: 760px) {
//     display: none;
//   }
// `;
// const LeftSide = styled.div`
//   width: 50%;
//   margin: -5%;
//   @media (max-width: 960px) {
//     width: 100%;
//     order: 2;
//     margin: 50px 0;
//     text-align: center;
//   }
//   @media (max-width: 560px) {
//     margin: 80px 0 50px 0;
//   }
// `;
