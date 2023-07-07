import React, { useState, useMemo, useEffect } from "react";
import styled, { css } from "styled-components";
import { ExportCircle, Clock } from "iconsax-react";
import { useTable } from "react-table";
import { DateRangePicker } from "react-date-range";
import { format, startOfMonth } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

//Sections
import TopNavbar from "../components/Nav/TopNavbar";

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


export default function Cards() {
  const [activeColumn, setActiveColumn] = useState(1);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

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
  const tableData = useMemo(() => createTableData(), []);
  const tableColumns = useMemo(
    () => [
      {
        Header: "Card Created",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Created By",
        accessor: "col2",
      },
      {
        Header: "Amount Funded",
        accessor: "col3",
      },
      {
        Header: "Status",
        accessor: "col4",
      },
      {
        Header: "Date Joined",
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
                Total Cards
                <Row>
                  <BoldText active={activeColumn === 1}>£26,262.03</BoldText>
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
                Active Cards
              </Column>
              <Column
                active={activeColumn === 3}
                onClick={() => handleClick(3)}
              >
                Cards on Hold
              </Column>
              <Column
                active={activeColumn === 4}
                onClick={() => handleClick(4)}
              >
                Declined Cards
              </Column>
            </SummaryCard>
            <TransactionsCard>
              <div></div>
              <div></div>
              <TransactionCardContent>
                <TableWrapper>
                  <table {...getTableProps()} style={{ border: "none" }}>
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
                                    borderBottom: "1px solid rgba(0,0,0,0.1)",
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
              </TransactionCardContent>
            </TransactionsCard>
          </LeftColumn>
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
const TransactionsCard = styled(Card)`
  height: 70vh;
  padding: 15px 15px;

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










