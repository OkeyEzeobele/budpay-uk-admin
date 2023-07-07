import React, { useState, PureComponent, useMemo } from "react";
import styled, { css } from "styled-components";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import { ExportCircle, Chart } from "iconsax-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 5000,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 200000,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 50000,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 100000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 86000,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 122000,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 210000,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
    amt: 160000,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 4300,
    amt: 170000,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4300,
    amt: 120000,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 4300,
    amt: 170000,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 270000,
  },
];
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          display: "flex",
          width: "250px",
        }}
      >
        <div
          style={{
            backgroundColor: "#644ae5",
            flex: "0.5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px 0 0 15px",
          }}
        >
          <Chart color="white" /> {/* Replace with your preferred icon */}
        </div>
        <div style={{ flex: "2", padding: "10px" }}>
          <p>
            <span style={{ fontWeight: "normal" }}>Month </span>
            <span style={{ fontWeight: "bold" }}>{label}</span>
          </p>
          <p>
            <span style={{ fontWeight: "normal" }}>Value </span>
            <span style={{ fontWeight: "bold" }}>
              {payload[0].value.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    );
  }

  return null;
};
export default function Revenue() {
  return (
    <>
      <TopNavbar />
      <ScrollableContainer>
        <ResponsiveWrapper>
          <LeftColumn>
          <SummaryCard>

          </SummaryCard>
            <ChartCard>
            <div style={{marginBottom: '40px', fontSize: 20, fontWeight: "bold" }}>
              Revenue Charts
            </div>
              <ChartContentColumn>
                <ResponsiveContainer width="100%" height="80%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#908be8" stopOpacity={1} />
                        <stop
                          offset="20%"
                          stopColor="#908be8"
                          stopOpacity={0.5}
                        />
                        <stop
                          offset="100%"
                          stopColor="#908be8"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => {
                        if (value >= 1000 && value < 1000000) {
                          const valueInThousands = value / 1000;
                          return `${Math.round(valueInThousands * 10) / 10}k`;
                        } else if (value >= 1000000 < 1000000000) {
                          const valueInMillions = value / 1000000;
                          return `${Math.round(valueInMillions * 10) / 10}M`;
                        } else if (value >= 1000000000) {
                          const valueInBillions = value / 1000000000;
                          return `${Math.round(valueInBillions * 10) / 10}Bn`;
                        }
                        return value;
                      }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="amt"
                      stroke="#8884d8"
                      strokeWidth={3}
                      fill="url(#colorAmt)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContentColumn>
            </ChartCard>
          </LeftColumn>
          <RightColumn>
            <RevenueBreakDownCard>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>
                Revenue Breakdown
              </div>
              <ContentColumn>
                <Row>
                  <div
                    style={{ fontSize: 25, color: "#3F4145", fontWeight: 500 }}
                  >
                    Fund Wallet
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "15px",
                        fontWeight: 500,
                        fontSize: 25,
                      }}
                    >
                      £45,000
                    </div>
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
                  </div>
                </Row>
                <Row>
                  <div
                    style={{ fontSize: 25, color: "#3F4145", fontWeight: 500 }}
                  >
                    Transfer
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "15px",
                        fontWeight: 500,
                        fontSize: 25,
                      }}
                    >
                      £23,000
                    </div>
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
                      20%
                    </div>
                  </div>
                </Row>
                <Row>
                  <div
                    style={{ fontSize: 25, color: "#3F4145", fontWeight: 500 }}
                  >
                    Card Creation
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "15px",
                        fontWeight: 500,
                        fontSize: 25,
                      }}
                    >
                      £25,000
                    </div>
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
                      15.45%
                    </div>
                  </div>
                </Row>
                <Row>
                  <div
                    style={{ fontSize: 25, color: "#3F4145", fontWeight: 500 }}
                  >
                    Card Funding
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "15px",
                        fontWeight: 500,
                        fontSize: 25,
                      }}
                    >
                      £45,000
                    </div>
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
                  </div>
                </Row>
                <Row>
                  <div
                    style={{ fontSize: 25, color: "#3F4145", fontWeight: 500 }}
                  >
                    Expenses
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "15px",
                        fontWeight: 500,
                        fontSize: 25,
                      }}
                    >
                      £45,000
                    </div>
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
                  </div>
                </Row>
                <Row>
                  <div
                    style={{ fontSize: 25, color: "#3F4145", fontWeight: 500 }}
                  >
                    Bills
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "15px",
                        fontWeight: 500,
                        fontSize: 25,
                      }}
                    >
                      £45,000
                    </div>
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
                  </div>
                </Row>
              </ContentColumn>
            </RevenueBreakDownCard>
          </RightColumn>
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
  flex-direction: row;
  justify-content: center;
  margin-top: 150px;
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
const LeftColumn = styled.div`
  flex: 1;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;

  @media (max-width: 760px) {
    padding: 0 10px;
    gap: 10px;
    margin-bottom: 15px;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 760px) {
    padding: 0 10px;
    gap: 10px;
  }
`;
const ContentColumn = styled.div`
  flex: 1;
  height: 100%;
  padding: 50px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 760px) {
    padding: 0 10px;
    gap: 10px;
  }
`;

const ChartContentColumn = styled.div`
  flex: 1;
  height: 100%;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 760px) {
    padding: 0 10px;
    gap: 10px;
  }
`;

const Card = styled.div`
  border-radius: 11px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const SummaryCard = styled(Card)`
  height: 30vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 760px) {
    height: 30vh;
  }

  @media (max-width: 500px) {
    height: 50vh;
  }
`;
const ChartCard = styled(Card)`
  height: 45vh;
  padding: 25px;

  @media (max-width: 760px) {
    height: 60vh;
  }

  @media (max-width: 500px) {
    height: 80vh;
  }
`;
const RevenueBreakDownCard = styled(Card)`
  height: 70.7vh;
  padding: 25px;

  @media (max-width: 760px) {
    height: 75vh;
  }

  @media (max-width: 500px) {
    height: 90vh;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

