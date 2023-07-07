import React from "react";
import styled, { css } from "styled-components";
import { ExportCircle, EmptyWalletAdd, Wallet2, ExportSquare, ImportSquare } from "iconsax-react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";

const data = [
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 5000,
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 200000,
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 50000,
  },
  {
    name: "4",
    uv: 2780,
    pv: 3908,
    amt: 100000,
  },
  {
    name: "5",
    uv: 1890,
    pv: 4800,
    amt: 86000,
  },
  {
    name: "6",
    uv: 2390,
    pv: 3800,
    amt: 122000,
  },
  {
    name: "7",
    uv: 3490,
    pv: 4300,
    amt: 210000,
  },
  {
    name: "8",
    uv: 3490,
    pv: 4300,
    amt: 160000,
  },
  {
    name: "9",
    uv: 3490,
    pv: 4300,
    amt: 170000,
  },
  {
    name: "10",
    uv: 3490,
    pv: 4300,
    amt: 120000,
  },
];

export default function Wallet() {
  return (
    <>
      <TopNavbar />
      <ScrollableContainer>
        <ResponsiveWrapper>
          <Column>
            <Row>
              <HalfCard>
                <WalletTotal />
              </HalfCard>
              <HalfCard>
                <WalletCreated />
              </HalfCard>
              <FullCard>
                <div
                  style={{
                    marginBottom: "40px",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Wallet Charts
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
                        <linearGradient
                          id="colorAmt"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        ></linearGradient>
                      </defs>
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />

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
              </FullCard>
            </Row>
            <Row>
              <FullCard>
                <div
                  style={{
                    marginBottom: "40px",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Inflow/Outflow Charts
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
                        <linearGradient
                          id="colorAmt"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        ></linearGradient>
                      </defs>
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />

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
              </FullCard>
              <HalfCard>
                <InflowTotal />
              </HalfCard>
              <HalfCard>
                <OutflowTotal />
              </HalfCard>
            </Row>
          </Column>
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

const WalletTotal = () => (
  <WalletTotalContainer>
    <WalletIconWrapper>
      <Wallet2 size="48" color="#644ae5" variant="Bold" />
    </WalletIconWrapper>
    <WalletInfo>
      <HeaderText>Total Wallets Balance</HeaderText>
      <h2>£40,525,000</h2>
      <br></br>
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
    </WalletInfo>
  </WalletTotalContainer>
);
const WalletCreated = () => (
  <WalletTotalContainer>
    <WalletIconWrapper>
      <EmptyWalletAdd size="48" color="#644ae5" variant="Bold" />
    </WalletIconWrapper>
    <WalletInfo>
      <HeaderText>Wallets Created</HeaderText>

      <h2>25,500</h2>
      <br></br>
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
    </WalletInfo>
  </WalletTotalContainer>
);
const InflowTotal = () => (
  <WalletTotalContainer>
    <WalletIconWrapper2>
      <ImportSquare size="48" color="#0DAE0A" variant="Bold" />
    </WalletIconWrapper2>
    <WalletInfo>
      <HeaderText>Inflow</HeaderText>
      <h2>£48,525,000</h2>
      <br></br>
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
    </WalletInfo>
  </WalletTotalContainer>
);
const OutflowTotal = () => (
  <WalletTotalContainer>
    <WalletIconWrapper3>
      <ExportSquare size="48" color="#AE0A0A" variant="Bold" />
    </WalletIconWrapper3>
    <WalletInfo>
      <HeaderText>Outflow</HeaderText>
      <h2>£8,525,000</h2>
      <br></br>
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
    </WalletInfo>
  </WalletTotalContainer>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Column = styled(Container)`
  align-items: stretch;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  padding: 30px;
  min-height: 300px;
`;
const HalfCard = styled(Card)`
  flex: 1;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const FullCard = styled(Card)`
  flex: 2;
  display: flex
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 0
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:first-child{
    margin-right:10px
  }
`;
const WalletTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const WalletIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eef3fe;
  width: 96px;
  height: 96px;
  border-radius: 15px;
  margin-right: 20px;
  margin-bottom: 60px;
`;
const WalletIconWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecfeec;
  width: 96px;
  height: 96px;
  border-radius: 15px;
  margin-right: 20px;
  margin-bottom: 60px;
`;
const WalletIconWrapper3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffefee;
  width: 96px;
  height: 96px;
  border-radius: 15px;
  margin-right: 20px;
  margin-bottom: 60px;
`;
const WalletInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const HeaderText = styled.p`
  color: #7f8184;
`;
const ChartContentColumn = styled.div`
  flex: 1;
  height: 80%;
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
