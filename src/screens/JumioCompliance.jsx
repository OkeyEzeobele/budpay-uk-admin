import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import api from "../api";
import { ToastContainer, toast } from "react-toastify";
import chroma from "chroma-js";
import PuffLoader from "react-spinners/PuffLoader";

//Sections
import TopNavbar from "../components/Nav/TopNavbar";

export default function JumioCompliance() {
  const [score, setScore] = useState(0);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const accountId = params.get("accountid");
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [customerDetails, setCustomerDetails] = useState({
    riskScore: 0,
    identityVerification: {
      usability: "",
      dataChecks: "",
      imageChecks: "",
      extraction: "",
      similarity: "",
      idType: "",
      dob: "",
      firstName: "",
      lastName: "",
      documentNo: "",
      expiry: "",
      personalNumber: null,
      mrzFormat: "",
      issuingCountry: null,
    },
    selfCredentials: {
      usability: "",
      similarity: "",
    },
    faceMap: {
      usability: "",
      liveness: "",
    },
    screening: {
      status: "",
      searchDate: "",
      searchReference: "",
      vendor: "",
      countOfResult: 0,
      searchId: "",
      searchResultUrl: "",
    },
    transactionMetadata: {
      vendor: "",
      ipAddress: "",
      initiatedAt: "",
      startedAt: "",
    },
  });
  useEffect(() => {
    getCustomerDetails(id, accountId);
  }, []);

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
      .post(`/api/v2/customer/compliance`, data, {
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
          setScore(response.data.returnedObjects.riskScore);
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
              <LeftColumn>
                <SummaryCard>
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
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
                            ? "#5FC163"
                            : score <= 70
                            ? "#EAC040"
                            : "#E54A4A"
                        }
                        value={score}
                      />
                      <ScoreLabel
                        color={
                          score <= 50
                            ? "#5FC163"
                            : score <= 70
                            ? "#EAC040"
                            : "#E54A4A"
                        }
                        value={score}
                      >
                        {score}
                      </ScoreLabel>
                    </Ruler>
                  </RulerWrapper>
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    ID and Identity Verification
                  </p>
                  <Row>
                    <KeyText>Usability</KeyText>
                    {customerDetails.identityVerification.usability ===
                    "PASSED" ? (
                      <ValueWrapper>
                        <Dot />
                        {customerDetails.identityVerification.usability}
                      </ValueWrapper>
                    ) : customerDetails.identityVerification.usability ===
                      "FAILED" ||customerDetails.identityVerification.usability ==="NOT_EXECUTED"? (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 10, 10, 0.5)",
                          color: "#AE0A0A",
                          border: " 1px solid #AE0A0A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE0A0A" }} />
                        {customerDetails.identityVerification.usability}
                      </ValueWrapper>
                    ) : (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 128, 10, 0.5)",
                          color: "#AE800A",
                          border: " 1px solid #AE800A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE800A" }} />
                        {customerDetails.identityVerification.usability}
                      </ValueWrapper>
                    )}
                  </Row>
                  <Row>
                    <KeyText>Data Checks</KeyText>
                    {customerDetails.identityVerification.dataChecks ===
                    "PASSED" ? (
                      <ValueWrapper>
                        <Dot />
                        {customerDetails.identityVerification.dataChecks}
                      </ValueWrapper>
                    ) : customerDetails.identityVerification.dataChecks ===
                      "FAILED" || customerDetails.identityVerification.dataChecks ==="NOT_EXECUTED"? (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 10, 10, 0.5)",
                          color: "#AE0A0A",
                          border: " 1px solid #AE0A0A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE0A0A" }} />
                        {customerDetails.identityVerification.dataChecks}
                      </ValueWrapper>
                    ) : (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 128, 10, 0.5)",
                          color: "#AE800A",
                          border: " 1px solid #AE800A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE800A" }} />
                        {customerDetails.identityVerification.dataChecks}
                      </ValueWrapper>
                    )}
                  </Row>
                  <Row>
                    <KeyText>Image Checks</KeyText>
                    {customerDetails.identityVerification.imageChecks ===
                    "PASSED" ? (
                      <ValueWrapper>
                        <Dot />
                        {customerDetails.identityVerification.imageChecks}
                      </ValueWrapper>
                    ) : customerDetails.identityVerification.imageChecks ===
                      "FAILED" ||customerDetails.identityVerification.imageChecks==="NOT_EXECUTED"? (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 10, 10, 0.5)",
                          color: "#AE0A0A",
                          border: " 1px solid #AE0A0A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE0A0A" }} />
                        {customerDetails.identityVerification.imageChecks}
                      </ValueWrapper>
                    ) : (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 128, 10, 0.5)",
                          color: "#AE800A",
                          border: " 1px solid #AE800A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE800A" }} />
                        {customerDetails.identityVerification.imageChecks}
                      </ValueWrapper>
                    )}
                  </Row>
                  <Row>
                    <KeyText>Extraction</KeyText>
                    {customerDetails.identityVerification.extraction ===
                    "PASSED" ? (
                      <ValueWrapper>
                        <Dot />
                        {customerDetails.identityVerification.extraction}
                      </ValueWrapper>
                    ) : customerDetails.identityVerification.extraction ===
                      "FAILED" ||customerDetails.identityVerification.extraction ==="NOT_EXECUTED"? (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 10, 10, 0.5)",
                          color: "#AE0A0A",
                          border: " 1px solid #AE0A0A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE0A0A" }} />
                        {customerDetails.identityVerification.extraction}
                      </ValueWrapper>
                    ) : (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 128, 10, 0.5)",
                          color: "#AE800A",
                          border: " 1px solid #AE800A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE800A" }} />
                        {customerDetails.identityVerification.extraction}
                      </ValueWrapper>
                    )}
                  </Row>
                  <Row>
                    <KeyText>Similarity</KeyText>
                    {customerDetails.identityVerification.similarity ===
                    "PASSED" ? (
                      <ValueWrapper>
                        <Dot />
                        {customerDetails.identityVerification.similarity}
                      </ValueWrapper>
                    ) : customerDetails.identityVerification.similarity ===
                      "FAILED" ||customerDetails.identityVerification.similarity ==="NOT_EXECUTED" ? (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 10, 10, 0.5)",
                          color: "#AE0A0A",
                          border: " 1px solid #AE0A0A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE0A0A" }} />
                        {customerDetails.identityVerification.similarity}
                      </ValueWrapper>
                    ) : (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 128, 10, 0.5)",
                          color: "#AE800A",
                          border: " 1px solid #AE800A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE800A" }} />
                        {customerDetails.identityVerification.similarity}
                      </ValueWrapper>
                    )}
                  </Row>
                  <Row>
                    <KeyText>ID Type</KeyText>
                    <ValueText>
                      {customerDetails.identityVerification.idType}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>DOB</KeyText>
                    <ValueText>
                      {customerDetails.identityVerification.dob}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>Document No</KeyText>
                    <ValueText>
                      {customerDetails.identityVerification.documentNo}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>First Name</KeyText>
                    <ValueText>
                      {customerDetails.identityVerification.firstName}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>Last Name</KeyText>
                    <ValueText>
                      {customerDetails.identityVerification.lastName}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>Expiry</KeyText>
                    <ValueText>
                      {customerDetails.identityVerification.expiry}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>Personal Number</KeyText>
                    <ValueText>
                      {customerDetails.identityVerification.personalNumber}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>MRZ Format</KeyText>
                    <ValueText>
                      {customerDetails.identityVerification.mrzFormat}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>Issuing Country</KeyText>
                    <ValueText>
                      {customerDetails.identityVerification.issuingCountry}
                    </ValueText>
                  </Row>
                  <Spacer />
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Selfie Credential
                  </p>
                  <Row>
                    <KeyText>Usability</KeyText>
                    {customerDetails.selfCredentials.usability === "PASSED" ? (
                      <ValueWrapper>
                        <Dot />
                        {customerDetails.selfCredentials.usability}
                      </ValueWrapper>
                    ) : customerDetails.selfCredentials.usability ===
                      "FAILED" ||customerDetails.selfCredentials.usability === 'NOT_EXECUTED'? (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 10, 10, 0.5)",
                          color: "#AE0A0A",
                          border: " 1px solid #AE0A0A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE0A0A" }} />
                        {customerDetails.selfCredentials.usability}
                      </ValueWrapper>
                    ) : (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 128, 10, 0.5)",
                          color: "#AE800A",
                          border: " 1px solid #AE800A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE800A" }} />
                        {customerDetails.selfCredentials.usability}
                      </ValueWrapper>
                    )}
                  </Row>
                  <Row>
                    <KeyText>Similarity</KeyText>
                    {customerDetails.selfCredentials.similarity === "PASSED" ? (
                      <ValueWrapper>
                        <Dot />
                        {customerDetails.selfCredentials.similarity}
                      </ValueWrapper>
                    ) : customerDetails.selfCredentials.similarity ===
                      "FAILED"||customerDetails.selfCredentials.similarity ==='NOT_EXECUTED' ? (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 10, 10, 0.5)",
                          color: "#AE0A0A",
                          border: " 1px solid #AE0A0A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE0A0A" }} />
                        {customerDetails.selfCredentials.similarity}
                      </ValueWrapper>
                    ) : (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 128, 10, 0.5)",
                          color: "#AE800A",
                          border: " 1px solid #AE800A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE800A" }} />
                        {customerDetails.selfCredentials.similarity}
                      </ValueWrapper>
                    )}
                  </Row>
                  <Spacer />
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Facemap
                  </p>
                  <Row>
                    <KeyText>Usability</KeyText>
                    {customerDetails.faceMap.usability === "PASSED" ? (
                      <ValueWrapper>
                        <Dot />
                        {customerDetails.faceMap.usability}
                      </ValueWrapper>
                    ) : customerDetails.faceMap.usability === "FAILED"|| customerDetails.faceMap.usability === "NOT_EXECUTED" ? (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 10, 10, 0.5)",
                          color: "#AE0A0A",
                          border: " 1px solid #AE0A0A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE0A0A" }} />
                        {customerDetails.faceMap.usability}
                      </ValueWrapper>
                    ) : (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 128, 10, 0.5)",
                          color: "#AE800A",
                          border: " 1px solid #AE800A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE800A" }} />
                        {customerDetails.faceMap.usability}
                      </ValueWrapper>
                    )}
                  </Row>
                  <Row>
                    <KeyText>Liveness</KeyText>
                    {customerDetails.faceMap.liveness === "PASSED" ? (
                      <ValueWrapper>
                        <Dot />
                        {customerDetails.faceMap.liveness}
                      </ValueWrapper>
                    ) : customerDetails.faceMap.liveness === "FAILED" || customerDetails.faceMap.liveness === "NOT_EXECUTED" ? (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 10, 10, 0.5)",
                          color: "#AE0A0A",
                          border: " 1px solid #AE0A0A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE0A0A" }} />
                        {customerDetails.faceMap.liveness}
                      </ValueWrapper>
                    ) : (
                      <ValueWrapper
                        style={{
                          backgroundColor: "rgba(174, 128, 10, 0.5)",
                          color: "#AE800A",
                          border: " 1px solid #AE800A",
                        }}
                      >
                        <Dot style={{ backgroundColor: "#AE800A" }} />
                        {customerDetails.faceMap.liveness}
                      </ValueWrapper>
                    )}
                  </Row>
                </SummaryCard>
              </LeftColumn>
              <RightColumn>
                <DocumentCard>
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
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
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Screening
                  </p>
                  <Row>
                    <KeyText>Status</KeyText>
                    {customerDetails && customerDetails.screening ? (
                      customerDetails.screening.status === "SUCCESS" ? (
                        <ValueWrapper>
                          <Dot />
                          {customerDetails.screening.status}
                        </ValueWrapper>
                      ) : customerDetails.screening.status === "FAILED" ||
                        customerDetails.screening.status === "FAILURE" ? (
                        <ValueWrapper
                          style={{
                            backgroundColor: "rgba(174, 10, 10, 0.5)",
                            color: "#AE0A0A",
                            border: " 1px solid #AE0A0A",
                          }}
                        >
                          <Dot style={{ backgroundColor: "#AE0A0A" }} />
                          {customerDetails.screening.status}
                        </ValueWrapper>
                      ) : (
                        <ValueWrapper
                          style={{
                            backgroundColor: "rgba(174, 128, 10, 0.5)",
                            color: "#AE800A",
                            border: " 1px solid #AE800A",
                          }}
                        >
                          <Dot style={{ backgroundColor: "#AE800A" }} />
                          {customerDetails.screening.status}
                        </ValueWrapper>
                      )
                    ) : (
                      <ValueText>No Screening Data</ValueText>
                    )}
                  </Row>
                  {customerDetails && customerDetails.screening ? (
                    <>
                      <Row>
                        <KeyText>Search Date</KeyText>
                        <ValueText>
                          {customerDetails.screening.searchDate || ""}
                        </ValueText>
                      </Row>
                      <Row>
                        <KeyText>Search Reference</KeyText>
                        <ValueText>
                          {customerDetails.screening.searchReference ||
                            ""}
                        </ValueText>
                      </Row>
                      <Row>
                        <KeyText>Vendor</KeyText>
                        <ValueText>
                          {customerDetails.screening.vendor || ""}
                        </ValueText>
                      </Row>
                      <Row>
                        <KeyText>Count of Results</KeyText>
                        <ValueText>
                          {customerDetails.screening.countOfResult ||
                            ""}
                        </ValueText>
                      </Row>
                      <Row>
                        <KeyText>Search ID</KeyText>
                        <ValueText>
                          {customerDetails.screening.searchId || ""}
                        </ValueText>
                      </Row>
                      {customerDetails.screening.status?.toLowerCase() ==
                      "success" ? null : (
                        <Row>
                          <KeyText>Search Result Url</KeyText>
                          <ValueText
                            style={{
                              color: "#644AE5",
                              cursor: "pointer",
                              width: "65%",
                            }}
                            onClick={() =>
                              window.open(
                                customerDetails.screening.searchResultUrl,
                                "_blank"
                              )
                            }
                          >
                            {customerDetails.screening.searchResultUrl ||
                              ""}
                          </ValueText>
                        </Row>
                      )}
                    </>
                  ) : (
                    <Row>
                      <ValueText>No Screening Data</ValueText>
                    </Row>
                  )}
                  <Spacer />
                  <p
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Transaction Metadata
                  </p>
                  <Row>
                    <KeyText>Vendor</KeyText>
                    <ValueText>
                      {customerDetails.transactionMetadata.vendor}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>Client IP Address</KeyText>
                    <ValueText>
                      {customerDetails.transactionMetadata.ipAddress}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>Initiated at</KeyText>
                    <ValueText>
                      {customerDetails.transactionMetadata.initiatedAt}
                    </ValueText>
                  </Row>
                  <Row>
                    <KeyText>Started at</KeyText>
                    <ValueText>
                      {customerDetails.transactionMetadata.startedAt}
                    </ValueText>
                  </Row>
                </DetailCard>
              </RightColumn>
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
  background: linear-gradient(
    to right,
    #5fc163 0%,
    #5fc163 50%,
    #eac040 50%,
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
  left: 50%;
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
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
