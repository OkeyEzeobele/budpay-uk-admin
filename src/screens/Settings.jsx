import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../api";
import { ToastContainer, toast } from "react-toastify";
import {
  Add,
  Edit2,
  Trash,
  Clock,
  ArrowDown2,
  CloseCircle,
} from "iconsax-react";
import PuffLoader from "react-spinners/PuffLoader";
import Modal from "react-modal";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactCountryFlag from "react-country-flag";
//Sections
import TopNavbar from "../components/Nav/TopNavbar";
Modal.setAppElement("#root");

export default function Settings() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [updatePoolModalIsOpen, setUpdatePoolModalIsOpen] = useState(false);
  const [updateParamModalIsOpen, setUpdateParamModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [toggleState, setToggleState] = useState("Risk Factor");
  const [activeSwitch, setActiveSwitch] = useState("Risk Factor");
  const [activeCountry, setActiveCountry] = useState("United Kingdom");
  const [riskFactorPool, setriskFactorPool] = useState([]);
  const [accountRiskFactor, setaccountRiskFactor] = useState([]);
  const [individualRiskFactor, setIndividualRiskFactor] = useState([]);
  const [businessRiskFactor, setBusinessRiskFactor] = useState([]);
  const [isPoolLoading, setIsPoolLoading] = useState(true);
  const [isFactorLoading, setIsFactorLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState([]);
  const [targetId, setTargetId] = useState(null);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [factorId, setFactorId] = useState(0);
  const incrementScore = () => setScore((prevScore) => prevScore + 1);
  const decrementScore = () =>
    setScore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
  useEffect(() => {
    getriskFactorPool();
  }, []);
  useEffect(() => {
    getaccountRiskFactorPool();
  }, []);
  // useEffect(() => {
  //   setIsFactorLoading(isFactorLoading);
  // }, [isFactorLoading]);

  const toggle = () => {
    setToggleState((prevState) =>
      prevState === "Risk Factor" ? "Compliance Review" : "Risk Factor"
    );
  };
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setName("");
  };
  const openAddModal = () => {
    setAddModalIsOpen(true);
  };
  const closeAddModal = () => {
    setAddModalIsOpen(false);
    setCurrentItem([]);
    setScore(0);
  };
  const openUpdateModal = () => {
    setUpdatePoolModalIsOpen(true);
  };
  const closeUpdateModal = () => {
    setUpdatePoolModalIsOpen(false);
    setFactorId(0);
    setName("");
  };
  const openUpdateParamModal = () => {
    setUpdateParamModalIsOpen(true);
  };
  const closeUpdateParamModal = () => {
    setUpdateParamModalIsOpen(false);
    setCurrentItem([]);
    setScore(0);
  };
  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };
  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
    setCurrentItem([]);
  };
  const setRiskFactors = (accountRiskFactor) => {
    setBusinessRiskFactor(
      accountRiskFactor.filter((item) => item.accountType === "Business")
    );
    setIndividualRiskFactor(
      accountRiskFactor.filter((item) => item.accountType === "Individual")
    );
    setIsFactorLoading(false);
  };
  const addRiskFactorPool = async (name) => {
    let body = {
      channel: 1,
      ipAddress: "string",
      actor: 61,
      deviceId: "string",
      browser: "string",
      accountId: 0,
      name: name,
    };
    await api
      .post(`/api/v2/riskfactor/create`, body, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccessful === true) {
          toast.success(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              backgroundColor: "#4CBB17",
              color: "#fff",
            },
          });
          getriskFactorPool();
        } else {
          toast.error(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
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
        setIsPoolLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsPoolLoading(false);
      });
  };
  const updateRiskFactorPool = async (name, id) => {
    let body = {
      channel: 1,
      ipAddress: "string",
      actor: 61,
      deviceId: "string",
      browser: "string",
      accountId: 0,
      id: id,
      name: name,
    };
    await api
      .post(`/api/v2/riskfactor/update`, body, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccessful === true) {
          toast.success(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              backgroundColor: "#4CBB17",
              color: "#fff",
            },
          });
          getriskFactorPool();
        } else {
          toast.error(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
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
        setIsPoolLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsPoolLoading(false);
      });
  };
  const addAccountRiskFactorPool = async (id, factor, type) => {
    let body = {
      channel: 1,
      ipAddress: "string",
      actor: 61,
      deviceId: "string",
      browser: "string",
      accountId: 0,
      subsidiaryCode: "GB",
      riskParameters: [
        {
          riskFactorId: id,
          weightingFactor: factor,
          accountType: type,
        },
      ],
    };
    await api
      .post(`/api/v2/riskparameter/create`, body, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccessful === true) {
          toast.success(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              backgroundColor: "#4CBB17",
              color: "#fff",
            },
          });
          getaccountRiskFactorPool();
        } else {
          setIsFactorLoading(false);
          toast.error(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
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
      })
      .catch((error) => {
        console.error(error);
        setIsFactorLoading(false);
      });
  };
  const updateAccountRiskFactorPool = async (id, factor, type) => {
    let body = {
      channel: 1,
      ipAddress: "string",
      actor: 61,
      deviceId: "string",
      browser: "string",
      accountId: 0,
      subsidiaryCode: "gb",
      riskFactorId: id,
      weightingFactor: factor,
      accountType: type,
    };
    await api
      .post(`/api/v2/riskparameter/update`, body, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccessful === true) {
          toast.success(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              backgroundColor: "#4CBB17",
              color: "#fff",
            },
          });
          getaccountRiskFactorPool();
        } else {
          setIsFactorLoading(false);
          toast.error(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
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
      })
      .catch((error) => {
        console.error(error);
        setIsFactorLoading(false);
      });
  };
  const getriskFactorPool = async () => {
    setIsPoolLoading(true);
    let body = {
      channel: 1,
      ipAddress: "string",
      actor: 61,
      deviceId: "string",
      browser: "string",
      accountId: 0,
    };
    await api
      .post(`/api/v2/riskfactor/get`, body, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccessful === true) {
          setriskFactorPool(response.data.returnedObjects);
        } else {
          toast.error(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
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
        setIsPoolLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsPoolLoading(false);
      });
  };
  const getaccountRiskFactorPool = async () => {
    let body = {
      channel: 1,
      ipAddress: "string",
      actor: 61,
      deviceId: "string",
      browser: "string",
      accountId: 82,
      subsidiaryCode: "gb",
    };
    await api
      .post(`/api/v2/riskparameter/get`, body, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccessful === true) {
          setaccountRiskFactor(response.data.returnedObjects);
          setRiskFactors(response.data.returnedObjects);
        } else {
          setIsFactorLoading(false);
          toast.error(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
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
      })
      .catch((error) => {
        console.error(error);
        setIsFactorLoading(false);
      });
  };
  const deleteRiskFactorPool = async (id) => {
    await api
      .get(`/api/v2/riskfactor/delete/${id}`, {
        headers: {
          accept: "*/*",
          "X-Auth-Signature": `179C050B170DAB3BEBB98603BD05FB47EE846336F5324FC6D9C34E82792A215EB65A6BC60BB7FEA38CD6389BF4E533E01B753A9787AA7E8E62FC6FA7B018B33C`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccessful === true) {
          toast.success(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              backgroundColor: "#4CBB17",
              color: "#fff",
            },
          });
          getriskFactorPool();
        } else {
          toast.error(response.data.responseMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
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
        setIsPoolLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsPoolLoading(false);
      });
  };
  var myString = "(x<=30)";
  var myString2 = "(30 < x <= 60)";
  var myString3 = "(60 < x <= 100)";
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "35%",
      height: "48%",
      borderRadius: "15px",
    },
  };

  const ItemTypes = { CARD: "card" };

  function handleDrop(item, targetId) {
    setCurrentItem(item);
    openAddModal();
    setTargetId(targetId);
  }

  const DraggableListCard2 = ({ item, index }) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: "card",
      item: item,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });
    return (
      <ListCard2 ref={dragRef} key={index}>
        <CardText>{item.name}</CardText>

        <div
          style={{
            width: "12%",
            justifyContent: "space-between",
            alignItems: "end",
            display: "flex",
          }}
        >
          <Edit2
            size="12"
            color="#000"
            onClick={() => {
              openUpdateModal();
              setName(item.name);
              setFactorId(item.id);
            }}
            cursor={"pointer"}
          />
          <Trash
            size="12"
            color="#000"
            onClick={() => {
              openDeleteModal();
              setCurrentItem(item);
            }}
            cursor={"pointer"}
          />
        </div>
      </ListCard2>
    );
  };
  const DropableColumn = ({ onDrop, children, id, ...props }) => {
    const [{ isOver }, dropRef] = useDrop({
      accept: "card",
      drop: (item) => onDrop(item, id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    });

    return (
      <ListColumn ref={dropRef} {...props}>
        {children}
      </ListColumn>
    );
  };

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
              {isFactorLoading ? (
                <LoaderContainer>
                  <PuffLoader
                    color="#644AE5"
                    loading={isFactorLoading}
                    size={100}
                  />
                </LoaderContainer>
              ) : individualRiskFactor.length == 0 ? (
                <DropableColumn
                  id="Individual"
                  onDrop={(item) => handleDrop(item, "Individual")}
                >
                  <h4>No Risk Factors Have Been Defined </h4>
                </DropableColumn>
              ) : (
                <DropableColumn
                  id="Individual"
                  onDrop={(item) => handleDrop(item, "Individual")}
                >
                  {individualRiskFactor.map((item, index) => (
                    <ListCard key={index}>
                      <CardText>{item.name}</CardText>
                      <div
                        style={{
                          width: "12%",
                          justifyContent: "space-between",
                          alignItems: "end",
                          display: "flex",
                        }}
                      >
                        <Edit2
                          size="12"
                          color="#000"
                          onClick={() => {
                            setCurrentItem(item);
                            openUpdateParamModal();
                            setScore(item.weight);
                          }}
                          cursor={"pointer"}
                        />
                        <Trash size="12" color="#000" />
                      </div>
                    </ListCard>
                  ))}
                </DropableColumn>
              )}
            </InnerCard>
            <InnerCard>
              <Row>
                <HeaderText2>Business Account Risk Factor</HeaderText2>
              </Row>
              {isFactorLoading ? (
                <LoaderContainer>
                  <PuffLoader
                    color="#644AE5"
                    loading={isFactorLoading}
                    size={100}
                  />
                </LoaderContainer>
              ) : businessRiskFactor.length == 0 ? (
                <DropableColumn
                  id="Business"
                  onDrop={(item) => handleDrop(item, "Business")}
                >
                  <h4>No Risk Factors Have Been Defined </h4>
                </DropableColumn>
              ) : (
                <DropableColumn
                  id="Business"
                  onDrop={(item) => handleDrop(item, "Business")}
                >
                  {businessRiskFactor.map((item, index) => (
                    <ListCard key={index}>
                      <CardText>{item.name}</CardText>
                      <div
                        style={{
                          width: "12%",
                          justifyContent: "space-between",
                          alignItems: "end",
                          display: "flex",
                        }}
                      >
                        <Edit2
                          size="12"
                          color="#000"
                          onClick={() => {
                            setCurrentItem(item);
                            openUpdateParamModal();
                            setScore(item.weight);
                          }}
                          cursor={"pointer"}
                        />
                        <Trash size="12" color="#000" />
                      </div>
                    </ListCard>
                  ))}
                </DropableColumn>
              )}
            </InnerCard>
          </InnerRow>
        </Column>
      );
    }
  }
  return (
    <>
      <TopNavbar />
      <ToastContainer />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "80%",
            padding: "20px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <CloseCircle size="24" color="#BCBEC0" onClick={closeModal} />
          </div>

          <h2>Add New Risk Factor Pool</h2>
          <Row></Row>

          <form
            style={{
              width: "80%",
              paddingBottom: "20px",
            }}
            onSubmit={(event) => {
              setIsFactorLoading(true);
              event.preventDefault();
              addRiskFactorPool(name);
              setName("");
              closeModal();
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <label>Risk Factor</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  height: "35px",
                  width: "100%",
                  border: "1px solid #BCBEC0",
                  backgroundColor: "#F4F6F8",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <input
                type="submit"
                value="Add New"
                style={{
                  backgroundColor: "#6243ED",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  height: "50px",
                }}
              />
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={addModalIsOpen}
        onRequestClose={closeAddModal}
        style={customStyles}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "80%",
            padding: "20px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <CloseCircle size="24" color="#BCBEC0" onClick={closeAddModal} />
          </div>

          <h2>Add New Risk Factor for {targetId}</h2>
          <Row></Row>
          <form
            style={{
              width: "80%",
              paddingBottom: "20px",
            }}
            onSubmit={(event) => {
              let type = 0;
              if (targetId === "Individual") {
                type = 1;
              } else {
                type = 2;
              }
              setIsFactorLoading(true);
              event.preventDefault();
              addAccountRiskFactorPool(currentItem.id, score, type);
              setCurrentItem([]);
              setScore(0);
              closeAddModal();
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <label>Risk Factor</label>
              <input
                type="text"
                name="name"
                readOnly
                value={currentItem.name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  height: "35px",
                  width: "100%",
                  border: "1px solid #BCBEC0",
                  backgroundColor: "#F4F6F8",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <label>Weighted Score</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "50%",
                }}
              >
                <div
                  type="button"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "15px",
                    backgroundColor: "#F4F6F8",
                    border: "1px solid #BCBEC0",
                    cursor: "pointer",
                  }}
                  onClick={decrementScore}
                >
                  -
                </div>

                <input
                  type="text"
                  name="score"
                  value={score}
                  readOnly
                  style={{
                    height: "35px",
                    width: "50%",
                    border: "1px solid #BCBEC0",
                    backgroundColor: "#F4F6F8",
                    borderRadius: "5px",
                    padding: "5px",
                    textAlign: "center",
                  }}
                />
                <div
                  type="button"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "15px",
                    backgroundColor: "#F4F6F8",
                    border: "1px solid #BCBEC0",
                  }}
                  onClick={incrementScore}
                >
                  +
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <input
                type="submit"
                value="Add New"
                style={{
                  backgroundColor: "#6243ED",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  height: "50px",
                }}
              />
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={updatePoolModalIsOpen}
        onRequestClose={closeUpdateModal}
        style={customStyles}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "80%",
            padding: "20px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <CloseCircle size="24" color="#BCBEC0" onClick={closeUpdateModal} />
          </div>

          <h2>Update Risk Factor Pool</h2>
          <Row></Row>

          <form
            style={{
              width: "80%",
              paddingBottom: "20px",
            }}
            onSubmit={(event) => {
              setIsPoolLoading(true);
              event.preventDefault();
              updateRiskFactorPool(name, factorId);
              setName("");
              setFactorId(0);
              closeUpdateModal();
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <label>Risk Factor</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  height: "35px",
                  width: "100%",
                  border: "1px solid #BCBEC0",
                  backgroundColor: "#F4F6F8",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <input
                type="submit"
                value="Update"
                style={{
                  backgroundColor: "#6243ED",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  height: "50px",
                }}
              />
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={updateParamModalIsOpen}
        onRequestClose={closeUpdateParamModal}
        style={customStyles}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "80%",
            padding: "20px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <CloseCircle
              size="24"
              color="#BCBEC0"
              onClick={closeUpdateParamModal}
            />
          </div>

          <h2>Update Risk Factor</h2>
          <Row></Row>

          <form
            style={{
              width: "80%",
              paddingBottom: "20px",
            }}
            onSubmit={(event) => {
              let type = 0;
              if (currentItem.accountType === "Individual") {
                type = 1;
              } else {
                type = 2;
              }
              setIsFactorLoading(true);
              event.preventDefault();
              updateAccountRiskFactorPool(
                currentItem.riskFactorId,
                score,
                type
              );
              setCurrentItem([]);
              closeUpdateParamModal();
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <label>Risk Factor</label>
              <input
                type="text"
                name="name"
                readOnly
                value={currentItem.name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  height: "35px",
                  width: "100%",
                  border: "1px solid #BCBEC0",
                  backgroundColor: "#F4F6F8",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <label>Weighted Score</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "50%",
                }}
              >
                <div
                  type="button"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "15px",
                    backgroundColor: "#F4F6F8",
                    border: "1px solid #BCBEC0",
                    cursor: "pointer",
                  }}
                  onClick={decrementScore}
                >
                  -
                </div>

                <input
                  type="text"
                  name="score"
                  value={score}
                  readOnly
                  style={{
                    height: "35px",
                    width: "50%",
                    border: "1px solid #BCBEC0",
                    backgroundColor: "#F4F6F8",
                    borderRadius: "5px",
                    padding: "5px",
                    textAlign: "center",
                  }}
                />
                <div
                  type="button"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "15px",
                    backgroundColor: "#F4F6F8",
                    border: "1px solid #BCBEC0",
                  }}
                  onClick={incrementScore}
                >
                  +
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <input
                type="submit"
                value="Update"
                style={{
                  backgroundColor: "#6243ED",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  height: "50px",
                }}
              />
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "80%",
            padding: "20px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <CloseCircle size="24" color="#BCBEC0" onClick={closeDeleteModal} />
          </div>

          <h2>Delete This Risk Factor?</h2>
          <Row></Row>

          <form
            style={{
              width: "80%",
              paddingBottom: "20px",
            }}
            onSubmit={(event) => {
              setIsPoolLoading(true);
              event.preventDefault();
              deleteRiskFactorPool(currentItem.id);
              setCurrentItem([]);
              closeDeleteModal();
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <input
                type="submit"
                value="Delete"
                style={{
                  backgroundColor: "#6243ED",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  height: "50px",
                }}
              />
            </div>
          </form>
        </div>
      </Modal>
      <DndProvider backend={HTML5Backend}>
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
                                onClick={() =>
                                  setActiveCountry("United Kingdom")
                                }
                              >
                                United Kingdom
                              </CountryTab>
                              <Line
                                active={activeCountry === "United Kingdom"}
                              />
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
                            <Button2 onClick={openModal}>
                              <Add size="24" color="#000" />
                              Add New
                            </Button2>
                          </span>
                          <InnerRow>
                            <InnerCard2>
                              {isPoolLoading ? (
                                <LoaderContainer>
                                  <PuffLoader
                                    color="#644AE5"
                                    loading={isPoolLoading}
                                    size={100}
                                  />
                                </LoaderContainer>
                              ) : (
                                <ListColumn>
                                  {riskFactorPool.map((item, index) => (
                                    <DraggableListCard2
                                      key={index}
                                      item={item}
                                      index={index}
                                    />
                                  ))}
                                </ListColumn>
                              )}
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
                                onClick={() =>
                                  setActiveCountry("United Kingdom")
                                }
                              >
                                United Kingdom{" "}
                                <ReactCountryFlag
                                  countryCode="GB"
                                  svg
                                  style={{
                                    width: "1.5em",
                                    height: "1.5em",
                                    borderRadius: "100%",
                                  }}
                                />
                              </CountryTab>
                              <Line
                                active={activeCountry === "United Kingdom"}
                              />
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
                                <Clock
                                  size="18"
                                  color="#644AE5"
                                  variant="Bold"
                                />
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
                                <Clock
                                  size="18"
                                  color="#644AE5"
                                  variant="Bold"
                                />
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
                                <Clock
                                  size="18"
                                  color="#644AE5"
                                  variant="Bold"
                                />
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
                                <Clock
                                  size="18"
                                  color="#644AE5"
                                  variant="Bold"
                                />
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
                                <Clock
                                  size="18"
                                  color="#644AE5"
                                  variant="Bold"
                                />
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
                                <Clock
                                  size="18"
                                  color="#644AE5"
                                  variant="Bold"
                                />
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
      </DndProvider>
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
  height: 95%;
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
  height: 50px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ListCard2 = styled(Card)`
  flex-direction: row;
  height: 50px;
  padding: 12px;
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
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
