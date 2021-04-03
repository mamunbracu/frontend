import React, { Fragment, useState } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'

const headingH2 = {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "52px",
    // margin: "20",
  };
  

  const meeting_wrapper1 = {
    border: "1px solid #E5E5E5",
    padding: "30px",
  };
  const content = {
    fontFamily: "PT Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
  };

const Issue = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
             <Container>
        <h2 style={headingH2}>Issue Report on 11:43, 21 Feb, 2021 </h2>
        <div style={meeting_wrapper1}>
          <Row>
            <Col md={7}>
              <Row>
                <Col md={3}>
                  <h6 className="mb-3">Created on</h6>
                  <h6 className="mb-3">Issue Type</h6>
                  <h6 className="mb-3">Property ID</h6>
                  <h6 className="mb-3">Role of Issuer</h6>
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
                  <h6 className="mb-3">Tenant</h6>
                  <h6 className="mb-3">Mr. Sandman</h6>
                  <h6 className="mb-3">01234567890</h6>
                  <h6 className="mb-3">Dhaka</h6>
                  <h6 className="mb-3">Mohammadpur</h6>
                  <h6 className="mb-3">Call on dd/mm/yyyy</h6>
                </Col>
              </Row>
            </Col>
            <Col md={3}></Col>
            <Col md={2}>
              <Button style={{ background: " #6AB53E", marginLeft:"51px" }} onClick={handleShow}>
              Edit Issue
              </Button>
            </Col>
            <div className="d-flex">
              <h6 className="mr-5 ml-3">ISSUE</h6>
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
                  marginLeft:"68px"
                }}
              >
                Dolorum quod quo atque ut quo beatae unde quis. Modi repellat ut nihil voluptas vero. Recusandae nemo minima autem sit. usto aliquid
              </span>
            </div>
            <div className="d-flex">
              <h6 className="mr-5 ml-3">Description</h6>
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
                    marginLeft:"28px"
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
                <Modal.Title>Edit Issue</Modal.Title>
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
                  <Form.Group as={Row} controlId="issueType">
                    <Form.Label column sm="3">
                    Issue Type
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

                  <Form.Group as={Row} controlId="roleOfIssuer">
                    <Form.Label column sm="3">
                    Issue Type
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control as="select">
                        <option>Tenant</option>
                        <option>Seller</option>
                      </Form.Control>
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
                    Issue
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control as="textarea" row={4} defaultValue="Dolorum quod quo atque ut quo beatae unde quis. Modi repellat ut nihil voluptas vero. Recusandae nemo minima autem sit. usto aliquid"></Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="comments">
                    <Form.Label column sm="3">
                    Description
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

        </div>
      </Container>
        </Fragment>
    )
}

export default Issue
