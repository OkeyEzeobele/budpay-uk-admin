import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import api from "../api";
import { ToastContainer, toast } from "react-toastify";
import { ExportCircle, Clock } from "iconsax-react";
import { DateRangePicker } from "react-date-range";
import { format, startOfMonth } from "date-fns";
import { formatNumber, parseAndFormatDate } from "../utilities/numUtils.js";
import PuffLoader from "react-spinners/PuffLoader";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

//Sections
import TopNavbar from "../components/Nav/TopNavbar";

export default function Customers() {
  const [homeCountry, setHomeCountry] = useState("GB");
  const [activeColumn, setActiveColumn] = useState(1);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const navigate = useNavigate();
  const [cusChartData, setCusChartData] = useState([]);
  const [customerDetails, setCustomerDetails] = useState([]);

  useEffect(() => {
    getCustomerChartData(homeCountry);
  }, []);
  useEffect(() => {
    getCustomerDetails();
  }, []);

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
        // console.log(response);
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
  const getCustomerDetails = async () => {
    let data = {
      channel: 1,
      ipAddress: "string",
      actor: 61,
      deviceId: "string",
      browser: "string",
      accountId: 0,
      emailOrPhone: null,
      statusId: 0,
      startDate: null,
      endDate: null,
      complete: true,
    };
    await api
      .post(`/api/v2/customer/get`, data, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccessful === true) {
          setCustomerDetails([...response.data.returnedObjects].reverse());
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
        setIsLoadingList(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
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
            Full Name
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
            Email
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
            Phone Number
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
            Location
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
            Date Joined
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            style={{ borderBottom: "1px solid #C2C2C2", cursor: "pointer" }}
            onClick={() => handleRowClick(item)}
          >
            <td
              style={{
                color: "#000",
                textAlign: "center",
                height: "40px",
                verticalAlign: "middle",
                fontSize: "12px",
              }}
            >
              {`${item.fullName}`}
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
              {item.emailAddress}
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
              {item.phoneNumber}
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
              {item.location}
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
                    item.status === "Active"
                      ? "#0DAE0A"
                      : item.status === "Inactive"
                      ? "#AE0A0A"
                      : "#AE800A",
                  backgroundColor:
                    item.status === "Active"
                      ? "rgba(13, 174, 10, 0.5)"
                      : item.status === "Inactive"
                      ? "rgba(174, 10, 10, 0.5)"
                      : "rgba(174, 128, 10, 0.5)",
                  padding: "3px",
                  borderRadius: "5px",
                  width: "100%",
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
              {parseAndFormatDate(item.dateJoined)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  const [dateRange, setDateRange] = useState([
    {
      startDate: startOfMonth(new Date()), // start of the current month
      endDate: new Date(), // current date
      key: "selection",
    },
  ]);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  useEffect(() => {
    if (!isDatePickerOpen) {
      setIsButtonClicked(false);
    }
  }, [isDatePickerOpen]);

  const handleClick = (column) => {
    setActiveColumn(column);
  };
  const handleRowClick = (item) => {
    navigate(`/customers/details/${item.userId}`, { state: { item } });
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
            <LeftColumn>
              <DateFilterRow>
                <DateFilterContainer isButtonClicked={isButtonClicked}>
                  <DateButton
                    onClick={() => {
                      setIsDatePickerOpen(!isDatePickerOpen);
                      setIsButtonClicked(true);
                    }}
                  >
                    <Clock size={18} color="#7f8184" />
                    &nbsp;
                    {dateRange[0].startDate &&
                      format(dateRange[0].startDate, "MMM d")}
                    {dateRange[0].endDate &&
                      ` - ${format(dateRange[0].endDate, "MMM d")}`}
                  </DateButton>
                  {isDatePickerOpen && (
                    <DateRangePicker
                      ranges={dateRange}
                      onChange={(item) => setDateRange([item.selection])}
                    />
                  )}
                </DateFilterContainer>
              </DateFilterRow>
              <SummaryCard>
                <Column
                  active={activeColumn === 1}
                  onClick={() => handleClick(1)}
                >
                  Total Customers
                  <Row>
                    <BoldText active={activeColumn === 1}>
                      {formatNumber(cusChartData.total)}
                    </BoldText>
                    <Row2>
                      <ExportCircle size={15} color="#0DAE0A" />
                      <SubText color="#0DAE0A">1.5%</SubText>
                    </Row2>
                  </Row>
                </Column>
                <Column
                  active={activeColumn === 2}
                  onClick={() => handleClick(2)}
                >
                  New Customers
                  <Row>
                    <BoldText active={activeColumn === 2}>
                      {formatNumber(cusChartData.new)}
                    </BoldText>
                    <Row2>
                      <ExportCircle size={15} color="#0DAE0A" />
                      <SubText color="#0DAE0A">1.5%</SubText>
                    </Row2>
                  </Row>
                </Column>
                <Column
                  active={activeColumn === 3}
                  onClick={() => handleClick(3)}
                >
                  Active Customers
                  <Row>
                    <BoldText active={activeColumn === 3}>
                      {formatNumber(cusChartData.active)}
                    </BoldText>
                    <Row2>
                      <ExportCircle size={15} color="#0DAE0A" />
                      <SubText color="#0DAE0A">1.5%</SubText>
                    </Row2>
                  </Row>
                </Column>
                <Column
                  active={activeColumn === 4}
                  onClick={() => handleClick(4)}
                >
                  Inactive Customers
                  <Row>
                    <BoldText active={activeColumn === 4}>
                      {formatNumber(cusChartData.inActive)}
                    </BoldText>
                    <Row2>
                      <ExportCircle size={15} color="#0DAE0A" />
                      <SubText color="#0DAE0A">1.5%</SubText>
                    </Row2>
                  </Row>
                </Column>
              </SummaryCard>
              <TransactionsCard>
                <TransactionCardContent>
                  {isLoadingList ? (
                    <LoaderContainer>
                      <PuffLoader
                        color="#644AE5"
                        loading={isLoadingList}
                        size={100}
                      />
                    </LoaderContainer>
                  ) : (
                    <Table data={customerDetails} />
                  )}
                </TransactionCardContent>
              </TransactionsCard>
            </LeftColumn>
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
const TransactionCardContent = styled.div`
  height: 100%;
  overflow-y: auto;

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
const TransactionsCard = styled(Card)`
  height: 70vh;
  padding: 35px 25px;

  @media (max-width: 760px) {
    height: 60vh;
  }

  @media (max-width: 500px) {
    height: 80vh;
  }
`;
const DateFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => (props.isButtonClicked ? "absolute" : "relative")};
  top: 0;
  right: 0;
  background: white;
  padding: 15px;
  z-index: 1000;
  border-radius: 11px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;
const DateButton = styled.button`
  display: flex;
  justify-content: space-between;
  background: white;
  border: 1px solid #fff;
  color: #7f8184; // Text color
  cursor: pointer;
  font-size: 18px;
`;
const DateFilterRow = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
