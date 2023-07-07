import React, { useState } from "react";
import styled from "styled-components";
import { Add, Edit2, Trash, Clock, ArrowDown2 } from "iconsax-react";
import ReactCountryFlag from "react-country-flag";
//Sections
import TopNavbar from "../components/Nav/TopNavbar";

export default function Settings() {
  const [toggleState, setToggleState] = useState("Risk Factor");
  const [activeSwitch, setActiveSwitch] = useState("Risk Factor");
  const [activeCountry, setActiveCountry] = useState("United Kingdom");

  const toggle = () => {
    setToggleState((prevState) =>
      prevState === "Risk Factor" ? "Compliance Review" : "Risk Factor"
    );
  };
  var myString = "(x<=30)";
  var myString2 = "(30 < x <= 60)";
  var myString3 = "(60 < x <= 100)";
  const riskFactorsMain = [
    {
      factor: "Presence of PEP",
      isDefault: true,
    },
    {
      factor: "Profession",
      isDefault: true,
    },
    {
      factor: "Country of Origin",
      isDefault: true,
    },
    {
      factor: "Country of Tax Residence/Domicile",
      isDefault: true,
    },
    {
      factor: "Business Sector",
      isDefault: true,
    },
    {
      factor: "UBO Business Sector",
      isDefault: true,
    },
    {
      factor: "Screening Hit",
      isDefault: true,
    },
    { factor: "Beneficial Owner is a PEP?", isDefault: false },
    {
      factor: "Company engaged in activities requiring a lot of cash",
      isDefault: false,
    },
    { factor: "Ownership Structure", isDefault: false },
    { factor: "Source of funds", isDefault: false },
  ];
  const riskFactors = [
    {
      factor: "Expected Value / Vol of Transactions 50>x<500",
      isDefault: true,
    },
    {
      factor: "Expected Value / Vol of Transactions 100>x<2000",
      isDefault: true,
    },
    {
      factor: "Expected Value / Vol of Transactions 100>x<5000",
      isDefault: true,
    },
    { factor: "Presence of PEP", isDefault: false },
    { factor: "Profession", isDefault: false },
    { factor: "Country of Origin of Customer", isDefault: false },
    { factor: "Source of funds", isDefault: false },
    { factor: "Adverse Media Presence", isDefault: false },
    { factor: "Beneficial Owner is a PEP?", isDefault: false },
    { factor: "Ownership Structure", isDefault: false },
  ];
  const riskFactorsBusiness = [
    {
      factor: "Date of Incorporation < 5",
      isDefault: true,
    },
    {
      factor: "Date of Incorporation > 5",
      isDefault: true,
    },
    {
      factor: "Expected Value / Vol of Transactions 50>x<500",
      isDefault: true,
    },
    {
      factor: "Expected Value / Vol of Transactions 100>x<2000",
      isDefault: true,
    },
    {
      factor: "Expected Value / Vol of Transactions 100>x<5000",
      isDefault: true,
    },
    { factor: "UBO Business Sector", isDefault: false },
    { factor: "Country of Origin", isDefault: false },
    { factor: "Adverse Media Presence", isDefault: false },
    { factor: "Beneficial Owner is a PEP?", isDefault: false },
    { factor: "Ownership Structure", isDefault: false },
    { factor: "Source of Funds", isDefault: false },
  ];
  function renderRiskFactor() {
    if (activeCountry === "United Kingdom") {
      return (
        <Column>
          <CardTitleText>{activeCountry}</CardTitleText>
          <InnerRow>
            <InnerCard>
              <Row>
                <HeaderText2>Individual Account Risk Factor</HeaderText2>
              </Row>
              <ListColumn>
                {riskFactors.map((item, index) => (
                  <ListCard key={index} isDefault={item.isDefault}>
                    <CardText>{item.factor}</CardText>

                    <CardText2>
                      {item.isDefault && (
                        <DefaultWrapper>
                          <span> Default</span>
                        </DefaultWrapper>
                      )}
                    </CardText2>
                    <span>
                      <Row>
                        <Edit2 size="9" color="#000" />
                        <Trash size="9" color="#000" />
                      </Row>
                    </span>
                  </ListCard>
                ))}
              </ListColumn>
            </InnerCard>
            <InnerCard>
              <Row>
                <HeaderText2>Business Account Risk Factor</HeaderText2>
              </Row>
              <ListColumn>
                {riskFactorsBusiness.map((item, index) => (
                  <ListCard key={index} isDefault={item.isDefault}>
                    <CardText>{item.factor}</CardText>

                    <CardText2>
                      {item.isDefault && (
                        <DefaultWrapper>
                          <span> Default</span>
                        </DefaultWrapper>
                      )}
                    </CardText2>
                    <span>
                      <Row>
                        <Edit2 size="9" color="#000" />
                        <Trash size="9" color="#000" />
                      </Row>
                    </span>
                  </ListCard>
                ))}
              </ListColumn>
            </InnerCard>
          </InnerRow>
        </Column>
      );
    }
  }
  return (
    <>
      <TopNavbar />
      <ScrollableContainer>
        <ResponsiveWrapper>
          <Container>
            <Card3>
              <SwitchWrapper>
                <SwitchColumn>
                  <SwitchText
                    active={activeSwitch === "Risk Factor"}
                    onClick={() => setActiveSwitch("Risk Factor")}
                  >
                    Risk Factor
                  </SwitchText>
                  <Highlight1 active={activeSwitch} />
                </SwitchColumn>
                <SwitchColumn>
                  <SwitchText
                    active={activeSwitch === "Compliance Review"}
                    onClick={() => setActiveSwitch("Compliance Review")}
                  >
                    Compliance Review
                  </SwitchText>
                  <Highlight2 active={activeSwitch} />
                </SwitchColumn>
              </SwitchWrapper>
            </Card3>
            <Row>
              {activeSwitch === "Risk Factor" ? (
                <Container>
                  <Row>
                    <CardTitleTextBig>Country Risk Factor</CardTitleTextBig>
                    <Buttons>
                      <Add size="24" color="#fff" />
                      Add New
                    </Buttons>
                  </Row>
                  <Row>
                    <LeftCard>
                      <Row>
                        <Row>
                          <CountryWrapper>
                            <CountryTab
                              active={activeCountry === "United Kingdom"}
                              onClick={() => setActiveCountry("United Kingdom")}
                            >
                              United Kingdom
                            </CountryTab>
                            <Line active={activeCountry === "United Kingdom"} />
                          </CountryWrapper>
                          <CountryWrapper>
                            <CountryTab
                              active={activeCountry === "Nigeria"}
                              onClick={() => setActiveCountry("Nigeria")}
                            >
                              Nigeria
                            </CountryTab>
                            <Line active={activeCountry === "Nigeria"} />
                          </CountryWrapper>
                          <CountryWrapper>
                            <CountryTab
                              active={activeCountry === "Kenya"}
                              onClick={() => setActiveCountry("Kenya")}
                            >
                              Kenya
                            </CountryTab>
                            <Line active={activeCountry === "Kenya"} />
                          </CountryWrapper>
                        </Row>
                      </Row>
                      <LineWrapper>
                        <Line active={activeCountry === "United Kingdom"} />
                        <Line active={activeCountry === "Nigeria"} />
                        <Line active={activeCountry === "Kenya"} />
                      </LineWrapper>

                      {renderRiskFactor()}
                    </LeftCard>
                    <RightCard>
                      <Column>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "space-between",
                          }}
                        >
                          <CardTitleText3>Risk Factor Pool</CardTitleText3>
                          <Button2>
                            <Add size="24" color="#000" />
                            Add New
                          </Button2>
                        </span>
                        <InnerRow>
                          <InnerCard2>
                            <ListColumn>
                              {riskFactorsMain.map((item, index) => (
                                <ListCard2
                                  key={index}
                                  isDefault={item.isDefault}
                                >
                                  <CardText>{item.factor}</CardText>

                                  <span>
                                    <Row>
                                      <Edit2 size="9" color="#000" />
                                      <Trash size="9" color="#000" />
                                    </Row>
                                  </span>
                                </ListCard2>
                              ))}
                            </ListColumn>
                          </InnerCard2>
                        </InnerRow>
                      </Column>
                    </RightCard>
                  </Row>
                </Container>
              ) : (
                <Container>
                  <Row>
                    <CardTitleText>{activeCountry}</CardTitleText>
                    <span style={{ width: "50%" }}>
                      <Row>
                        <Row>
                          <CountryWrapper>
                            <CountryTab
                              active={activeCountry === "United Kingdom"}
                              onClick={() => setActiveCountry("United Kingdom")}
                            >
                              United Kingdom{" "}
                              <ReactCountryFlag
                                countryCode="GB"
                                svg
                                style={{
                                  width: "1.5em",
                                  height: "1.5em",
                                  borderRadius: "100%"
                                }}
                              />
                            </CountryTab>
                            <Line active={activeCountry === "United Kingdom"} />
                          </CountryWrapper>
                          <CountryWrapper>
                            <CountryTab
                              active={activeCountry === "Nigeria"}
                              onClick={() => setActiveCountry("Nigeria")}
                            >
                              Nigeria
                            </CountryTab>
                            <Line active={activeCountry === "Nigeria"} />
                          </CountryWrapper>
                          <CountryWrapper>
                            <CountryTab
                              active={activeCountry === "Kenya"}
                              onClick={() => setActiveCountry("Kenya")}
                            >
                              Kenya
                            </CountryTab>
                            <Line active={activeCountry === "Kenya"} />
                          </CountryWrapper>
                        </Row>
                      </Row>
                      <LineWrapper>
                        <Line active={activeCountry === "United Kingdom"} />
                        <Line active={activeCountry === "Nigeria"} />
                        <Line active={activeCountry === "Kenya"} />
                      </LineWrapper>
                    </span>
                  </Row>
                  <Row>
                    <NormalCard>
                      <CardTitleText>Individual</CardTitleText>
                      <Column>
                        <span>
                          <CardTitleText2>Low Risk(CDD)</CardTitleText2>
                          <CardText3>{myString}</CardText3>
                        </span>

                        <InputContainer>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "50%",
                            }}
                          >
                            <IconWrapper>
                              <Clock size="18" color="#644AE5" variant="Bold" />
                            </IconWrapper>
                            <CardText4>Review Date will be</CardText4>
                          </span>

                          <span
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              width: "50%",
                            }}
                          >
                            <DropdownContainer>
                              <Dropdown>
                                <option value="3 years">Every 3 Years</option>
                                <option value="2 years">Every 2 Years</option>
                                <option value="1 year">Every Year</option>
                              </Dropdown>
                              <ArrowDown2
                                size="10"
                                color="#644ae5"
                                variant="Bold"
                              />
                            </DropdownContainer>
                          </span>
                        </InputContainer>
                        <span>
                          <CardTitleText2>Medium Risk (CDD)</CardTitleText2>
                          <CardText3>{myString2}</CardText3>
                        </span>

                        <InputContainer>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "50%",
                            }}
                          >
                            <IconWrapper>
                              <Clock size="18" color="#644AE5" variant="Bold" />
                            </IconWrapper>
                            <CardText4>Review Date will be</CardText4>
                          </span>

                          <span
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              width: "50%",
                            }}
                          >
                            <DropdownContainer>
                              <Dropdown>
                                <option value="3 years">Every 3 Years</option>
                                <option value="2 years">Every 2 Years</option>
                                <option value="1 year">Every Year</option>
                              </Dropdown>
                              <ArrowDown2
                                size="10"
                                color="#644ae5"
                                variant="Bold"
                              />
                            </DropdownContainer>
                          </span>
                        </InputContainer>
                        <span>
                          <CardTitleText2>High Risk (EDD) </CardTitleText2>
                          <CardText3>{myString2}</CardText3>
                        </span>

                        <InputContainer>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "50%",
                            }}
                          >
                            <IconWrapper>
                              <Clock size="18" color="#644AE5" variant="Bold" />
                            </IconWrapper>
                            <CardText4>Review Date will be</CardText4>
                          </span>

                          <span
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              width: "50%",
                            }}
                          >
                            <DropdownContainer>
                              <Dropdown>
                                <option value="3 years">Every 3 Years</option>
                                <option value="2 years">Every 2 Years</option>
                                <option value="1 year">Every Year</option>
                              </Dropdown>
                              <ArrowDown2
                                size="10"
                                color="#644ae5"
                                variant="Bold"
                              />
                            </DropdownContainer>
                          </span>
                        </InputContainer>
                      </Column>
                    </NormalCard>
                    <NormalCard>
                      <CardTitleText>Business</CardTitleText>
                      <Column>
                        <span>
                          <CardTitleText2>Low Risk(CDD)</CardTitleText2>
                          <CardText3>{myString}</CardText3>
                        </span>

                        <InputContainer>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "50%",
                            }}
                          >
                            <IconWrapper>
                              <Clock size="18" color="#644AE5" variant="Bold" />
                            </IconWrapper>
                            <CardText4>Review Date will be</CardText4>
                          </span>

                          <span
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              width: "50%",
                            }}
                          >
                            <DropdownContainer>
                              <Dropdown>
                                <option value="3 years">Every 3 Years</option>
                                <option value="2 years">Every 2 Years</option>
                                <option value="1 year">Every Year</option>
                              </Dropdown>
                              <ArrowDown2
                                size="10"
                                color="#644ae5"
                                variant="Bold"
                              />
                            </DropdownContainer>
                          </span>
                        </InputContainer>
                        <span>
                          <CardTitleText2>Medium Risk (CDD)</CardTitleText2>
                          <CardText3>{myString2}</CardText3>
                        </span>

                        <InputContainer>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "50%",
                            }}
                          >
                            <IconWrapper>
                              <Clock size="18" color="#644AE5" variant="Bold" />
                            </IconWrapper>
                            <CardText4>Review Date will be</CardText4>
                          </span>

                          <span
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              width: "50%",
                            }}
                          >
                            <DropdownContainer>
                              <Dropdown>
                                <option value="3 years">Every 3 Years</option>
                                <option value="2 years">Every 2 Years</option>
                                <option value="1 year">Every Year</option>
                              </Dropdown>
                              <ArrowDown2
                                size="10"
                                color="#644ae5"
                                variant="Bold"
                              />
                            </DropdownContainer>
                          </span>
                        </InputContainer>
                        <span>
                          <CardTitleText2>High Risk (EDD) </CardTitleText2>
                          <CardText3>{myString2}</CardText3>
                        </span>

                        <InputContainer>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "50%",
                            }}
                          >
                            <IconWrapper>
                              <Clock size="18" color="#644AE5" variant="Bold" />
                            </IconWrapper>
                            <CardText4>Review Date will be</CardText4>
                          </span>

                          <span
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              width: "50%",
                            }}
                          >
                            <DropdownContainer>
                              <Dropdown>
                                <option value="3 years">Every 3 Years</option>
                                <option value="2 years">Every 2 Years</option>
                                <option value="1 year">Every Year</option>
                              </Dropdown>
                              <ArrowDown2
                                size="10"
                                color="#644ae5"
                                variant="Bold"
                              />
                            </DropdownContainer>
                          </span>
                        </InputContainer>
                      </Column>
                    </NormalCard>
                  </Row>
                </Container>
              )}
            </Row>
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
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
const Card = styled.div`
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const Card3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;
const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  height: 60px;
  align-items: center;
`;
const SwitchColumn = styled.div`
  flex-direction: column;
  display: flex;
  height: 60px;
`;
const SwitchText = styled.p`
  color: ${({ active }) => (active ? "#644ae5" : "black")};
  cursor: pointer;
  margin-top: 20px;
  width: 150px;
  &:not(:last-child){
    margin-left: 40px;
  }
  &
`;
const Highlight1 = styled.div`
  height: ${({ active }) => (active === "Risk Factor" ? "2px" : "1px")};
  background-color: ${({ active }) =>
    active === "Risk Factor" ? "#644ae5" : "rgba(0, 0, 0, 0);"};
  width: 80%;
  margin-top: auto;
`;
const Highlight2 = styled.div`
  height: ${({ active }) => (active === "Compliance Review" ? "2px" : "1px")};
  background-color: ${({ active }) =>
    active === "Compliance Review" ? "#644ae5" : "rgba(0, 0, 0, 0);"};
  width: 80%;
  margin-left: 35px;
  margin-top: auto;
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
const CardTitleTextBig = styled.div`
  margin-top: 10px;
  color: #000000;
  font-size: 20px;
`;
const Buttons = styled.button`
  padding: 10px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  color: #fff;
  margin-right: 20px;
  margin-top: 10px;
`;
const Button2 = styled.button`
  background-color: #ecedf0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  color: #000;
`;
const LeftCard = styled(Card)`
  height: 80vh;
  padding: 35px;
  width: 65%;
  margin-right: 10px;
`;
const RightCard = styled(Card)`
  height: 80vh;
  padding: 15px;
  width: 35%;
`;
const CountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
`;
const CountryTab = styled.p`
  color: ${({ active }) => (active ? "#644ae5" : "black")};
  cursor: pointer;
`;
const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2px;
`;
const Line = styled.div`
  flex-grow: 1;
  height: 100%;
  background-color: ${({ active }) =>
    active ? "#644ae5" : "rgba(0, 0, 0, 0.1)"};
`;
const Column = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
`;
const CardTitleText = styled.p`
  color: #000000;
  font-weight: 600;
  font-size: 18px;
  margin-top: 15px;
`;
const CardTitleText3 = styled.p`
  color: #000000;
  font-weight: 600;
  font-size: 18px;
`;
const InnerRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;
const InnerCard = styled(Card)`
  height: 98%;
  width: 50%;
  padding: 15px;
  background-color: #f7f9fc;
  &:first-child {
    margin-right: 5px;
  }
`;
const InnerCard2 = styled(Card)`
  height: 100%;
  width: 100%;
  padding: 15px;
  background-color: #f7f9fc;
  &:first-child {
    margin-right: 5px;
  }
`;
const ListColumn = styled.div`
  width: 100%;
  height: 95%;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  overflow-y: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const ListCard = styled(Card)`
  flex-direction: row;
  height: 40px;
  padding: 7px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: ${({ isDefault }) => (isDefault ? "#DEE5F6" : "#fff")};
`;
const ListCard2 = styled(Card)`
  flex-direction: row;
  height: 40px;
  padding: 7px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const HeaderText2 = styled.p`
  color: #000;
  font-size: 13px;
  font-weight: 600;
`;
const CardText = styled.p`
  color: #000000;
  font-size: 11px;
`;
const CardText2 = styled.p`
  color: #000000;
  font-size: 9px;
  color: #644ae5;
  font-weight: 900;
`;
const DefaultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(100, 74, 229, 0.13);
  border-radius: 15px;
  padding: 3px;
`;
const NormalCard = styled(Card)`
  height: 70vh;
  padding: 35px;
  width: 50%;
  &:first-child {
    margin-right: 10px;
  }
`;
const CardTitleText2 = styled.p`
  color: #000000;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: inline-block;
`;
const CardText3 = styled.p`
  color: #000000;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: inline-block;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f5f9ff;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  min-height: 60px;
  width: 100%;
  margin-bottom: 30px;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dbe2ef;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 20px;
`;
const CardText4 = styled.p`
  color: #000000;
  font-size: 12px;
  display: inline-block;
`;
const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #644ae5;
`;
const Dropdown = styled.select`
  appearance: none;
  background: transparent;
  color: #644ae5;
  border: none;
  padding: 10px;
  font-size: 12px;
  cursor: pointer;
`;
