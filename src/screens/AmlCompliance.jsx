import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Profile } from "iconsax-react";
import ReactCountryFlag from "react-country-flag";
import chroma from "chroma-js";

//Sections
import TopNavbar from "../components/Nav/TopNavbar";

export default function AmlCompliance() {
  const [score, setScore] = useState(59);
  const riskProfile = [
    {
      riskFactor: "Customer Classification",
      name: "Individual",
      weightingFactor: 10,
      score: 1,
      status: "Passed",
      weightedScore: 10,
    },
    {
      riskFactor: "Profession",
      name: "Casino Manager",
      weightingFactor: 10,
      score: 2,
      status: "Review",
      weightedScore: 20,
    },
    {
      riskFactor: "Country of Origin",
      name: "UK",
      weightingFactor: 5,
      score: 3,
      status: "Passed",
      weightedScore: 15,
    },
    {
      riskFactor: "Country of Tax Residence",
      name: "UK",
      weightingFactor: 15,
      score: 3,
      status: "Passed",
      weightedScore: 45,
    },
    {
      riskFactor: "Purpose of Account",
      name: "Virtual Card",
      weightingFactor: 15,
      score: 3,
      status: "MLRO Approval",
      weightedScore: 45,
    },
    {
      riskFactor: "Presence of PEP",
      name: "Yes",
      weightingFactor: 15,
      score: 3,
      status: "Review",
      weightedScore: 45,
    },
    {
      riskFactor: "Adverse Media Presence",
      name: "Criminal Activity",
      weightingFactor: 15,
      score: 3,
      status: "MLRO Approval",
      weightedScore: 45,
    },
  ];
  const Table = ({ data }) => (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th
            style={{
              color: "rgba(0, 0, 0, 0.6)", // #000000 with 60% opacity
              borderBottom: "1px solid #C2C2C2",
              textAlign: "center",
              height: "60px",
              verticalAlign: "middle",
              fontSize: "14px",
            }}
          >
            Transaction
          </th>
          <th
            style={{
              color: "rgba(0, 0, 0, 0.6)", // #000000 with 60% opacity
              borderBottom: "1px solid #C2C2C2",
              textAlign: "center",
              height: "60px",
              verticalAlign: "middle",
              fontSize: "14px",
            }}
          >
            Category
          </th>
          <th
            style={{
              color: "rgba(0, 0, 0, 0.6)", // #000000 with 60% opacity
              borderBottom: "1px solid #C2C2C2",
              textAlign: "center",
              height: "60px",
              verticalAlign: "middle",
              fontSize: "14px",
            }}
          >
            Weighting Factor
          </th>
          <th
            style={{
              color: "rgba(0, 0, 0, 0.6)", // #000000 with 60% opacity
              borderBottom: "1px solid #C2C2C2",
              textAlign: "center",
              height: "60px",
              verticalAlign: "middle",
              fontSize: "14px",
            }}
          >
            Score
          </th>
          <th
            style={{
              color: "rgba(0, 0, 0, 0.6)", // #000000 with 60% opacity
              borderBottom: "1px solid #C2C2C2",
              textAlign: "center",
              height: "60px",
              verticalAlign: "middle",
              fontSize: "14px",
            }}
          >
            Status
          </th>
          <th
            style={{
              color: "rgba(0, 0, 0, 0.6)", // #000000 with 60% opacity
              borderBottom: "1px solid #C2C2C2",
              textAlign: "center",
              height: "60px",
              verticalAlign: "middle",
              fontSize: "14px",
            }}
          >
            Weighted Score
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} style={{ borderBottom: "1px solid #C2C2C2" }}>
            <td
              style={{
                color: "#000",
                textAlign: "center",
                height: "40px",
                verticalAlign: "middle",
                fontSize: "12px",
              }}
            >
              {item.riskFactor}
            </td>
            <td
              style={{
                color: "#000",
                textAlign: "center",
                height: "40px",
                verticalAlign: "middle",
                fontSize: "12px",
              }}
            >
              {item.name}
            </td>
            <td
              style={{
                color: "#000",
                textAlign: "center",
                height: "40px",
                verticalAlign: "middle",
                fontSize: "12px",
              }}
            >
              {item.weightingFactor}
            </td>
            <td
              style={{
                color: "#000",
                textAlign: "center",
                height: "40px",
                verticalAlign: "middle",
                fontSize: "12px",
              }}
            >
              {item.score}
            </td>
            <td
              style={{
                textAlign: "center",
                height: "40px",
                verticalAlign: "middle",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  color:
                    item.status === "Passed"
                      ? "#0DAE0A"
                      : item.status === "Review"
                      ? "#AE800A"
                      : "#AE0A0A",
                  backgroundColor:
                    item.status === "Passed"
                      ? "rgba(13, 174, 10, 0.5)"
                      : item.status === "Review"
                      ? "rgba(174, 128, 10, 0.5)"
                      : "rgba(174, 10, 10, 0.5)",
                  padding: "3px",
                  borderRadius: "5px",
                  width: "60%",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item.status}
              </div>
            </td>
            <td
              style={{
                color: "#000",
                textAlign: "center",
                height: "40px",
                verticalAlign: "middle",
                fontSize: "12px",
              }}
            >
              {item.weightedScore}
            </td>
          </tr>
        ))}
        <tr style={{ borderBottom: "none" }}>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td
            style={{
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#000000",
              textAlign: "center",
              height: "40px",
              verticalAlign: "middle",
            }}
          >
            Score Card
          </td>
          <td
            style={{
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#000000",
              textAlign: "center",
              height: "40px",
              verticalAlign: "middle",
            }}
          >
            {score}
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <>
      <TopNavbar />
      <ScrollableContainer>
        <ResponsiveWrapper>
          <TopContainer>
            <ProfileCard>
              <ProfileWrapper>
                <Profile size={300} variant="Bold" />
              </ProfileWrapper>
              <VerticalWrapper>
                <p style={{ color: "#000", fontSize: "22px" }}>Joe Wilson</p>
                <p style={{ color: "#676767", fontSize: "16px" }}>
                  joewilson@gmail.com
                </p>
                <CountrySection>
                  <FlagWrapper>
                    <ReactCountryFlag
                      countryCode="GB"
                      svg
                      style={{
                        width: "130%",
                        height: "130%",
                      }}
                    />
                  </FlagWrapper>
                  United Kingdom
                </CountrySection>
              </VerticalWrapper>
            </ProfileCard>
            <SummaryCard>
              <Row>
                <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                  <p style={{ color: "#676767", fontSize: "16px" }}>
                    Customer Name
                  </p>
                  <p style={{ color: "#000", fontSize: "18px" }}>Joe Wilson</p>
                </VerticalWrapper>
                <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                  <p style={{ color: "#676767", fontSize: "16px" }}>
                    Business Relationship
                  </p>
                  <p style={{ color: "#000", fontSize: "18px" }}>Client</p>
                </VerticalWrapper>
                <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                  <p style={{ color: "#676767", fontSize: "16px" }}>
                    Customer ID
                  </p>
                  <p style={{ color: "#000", fontSize: "18px" }}>23</p>
                </VerticalWrapper>
                <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                  <p style={{ color: "#676767", fontSize: "16px" }}>
                    Date of Onboarding
                  </p>
                  <p style={{ color: "#000", fontSize: "18px" }}>23/05/2023</p>
                </VerticalWrapper>
              </Row>
              <Row>
                <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                  <p style={{ color: "#676767", fontSize: "16px" }}>
                    KYC Review Date
                  </p>
                  <p style={{ color: "#000", fontSize: "18px" }}> 24/05/2023</p>
                </VerticalWrapper>
                <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                  <p style={{ color: "#676767", fontSize: "16px" }}>
                    Country of Origin
                  </p>
                  <p style={{ color: "#000", fontSize: "18px" }}>
                    United Kingdom
                  </p>
                </VerticalWrapper>
                <VerticalWrapper style={{ alignItems: "start", flex: 2 }}>
                  <p
                    style={{
                      color: "#676767",
                      fontSize: "16px",
                      marginBottom: "25px",
                    }}
                  >
                    Risk Score
                  </p>
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
                </VerticalWrapper>
              </Row>
            </SummaryCard>
          </TopContainer>
          <Container>
            <RiskCard>
              <Table data={riskProfile} />
            </RiskCard>
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
const Card = styled.div`
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const TopContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 20px;
  margin-bottom: 10px;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
`;
const ProfileCard = styled(Card)`
  width: 25%;
  aspect-ratio: 1/1;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
`;
const SummaryCard = styled(Card)`
  flex-direction: column;
  width: 75%;
  aspect-ratio: 10/1;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;
const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef3fe;
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
`;
const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CountrySection = styled.div`
  padding: 5px;
  width: 160px;
  background-color: #dde9fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
`;
const FlagWrapper = styled.div`
  display: flex;
  width: 1.8em;
  height: 1.8em;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
const RiskCard = styled(Card)`
  flex-direction: column;
  width: 100%;
  height: 60vh;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  overflow-y:auto;
`;

