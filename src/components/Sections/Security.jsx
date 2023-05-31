import React from "react";
import styled from "styled-components";

//Sections
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";

// Components
// import BlogBox from "../Elements/BlogBox";
// import FullButton from "../Buttons/FullButton";
// import TestimonialSlider from "../Elements/TestimonialSlider";
//Assets
import HeaderImg from "../../assets/img/secHeader.svg";
import bgImg from "../../assets/img/page_heade_rbackgrnd_image.png"
import HeaderImage from "../../assets/img/covlie_instant_consultation_illustration.svg";
import bgImg2 from "../../assets/img/page_heade_rbackground_image_copy.svg"

export default function Blog() {
  return (
      <>
      <TopNavbar />
    <OutterWrapper >
      <Wrapper id="blog" className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font60">Data Security</h1>
            <br></br><br></br>
            <HeaderP className="font25 regular" style={{width: 500}}>
              Data is encrypted at rest and in transit using military grade encryption algorithm, 256-bit advanced encrytion standard (AES).
            </HeaderP>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img className="radius8" src={HeaderImg} alt="office" style={{zIndex: 9}} />
          </ImageWrapper>
        </RightSide>
      </Wrapper>
    </OutterWrapper>
    <div className="container flexSpaceCenter" style={{marginTop: 20}}>
    <HeaderInfo>
      <h1 className="font40 extraBold">AES-256 was adopted for the following reasons:</h1>
    </HeaderInfo>
    </div>
    <OutterWrapper2 className="flexSpaceCenter" style={{marginTop: 50}}>
      <LeftSide className="flexCenter">
        <ImageWrapper >
            <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
        </ImageWrapper>
      </LeftSide>
      <RightSide className="flexCenter">
        <div>
          <HeaderP className="font25 regular">
          <ul>
          &bull; It is FIPS approved cryptographic<br></br>algorithm used to protect electronic data.<br></br><br></br>
          &bull; AES-256 is considered virtually unbreakable
          </ul>
          </HeaderP>
        </div>
      </RightSide>
    </OutterWrapper2>
    <br></br><br></br><br></br><br></br>
    <Footer/>
    </>
  );
}

const OutterWrapper = styled.div`
  width: 100%;
  background-image: url(${bgImg});
`;
const OutterWrapper2 = styled.div`
  width: 100%;
  background-image: url(${bgImg2});
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

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
// const TablesWrapper = styled.div`
// width: 100%;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;