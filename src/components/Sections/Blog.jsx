import React from "react";
import styled from "styled-components";

//Sections
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";

// Components

//Assets
import HeaderImg from "../../assets/img/covlie_blog_illustration.svg";
import bgImg from "../../assets/img/page_heade_rbackgrnd_image.png"

export default function Blog() {
  return (
    <>
    <TopNavbar />
   <OutterWrapper>
    <Wrapper id="blog" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">What's new?</h1>
          <br></br><br></br>
          <HeaderP className="font25 regular">
            Here you will find an overview of the latest features and improvements and answers to questions about the product.
          </HeaderP>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImg} alt="office" style={{zIndex: 9}} />
        </ImageWrapper>
      </RightSide>
      {/* <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <TestimonialSlider />
        </div>
      </div> */}
    </Wrapper>
  </OutterWrapper>
  <br></br>
  <Footer/>
  </>
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
  width: 100%;
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

// const Wrapper = styled.section`
//   width: 100%;
//   padding-top: 20px;
// `;
// const HeaderInfo = styled.div`
//   margin-bottom: 30px;
//   @media (max-width: 860px) {
//     text-align: center;
//   }
// `;