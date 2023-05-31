import React from "react";
import styled from "styled-components";

//Assets
import HeaderImage from "../../assets/img/covlie_instant_consultation_illustration.svg";
import HeaderImage2 from "../../assets/img/covlie_wireless_posthospt_illustration.svg";
import HeaderImage3 from "../../assets/img/covlie_transfer_medical_data_illustration.svg";
import bgImg2 from "../../assets/img/page_heade_rbackground_image_copy.svg";

export default function Hospitals() {
  return (
    <div>
      <div style={{ marginTop: 0 }}>
        <OutterWrapper className="flexSpaceCenter" style={{ marginTop: 50 }}>
          <LeftSide className="flexCenter">
            <div>
              <h1 className="Bold font35">Instant Consultation</h1>
              <HeaderP className="font25 regular">
                A time saving consultation between physicians and patients -
                from home, work or anywhere
              </HeaderP>
            </div>
          </LeftSide>
          <RightSide className="flexCenter">
            <ImageWrapper>
              <Img
                className="radius8"
                src={HeaderImage}
                alt="office"
                style={{ zIndex: 9 }}
              />
            </ImageWrapper>
          </RightSide>
        </OutterWrapper>
        <Wrapper className="flexSpaceCenter">
          <LeftSide className="flexCenter">
            <ImageWrapper>
              <Img
                className="radius8"
                src={HeaderImage2}
                alt="office"
                style={{ zIndex: 9, marginRight: 150 }}
              />
            </ImageWrapper>
          </LeftSide>
          <RightSide className="flexCenter">
            <div>
              <h1 className="Bold font35">Wireless post-hospital treatment</h1>
              <HeaderP className="font25 regular">
                Have your personnel check up on you all through your treatment
                and post treatment periods through instant messaging
              </HeaderP>
            </div>
          </RightSide>
        </Wrapper>
        <OutterWrapper className="flexSpaceCenter">
          <LeftSide className="flexCenter">
            <div>
              <h1 className="Bold font35">
                Transfer your medical data with ease
              </h1>
              <HeaderP className="font25 regular">
                Relocating or disappointed with your current healthcare
                providers? You can port your medical record
              </HeaderP>
            </div>
          </LeftSide>
          <RightSide className="flexCenter">
            <ImageWrapper>
              <Img
                className="radius8"
                src={HeaderImage3}
                alt="office"
                style={{ zIndex: 9, marginLeft: -100 }}
              />
            </ImageWrapper>
          </RightSide>
        </OutterWrapper>
      </div>
    </div>
  );
}

const OutterWrapper = styled.div`
  width: 100%;
  background-image: url(${bgImg2});
`;
const Wrapper = styled.section`
  width: 100%;
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
  color: #2e3333;
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
