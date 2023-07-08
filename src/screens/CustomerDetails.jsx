import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTable } from "react-table";
import { useLocation } from "react-router-dom";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import ToggleSwitch from "../components/Buttons/ToggleSwitch";
import { Profile, ExportCircle } from "iconsax-react";
import { PieChart, Pie, Cell } from "recharts";
import PuffLoader from "react-spinners/PuffLoader";

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", value: 50, color: "#E54A4A" },
  { name: "B", value: 30, color: "#EAC040" },
  { name: "C", value: 20, color: "#5FC163" },
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

export default function CustomerDetails() {
  const location = useLocation();
  const [basicInfo, setBasicInfo] = useState(null);
  useEffect(() => {
    setBasicInfo(location.state.item);
    console.log(basicInfo);
  }, [location.state]);
  const [toggleState, setToggleState] = useState("Individual");
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const viewAmlCompliance = () => {
    const amlId = "1729";
    navigate(`/customers/details/${id}/aml-compliance`, { entityId: amlId });
  };
  const viewJumioCompliance = () => {
    navigate(`/customers/details/${id}/jumio-compliance`);
  };
  const toggle = () => {
    setToggleState((prevState) =>
      prevState === "Individual" ? "Business" : "Individual"
    );
  };
  const [activeSwitch, setActiveSwitch] = useState("Transaction");
  const [activeSwitchBusiness, setActiveSwitchBusiness] =
    useState("Transaction");
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

  return (
    <>
      <TopNavbar />
      <ScrollableContainer>
        <ResponsiveWrapper>
          {basicInfo === null ? (
            <LoaderContainer>
              <PuffLoader color="#644AE5" loading={basicInfo===null} size={200} />
            </LoaderContainer>
          ) : (
            <Container>
              <Row>
                <Card1 backgroundColor="#f8fbff">
                  <UserDetails>
                    <ProfileWrapper>
                      <Profile size={50} variant="Bold" />
                    </ProfileWrapper>
                    <AvatarSection>
                      <h3>{basicInfo.fullName}</h3>
                      <p>{basicInfo.emailAddress}</p>
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
                  onToggleChange={toggle}
                />
              </Row3>
              <Row>
                {toggleState === "Individual" ? (
                  <Container3>
                    <Container2>
                      <Card2>
                        <Summary>
                          <HeaderText>Total Balance</HeaderText>
                          <h2>£12,987.03</h2>
                          <div
                            style={{
                              color: "#0DAE0A",
                              display: "flex",
                              alignItems: "stretch",
                              fontSize: 18,
                            }}
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
                            4.6%
                          </div>
                        </Summary>
                        <Summary>
                          <HeaderText>Pending Balance</HeaderText>
                          <h2>£2,350.50</h2>
                          <div
                            style={{
                              color: "#0DAE0A",
                              display: "flex",
                              alignItems: "stretch",
                              fontSize: 18,
                            }}
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
                            4.6%
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
                                        value,
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
                                        {`${value}`}
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
                                        value2,
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
                                        {`${value2}`}
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
                                      <RegularText>{basicInfo.fullName.split(" ")[0]}</RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Last Name</HeaderText>
                                      <RegularText>{basicInfo.fullName.split(" ")[1]}</RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Email Address</HeaderText>
                                      <RegularText>
                                        {basicInfo.emailAddress}
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Phone Number</HeaderText>
                                      <RegularText>{basicInfo.phoneNumber}</RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Date of Birth</HeaderText>
                                      <RegularText>22 May, 2023</RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>
                                        Country of Residence
                                      </HeaderText>
                                      <RegularText>United Kingdom</RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Personal Address</HeaderText>
                                      <RegularText>
                                        1600 Pennsylvania Avenue
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Occupation</HeaderText>
                                      <RegularText>Self Employed</RegularText>
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
                                        Payment Collection, Virtual Wallet
                                      </RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>KYC Verified</HeaderText>
                                      <RegularText>Yes</RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>
                                        KYC Verification Date
                                      </HeaderText>
                                      <RegularText>27 May, 2023</RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>KYC Outcome</HeaderText>
                                      <RegularText>Passed</RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Risk Category</HeaderText>
                                      <RegularText>Medium(CDD)</RegularText>
                                    </Row2>
                                    <Row2>
                                      <HeaderText>Date Onboarded</HeaderText>
                                      <RegularText>26 May, 2023</RegularText>
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
                                      <tr
                                        {...headerGroup.getHeaderGroupProps()}
                                      >
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
                    </Row>
                  </Container3>
                ) : (
                  <Container3>
                    <Card1></Card1>
                    <Container2>
                      <Card2>
                        <Summary>
                          <HeaderText>Total Balance</HeaderText>
                          <h2>£12,987.03</h2>
                          <div
                            style={{
                              color: "#0DAE0A",
                              display: "flex",
                              alignItems: "stretch",
                              fontSize: 18,
                            }}
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
                            4.6%
                          </div>
                        </Summary>
                        <Summary>
                          <HeaderText>Pending Balance</HeaderText>
                          <h2>£2,350.50</h2>
                          <div
                            style={{
                              color: "#0DAE0A",
                              display: "flex",
                              alignItems: "stretch",
                              fontSize: 18,
                            }}
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
                            4.6%
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
                                      value2,
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
                                      {`${value3}`}
                                    </text>
                                  </PieChart>
                                </Wrapper>
                              </CardRow>
                              <Button onClick={viewAmlCompliance}>View</Button>
                            </Summary>
                          </Card4>
                        </Container3>
                        <Card>
                          <CardContent>
                            <CardTitleTextBig>
                              Business Details
                            </CardTitleTextBig>
                            <Row2>
                              <Column>
                                <CardContentWrapper>
                                  <Row2>
                                    <HeaderText>First Name</HeaderText>
                                    <RegularText>Joe</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Last Name</HeaderText>
                                    <RegularText>Wilson</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Email Address</HeaderText>
                                    <RegularText>
                                      joewilson@gmail.com
                                    </RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Phone Number</HeaderText>
                                    <RegularText>2348123456789</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Date of Birth</HeaderText>
                                    <RegularText>22 May, 2023</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>
                                      Country of Residence
                                    </HeaderText>
                                    <RegularText>United Kingdom</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Personal Address</HeaderText>
                                    <RegularText>
                                      1600 Pennsylvania Avenue
                                    </RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Occupation</HeaderText>
                                    <RegularText>Self Employed</RegularText>
                                  </Row2>
                                </CardContentWrapper>
                              </Column>

                              <Column>
                                <CardContentWrapper>
                                  <Row2>
                                    <HeaderText>Purpose of Account</HeaderText>
                                    <RegularText>
                                      Payment Collection, Virtual Wallet
                                    </RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>KYC Verified</HeaderText>
                                    <RegularText>Yes</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>
                                      KYC Verification Date
                                    </HeaderText>
                                    <RegularText>27 May, 2023</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>KYC Outcome</HeaderText>
                                    <RegularText>Passed</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Risk Category</HeaderText>
                                    <RegularText>Medium(CDD)</RegularText>
                                  </Row2>
                                  <Row2>
                                    <HeaderText>Date Onboarded</HeaderText>
                                    <RegularText>26 May, 2023</RegularText>
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
  padding: 30px;
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
  padding: 0;
  background-color: #fff;
  margin-bottom: 10px;
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
  word-break: break-all;
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
  padding: 40px;
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
