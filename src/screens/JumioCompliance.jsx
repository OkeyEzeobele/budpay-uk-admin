import React, { useState } from "react";
import styled, { css } from "styled-components";
import chroma from "chroma-js";
import { Printer, ArrowDown2, Profile } from "iconsax-react";

//Sections
import TopNavbar from "../components/Nav/TopNavbar";

export default function JumioCompliance() {
  const [score, setScore] = useState(71);
  return (
    <>
      <TopNavbar />
      <ScrollableContainer>
        <ResponsiveWrapper>
          <Container>
            <LeftColumn>
              <SummaryCard>
                <p
                  style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}
                >
                  Risk Score
                </p>
                <RulerWrapper>
                  <Ruler>
                    <ZeroMark>0</ZeroMark>
                    <FiftyMark>50</FiftyMark>
                    <SeventyMark>70</SeventyMark>
                    <HundredMark>100</HundredMark>
                    <Score
                      color={
                        score <= 50
                          ? "#E54A4A"
                          : score <= 70
                          ? "#EAC040"
                          : "#5FC163"
                      }
                      value={score}
                    />
                    <ScoreLabel
                      color={
                        score <= 50
                          ? "#E54A4A"
                          : score <= 70
                          ? "#EAC040"
                          : "#5FC163"
                      }
                      value={score}
                    >
                      {score}
                    </ScoreLabel>
                  </Ruler>
                </RulerWrapper>
                <p
                  style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}
                >
                  ID and Identity Verification
                </p>
                <Row>
                  <KeyText>Usability</KeyText>
                  <ValueWrapper>
                    <Dot />
                    PASSED
                  </ValueWrapper>
                </Row>
                <Row>
                  <KeyText>Data Checks</KeyText>
                  <ValueWrapper>
                    <Dot />
                    PASSED
                  </ValueWrapper>
                </Row>
                <Row>
                  <KeyText>Image Checks</KeyText>
                  <ValueWrapper>
                    <Dot />
                    PASSED
                  </ValueWrapper>
                </Row>
                <Row>
                  <KeyText>Extraction</KeyText>
                  <ValueWrapper>
                    <Dot />
                    PASSED
                  </ValueWrapper>
                </Row>
                <Row>
                  <KeyText>Similarity</KeyText>
                  <ValueWrapper>
                    <Dot />
                    PASSED
                  </ValueWrapper>
                </Row>
                <Row>
                  <KeyText>ID Type</KeyText>
                  <ValueText>Passport</ValueText>
                </Row>
                <Row>
                  <KeyText>DOB</KeyText>
                  <ValueText>1984-02-23</ValueText>
                </Row>
                <Row>
                  <KeyText>Document No</KeyText>
                  <ValueText>B50899344</ValueText>
                </Row>
                <Row>
                  <KeyText>First Name</KeyText>
                  <ValueText>Joe</ValueText>
                </Row>
                <Row>
                  <KeyText>Last Name</KeyText>
                  <ValueText>Wilson</ValueText>
                </Row>
                <Row>
                  <KeyText>Expiry</KeyText>
                  <ValueText>2030-04-26</ValueText>
                </Row>
                <Row>
                  <KeyText>Personal Number</KeyText>
                  <ValueText>23545444534</ValueText>
                </Row>
                <Row>
                  <KeyText>MRZ Format</KeyText>
                  <ValueText>MRP</ValueText>
                </Row>
                <Row>
                  <KeyText>Issuing Country</KeyText>
                  <ValueText>NGA</ValueText>
                </Row>
                <Spacer />
                <p
                  style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}
                >
                  Selfie Credential
                </p>
                <Row>
                  <KeyText>Usability</KeyText>
                  <ValueWrapper>
                    <Dot />
                    PASSED
                  </ValueWrapper>
                </Row>
                <Row>
                  <KeyText>Similarity</KeyText>
                  <ValueWrapper>
                    <Dot />
                    PASSED
                  </ValueWrapper>
                </Row>
                <Spacer />
                <p
                  style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}
                >
                  Facemap
                </p>
                <Row>
                  <KeyText>Usability</KeyText>
                  <ValueWrapper>
                    <Dot />
                    PASSED
                  </ValueWrapper>
                </Row>
                <Row>
                  <KeyText>Liveness</KeyText>
                  <ValueWrapper>
                    <Dot />
                    PASSED
                  </ValueWrapper>
                </Row>
              </SummaryCard>
            </LeftColumn>
            <RightColumn>
              <DocumentCard>
                <p
                  style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}
                >
                  Verified Documents
                </p>
                <FileRow>
                  <FileCard></FileCard>
                  <FileCard></FileCard>
                </FileRow>
                <FileRow>
                  <FileCard></FileCard>
                  <FileCard></FileCard>
                </FileRow>
              </DocumentCard>
              <DetailCard>
                <p
                  style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}
                >
                  Screening
                </p>
                <Row>
                  <KeyText>Status</KeyText>
                  <ValueWrapper>
                    <Dot />
                    SUCCESS
                  </ValueWrapper>
                </Row>
                <Row>
                  <KeyText>Search Date</KeyText>
                  <ValueText>2030-04-26 16:02:03</ValueText>
                </Row>
                <Row>
                  <KeyText>Search Reference</KeyText>
                  <ValueText>1683987918-zkXG_7K</ValueText>
                </Row>
                <Row>
                  <KeyText>Vendor</KeyText>
                  <ValueText>Comply Advantage</ValueText>
                </Row>
                <Row>
                  <KeyText>Count of Results</KeyText>
                  <ValueText>1</ValueText>
                </Row>
                <Row>
                  <KeyText>Search ID</KeyText>
                  <ValueText>1323223233232</ValueText>
                </Row>
                <Spacer />
                <p
                  style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}
                >
                  Transaction Metadata
                </p>
                <Row>
                  <KeyText>Vendor</KeyText>
                  <ValueText>Comply Advantage</ValueText>
                </Row>
                <Row>
                  <KeyText>Client IP Address</KeyText>
                  <ValueText>132.322.332.43</ValueText>
                </Row>
                <Row>
                  <KeyText>Initiated at</KeyText>
                  <ValueText>2023-05-13 14:21:58</ValueText>
                </Row>
                <Row>
                  <KeyText>Started at</KeyText>
                  <ValueText>2023-05-13 14:21:58</ValueText>
                </Row>
              </DetailCard>
            </RightColumn>
          </Container>
        </ResponsiveWrapper>
      </ScrollableContainer>
    </>
  );
}

const ScrollableContainer = styled.div`
  height: 100vh;
  overflow: auto;
`;
const ResponsiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  overflow: auto;

  @media (min-width: 760px) {
    margin-left: 250px;
  }

  @media (max-width: 760px) {
    margin-left: 30px;
    padding: 15px 20px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  align-items: stretch;
`;
const Card = styled.div`
  border-radius: 11px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const LeftColumn = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  margin-bottom: 10px;
`;
const RightColumn = styled.div`
  flex: 1;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10px;
`;
const SummaryCard = styled(Card)`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 25px;
`;
const Ruler = styled.div`
  width: 100%;
  height: 5px;
  position: relative;
  border-radius: 5px;
  background: linear-gradient(to right, #e54a4a 50%, #eac040 70%, #5fc163 100%);
`;
const RulerMark = styled.div`
  position: absolute;
  top: 5px;
  font-size: 9px;
  font-weight: bold;
`;
const ZeroMark = styled(RulerMark)`
  left: 0;
  color: #e54a4a;
`;
const FiftyMark = styled(RulerMark)`
  left: 50%;
  color: #eac040;
`;
const SeventyMark = styled(RulerMark)`
  left: 70%;
  color: #5fc163;
`;
const HundredMark = styled(RulerMark)`
  right: 0;
  color: #5fc163;
`;
const Score = styled.div`
  position: absolute;
  top: 5px;
  width: 2px;
  height: 15px;
  background-color: ${(props) => props.color};
  left: ${(props) => props.value}%;
`;
const ScoreLabel = styled.div`
  position: absolute;
  color: ${(props) => props.color};
  left: ${(props) => props.value}%;
  top: 20px;
  background: ${(props) => chroma(props.color).alpha(0.2)};
  border-radius: 20px;
  font-weight: bold;
  font-size: 10px;
  padding: 5px 10px;
  text-align: center;
  transform: translateX(-50%);
`;
const RulerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-bottom: 35px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;
const KeyText = styled.p`
  color: "#000";
  font-size: 11px;
`;
const ValueText = styled.p`
  color: "#000";
  font-size: 11px;
  font-weight: 700;
`;
const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 30px;
  background-color: #ecf4ef;
  color: #0dae0a;
  border: 1px solid rgba(13, 174, 10, 1);
  padding: 5px 15px;
  font-size: 11px;
  font-weight: bold;
`;
const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(13, 174, 10, 1);
`;
const Spacer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;
const DocumentCard = styled(Card)`
  flex: 0.5;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 25px;
`;
const DetailCard = styled(Card)`
  flex: 0.5;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 25px;
`;
const FileRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
  margin-top: 5px;
`;
const FileCard = styled(Card)`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  margin-right: 5px;
  padding: 25px;
  &:last-child {
    margin-right: 0;
  }
`;
