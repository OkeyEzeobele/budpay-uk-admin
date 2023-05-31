import React from "react";
import styled from "styled-components";

//Sections
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";

// Components
import PricingTable from "../Elements/PricingTable";

// Assets
import HeaderImg from "../../assets/img/covlie_pricing_illustration.svg";
import bgImg from "../../assets/img/page_heade_rbackground_image1.png"

export default function Pricing() {
  return (
    <>
    <TopNavbar />
    <OutterWrapper>
      <Wrapper id="pricing" className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font60">Pay bills with <br></br>ease</h1>
            <br></br><br></br>
            <HeaderP className="font25 regular">
              Covlie gives you and your physician a central place to pay your bills seamlessly.
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
    <Wrapper1 id="pricing">
      <div className="whiteBg">
        <div className="container">
          <TablesWrapper1 className="flexSpaceNull">
            <TableBox style={{zIndex:1, marginTop: -150}}>
              <PricingTable
                price="$5/month"
                title="Patients"
                offers={[
                  { name: "Instant Access to medical consultation", cheked: true },
                  { name: "Receive post-treatment checkup via instant messaging", cheked: true },
                  { name: "Port data when needed(Relocation, dissatisfaction with current healthcare provider)", cheked: true },
                  { name: "Pay hospital bills with debit cards", cheked: true },
                  { name: "Digital drugs prescription", cheked: true },
                  { name: "Access to medical records", cheked: true },
                  { name: "Technical support", cheked: true },
                ]}
              />
            </TableBox>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <TableBox style={{zIndex:2, marginTop: -150}}>
              <PricingTable
                price="$20 user/month"
                title="Hospital"
                offers={[
                  { name: "Electronic medical record storage", cheked: true },
                  { name: "Comprehensive overview of hospital finances", cheked: true },
                  { name: "Efficient use of personnel availability", cheked: true },
                  { name: "Patient consultation via telemedicine", cheked: true },
                  { name: "Digital billing of patients", cheked: true },
                  { name: "Inventory management", cheked: true },
                  { name: "Technical support", cheked: true },
                ]}
              />
            </TableBox>
          </TablesWrapper1>
        </div>
      </div>
    </Wrapper1>
    {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
    <hr></hr>
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
const TableBox = styled.div`
  width: 45%;
  ${'' /* padding-top: -10px; */}
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
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
const TablesWrapper1 = styled.div`
width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;