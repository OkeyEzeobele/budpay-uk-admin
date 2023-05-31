import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Link as Link2} from "react-scroll"

// Components
import FullButton from "../Buttons/FullButton.jsx";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube,} from "react-icons/bs";

// Assets
import LogoImg from "../../assets/svg/bottomLogo";
import appleStore from "../../assets/img/download_from_apple_icon.png"
import playStore from "../../assets/img/download_from_playstore_icon.png"
import bgImg2 from "../../assets/img/try_demo_background_image.svg"
import HeaderImage4 from "../../assets/img/covlie_demo_illustration_I.svg";
import HeaderImage5 from "../../assets/img/covlie_demo_illustration_II.svg";


export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div>
        <TablesWrapper className="container flexSpaceCenter">
            <LeftSide2 className="flexCenter">
              <div>
                <h1 className="Bold font40">Subscribe to our <br></br>newsletter</h1>
                  <HeaderP className="font25 regular">
                    By subscribing, you are <br></br> agreeing to our <Link to="/"><u>Privacy Policy</u></Link>
                  </HeaderP>
              </div>
            </LeftSide2>
            <RightSide2>
              <div>
              <InputWrapper type="email" placeholder="Enter email address here">
              </InputWrapper>
                <BtnWrapper>
                  <FullButton title="Subscribe"/>
                </BtnWrapper>
              </div>
            </RightSide2>
        </TablesWrapper>
      </div>
      <br></br>
      <div  style={{backgroundImage: `url(${bgImg2})`}} >
      <br></br>
        <TablesWrapper2 className="container flexSpaceCenter">
            <LeftSide2 className="flexCenter">
              <div>
                <h1 className="Bold font40">Try our demo<br></br>version</h1>
                  <BtnWrapper>
                    <FullButton title="Try the app"/>
                  </BtnWrapper>
              </div>
            </LeftSide2>
            <RightSide2>
              <div>
              <ImageWrapper>
                <Img className="radius8" src={HeaderImage4} alt="office" style={{zIndex: 9}} />
              </ImageWrapper>
              </div>
            </RightSide2>
            <br></br><br></br>
            <RightSide2>
              <div>
              <ImageWrapper>
                <Img className="radius8" src={HeaderImage5} alt="office" style={{zIndex: 9}} />
              </ImageWrapper>
              </div>
            </RightSide2>
        </TablesWrapper2>
        <br></br>
      </div>
      <br></br>
      <div className="darkBg">
        <TablesWrapper className="container flexSpaceCenter">
          <LeftSide className="flexCenter">
          <div style={{padding:"20px"}}>
            <h1 className="Bold font25 whiteColor">Mobile App</h1>
            <br></br>
            <Link to="/" smooth={true}>
              <ImageWrapper>
                <Img className="radius8" src={playStore} alt="Play Store" style={{zIndex: 9}} />
              </ImageWrapper>
            </Link>
            <br></br>
            <Link to="/" smooth={true}>
              <ImageWrapper>
                <Img className="radius8" src={appleStore} alt="Play Store" style={{zIndex: 9}} />
              </ImageWrapper>
            </Link>
            </div>
          </LeftSide>
          <RightSide>
            <div style={{padding:"20px"}}>
              <h1 className="Bold font25 whiteColor">Legal</h1>
              <HeaderP className="font25 bold">
                <Link to="/" className="regular font25 whiteColor">Privacy Policy</Link>
              </HeaderP>
              <HeaderP className="font25 bold">
                <Link to="/" className="regular font25 whiteColor">Terms of Use</Link>
              </HeaderP>
            </div>
          </RightSide>
          <RightSide>
            <div style={{padding:"10px"}}>
              <h1 className="Bold font25 whiteColor" style={{marginTop: -60}}>Contact</h1>
              <HeaderP className="regular font25">
                {/* <span className="whiteColor">Ade-Super, Ondo, Ondo State, Nigeria</span><br></br> */}
                <a className="regular font25 whiteColor" href="mailto: support@covlie.com">support@covlie.com</a><br></br><a className="regular font25 whiteColor" href="tel:+2348100000000">+234 810 000 0000</a>
              </HeaderP>
              </div>
          </RightSide>
        </TablesWrapper>
        <hr></hr>
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link2 className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              {/* <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Fanatic
              </h1> */}
            </Link2>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - Famzzie, Lagos, Nigeria
            </StyleP>
              <div className="flexCenter" style={{padding:'flex'}}>
                <a className="whiteColor animate pointer font13" href="/" >
                  <BsFacebook size={28}/>&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a className="whiteColor animate pointer font13" href="/">
                  <BsTwitter size={28}/>&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a className="whiteColor animate pointer font13" href="/">
                  <BsInstagram size={28}/>&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a className="whiteColor animate pointer font13" href="/">
                  <BsYoutube size={28}/>
                </a>
              </div>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
const TablesWrapper = styled.div`
width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  ${'' /* width: 100%;
  height: 100%; */}
  margin: -5%
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
  ${'' /* width: 50%;
  height: 100%; */}
  margin: 50%
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
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
const LeftSide2 = styled.div`
  width: 30%;
  height: 100%;
  margin: -5%
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
const RightSide2 = styled.div`
  width: 40%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const BtnWrapper = styled.div`
  max-width: 150px;
  color: #828282;
  @media (max-width: 960px) {
    margin: 0 auto;
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

const TablesWrapper2 = styled.div`
width: 100%;
${'' /* background-image: url(${bgImg2}); */}
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

