import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Element3, Graph, MoneyRecive, EmptyWallet, Card, Profile2User, Like1, Setting2} from "iconsax-react";

// Assets
// import CloseIcon from "../../assets/svg/CloseIcon";
// import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const location = useLocation();
  const selected = location.pathname;
  const [hoveredLink, setHoveredLink] = useState(null);
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        {/* <div className="flexNullCenter"> */}
        {/* <LogoIcon /> */}
        {/* <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            Home
          </h1> */}
        {/* </div> */}
        {/* <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn> */}
      </SidebarHeader>

      <UlStyle>
        <NavLink
          onMouseEnter={() => setHoveredLink("/")}
          onMouseLeave={() => setHoveredLink(null)}
          to="/"
          className={`link ${selected === "/" ? "activeLink" : ""}`}
          spy={true}
          smooth={true}
          offset={-60}
        >
          <StyledLi className={selected === "/" ? "activeLink" : ""}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 15px",
              }}
            >
              {selected === "/" ? (
                <Element3
                  size={20}
                  variant={selected === "/" || hoveredLink === '/' ? "Bold" : undefined}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                />
              ) : (
                <Element3
                  size={20}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                  color={selected === "/" || hoveredLink === '/' ? "#644AE5" : "#7f8184"}
                />
              )}
              <span className="boldText coloredText">Insights</span>
            </div>
          </StyledLi>
        </NavLink>
        <NavLink
          onMouseEnter={() => setHoveredLink("/transactions")}
          onMouseLeave={() => setHoveredLink(null)}
          to="/transactions"
          className={`link ${selected === "/transactions" ? "activeLink" : ""}`}
          spy={true}
          smooth={true}
          offset={-60}
        >
          <StyledLi className={selected === "/transactions" ? "activeLink" : ""}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 15px",
              }}
            >
              {selected === "/transactions" ? (
                <Graph
                  size={20}
                  variant={selected === "/transactions" || hoveredLink === '/transactions' ? "Bold" : undefined}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                />
              ) : (
                <Graph
                  size={20}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                  color={selected === "/transactions" || hoveredLink === '/transactions' ? "#644AE5" : "#7f8184"}
                />
              )}
              <span className="boldText coloredText">Transactions</span>
            </div>
          </StyledLi>
        </NavLink>
        <NavLink
          onMouseEnter={() => setHoveredLink("/revenue")}
          onMouseLeave={() => setHoveredLink(null)}
          to="/revenue"
          className={`link ${selected === "/revenue" ? "activeLink" : ""}`}
          spy={true}
          smooth={true}
          offset={-60}
        >
          <StyledLi className={selected === "/revenue" ? "activeLink" : ""}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 15px",
              }}
            >
              {selected === "/revenue" ? (
                <MoneyRecive
                  size={20}
                  variant={selected === "/revenue" || hoveredLink === '/revenue' ? "Bold" : undefined}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                />
              ) : (
                <MoneyRecive
                  size={20}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                  color={selected === "/revenue" || hoveredLink === '/revenue' ? "#644AE5" : "#7f8184"}
                />
              )}
              <span className="boldText coloredText">Revenue</span>
            </div>
          </StyledLi>
        </NavLink>
        <NavLink
          onMouseEnter={() => setHoveredLink("/wallet")}
          onMouseLeave={() => setHoveredLink(null)}
          to="/wallet"
          className={`link ${selected === "/wallet" ? "activeLink" : ""}`}
          spy={true}
          smooth={true}
          offset={-60}
        >
          <StyledLi className={selected === "/wallet" ? "activeLink" : ""}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 15px",
              }}
            >
              {selected === "/wallet" ? (
                <EmptyWallet
                  size={20}
                  variant={selected === "/wallet" || hoveredLink === '/wallet' ? "Bold" : undefined}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                />
              ) : (
                <EmptyWallet
                  size={20}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                  color={selected === "/wallet" || hoveredLink === '/wallet' ? "#644AE5" : "#7f8184"}
                />
              )}
              <span className="boldText coloredText">Wallet</span>
            </div>
          </StyledLi>
        </NavLink>
        <NavLink
          onMouseEnter={() => setHoveredLink("/cards")}
          onMouseLeave={() => setHoveredLink(null)}
          to="/cards"
          className={`link ${selected === "/cards" ? "activeLink" : ""}`}
          spy={true}
          smooth={true}
          offset={-60}
        >
          <StyledLi className={selected === "/cards" ? "activeLink" : ""}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 15px",
              }}
            >
              {selected === "/cards" ? (
                <Card
                  size={20}
                  variant={selected === "/cards" || hoveredLink === '/cards' ? "Bold" : undefined}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                />
              ) : (
                <Card
                  size={20}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                  color={selected === "/cards" || hoveredLink === '/cards' ? "#644AE5" : "#7f8184"}
                />
              )}
              <span className="boldText coloredText">Cards</span>
            </div>
          </StyledLi>
        </NavLink>
        <NavLink
          onMouseEnter={() => setHoveredLink("/customers")}
          onMouseLeave={() => setHoveredLink(null)}
          to="/customers"
          className={`link ${selected === "/customers" ? "activeLink" : ""}`}
          spy={true}
          smooth={true}
          offset={-60}
        >
          <StyledLi className={selected === "/customers" ? "activeLink" : ""}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 15px",
              }}
            >
              {selected === "/customers" ? (
                <Profile2User
                  size={20}
                  variant={selected === "/customers" || hoveredLink === '/customers' ? "Bold" : undefined}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                />
              ) : (
                <Profile2User
                  size={20}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                  color={selected === "/customers" || hoveredLink === '/customers' ? "#644AE5" : "#7f8184"}
                />
              )}
              <span className="boldText coloredText">Customers</span>
            </div>
          </StyledLi>
        </NavLink>
        <NavLink
          onMouseEnter={() => setHoveredLink("/support")}
          onMouseLeave={() => setHoveredLink(null)}
          to="/support"
          className={`link ${selected === "/support" ? "activeLink" : ""}`}
          spy={true}
          smooth={true}
          offset={-60}
        >
          <StyledLi className={selected === "/support" ? "activeLink" : ""}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 15px",
              }}
            >
              {selected === "/support" ? (
                <Like1
                  size={20}
                  variant={selected === "/support" || hoveredLink === '/support' ? "Bold" : undefined}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                />
              ) : (
                <Like1
                  size={20}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                  color={selected === "/support" || hoveredLink === '/support' ? "#644AE5" : "#7f8184"}
                />
              )}
              <span className="boldText coloredText">Support</span>
            </div>
          </StyledLi>
        </NavLink>
        <NavLink
          onMouseEnter={() => setHoveredLink("/settings")}
          onMouseLeave={() => setHoveredLink(null)}
          to="/settings"
          className={`link ${selected === "/settings" ? "activeLink" : ""}`}
          spy={true}
          smooth={true}
          offset={-60}
        >
          <StyledLi className={selected === "/settings" ? "activeLink" : ""}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 15px",
              }}
            >
              {selected === "/settings" ? (
                <Setting2
                  size={20}
                  variant={selected === "/settings" || hoveredLink === '/settings' ? "Bold" : undefined}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                />
              ) : (
                <Setting2
                  size={20}
                  style={{
                    marginRight: "10px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                  color={selected === "/settings" || hoveredLink === '/settings' ? "#644AE5" : "#7f8184"}
                />
              )}
              <span className="boldText coloredText">Settings</span>
            </div>
          </StyledLi>
        </NavLink>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 250px;
  height: calc(100vh - 100px);
  position: fixed;
  top: 100px;
  padding: 0;
  background-color: #ffffff;
  left: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px 0;
`;

// const CloseBtn = styled.button`
//   border: 0px;
//   outline: none;
//   background-color: transparent;
//   padding: 10px;
// `;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0px 0;
  text-align: left;
  background-color: ${(props) => (props.selected ? "#EEF3FE" : "transparent")};
  cursor: pointer;
  .coloredText {
    color: #7f8184;
  }
  &:hover {
    background-color: #eef3fe;
    .coloredText {
      color: #644ae5;
    }
  }
  &.activeLink {
    background-color: #eef3fe;
    .coloredText {
      color: #644ae5;
    }
  }
  .boldText {
    font-weight: 400;
  }
`;

const UlStyle = styled.ul`
  width: 100%;
  .link {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px 0;
    text-align: left;
    cursor: pointer;

    &:hover,
    &.activeLink {
      color: #644ae5;
    }
  }
`;
