import React, { useState } from 'react';
import { Row, Col, Form, Card, Container, InputGroup, FormControl } from 'react-bootstrap';
import ViewSalary from './ViewSalary';
import icon from './img/Icon color.svg';
import delete1 from './img/delete.svg'
import './style.css';


function App() {
  const [basicSalary, setBasicSalary] = useState(0)
  const [allowance1, setAllowance1] = useState(0);
  const [allowance2, setAllowance2] = useState(0)
  const [gross, setGross] = useState(0)
  const [grossDeduct, setGrossDeduct] = useState(0)

  const [allowedEarnings1, setAllowedEarnings1] = useState(0)
  const [allowedEarnings2, setAllowedEarnings2] = useState(0)

  // const [newAll,setNewAll] = useState([])



  const handleAllowance1 = (event) => {

    setAllowance1(event.target.value)
    console.log(allowance1, ">>>>>>>>>>>>>>>>>>>>>kkkkkkkkkkkkkkkkkkkkk");

    let allow1 = Number(event.target.value);
    let basic = Number(basicSalary)

    let sum = allow1 + basic

    console.log("sum ", sum);
    setGross(sum)




  }

  console.log(">>>>>>>>>>>>>>>");

  const handleAllowance2 = (event) => {
    setAllowance2(event.target.value)
    let allow2 = Number(event.target.value);
    let basic = Number(basicSalary)

    let sum = allow2 + basic + Number(allowance1)

    console.log("sum ", sum);
    setGross(sum)

  }

  const handleBasic = (event) => {
    let basicS = (event.target.value)
    setBasicSalary(basicS)

    if (basicS > 0) {
      setGross(basicS)
    }

  }
  console.log("basicSalary", basicSalary,);

  const handleDeduction = (e) => {
    let Ded = Number(e.target.value);
    setGrossDeduct(Ded)

  }

  const handleCheck1 = (e) => {
    console.log("e.target.checked", e.target.checked);
    if (e.target.checked) {
      setAllowedEarnings1(allowance1)

    }
    if (e.target.checked == false) {
      setAllowedEarnings1("")
    }

  }

  const handleCheck2 = (e) => {
    console.log("e.target.checked", e.target.checked);
    if (e.target.checked) {
      setAllowedEarnings2(allowance2)

    }
    if (e.target.checked == false) {
      setAllowedEarnings2("")
    }

  }

  let totalEarn = Number(allowedEarnings1) + Number(allowedEarnings2)

  const resetForm = () => {
    window.location.reload();

  };

  // const addNew = () => {
  //   setNewAll({newAll: [newAll,""]})
  // }





  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Card>
              
                <Row>
                  <Col md={9}>
                  <Card.Title>Calculate Your Salary</Card.Title></Col>
                  <Col md={1}>
                  
                <img src={icon} onClick={resetForm} />
                    </Col>
                    <Col md={2}>
                      <p>Reset</p>
                    </Col>
                    </Row>
              
              <Card.Body>
                <Form>
                  <Row>
                    <Col md={8}>
                      <Form.Group className="mb-3" >

                        <Form.Control type="number" placeholder="Enter Basic Salary" onChange={handleBasic} />

                      </Form.Group>
                    </Col>
                    <Col md={4}></Col>

                  </Row>
                  <Row>
                    <Col md={8}>
                      <Form.Label>Earnings</Form.Label>
                      <div>
                        <Form.Text className="text-muted">
                          Allowance,Fixed Allowance,Bonus and etc.
                        </Form.Text>
                      </div>
                    </Col>
                    <Col md={4}></Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Form.Control type="number" onChange={handleAllowance1} />
                    </Col>
                    <Col md={3}>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                        <Form.Check type="checkbox" label="EPF/ETF" onChange={handleCheck1} />
                      </Form.Group>

                    </Col>
                    <Col md={1}>
                      <button className='btn-delete'><img src={delete1} /></button>
                    </Col>

                  </Row>
                  <Row>
                    <Col md={8}>
                      <Form.Control type="number" onChange={handleAllowance2} />
                    </Col>
                    <Col md={3}>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="EPF/ETF" onChange={handleCheck2} />

                      </Form.Group>
                    </Col>
                    <Col md={1}>
                      <button className='btn-delete'><img src={delete1} /></button>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">







                    {/* {newAll.map((allow,index) => {
                      return(
                        <div key={index}>
                        <Form.Control type="number" value={allow}  />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="EPF/ETF"  />
                      </Form.Group>
                      </div>
                      )
                    })} */}
                    {/* <button onClick={addNew}>Add</button> */}
                    <button>Add</button>
                    <Row>
                      <Col md={8}>
                        <Form.Group className="mb-3">
                          <Form.Label>Deductions </Form.Label>
                          <div>
                            <Form.Text className="text-muted">
                              Salary Advances, Loan Deductions and all.
                            </Form.Text>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={4}></Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                        <Form.Control type="number" onChange={handleDeduction} />
                      </Col>
                      <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">


                        </Form.Group>
                      </Col>
                      <Col md={1}>
                        <button className='btn-delete'><img src={delete1} /></button>
                      </Col>
                    </Row>

                  </Form.Group>


                </Form>
              </Card.Body>

            </Card></Col>
          <Col>
            <ViewSalary gross={gross} deduct={grossDeduct} allowedEarn={totalEarn} basicSalary={basicSalary} />

          </Col>
        </Row>
      </Container>



    </div>
  );
}

export default App;
