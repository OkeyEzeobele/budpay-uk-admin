import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImg from "../../assets/img/covlie_homepage_illustration.svg";
import bgImg from "../../assets/img/page_heade_rbackground_image.svg"


export default function Header() {
  return (
    <OutterWrapper>
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">...health without borders</h1>
          <br></br><br></br>
          <HeaderP className="font25 regular">
            Covlie gives you and your physician<br></br> a central place to talk about your health,<br></br> and make decisions seamlessly.
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Try the app"/>
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImg} alt="office" style={{zIndex: 9}} />
        </ImageWrapper>
      </RightSide>
    </Wrapper>
    </OutterWrapper>
  );
}

const OutterWrapper = styled.div`
  width: 100%;
  background-image: url(${bgImg});
`;

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  color: #2E3333;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  color: #2E3333;
  line-height: 2.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
// const GreyDiv = styled.div`
//   width: 30%;
//   height: 700px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: 0;
//   @media (max-width: 960px) {
//     display: none;
//   }
// `;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
// const QuoteWrapper = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 50px;
//   max-width: 330px;
//   padding: 30px;
//   z-index: 99;
//   @media (max-width: 960px) {
//     left: 20px;
//   }
//   @media (max-width: 560px) {
//     bottom: -50px;
//   }
// `;
// const QuotesWrapper = styled.div`
//   position: absolute;
//   left: -20px;
//   top: -10px;
// `;
// const DotsWrapper = styled.div`
//   position: absolute;
//   right: -100px;
//   bottom: 100px;
//   z-index: 2;
//   @media (max-width: 960px) {
//     right: 100px;
//   }
//   @media (max-width: 560px) {
//     display: none;
//   }
// `;


