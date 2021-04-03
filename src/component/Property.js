import React, { Fragment, useState } from "react";
import {
    Accordion,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";

const headingH2 = {
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "40px",
  lineHeight: "52px",
  marginLeft: "16px",
};

const main_wrapper = {
  padding: "30px",
  margin: "20px",
  background: "#FFFFFF",
  border: "1px solid #C7C7C7",
  boxSizing: "border-box",
  borderRadius: "4px",
  boxShadow: "rgb(102 102 102 / 60%) 3px 3px 4px",
};
// const meeting_wrapper = {
//   border: "1px solid #E5E5E5",
//   padding: "30px",
//   margin: "20px",
// };
const meeting_wrapper1 = {
    border: "1px solid rgb(176 176 176)",
    padding: "35px",
    marginRight:"9px",
    background:"#FFFDE7"
};
const meeting_done_wrapper1 = {
    border: "1px solid rgb(176 176 176)",
    padding: "35px",
    marginRight:"9px",
    background:"#FFFDE7"
};
const upcomming_wrapper1 = {
  border: "1px solid rgb(176 176 176)",
  padding: "35px",
  marginRight:"9px",
  background:"#FFFDE7"
};
const content = {
  fontFamily: "PT Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "18px",
};
const Property = () => {
  const [show, setShow] = useState(false);
  const [isNewMeetingModalOpen, setIsNewMeetingModalOpen] = useState(false);
  
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Container fluid className="mr-4 ml-1">
        <h2 style={headingH2}>Lead on 11:43, 21 Feb, 2021</h2>
        <div style={main_wrapper}>
          <Row>
            <Col md={7}>
              <Row>
                <Col md={3}>
                  <h6 className="mb-3">Created on</h6>
                  <h6 className="mb-3">Lead Type</h6>
                  <h6 className="mb-3">Property ID</h6>
                  <h6 className="mb-3">Name</h6>
                  <h6 className="mb-3">Phone</h6>
                  <h6 className="mb-3">Zilla</h6>
                  <h6 className="mb-3">Upazilla/Thana</h6>
                  <h6 className="mb-3">STATUS</h6>
                </Col>
                <Col md={9} style={content}>
                  <h6 className="mb-3">11:43, 21 Feb, 2021</h6>
                  <h6 className="mb-3">Buyer</h6>
                  <h6 className="mb-3">123ABC</h6>
                  <h6 className="mb-3">Mr. Sandman</h6>
                  <h6 className="mb-3">01234567890</h6>
                  <h6 className="mb-3">Dhaka</h6>
                  <h6 className="mb-3">Mohammadpur</h6>
                  <h6 className="mb-3">Call on dd/mm/yyyy</h6>
                </Col>
              </Row>
            </Col>
            <Col md={2}></Col>
            <Col md={3}>
              <Button style={{ background:" rgb(106, 181, 62)",
                marginLeft: "107px",
                fontFamily: "PT Sans",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "21px"}} 
                onClick={handleShow}>
              Transfer Lead to Sales Dept
              </Button>
            </Col>
            <div className="d-flex">
              <h6 className="mr-5 ml-3">Comments</h6>
              <span
                className=""
                style={{
                  fontFamily: "PT Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "18px",
                  textAlign: "justify",
                  color: "#474747",
                  paddingRight:"15px",
                  marginRight:"7px",
                  marginLeft:"80px"
                }}
              >
                Dolorum quod quo atque ut quo beatae unde quis. Modi repellat ut
                nihil voluptas vero. Recusandae nemo minima autem sit. usto
                aliquid eum quia nobis dolore ex. Iusto laudantium beatae
                dolorem animi. Ullam fugiat corporis est debitis ullam ea et.
                Quia rerum ratione quia ut voluptas deserunt quaerat atque.
                liquid eum quia nobis dolore ex. Iusto laudantium beatae dolorem
                animi. Ullam fugiat corporis est debitis ullam ea et. Quia rerum
                ratione quia ut voluptas deserunt quaerat atque.
              </span>
            </div>

            {/* Modal for editing The field */}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Property</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group as={Row} controlId="created">
                    <Form.Label column sm="3">
                      Created on
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control type="date" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="LeadType">
                    <Form.Label column sm="3">
                      Lead Type
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control as="select">
                        <option>Buyer</option>
                        <option>Seller</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="PropertyID">
                    <Form.Label column sm="3">
                      Property ID
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="123ABC"
                      ></Form.Control>{" "}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label column sm="3">
                      Name
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="Mr. Sandman"
                      ></Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="phone">
                    <Form.Label column sm="3">
                      Phone
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="01234567890"
                      ></Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="Zilla">
                    <Form.Label column sm="3">
                      Zilla
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="Dhaka"
                      ></Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="upazilla">
                    <Form.Label column sm="3">
                      Upazilla/Thana
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="Mohammadpur"
                      ></Form.Control>{" "}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="status">
                    <Form.Label column sm="3">
                      STATUS
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control type="date" name="dob" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="comments">
                    <Form.Label column sm="3">
                      Comments
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control as="textarea" row={4} defaultValue="vbofsmvptiemgihpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpohpo"></Form.Control>
                    </Col>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>

          {/* Meetings */}

          <Row style={{ marginTop: "30px", marginBottom:"15px" }}>
            {/* <Col md={9}>
              <h3>Meetings</h3>
            </Col>
            <Col md={3}>
              <Button style={{ background: "#BC9700" }}>+ New Meetings </Button>
            </Col> */}
            <Col>
            <div className="d-flex mb-3">
            <h3 className="float-left">Meetings</h3>
            <Button className="ml-auto" style={{ background: "#BC9700"}} onClick={() => setIsNewMeetingModalOpen(!isNewMeetingModalOpen)}>+ New Meetings </Button>
                       
                
            </div>
          
          {isNewMeetingModalOpen && (
               <div style={meeting_wrapper1}>
               <Form className="mt-4">
               <Row>
                 <Col md={6}>
                   <Form.Group as={Row} controlId="MeetingStatus">
                     <Form.Label column md={4}>
                       Meeting Status
                     </Form.Label>
                     <Col md={6} style={{marginLeft:"109px"}}>
                       <Form.Control
                         type="text"
                         placeholder=" Meeting Status"
                       />
                     </Col>
                   </Form.Group>
                 </Col>
                 <Col md={6}>
                   <Form.Group as={Row} controlId="MeetingTime">
                     <Form.Label column sm={4}>
                       Meeting Time
                     </Form.Label>
                     <Col sm={8}>
                       <Form.Control
                         type="date"
                         placeholder="11:43, 21 Feb, 2021"
                       />
                     </Col>
                   </Form.Group>
                 </Col>
               </Row>
               <Form.Group as={Row} controlId="ExecutiveName">
                 <Form.Label column sm={3}>
                   Executive Name
                 </Form.Label>
                 <Col sm={9}>
                   <Form.Control type="text" placeholder="John" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="ExecutiveName">
                 <Form.Label column sm={3}>
                   Meeting Objectives
                 </Form.Label>
                 <Col sm={9}>
                     <Form.Control style={{width:"100%", boxSizing: "border-box"}} as="textarea" rows={3} cols={30} placeholder="" >
                     Dolorum quod quo atque ut quo beatae unde quis. Modi
                     repellat ut nihil voluptas vero. Recusandae nemo minima
                     autem sit. usto aliquid eum quia nobis dolore ex. Iusto
                     lauda ntium beatae dolorem animi. Ullam fugiat corporis
                     est debitis ullam ea et. Quia rerum ratione quia ut
                     voluptas deserunt quaerat atque. liquid eum quia nobis
                     dolore ex. Iusto laudantium beatae dolorem animi. Ullam
                     fugiat corporis est debitis ullam ea et. Quia rerum
                     ratione quia ut voluptas deserunt quaerat atque.
                     </Form.Control>
                     
                   
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="ExecutiveName">
                 <Form.Label column sm={3}>
                   Meeting Outcomes
                 </Form.Label>
                 <Col sm={9}>
                 <Form.Control style={{width:"100%", boxSizing: "border-box"}} as="textarea" rows={3} cols={30} placeholder="" >
                     Dolorum quod quo atque ut quo beatae unde quis. Modi
                     repellat ut nihil voluptas vero. Recusandae nemo minima
                     autem sit. usto aliquid eum quia nobis dolore ex. Iusto
                     lauda ntium beatae dolorem animi. Ullam fugiat corporis
                     est debitis ullam ea et. Quia rerum ratione quia ut
                     voluptas deserunt quaerat atque. liquid eum quia nobis
                     dolore ex. Iusto laudantium beatae dolorem animi. Ullam
                     fugiat corporis est debitis ullam ea et. Quia rerum
                     ratione quia ut voluptas deserunt quaerat atque.
                     </Form.Control>
                 </Col>
               </Form.Group>
             </Form>
             </div>
          )}
         
            
            
            </Col>
          </Row>
          <div style={upcomming_wrapper1}>
            <Row>
              <Col>
                <h6>
                  <strong
                    style={{
                      color: "#B50909",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    UPCOMING MEETING
                  </strong>{" "}
                  <span>11:43, 21 Feb, 2021</span>
                </h6>
                <span>Issued on 11:43, 21 Feb, 2021</span>
              </Col>
            </Row>
            <Row style={{ marginTop: "12px" }}>
              <Col md={3}>
                <h5
                  style={{
                    fontFamily: "PT Sans",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "21px",
                    textAlign: "justify",
                    color: "#474747",
                    marginBottom: "10px",
                  }}
                >
                  Executive Name
                </h5>
                <h5
                  style={{
                    fontFamily: "PT Sans",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "21px",
                    textAlign: "justify",
                    color: "#474747",
                  }}
                >
                  Meeting Objectives
                </h5>
              </Col>
              <Col
                md={9}
                style={{
                  fontFamily: "PT Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "18px",
                  textAlign: "justify",
                  color: "#474747",
                }}
              >
                <h5
                  style={{
                    fontFamily: "PT Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "18px",
                    textAlign: "justify",
                    color: "#474747",
                  }}
                >
                  John Doe
                </h5>
                <h6
                  style={{
                    fontFamily: "PT Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "18px",
                    textAlign: "justify",
                    color: "#474747",
                    marginTop: "15px",
                  }}
                >
                  Dolorum quod quo atque ut quo beatae unde quis. Modi repellat
                  ut nihil voluptas vero. Recusandae nemo minima autem sit. usto
                  aliquid eum quia nobis dolore ex. Iusto lauda ntium beatae
                  dolorem animi. Ullam fugiat corporis est debitis ullam ea et.
                  Quia rerum ratione quia ut voluptas deserunt quaerat atque.
                  liquid eum quia nobis dolore ex. Iusto laudantium beatae
                  dolorem animi. Ullam fugiat corporis est debitis ullam ea et.
                  Quia rerum ratione quia ut voluptas deserunt quaerat atque.
                </h6>
              </Col>
            </Row>
          </div>

          <div style={meeting_done_wrapper1} className="mt-3">
            <Row>
              <Col>
                <h6>
                  <strong
                    style={{
                      color: "#09B51A",
                      fontSize: "16px",
                      fontWeight: "700",
                      lineHeight: "21px",
                    }}
                  >
                    {" "}
                    MEETING DONE
                  </strong>{" "}
                  <span>11:43, 21 Feb, 2021</span>
                </h6>
                <span>Issued on 11:43, 21 Feb, 2021</span>
              </Col>
            </Row>
            <Row style={{ marginTop: "12px" }}>
              <Col md={3}>
                <h5
                  style={{
                    fontFamily: "PT Sans",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "21px",
                    textAlign: "justify",
                    color: "#474747",
                    marginBottom: "10px",
                  }}
                >
                  Executive Name
                </h5>
                <h5
                  style={{
                    fontFamily: "PT Sans",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "21px",
                    textAlign: "justify",
                    color: "#474747",
                    marginBottom: "100px",
                  }}
                >
                  Meeting Objectives
                </h5>
                <h5
                  style={{
                    fontFamily: "PT Sans",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "21px",
                    textAlign: "justify",
                    color: "#474747",
                    marginBottom: "10px",
                  }}
                >
                  Meeting Outcomes
                </h5>
              </Col>
              <Col
                md={9}
                style={{
                  fontFamily: "PT Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "18px",
                  textAlign: "justify",
                  color: "#474747",
                }}
              >
                <h6 className="mb-2">John Doe</h6>
                <h6>
                  Dolorum quod quo atque ut quo beatae unde quis. Modi repellat
                  ut nihil voluptas vero. Recusandae nemo minima autem sit. usto
                  aliquid eum quia nobis dolore ex. Iusto lauda ntium beatae
                  dolorem animi. Ullam fugiat corporis est debitis ullam ea et.
                  Quia rerum ratione quia ut voluptas deserunt quaerat atque.
                  liquid eum quia nobis dolore ex. Iusto laudantium beatae
                  dolorem animi. Ullam fugiat corporis est debitis ullam ea et.
                  Quia rerum ratione quia ut voluptas deserunt quaerat atque.
                </h6>

                <h6>
                  Dolorum quod quo atque ut quo beatae unde quis. Modi repellat
                  ut nihil voluptas vero. Recusandae nemo minima autem sit. usto
                  aliquid eum quia nobis dolore ex. Iusto lauda ntium beatae
                  dolorem animi. Ullam fugiat corporis est debitis ullam ea et.
                  Quia rerum ratione quia ut voluptas deserunt quaerat atque.
                  liquid eum quia nobis dolore ex. Iusto laudantium beatae
                  dolorem animi. Ullam fugiat corporis est debitis ullam ea et.
                  Quia rerum ratione quia ut voluptas deserunt quaerat atque.
                </h6>
              </Col>
            </Row>
          </div>

          {/* meeting done  */}

          <div style={meeting_wrapper1} className="mt-3">
            {/* <Row>
              <Col md={10}>
                <span>Issued on 11:43, 21 Feb, 2021</span>
              </Col>
              <Col md={2}>
                <Button style={{ background: "#BC9700" }}>Done</Button>
              </Col>
            </Row> */}
            <div className="d-flex">
            <h6 style={{
                  fontFamily: "PT Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#474747",
                }} className="mr-auto">Issued on 11:43, 21 Feb, 2021</h6>
            <h6 style={{
                  fontFamily: "PT Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "23px",
                  lineHeight: "18px",
                  color: "#474747",
                }}>DONE</h6>
            </div>
            <Row>
              <Col id="mamun">
                <Form className="mt-4">
                  <Row>
                    <Col md={6}>
                      <Form.Group as={Row} controlId="MeetingStatus">
                        <Form.Label column md={4}>
                          Meeting Status
                        </Form.Label>
                        <Col md={6} style={{marginLeft:"109px"}}>
                          <Form.Control
                            type="text"
                            placeholder=" Meeting Status"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group as={Row} controlId="MeetingTime">
                        <Form.Label column sm={4}>
                          Meeting Time
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="date"
                            placeholder="11:43, 21 Feb, 2021"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group as={Row} controlId="ExecutiveName">
                    <Form.Label column sm={3}>
                      Executive Name
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" placeholder="John" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="ExecutiveName">
                    <Form.Label column sm={3}>
                      Meeting Objectives
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control style={{width:"100%", boxSizing: "border-box"}} as="textarea" rows={3} cols={30} placeholder="" >
                        Dolorum quod quo atque ut quo beatae unde quis. Modi
                        repellat ut nihil voluptas vero. Recusandae nemo minima
                        autem sit. usto aliquid eum quia nobis dolore ex. Iusto
                        lauda ntium beatae dolorem animi. Ullam fugiat corporis
                        est debitis ullam ea et. Quia rerum ratione quia ut
                        voluptas deserunt quaerat atque. liquid eum quia nobis
                        dolore ex. Iusto laudantium beatae dolorem animi. Ullam
                        fugiat corporis est debitis ullam ea et. Quia rerum
                        ratione quia ut voluptas deserunt quaerat atque.
                        </Form.Control>
                        
                      
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="ExecutiveName">
                    <Form.Label column sm={3}>
                      Meeting Outcomes
                    </Form.Label>
                    <Col sm={9}>
                    <Form.Control style={{width:"100%", boxSizing: "border-box"}} as="textarea" rows={3} cols={30} placeholder="" >
                        Dolorum quod quo atque ut quo beatae unde quis. Modi
                        repellat ut nihil voluptas vero. Recusandae nemo minima
                        autem sit. usto aliquid eum quia nobis dolore ex. Iusto
                        lauda ntium beatae dolorem animi. Ullam fugiat corporis
                        est debitis ullam ea et. Quia rerum ratione quia ut
                        voluptas deserunt quaerat atque. liquid eum quia nobis
                        dolore ex. Iusto laudantium beatae dolorem animi. Ullam
                        fugiat corporis est debitis ullam ea et. Quia rerum
                        ratione quia ut voluptas deserunt quaerat atque.
                        </Form.Control>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Property;
