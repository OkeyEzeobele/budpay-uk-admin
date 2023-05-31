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
  const [sidebarOpen, toggleSidebar] = useState(false);
  const thisRoute = useLocation().pathname

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "80px" } : { height: "100px" }}>
        <NavInner className="container flexSpaceCenter">
            <Link className="pointer flexNullCenter" to="/" smooth={true} style={{marginLeft: 0 }} >
              <LogoIcon />
            </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={thisRoute ==='/blog'?{color:"#27ae60", padding: "10px 15px"}:{color:"2e3333", padding: "10px 15px"}} to="/blog" spy={true} smooth={true} offset={-80}>
                Blog
              </Link>
            </li> */}
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={thisRoute ==='/pricing'?{color:"#27ae60", padding: "10px 15px"}:{color:"#2e3333", padding: "10px 15px"}} to="/pricing" spy={true} smooth={true} offset={-80}>
                Pricing
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={thisRoute ==='/security'?{color:"#27ae60", padding: "10px 15px"}:{color:"2e3333", padding: "10px 15px"}} to="/security" spy={true} smooth={true} offset={-80}>
                Security
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={thisRoute ==='/help-center'?{color:"#27ae60", padding: "10px 15px"}:{color:"2e3333", padding: "10px 15px"}} to="/help-center" spy={true} smooth={true} offset={-80}>
                Help Center
              </Link>
            </li>
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
  border-bottom: 1px solid ;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
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
