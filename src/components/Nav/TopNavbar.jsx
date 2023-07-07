import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Profile, TextalignJustifycenter } from "iconsax-react";
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import LogoIcon from "../../assets/svg/Logo";

export default function TopNavbar() {
  const [sidebarOpen, toggleSidebar] = useState(window.innerWidth > 760);
  const location = useLocation();
  let title, subtitle;

  if(location.pathname === "/") {
    title = "Quick Insights";
    subtitle = "Here's what's happening";
} else if(location.pathname === "/transactions") {
    title = "Transactions";
    subtitle = "Here's what's happening";
} else if(location.pathname === "/revenue") {
    title = "Revenue";
    subtitle = "Here's what's happening";
} else if(location.pathname === "/wallet") {
    title = "Wallet";
    subtitle = "Here's what's happening";
} else if(location.pathname === "/cards") {
    title = "Cards";
    subtitle = "Here's what's happening";
} else if(location.pathname === "/customers") {
    title = "Customers";
    subtitle = "Here's what's happening";
} else if(location.pathname === "/support") {
    title = "Support";
    subtitle = "Check Tickets";
} else if(location.pathname === "/settings") {
    title = "Settings";
    subtitle = "Here's what's happening";
} else if(location.pathname.includes("aml-compliance")) {
    title = "AML Compliance";
    subtitle = "";
} else if(location.pathname.includes("jumio-compliance")) {
    title = "Jumio Compliance";
    subtitle = "";
} else if(/\/customers\/details\/.*/.test(location.pathname)) {
  title = "Customer Details";
  subtitle = "";
}
else {
    title = "Quick Insights";
    subtitle = "Here's what's happening";
}


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        toggleSidebar(false);
      } else {
        toggleSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && window.innerWidth <= 760 && (
        <Backdrop toggleSidebar={toggleSidebar} />
      )}

      <Wrapper>
        <NavInner>
          {window.innerWidth <= 760 && (
            <BorderWrapper onClick={() => toggleSidebar(!sidebarOpen)}>
              <TextalignJustifycenter variant="undefined" />
            </BorderWrapper>
          )}

          <LeftContainer>
            <Link to="/">
              <LogoIcon />
            </Link>
            <TextWrapper>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </TextWrapper>
          </LeftContainer>

          <ProfileWrapper>
            <Profile size={50} variant="Bold" />
          </ProfileWrapper>
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
  z-index: 9999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BorderWrapper = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  margin-right: 15px;
  @media (max-width: 760px) {
    display: block;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 8rem;

  @media (max-width: 760px) {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.6rem;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 0.8rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #7f8184;

  @media (max-width: 760px) {
    font-size: 0.7rem;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef3fe;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 760px) {
    margin-top: 1rem;
  }
`;
