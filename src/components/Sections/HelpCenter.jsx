import React from "react";
import styled from "styled-components";

//Sections
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";

// Components
// import PricingTable from "../Elements/PricingTable";
// import FullButton from "../Buttons/FullButton";

// Assets
import HeaderImg from "../../assets/img/need_help.svg";
import bgImg from "../../assets/img/page_heade_rbackground_image1.png"

export default function Pricing() {
  return (
    <>
    <TopNavbar />
    <OutterWrapper>
      <Wrapper id="pricing" className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font60">Answers from <br></br>the team at Covlie</h1>
            <br></br><br></br>
              <div>
                <InputWrapper type="email" placeholder="Search articles">
                </InputWrapper>
                {/* <BtnWrapper>
                  <FullButton title="Subscribe"/>
                </BtnWrapper> */}
              </div>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper >
            <Img className="radius8" src={HeaderImg} alt="office" style={{zIndex: 9}} />
          </ImageWrapper>
        </RightSide>
      </Wrapper>
    </OutterWrapper>
    <Wrapper1 id="articles">
    <div className="container">
      <HeaderInfo>
        <h1 className="font40 extraBold">Frequently Asked Questions</h1>
        <h2 className=" extraBold">How do subscriptions work?</h2>
        <p className="font18">
        Yes, you can pay either monthly or yearly. If you choose to purchase an annual plan, you’ll receive a discounted price for each member. If you’re on a monthly plan, you’ll be charged immediately when you add new members. If you’re on an annual plan, you’ll be charged at the next monthly checkpoint for the year counting from the purchase date. Changes to the annual plan will be charged once per month max — so if you add multiple members throughout the month you will only be charged for changes once during the monthly checkpoint.
        </p>
        <br></br>
        <h2 className=" extraBold">How do subscriptions work?</h2>
        <p className="font18">
        Yes, you can pay either monthly or yearly. If you choose to purchase an annual plan, you’ll receive a discounted price for each member. If you’re on a monthly plan, you’ll be charged immediately when you add new members. If you’re on an annual plan, you’ll be charged at the next monthly checkpoint for the year counting from the purchase date. Changes to the annual plan will be charged once per month max — so if you add multiple members throughout the month you will only be charged for changes once during the monthly checkpoint.
        </p>
        <br></br>
        <h2 className=" extraBold">How do subscriptions work?</h2>
        <p className="font18">
        Yes, you can pay either monthly or yearly. If you choose to purchase an annual plan, you’ll receive a discounted price for each member. If you’re on a monthly plan, you’ll be charged immediately when you add new members. If you’re on an annual plan, you’ll be charged at the next monthly checkpoint for the year counting from the purchase date. Changes to the annual plan will be charged once per month max — so if you add multiple members throughout the month you will only be charged for changes once during the monthly checkpoint.
        </p>
      </HeaderInfo>
      </div>
    </Wrapper1>
    <br></br><br></br>
    <Footer/>
    </>
  );
}
const OutterWrapper = styled.div`
  width: 100%;
  background-image: url(${bgImg});
`;

const Wrapper1 = styled.section`
  width: 100%;
  padding: 50px 0;
  ${'' /* margin-top: -20px; */}
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

// const TablesWrapper = styled.div`
//   position: absolute;
//   top: 750px;
//   right: 240px;
//   width: 960px;
//   @media (max-width: 860px) {
//     flex-direction: column;
//   }
// `;
// const TableBox = styled.div`
//   width: 45%;
//   ${'' /* padding-top: -10px; */}
//   @media (max-width: 860px) {
//     width: 100%;
//     max-width: 370px;
//     margin: 0 auto
//   }
// `;
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
// const HeaderP = styled.div`
//   max-width: 470px;
//   padding: 15px 0 50px 0;
//   color: #2E3333;
//   line-height: 2.5rem;
//   @media (max-width: 960px) {
//     padding: 15px 0 50px 0;
//     text-align: center;
//     max-width: 100%;
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

const InputWrapper = styled.input`
  type: text;
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 10px;
  ::placeholder {
    color: grey;
  }
;`
// const BtnWrapper = styled.div`
// max-width: 150px;
// color: #828282;
// @media (max-width: 960px) {
//   margin: 0 auto;
// }
// `;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;