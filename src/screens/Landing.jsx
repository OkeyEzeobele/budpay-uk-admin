import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import api from "../api";
import { formatNumber } from "../utilities/numUtils.js";
// Sections
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNavbar from "../components/Nav/TopNavbar";
import PuffLoader from "react-spinners/PuffLoader";
import { ExportCircle, Chart } from "iconsax-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
  Label,
  Text,
  Legend,
} from "recharts";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const priorDate = new Date();
priorDate.setFullYear(currentYear - 1);
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

const COLORS = ["#908BE8", "#DDE5FC"];

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

export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTotalTxnLoading, setIsTotalTxnLoading] = useState(true);
  const [isTotalRevLoading, setIsTotalRevLoading] = useState(true);
  const [isTotalCusLoading, setIsTotalCusLoading] = useState(true);
  const [activeColumn, setActiveColumn] = useState(1);

  const handleClick = (column) => {
    setActiveColumn(column);
  };
  const [homeCountry, setHomeCountry] = useState("GB");
  useEffect(() => {
    getTransactions(homeCountry);
  }, []);
  useEffect(() => {
    getTotalTransactions(homeCountry);
  }, []);
  useEffect(() => {
    getTotalRevenue(homeCountry);
  }, []);
  useEffect(() => {
    getTotalCustomers(homeCountry);
  }, []);
  useEffect(() => {
    getTransactionChartData(homeCountry);
  }, []);
  useEffect(() => {
    getCustomerChartData(homeCountry);
  }, []);

  const [txnData, setTxnData] = useState([]);
  const [txnChartData, setTxnChartData] = useState([]);
  const [cusChartData, setCusChartData] = useState([]);
  const [txnTotal, setTxnTotal] = useState("");
  const [txnTotalPerf, setTxnTotalPerf] = useState("");
  const [revTotal, setRevTotal] = useState("");
  const [revTotalPerf, setRevTotalPerf] = useState("");
  const [cusTotal, setCusTotal] = useState("");
  const [cusTotalPerf, setCusTotalPerf] = useState("");

  const getTotalTransactions = async (countryCode) => {
    await api
      .get(`/api/v2/insight/total-transactions/${countryCode}`, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.isSuccessful === true) {
          // console.log(response);
          setTxnTotal(response.data.returnedObjects.value);
          setTxnTotalPerf(response.data.returnedObjects.performance);
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
        setIsTotalTxnLoading(false);
      })
      .catch((error) => {
        // console.error(error);
        setIsTotalTxnLoading(false);
      });
  };

  const getTotalRevenue = async (countryCode) => {
    await api
      .get(`/api/v2/insight/total-revenue/${countryCode}`, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.isSuccessful === true) {
          // console.log(response);
          setRevTotal(response.data.returnedObjects.value);
          setRevTotalPerf(response.data.returnedObjects.performance);
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
        setIsTotalRevLoading(false);
      })
      .catch((error) => {
        // console.error(error);
        setIsTotalRevLoading(false);
      });
  };

  const getTotalCustomers = async (countryCode) => {
    await api
      .get(`/api/v2/insight/total-customers/${countryCode}`, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.isSuccessful === true) {
          // console.log(response);
          setCusTotal(response.data.returnedObjects.value);
          setCusTotalPerf(response.data.returnedObjects.performance);
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
        setIsTotalCusLoading(false);
      })
      .catch((error) => {
        // console.error(error);
        setIsTotalCusLoading(false);
      });
  };

  const getTransactions = async (countryCode) => {
    await api
      .get(`/api/v2/insight/recent-transactions/${countryCode}`, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccessful === true) {
          setTxnData(response.data.returnedObjects);
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

  const getTransactionChartData = async (countryCode) => {
    await api
      .get(`/api/v2/insight/transactions/${countryCode}`, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccessful === true) {
          setTxnChartData(response.data.returnedObjects);
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

  const getCustomerChartData = async (countryCode) => {
    await api
      .get(`/api/v2/insight/customers-status/${countryCode}`, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.isSuccessful === true) {
          setCusChartData(response.data.returnedObjects);
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
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
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
              {`${item.senderAccountName}-${item.referenceNumber}`}
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
              {item.paymentType}
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
              {`${formatNumber(item.amount, "gbp")}`}
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
                    item.transactionStatus === "Completed"
                      ? "#0DAE0A"
                      : item.transactionStatus === "Pending"
                      ? "#AE800A"
                      : "#AE0A0A",
                  backgroundColor:
                    item.transactionStatus === "Completed"
                      ? "rgba(13, 174, 10, 0.5)"
                      : item.transactionStatus === "Pending"
                      ? "rgba(174, 128, 10, 0.5)"
                      : "rgba(174, 10, 10, 0.5)",
                  padding: "3px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item.transactionStatus}
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
              {new Date(item.initiatedOn)
                .toLocaleString("en-US", options)
                .replace(",", "")
                .replace("PM", "pm")
                .replace("AM", "am")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  const customerData = [
    { name: "Active", value: parseInt(cusChartData.active) },
    { name: "Inactive", value: parseInt(cusChartData.inActive) },
  ];
  const total = parseInt(cusChartData.total);
  console.log(`The total is ${total}`);
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {payload.map((entry, index) => {
          const actualValue = entry.payload.payload.value;
          const percentage = ((actualValue / total) * 100).toFixed(2);
          return (
            <div
              key={`item-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <svg height="12" width="12">
                <circle cx="5" cy="5" r="4" fill={entry.color} />
              </svg>
              <span style={{ marginLeft: "5px", fontSize: '12px', }}>
              <KeyText>{entry.value}:</KeyText>
                <ValueText>{percentage}%</ValueText>
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  const adjustedData = data.filter((item) => {
    const itemMonth = months.indexOf(item.name.split(" ")[0]);
    const itemYear = Number(item.name.split(" ")[1]);
    const itemDate = new Date();
    itemDate.setFullYear(itemYear);
    itemDate.setMonth(itemMonth);
    return itemDate >= priorDate && itemDate <= date;
  });
  return (
    <>
      <TopNavbar />
      <ToastContainer />
      <ScrollableContainer>
        <ResponsiveWrapper>
          <LeftColumn>
            <SummaryCard>
              {/* <LoaderContainer>
                  <PuffLoader color="#644AE5" loading={isLoading} size={200} />
                </LoaderContainer> */}
              {isTotalTxnLoading ? (
                <Column>
                  <LoaderContainer>
                    <PuffLoader color="#644AE5" loading={isLoading} size={50} />
                  </LoaderContainer>
                </Column>
              ) : (
                <Column
                  active={activeColumn === 1}
                  onClick={() => handleClick(1)}
                >
                  Total Transactions
                  <Row>
                    <BoldText active={activeColumn === 1}>
                      {formatNumber(txnTotal, "GBP")}
                    </BoldText>
                    <Row2>
                      <ExportCircle size={15} color="#0DAE0A" />
                      {txnTotalPerf === "" ? (
                        <SubText color="#0DAE0A">0%</SubText>
                      ) : (
                        <SubText color="#0DAE0A">{txnTotalPerf}%</SubText>
                      )}
                    </Row2>
                  </Row>
                </Column>
              )}
              {isTotalRevLoading ? (
                <Column>
                  <LoaderContainer>
                    <PuffLoader color="#644AE5" loading={isLoading} size={50} />
                  </LoaderContainer>
                </Column>
              ) : (
                <Column
                  active={activeColumn === 2}
                  onClick={() => handleClick(2)}
                >
                  Revenue
                  <Row>
                    <BoldText active={activeColumn === 2}>
                      {formatNumber(revTotal, "GBP")}
                    </BoldText>
                    <Row2>
                      <ExportCircle size={15} color="#0DAE0A" />
                      {revTotalPerf === "" ? (
                        <SubText color="#0DAE0A">0%</SubText>
                      ) : (
                        <SubText color="#0DAE0A">{revTotalPerf}%</SubText>
                      )}
                    </Row2>
                  </Row>
                </Column>
              )}
              {isTotalCusLoading ? (
                <Column>
                  <LoaderContainer>
                    <PuffLoader color="#644AE5" loading={isLoading} size={50} />
                  </LoaderContainer>
                </Column>
              ) : (
                <Column
                  active={activeColumn === 3}
                  onClick={() => handleClick(3)}
                >
                  Customers
                  <Row>
                    <BoldText active={activeColumn === 3}>
                      {formatNumber(cusTotal)}
                    </BoldText>
                    <Row2>
                      <ExportCircle size={15} color="#0DAE0A" />
                      {cusTotalPerf === "" ? (
                        <SubText color="#0DAE0A">0%</SubText>
                      ) : (
                        <SubText color="#0DAE0A">{cusTotalPerf}%</SubText>
                      )}
                    </Row2>
                  </Row>
                </Column>
              )}
            </SummaryCard>
            <ChartCard>
              {isLoading ? (
                <LoaderContainer>
                  <PuffLoader color="#644AE5" loading={isLoading} size={100} />
                </LoaderContainer>
              ) : (
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
                        } else if (value >= 1000000 && value < 1000000000) {
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
              )}
            </ChartCard>
            <TransactionsCard>
              <div></div>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>
                Recent Transactions
              </div>
              <div></div>
              {isLoading ? (
                <LoaderContainer>
                  <PuffLoader color="#644AE5" loading={isLoading} size={100} />
                </LoaderContainer>
              ) : (
                <TransactionCardContent>
                  <Table data={txnData} />
                </TransactionCardContent>
              )}
            </TransactionsCard>
          </LeftColumn>
          <RightColumn>
            <CardsCard></CardsCard>
            <CustomersCard>
              <Row>
                <TitleText>Customers</TitleText>
              </Row>
              {isLoading ? (
                <Column>
                  <LoaderContainer>
                    <PuffLoader color="#644AE5" loading={isLoading} size={50} />
                  </LoaderContainer>
                </Column>
              ) : (
                <ResponsiveContainer width="50%" height="50%">
                  <PieChart>
                    <Pie
                      data={customerData}
                      cx="50%"
                      cy="50%"
                      innerRadius="80%"
                      outerRadius="100%"
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {customerData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                      <Label
                        value={`${cusChartData.total}`}
                        position="center"
                        dy={-10}
                        style={{
                          fontSize: "14px",
                          fill: "#000",
                          fontWeight: "bold",
                        }}
                      />
                      <Label
                        value="Total Customers"
                        position="center"
                        dy={10}
                        style={{ fontSize: "14px", fill: "#7f8184" }}
                      />
                    </Pie>
                    <Legend
                      layout="vertical"
                      align="center"
                      verticalAlign="bottom"
                      content={renderLegend}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
              <Column2 style={{ width: "80%", height: "40%" }}>
                <Row3>
                  <TitleText>Customers</TitleText>
                </Row3>
                <Row>
                  <ValueText>Total</ValueText>
                  <ValueText>{`${cusChartData.total}`}</ValueText>
                </Row>
                <Row>
                  <KeyText>Active</KeyText>
                  <ValueText>{`${cusChartData.active}`}</ValueText>
                </Row>
                <Row>
                  <KeyText>Inactive</KeyText>
                  <ValueText>{`${cusChartData.inActive}`}</ValueText>
                </Row>
              </Column2>
            </CustomersCard>
          </RightColumn>
        </ResponsiveWrapper>
      </ScrollableContainer>

      {/* <Footer /> */}
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
  flex: 1.65;
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

const Card = styled.div`
  border-radius: 11px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const SummaryCard = styled(Card)`
  height: 16vh;
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
const TransactionsCard = styled(Card)`
  height: 48vh;
  padding: 15px 15px;

  @media (max-width: 760px) {
    height: 60vh;
  }

  @media (max-width: 500px) {
    height: 80vh;
  }
`;

const CardsCard = styled(Card)`
  height: 40vh;

  @media (max-width: 760px) {
    height: 55vh;
  }

  @media (max-width: 500px) {
    height: 75vh;
  }
`;
const CustomersCard = styled(Card)`
  height: 70.7vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  @media (max-width: 760px) {
    height: 75vh;
  }

  @media (max-width: 500px) {
    height: 90vh;
  }
`;
const Column = styled.div`
  padding: 25px;
  flex: 1;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  color: #7f8184;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:first-child {
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
  }

  &:last-child {
    border-top-right-radius: 11px;
    border-bottom-right-radius: 11px;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #644ae5;
      color: white;
    `}
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;
const BoldText = styled.div`
  font-weight: bold;
  font-size: 1.8vw;
  color: ${(props) => (props.active ? "#FFFFFF" : "#000000")};
  margin-right: 10px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Row3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  flex-grow: 1;
`;
const SubText = styled.span`
  color: ${(props) => props.color || "#000000"};
`;
const PieWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const TableWrapper = styled.div`
  padding: 1rem;
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
    th {
      color: rgba(0, 0, 0, 0.6);
      font-size: 16px;
    }
    ,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      font-size: 12px;
      :last-child {
        border-right: 0;
      }
    }
  }
`;
const TransactionCardContent = styled.div`
  height: 90%;
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
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
const TitleText = styled.p`
  color: "#000";
  font-size: 16px;
  font-weight: bold;
`;
const KeyText = styled.p`
  color: "#000";
  font-size: 14px;
`;
const ValueText = styled.p`
  color: "#000";
  font-size: 14px;
  font-weight: 700;
`;
