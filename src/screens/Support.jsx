import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Printer, ArrowDown2, Profile } from "iconsax-react";

//Sections
import TopNavbar from "../components/Nav/TopNavbar";

export default function Support() {
  const [activeButton, setActiveButton] = useState("pending");
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const handleTicketClick = (ticketId) => {
    setSelectedTicket(ticketId);
  };
  const tickets = [
    {
      id: 1,
      name: "Patrick Mahomes",
      datetime: new Date().toString(),
      title: "I am unable to log in",
      body: "I've been trying to log in repeatedly, but your system seems to be malfunctioning, preventing my access. Fix it immediately!",
    },
    {
      id: 2,
      name: "Travis Kelce",
      datetime: new Date().toString(),
      title: "I can't see my balance",
      body: "My account is plagued by invisible funds, as I'm unable to witness the existence of my balance. This is exasperating!",
    },
    {
      id: 3,
      name: "Andy Reid",
      datetime: new Date().toString(),
      title: "Help, I have too much money",
      body: "I have so much money that it's become burdensome to manage and decide where to invest it all.",
    },  {
      id: 4,
      name: "Andy Reid",
      datetime: new Date().toString(),
      title: "Help, I have too much money",
      body: "I have so much money that it's become burdensome to manage and decide where to invest it all.",
    },
    {
      id: 5,
      name: "Andy Reid",
      datetime: new Date().toString(),
      title: "Help, I have too much money",
      body: "I have so much money that it's become burdensome to manage and decide where to invest it all.",
    },
    {
      id: 6,
      name: "Andy Reid",
      datetime: new Date().toString(),
      title: "Help, I have too much money",
      body: "I have so much money that it's become burdensome to manage and decide where to invest it all.",
    },
  ];
  return (
    <>
      <TopNavbar />
      <ScrollableContainer>
        <ResponsiveWrapper>
          <TopContainer>
            <Row>
              <TopRow>
                <TopButton>
                  <Printer size="24" color="#7f8184" />
                  Print Ticket
                </TopButton>
                <TopButton>
                  More Actions
                  <ArrowDown2 size="24" color="#7f8184" />
                </TopButton>
              </TopRow>
            </Row>
          </TopContainer>
          <Container>
            <Card>
              <ButtonRow>
                <Buttons
                  active={activeButton === "pending"}
                  onClick={() => handleClick("pending")}
                >
                  Pending
                </Buttons>
                <Buttons
                  active={activeButton === "resolved"}
                  onClick={() => handleClick("resolved")}
                >
                  Resolved
                </Buttons>
                <Buttons
                  active={activeButton === "declined"}
                  onClick={() => handleClick("declined")}
                >
                  Declined
                </Buttons>
              </ButtonRow>
              <CardContent>
                <Column>
                  <TicketContainer>
                    {tickets.map((ticket) => (
                      <Ticket
                        key={ticket.id}
                        selected={selectedTicket === ticket.id}
                        onClick={() => handleTicketClick(ticket.id)}
                      >
                        <ProfileWrapper>
                          <Profile size={50} variant="Bold" />
                        </ProfileWrapper>

                        <HeaderText2 selected={selectedTicket === ticket.id}>
                          {ticket.name}
                        </HeaderText2>
                        <CardTitleText selected={selectedTicket === ticket.id}>
                          {ticket.title}
                        </CardTitleText>
                        <HeaderText2 selected={selectedTicket === ticket.id}>
                          {ticket.body}
                        </HeaderText2>
                      </Ticket>
                    ))}
                  </TicketContainer>
                </Column>
                <Column2>
                  <DetailsContainer>
                    <Row>
                      <ColumnHalf>
                        <SubHeaderText>First Name</SubHeaderText>
                        <DetailContainer />
                      </ColumnHalf>
                      <ColumnHalf>
                        <SubHeaderText>Last Name</SubHeaderText>
                        <DetailContainer />
                      </ColumnHalf>
                    </Row>
                    <Row>
                      <ColumnHalf>
                        <SubHeaderText>Email</SubHeaderText>
                        <DetailContainer />
                      </ColumnHalf>
                      <ColumnHalf>
                        <SubHeaderText>Phone Number</SubHeaderText>
                        <DetailContainer />
                      </ColumnHalf>
                    </Row>

                    <SubHeaderText>Title</SubHeaderText>
                    <DetailContainer />

                    <SubHeaderText>Description</SubHeaderText>
                    <DetailContainer2 />
                  </DetailsContainer>
                </Column2>
              </CardContent>
            </Card>
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
const TopContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
const TopRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const TopButton = styled.div`
  padding: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  color: #7f8184;
  margin-right: 20px;
`;
const Card = styled.div`
  position: relative;
  height: 110vh;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  background-color: #fff;
  &:before {
    content: "";
    position: absolute;
    top: 15%;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }
`;
const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
const Buttons = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  color: #505050;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;

  ${(props) =>
    props.active &&
    css`
      background-color: #644ae5;
      color: #fff;
    `}
`;
const CardContent = styled.div`
    align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  padding: 40px;
  gap: 20px;
  height: calc(100% - 80px);
  overflow: hidden;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 50%;
  max-width: 50%;
  margin-top: 20px;
  height: 100%;
  overflow: auto;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 50%;
  max-width: 50%;
  margin-top: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  height: 100%; 
`;
const Ticket = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  max-height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${'' /* overflow-y: auto; */}

  ${(props) =>
    props.selected &&
    css`
      background-color: #644ae5;
    `}
`;
const HeaderText2 = styled.p`
  color: #7f8184;
  font-size: 12px;
  margin-bottom: 10px;
  word-wrap: break-word;
  ${(props) =>
    props.selected &&
    css`
      color: #fff;
    `}
`;
const CardTitleText = styled.p`
  color: #000000;
  font-weight: bold;
  margin-bottom: 10px;

  ${(props) =>
    props.selected &&
    css`
      color: #fff;
    `}
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
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ColumnHalf = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;
const SubHeaderText = styled.p`
  color: #7f8184;
  margin-bottom: 5px;
  font-size: 14px;
`;
const DetailContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  min-height: 60px;
  width: 100%;
`;
const DetailContainer2 = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  min-height: 250px;
  width: 100%;
`;
