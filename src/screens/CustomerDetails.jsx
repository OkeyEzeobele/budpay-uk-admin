import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../api";
import { ToastContainer, toast } from "react-toastify";
import { useTable } from "react-table";
import { useLocation } from "react-router-dom";
import { formatNumber } from "../utilities/numUtils.js";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import ToggleSwitch from "../components/Buttons/ToggleSwitch";
import { Profile, ExportCircle } from "iconsax-react";
import { PieChart, Pie, Cell } from "recharts";
import PuffLoader from "react-spinners/PuffLoader";

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", value: 50, color: "#5FC163" },
  { name: "B", value: 20, color: "#EAC040" },
  { name: "C", value: 30, color: "#E54A4A" },
];
const dataaml = [
  { name: "A", value: 30, color: "#5FC163" },
  { name: "B", value: 40, color: "#EAC040" },
  { name: "C", value: 30, color: "#E54A4A" },
];
const cx = 37.5;
const cy = 50;
const iR = 12.5;
const oR = 25;
const value = 74;
const value2 = 59;
const value3 = 72;
const needle = (value, data, cx, cy, iR, oR, color) => {
  const ang = 180.0 * (1 - value / 100);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};
const createTableData = (length = 20) => {
  return Array.from({ length }, (_, index) => {
    return {
      col1: `Column 1 Row ${index + 1}`,
      col2: `Column 2 Row ${index + 1}`,
      col3: `Column 3 Row ${index + 1}`,
      col4: `Column 4 Row ${index + 1}`,
      col5: `Column 5 Row ${index + 1}`,
    };
  });
};
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
          Amount
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
          Date
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
            {`${item.receiverAccountName}`}
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
            {item.category}
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
            {`${item.currencySymbol}${formatNumber(item.amount)}`}
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
                  item.status === "Completed"
                    ? "#0DAE0A"
                    : item.status === "Pending"
                    ? "#AE800A"
                    : "#AE0A0A",
                backgroundColor:
                  item.status === "Completed"
                    ? "rgba(13, 174, 10, 0.5)"
                    : item.status === "Pending"
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
            {item.initiatedOn}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default function CustomerDetails() {
  const location = useLocation();
  const [basicInfo, setBasicInfo] = useState(null);
  useEffect(() => {
    setBasicInfo(location.state.item);
  }, [location.state]);
  const [customerDetails, setCustomerDetails] = useState([]);
  const[businesses, setBusinesses] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [toggleState, setToggleState] = useState("Individual");
  useEffect(() => {
    getCustomerDetails();
  }, []);
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const viewAmlCompliance = () => {
    let accountId
    let accountType
    if (toggleState ==="Individual"){
      accountId = customerDetails.individualAccount.accountId
      accountType = 'Individual'
    }else{
      accountId = activeBusiness.accountId
      accountType = 'Business'
    }
    navigate(`/customers/details/${id}/aml-compliance?accountType=${accountType}&accountid=${accountId}`);
  };
  const viewJumioCompliance = () => {
    const accountId = customerDetails.individualAccount.accountId;
    navigate(`/customers/details/${id}/jumio-compliance?accountid=${accountId}`);
  };
  const toggle = () => {
    setToggleState((prevState) =>
      prevState === "Individual" ? "Business" : "Individual"
    );
  };
  const [activeSwitch, setActiveSwitch] = useState("Transaction");
  const [activeSwitchBusiness, setActiveSwitchBusiness] =
    useState("Transaction");

  const getCustomerDetails = async () => {
    let data = {
      channel: 1,
      ipAddress: "string",
      actor: 61,
      deviceId: "string",
      browser: "string",
      accountId: 0,
      userId: id,
    };
    await api
      .post(`/api/v2/customer/details`, data, {
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
          setBusinesses(response.data.returnedObjects.businessAccounts)
          if (response.data.returnedObjects.businessAccounts.length > 0) {
            setActiveBusiness(response.data.returnedObjects.businessAccounts[0]);
          }
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
  const tableData = useMemo(() => createTableData(), []);
  const tableColumns = useMemo(
    () => [
      {
        Header: "Transaction",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Category",
        accessor: "col2",
      },
      {
        Header: "Amount",
        accessor: "col3",
      },
      {
        Header: "Status",
        accessor: "col4",
      },
      {
        Header: "Date",
        accessor: "col5",
      },
    ],
    []
  );
  const tableInstance = useTable({ columns: tableColumns, data: tableData });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const [activeBusiness, setActiveBusiness] = useState(businesses[0]);

  const handleTabClick = (business) => {
    setActiveBusiness(business);
    console.log(`active business: ${business}`);
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
              <Row>
                <Card1 backgroundColor="#f8fbff">
                  <UserDetails>
                    <ProfileWrapper>
                      {/* <Profile size={50} variant="Bold" /> */}
                      <img
                        src={customerDetails.customerInfo.selfie}
                        alt={customerDetails.customerInfo.customerName}
                      />
                    </ProfileWrapper>
                    <AvatarSection>
                      <h3>{customerDetails.customerInfo.customerName}</h3>
                      <p>{customerDetails.customerInfo.emailAddress}</p>
                    </AvatarSection>
                    <CountrySection>
                      {/* <Flag /> */}
                      <p>United Kingdom</p>
                    </CountrySection>
                  </UserDetails>
                  <BlockButton>Block User</BlockButton>
                </Card1>
              </Row>
              <Row3>
                <Text>{toggleState}</Text>
                <ToggleSwitch
                  option1Text="Individual"
                  option2Text="Business"
                  onToggleChange={() => {
                    if (
                      customerDetails.businessAccounts !== null &&
                      customerDetails.businessAccounts.length > 0
                    ) {
                      toggle();
                    }
                  }}
                  disabled={
                    !(
                      customerDetails.businessAccounts !== null &&
                      customerDetails.businessAccounts.length > 0
                    )
                  }
                />
              </Row3>
              <Row>
                {toggleState === "Individual" ? (
                  <Container3>
                    <Container2>
                      <Card2>
                        <Summary>
                          <HeaderText style={{ fontSize: "16px" }}>
                            Total Balance
                          </HeaderText>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <h1 style={{ width: "100%", padding: "0 10px" }}>
                              {formatNumber(
                                customerDetails.totalBalance,
                                "gbp"
                              )}
                            </h1>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  backgroundColor: "#E3F9E3",
                                  borderRadius: "50%",
                                  width: "20px",
                                  height: "20px",
                                  marginRight: "5px",
                                }}
                              >
                                <ExportCircle size={14} color="#0DAE0A" />
                              </div>
                              <h5 style={{ color: "#0DAE0A" }}>4.6%</h5>
                            </div>
                          </div>
                        </Summary>
                      </Card2>
                      <Card2></Card2>
                      <Card2></Card2>
                    </Container2>
                    <Card3>
                      <SwitchWrapper>
                        <SwitchColumn>
                          <SwitchText
                            active={activeSwitch === "Transaction"}
                            onClick={() => setActiveSwitch("Transaction")}
                          >
                            Transaction
                          </SwitchText>
                          <Highlight1 active={activeSwitch} />
                        </SwitchColumn>
                        <SwitchColumn>
                          <SwitchText
                            active={activeSwitch === "Compliance"}
                            onClick={() => setActiveSwitch("Compliance")}
                          >
                            Compliance
                          </SwitchText>
                          <Highlight2 active={activeSwitch} />
                        </SwitchColumn>
                      </SwitchWrapper>
                    </Card3>
                    <Row>
                      {activeSwitch === "Compliance" ? (
                        <Row>
                          <Container3>
                            <Card4>
                              <Summary>
                                <Card4Title>
                                  <CardTitleText>
                                    Jumio Compliance Transaction
                                  </CardTitleText>
                                  <HeaderText2>
                                    View Jumio Transaction Breakdown
                                  </HeaderText2>
                                </Card4Title>
                                <CardRow>
                                  <HeaderText2>Risk Score</HeaderText2>
                                  <Wrapper>
                                    <PieChart
                                      width={100}
                                      height={125}
                                      margin={{
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
                                      }}
                                    >
                                      <Pie
                                        dataKey="value"
                                        startAngle={180}
                                        endAngle={0}
                                        data={data}
                                        cx={50}
                                        cy={70}
                                        innerRadius={iR}
                                        outerRadius={oR}
                                        fill="#8884d8"
                                        stroke="none"
                                      >
                                        {data.map((entry, index) => (
                                          <Cell
                                            key={`cell-${index}`}
                                            fill={entry.color}
                                          />
                                        ))}
                                      </Pie>
                                      {needle(
                                        customerDetails.individualAccount
                                          ? parseInt(
                                              customerDetails.individualAccount
                                                .jumioRiskScore
                                            )
                                          : 0,
                                        data,
                                        45,
                                        70,
                                        iR,
                                        oR,
                                        "#7f8184"
                                      )}
                                      <text
                                        x={50}
                                        y={83}
                                        dy={8}
                                        fill="#000"
                                        textAnchor="middle"
                                        fontSize={10}
                                        fontWeight={"bold"}
                                      >
                                        {customerDetails.individualAccount
                                          ? `${
                                              parseInt(
                                                customerDetails
                                                  .individualAccount
                                                  .jumioRiskScore
                                              ) || 0
                                            }`
                                          : 0}
                                      </text>
                                    </PieChart>
                                  </Wrapper>
                                </CardRow>
                                <Button onClick={viewJumioCompliance}>
                                  View
                                </Button>
                              </Summary>
                            </Card4>
                            <Card4>
                              <Summary>
                                <Card4Title>
                                  <CardTitleText>AML Compliance</CardTitleText>
                                  <HeaderText2>
                                    View AML Transaction Breakdown
                                  </HeaderText2>
                                </Card4Title>
                                <CardRow>
                                  <HeaderText2>Risk Score</HeaderText2>
                                  <Wrapper>
                                    <PieChart
                                      width={100}
                                      height={125}
                                      margin={{
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
                                      }}
                                    >
                                      <Pie
                                        dataKey="value"
                                        startAngle={180}
                                        endAngle={0}
                                        data={dataaml}
                                        cx={50}
                                        cy={70}
                                        innerRadius={iR}
                                        outerRadius={oR}
                                        fill="#8884d8"
                                        stroke="none"
                                      >
                                        {dataaml.map((entry, index) => (
                                          <Cell
                                            key={`cell-${index}`}
                                            fill={entry.color}
                                          />
                                        ))}
                                      </Pie>
                                      {needle(
                                        customerDetails.individualAccount
                                          ? parseInt(
                                              customerDetails.individualAccount
                                                .amlComplianceScore
                                            )
                                          : 0,
                                        dataaml,
                                        45,
                                        70,
                                        iR,
                                        oR,
                                        "#7f8184"
                                      )}
                                      <text
                                        x={50}
                                        y={83}
                                        dy={8}
                                        fill="#000"
                                        textAnchor="middle"
                                        fontSize={10}
                                        fontWeight={"bold"}
                                      >
                                        {customerDetails.individualAccount
                                          ? `${
                                              parseInt(
                                                customerDetails
                                                  .individualAccount
                                                  .amlComplianceScore
                                              ) || 0
                                            }`
                                          : 0}
                                      </text>
                                    </PieChart>
                                  </Wrapper>
                                </CardRow>
                                <Button onClick={viewAmlCompliance}>
                                  View
                                </Button>
                              </Summary>
                            </Card4>
                          </Container3>
                          <Card>
                            <CardContent>
                              <CardTitleTextBig>
                                Individual Details
                              </CardTitleTextBig>
                              <Row2>
                                <Column>
                                  <CardContentWrapper>
                                    <Row2>
                                      <HeaderText>First Name</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.customerInfo.customerName.split(
                                              /\s+/
                                            )[0]
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Last Name</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.customerInfo.customerName.split(
                                              /\s+/
                                            )[1]
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Email Address</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.customerInfo
                                              .emailAddress
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Phone Number</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.customerInfo
                                              .customerNumber
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Date of Birth</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.individualAccount
                                              .dateOfBirth
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>
                                        Country of Residence
                                      </HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.individualAccount
                                              .countryOfResidence
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Personal Address</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.individualAccount
                                              .personalAddress
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Occupation</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.individualAccount
                                              .occupation
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                  </CardContentWrapper>
                                </Column>

                                <Column>
                                  <CardContentWrapper>
                                    <Row2>
                                      <HeaderText>
                                        Purpose of Account
                                      </HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.individualAccount
                                              .purposeOfAccount
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>KYC Verified</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.individualAccount
                                              .kycVerified
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>
                                        KYC Verification Date
                                      </HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.individualAccount
                                              .kycVerificationDate
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>KYC Outcome</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.individualAccount
                                              .kycOutcome
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Risk Category</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.individualAccount
                                              .riskCategory
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Date Onboarded</HeaderText>
                                      <RegularText>
                                        {customerDetails.individualAccount
                                          ? customerDetails.individualAccount
                                              .dateOnboarded
                                          : ""}
                                      </RegularText>
                                    </Row2>
                                  </CardContentWrapper>
                                </Column>
                              </Row2>
                            </CardContent>
                          </Card>
                        </Row>
                      ) : (
                        <Row>
                          <Container3>
                            <Card5>
                              <TransactionCardContent>
                                <Table data={customerDetails.transactions} />
                              </TransactionCardContent>
                            </Card5>
                          </Container3>
                        </Row>
                      )}
                    </Row>
                  </Container3>
                ) : (
                  <Container3>
                    <BusinessesCard>
                      <div style={{ minWidth: "25%", display: "flex" }}>
                        {businesses.map((business, index) => (
                          <CountryWrapper key={index}>
                            <CountryTab
                              active={business.name === activeBusiness.name}
                              onClick={() => handleTabClick(business)}
                            >
                              {business.name}
                            </CountryTab>
                            <Row></Row>
                            <LineWrapper>
                              <Line
                                active={business.name === activeBusiness.name}
                              />
                            </LineWrapper>
                          </CountryWrapper>
                        ))}
                      </div>
                    </BusinessesCard>
                    <Container2>
                      <Card2>
                        <Summary>
                          <HeaderText style={{ fontSize: "16px" }}>
                            Total Balance
                          </HeaderText>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <h1 style={{ width: "100%", padding: "0 10px" }}>
                              {formatNumber(
                                customerDetails.totalBalance,
                                "gbp"
                              )}
                            </h1>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  backgroundColor: "#E3F9E3",
                                  borderRadius: "50%",
                                  width: "20px",
                                  height: "20px",
                                  marginRight: "5px",
                                }}
                              >
                                <ExportCircle size={14} color="#0DAE0A" />
                              </div>
                              <h5 style={{ color: "#0DAE0A" }}>4.6%</h5>
                            </div>
                          </div>
                        </Summary>
                      </Card2>
                      <Card2></Card2>
                      <Card2></Card2>
                    </Container2>
                    <Card3>
                      <SwitchWrapper>
                        <SwitchColumn>
                          <SwitchText
                            active={activeSwitchBusiness === "Transaction"}
                            onClick={() =>
                              setActiveSwitchBusiness("Transaction")
                            }
                          >
                            Transaction
                          </SwitchText>
                          <Highlight1 active={activeSwitchBusiness} />
                        </SwitchColumn>
                        <SwitchColumn>
                          <SwitchText
                            active={activeSwitchBusiness === "Compliance"}
                            onClick={() =>
                              setActiveSwitchBusiness("Compliance")
                            }
                          >
                            Compliance
                          </SwitchText>
                          <Highlight2 active={activeSwitchBusiness} />
                        </SwitchColumn>
                      </SwitchWrapper>
                    </Card3>
                    {activeSwitchBusiness === "Compliance" ? (
                      <Row>
                        <Container3>
                          <Card4>
                            <Summary>
                              <Card4Title>
                                <CardTitleText>AML Compliance</CardTitleText>
                                <HeaderText2>
                                  View AML Transaction Breakdown
                                </HeaderText2>
                              </Card4Title>
                              <CardRow>
                                <HeaderText2>Risk Score</HeaderText2>
                                <Wrapper>
                                  <PieChart
                                    width={100}
                                    height={125}
                                    margin={{
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      left: 0,
                                    }}
                                  >
                                    <Pie
                                      dataKey="value"
                                      startAngle={180}
                                      endAngle={0}
                                      data={dataaml}
                                      cx={50}
                                      cy={70}
                                      innerRadius={iR}
                                      outerRadius={oR}
                                      fill="#8884d8"
                                      stroke="none"
                                    >
                                      {dataaml.map((entry, index) => (
                                        <Cell
                                          key={`cell-${index}`}
                                          fill={entry.color}
                                        />
                                      ))}
                                    </Pie>
                                    {needle(
                                      activeBusiness.amlComplianceScore,
                                      dataaml,
                                      45,
                                      70,
                                      iR,
                                      oR,
                                      "#7f8184"
                                    )}
                                    <text
                                      x={50}
                                      y={83}
                                      dy={8}
                                      fill="#000"
                                      textAnchor="middle"
                                      fontSize={10}
                                      fontWeight={"bold"}
                                    >
                                      {`${activeBusiness.amlComplianceScore}`}
                                    </text>
                                  </PieChart>
                                </Wrapper>
                              </CardRow>
                              <Button onClick={viewAmlCompliance}>View</Button>
                            </Summary>
                          </Card4>
                        </Container3>
                        <Card >
                          <CardContent>
                            <CardTitleTextBig>
                              Business Details
                            </CardTitleTextBig>
                            <Row2>
                              <Column>
                                <CardContentWrapper>
                                  <Row2>
                                    <HeaderText>Business Legal Name</HeaderText>
                                    <RegularText>{activeBusiness.name}</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Date of Incorporation</HeaderText>
                                    <RegularText>{activeBusiness.dateOfIncorporation}</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>License Number</HeaderText>
                                    <RegularText>
                                      {activeBusiness.licenseNumber}
                                    </RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Business Type</HeaderText>
                                    <RegularText>{activeBusiness.businessType}</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Nature Of Business</HeaderText>
                                    <RegularText>{activeBusiness.businessSector}</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>
                                      Country of Registration
                                    </HeaderText>
                                    <RegularText>{activeBusiness.countryOfRegistration}</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Registered Office Address</HeaderText>
                                    <RegularText>
                                      {activeBusiness.registeredAddress}
                                    </RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Operating Address</HeaderText>
                                    <RegularText>{activeBusiness.operatingAddress}</RegularText>
                                  </Row2>
                                </CardContentWrapper>
                              </Column>

                              <Column>
                                <CardContentWrapper>
                                  <Row2>
                                    <HeaderText>Is Business Regulated?</HeaderText>
                                    <RegularText>
                                      {activeBusiness.isBusinessRegulated}
                                    </RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Purpose of Account</HeaderText>
                                    <RegularText>{activeBusiness.purposeOfAccount}</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>
                                      KYC Verified?
                                    </HeaderText>
                                    <RegularText>{activeBusiness.kycVerified}</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>KYC Verification Date</HeaderText>
                                    <RegularText>{activeBusiness.kycVerificationDate}</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>KYC Outcome</HeaderText>
                                    <RegularText>{activeBusiness.kycOutcome}</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Risk Category</HeaderText>
                                    <RegularText>{activeBusiness.riskCategory}</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Date Onboarded</HeaderText>
                                    <RegularText>{activeBusiness.dateOnboarded}</RegularText>
                                  </Row2>
                                </CardContentWrapper>
                              </Column>
                            </Row2>
                          </CardContent>
                        </Card>
                      </Row>
                    ) : (
                      <Row>
                        <Container3>
                          <Card5>
                            <TableWrapper>
                              <table
                                {...getTableProps()}
                                style={{ border: "none" }}
                              >
                                <thead>
                                  {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                      {headerGroup.headers.map((column) => (
                                        <th
                                          {...column.getHeaderProps()}
                                          style={{ border: "none" }}
                                        >
                                          {column.render("Header")}
                                        </th>
                                      ))}
                                    </tr>
                                  ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                  {rows.map((row) => {
                                    prepareRow(row);
                                    return (
                                      <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                          return (
                                            <td
                                              {...cell.getCellProps()}
                                              style={{
                                                borderBottom:
                                                  "1px solid rgba(0,0,0,0.1)",
                                                borderRight: "none",
                                              }}
                                            >
                                              {cell.render("Cell")}
                                            </td>
                                          );
                                        })}
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </TableWrapper>
                          </Card5>
                        </Container3>
                      </Row>
                    )}
                  </Container3>
                )}
              </Row>
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
  justify-content: center;
  margin-top: 100px;
  overflow: auto;

  @media (min-width: 760px) {
    margin-left: 250px;
  }

  @media (max-width: 760px) {
    margin-left: 30px;
    flex-direction: column;
    padding: 15px 20px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const Row3 = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const Row2 = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 20px;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
  ${"" /* margin-bottom: 20px; */}
  ${"" /* border: 1px solid red; */}

  &:last-child {
    margin-bottom: 0;
  }
`;
const CardRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 75vh;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 0;
`;
const CardContent = styled.div`
  height: 100%;
  padding: 30px;
  overflow-y: auto;
`;
const Card1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  padding: 30px;
  width: 100%;
  height: 14vf;
  margin-bottom: 10px;
  position: relative;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;
const BusinessesCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  padding: 30px 20px 0 20px;
  width: 100%;
  height: 18vf;
  margin-bottom: 10px;
  position: relative;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;
const Card2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  padding: 20px;
  width: 33%;
  height: 20vh;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
const Card3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  padding: 15px;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;
const Card4 = styled.div`
  display: flex;
  width: 100;
  height: 37vh;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  margin-right: 20px;
  margin-bottom: 10px;
  background-color: #fff;
`;
const Card5 = styled.div`
  display: flex;
  width: 100%;
  height: 71vh;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  background-color: #fff;
  margin-bottom: 10px;
`;
const TransactionCardContent = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const UserDetails = styled.div`
  flex-direction: row;
  display: flex;
  gap: 20px;
`;
const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const CountrySection = styled.div`
  padding: 5px;
  width: 160px;
  background-color: #dde9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;
const BlockButton = styled.div`
  padding: 10px;
  background-color: rgba(229, 74, 74, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #ff0000;
`;
const Button = styled.div`
  padding: 10px;
  width: 100px;
  background-color: #644ae5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;
const Text = styled.p`
  text-align: left;
  font-weight: bold;
`;
const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef3fe;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media (max-width: 760px) {
    margin-top: 1rem;
  }
`;
const Summary = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const HeaderText = styled.p`
  color: #7f8184;
  font-size: 12px;
  width: 100%;
  word-wrap: break-word;
  margin-right: 5px;
`;
const RegularText = styled.p`
  font-size: 12px;
  width: 100%;
  word-wrap: break-word;
  ${'' /* word-break: break-all; */}
  margin-bottom: 5px;
`;
const HeaderText2 = styled.p`
  color: #7f8184;
`;
const CardTitleText = styled.p`
  color: #000000;
  font-weight: bold;
`;
const CardTitleTextBig = styled.div`
  color: #000000;
  font-weight: bold;
  font-size: 22px;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;
const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  box-sizing: border-box;
`;
const SwitchColumn = styled.div`
  flex-direction: column;
  display: flex;
  height: 60px;
`;
const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  height: 60px;
`;
const SwitchText = styled.p`
  color: ${({ active }) => (active ? "#644ae5" : "black")};
  cursor: pointer;
  margin-top: 20px;
  margin-left: 10px;
`;
const Highlight1 = styled.div`
  height: ${({ active }) => (active === "Transaction" ? "2px" : "1px")};
  background-color: ${({ active }) =>
    active === "Transaction" ? "#644ae5" : "rgba(0, 0, 0, 0);"};
  width: 100%;
  margin-top: auto;
`;
const Highlight2 = styled.div`
  height: ${({ active }) => (active === "Compliance" ? "2px" : "1px")};
  background-color: ${({ active }) =>
    active === "Compliance" ? "#644ae5" : "rgba(0, 0, 0, 0);"};
  width: 100%;
  margin-top: auto;
`;
const Card4Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
`;
const Wrapper = styled.div`
  background-color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const CardContentWrapper = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  padding: 40px 5px;
  gap: 20px;
`;
const TableWrapper = styled.div`
  height: 100%;
  padding: 30px;
  overflow-y: auto;
  table {
    width: 100%;
    table-layout: fixed;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    tr:first-of-type {
      td {
        padding-top: 50px;
      }
    }
    th {
      color: rgba(0, 0, 0, 0.6);
      font-size: 16px;
      text-align: center;
    }
    ,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      font-size: 12px;
      padding-top: 20px;
      text-align: center;
      :last-child {
        border-right: 0;
      }
    }
  }
`;
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
const CountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: space-between;
  flex: 1;
  position: relative;
  bottom: 0;
`;
const CountryTab = styled.p`
  color: ${({ active }) => (active ? "#644ae5" : "#747474")};
  cursor: pointer;
  font-weight: 700;
  font-size:12px;
  padding: 0 10px
`;
const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2px;
  width: 100%;
`;
const Line = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: ${({ active }) =>
    active ? "#644ae5" : "rgba(0, 0, 0, 0.1)"};
  width: 100%;
`;
