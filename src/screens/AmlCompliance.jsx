import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import api from "../api";
import { ToastContainer, toast } from "react-toastify";
import styled, { css } from "styled-components";
import { Profile } from "iconsax-react";
import PuffLoader from "react-spinners/PuffLoader";
import ReactCountryFlag from "react-country-flag";
import chroma from "chroma-js";

//Sections
import TopNavbar from "../components/Nav/TopNavbar";

export default function AmlCompliance() {
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [riskCategory, setRiskCategory] = useState("");
  const [averageScore, setAverageScore] = useState(0);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const accountId = params.get("accountid");
  const accountType = params.get("accountType");
  const { id } = useParams();
  console.log(
    `accountId:${accountId} and accountType:${accountType} and id:${id}`
  );
  useEffect(() => {
    getCustomerDetails(id, accountId);
  }, []);
  const [customerDetails, setCustomerDetails] = useState({
    customerInfoObject: {
      selfie: "",
      customerName: "",
      emailAddress: "",
      customerNumber: "",
      onboardedOn: "",
      countryOfOrigin: "",
      flag: "",
      kycReviewDate: "",
      riskScore: 0,
      accountType: "",
      businessType: "",
      companyNumber: null,
      businessName: "",
      baseCurrency: null,
    },
    riskInfoObjects: [],
  });

  const getCustomerDetails = async (id, acctId) => {
    let data = {
      channel: 1,
      ipAddress: "string",
      actor: 61,
      deviceId: "string",
      browser: "string",
      accountId: acctId,
      userId: id,
    };
    await api
      .post(`/api/v2/customer/aml-compliance`, data, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.isSuccessful === true) {
          setCustomerDetails(response.data.returnedObjects);
          setScore(response.data.returnedObjects.customerInfoObject.riskScore);
          setAverageScore(
            response.data.returnedObjects.customerInfoObject.avgRiskScore
          );
          setRiskCategory(
            response.data.returnedObjects.customerInfoObject.riskCategory
          );
        } else {
          toast.error(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              backgroundColor: "#f44336",
              color: "#fff",
            },
          });
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };
  const riskProfile = customerDetails.riskInfoObjects;
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
                width: "20%",
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
                width: "20%",
              }}
            >
              {item.value}
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
                      : item.status === "MLRO Approval"
                      ? "#AE0A0A"
                      : "#AE800A",
                  backgroundColor:
                    item.status === "Passed"
                      ? "rgba(13, 174, 10, 0.5)"
                      : item.status === "MLRO Approval"
                      ? "rgba(174, 10, 10, 0.5)"
                      : "rgba(174, 128, 10, 0.5)",
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
            Risk Category
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
            {riskCategory}
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
      <ToastContainer />
      <ScrollableContainer>
        <ResponsiveWrapper>
          {isLoading ? (
            <LoaderContainer>
              <PuffLoader color="#644AE5" loading={isLoading} size={200} />
            </LoaderContainer>
          ) : (
            <Container>
              <TopContainer>
                <ProfileCard>
                  <ProfileWrapper>
                    <Profile size={300} variant="Bold" />
                  </ProfileWrapper>
                  <VerticalWrapper>
                    <p style={{ color: "#000", fontSize: "22px" }}>
                      {customerDetails.customerInfoObject.customerName}
                    </p>
                    <p style={{ color: "#676767", fontSize: "16px" }}>
                      {customerDetails.customerInfoObject.emailAddress}
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
                      {customerDetails.customerInfoObject.countryOfOrigin}
                    </CountrySection>
                  </VerticalWrapper>
                </ProfileCard>
                <SummaryCard>
                  <Row>
                    <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                      {accountType === "Individual" ? (
                        <p style={{ color: "#676767", fontSize: "16px" }}>
                          Customer Name
                        </p>
                      ) : (
                        <p style={{ color: "#676767", fontSize: "16px" }}>
                          Business Name
                        </p>
                      )}
                      {accountType === "Individual" ? (
                        <p style={{ color: "#000", fontSize: "18px" }}>
                          {customerDetails.customerInfoObject.customerName}
                        </p>
                      ) : (
                        <p style={{ color: "#000", fontSize: "18px" }}>
                          {customerDetails.customerInfoObject.businessName}
                        </p>
                      )}
                    </VerticalWrapper>
                    <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                      {accountType === "Individual" ? (
                        <p style={{ color: "#676767", fontSize: "16px" }}>
                          Business Relationship
                        </p>
                      ) : (
                        <p style={{ color: "#676767", fontSize: "16px" }}>
                          Legal Structure
                        </p>
                      )}
                      {accountType === "Individual" ? (
                        <p style={{ color: "#000", fontSize: "18px" }}>
                          Client
                        </p>
                      ) : (
                        <p style={{ color: "#000", fontSize: "18px" }}>
                          {customerDetails.customerInfoObject.businessType}
                        </p>
                      )}
                    </VerticalWrapper>
                    <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                      {accountType === "Individual" ? (
                        <p style={{ color: "#676767", fontSize: "16px" }}>
                          Customer ID
                        </p>
                      ) : (
                        <p style={{ color: "#676767", fontSize: "16px" }}>
                          Company Number
                        </p>
                      )}
                      {accountType === "Individual" ? (
                        <p style={{ color: "#000", fontSize: "18px" }}>{id}</p>
                      ) : (
                        <p style={{ color: "#000", fontSize: "18px" }}>
                          {customerDetails.customerInfoObject.companyNumber}
                        </p>
                      )}
                    </VerticalWrapper>
                    <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                      <p style={{ color: "#676767", fontSize: "16px" }}>
                        Date of Onboarding
                      </p>
                      <p style={{ color: "#000", fontSize: "18px" }}>
                        {customerDetails.customerInfoObject.onboardedOn}
                      </p>
                    </VerticalWrapper>
                  </Row>
                  <Row>
                    <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                      <p style={{ color: "#676767", fontSize: "16px" }}>
                        KYC Review Date
                      </p>
                      <p style={{ color: "#000", fontSize: "18px" }}>
                        {customerDetails.customerInfoObject.kycReviewDate}
                      </p>
                    </VerticalWrapper>
                    <VerticalWrapper style={{ alignItems: "start", flex: 1 }}>
                      <p style={{ color: "#676767", fontSize: "16px" }}>
                        Country of Origin
                      </p>
                      <p style={{ color: "#000", fontSize: "18px" }}>
                        {customerDetails.customerInfoObject.countryOfOrigin}
                      </p>
                    </VerticalWrapper>
                    <VerticalWrapper
                      style={{ alignItems: "start", flex: 2, padding: "0px" }}
                    >
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
                        <FiftyMark>30</FiftyMark>
                        <SeventyMark>70</SeventyMark>
                        <HundredMark>100</HundredMark>
                        <Score
                          color={
                            averageScore <= 30
                              ? "#5FC163"
                              : averageScore <= 70
                              ? "#EAC040"
                              : "#E54A4A"
                          }
                          value={averageScore}
                        />
                        <ScoreLabel
                          color={
                            averageScore <= 30
                              ? "#5FC163"
                              : averageScore <= 70
                              ? "#EAC040"
                              : "#E54A4A"
                          }
                          value={averageScore}
                        >
                          {averageScore}
                        </ScoreLabel>
                      </Ruler>
                    </VerticalWrapper>
                  </Row>
                </SummaryCard>
              </TopContainer>
              <Container>
                <RiskCard>
                  <TableContentWrapper>
                    <Table data={riskProfile} />
                  </TableContentWrapper>
                </RiskCard>
              </Container>
            </Container>
          )}
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
  background: linear-gradient(
    to right,
    #5fc163 0%,
    #5fc163 30%,
    #eac040 30%,
    #eac040 70%,
    #e54a4a 70%,
    #e54a4a 100%
  );
`;
const RulerMark = styled.div`
  position: absolute;
  bottom: 5px;
  font-size: 9px;
  font-weight: bold;
`;
const ZeroMark = styled(RulerMark)`
  left: 0;
  color: #5fc163;
`;
const FiftyMark = styled(RulerMark)`
  left: 30%;
  color: #5fc163;
`;
const SeventyMark = styled(RulerMark)`
  left: 70%;
  color: #eac040;
`;
const HundredMark = styled(RulerMark)`
  right: 0;
  color: #e54a4a;
`;
const Score = styled.div`
  position: absolute;
  top: 5px;
  width: 2px;
  height: 15px;
  background-color: ${(props) => props.color};
  left: ${(props) => Math.min(Math.max(props.value, 0), 100)}%;
`;
const ScoreLabel = styled.div`
  position: absolute;
  color: ${(props) => props.color};
  left: ${(props) => Math.min(Math.max(props.value, 0), 100)}%;
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
  height: 80vh;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
const TableContentWrapper = styled.div`
  height: 95%;
  width: 100%;
  overflow-y: auto;
  padding:0

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }

  &:hover::-webkit-scrollbar {
    width: 5px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  &:hover::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
