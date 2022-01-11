import React, { useState } from 'react';
import { Row, Col, Form, Card, Container, InputGroup, FormControl } from 'react-bootstrap';
import ViewSalary from './ViewSalary';
import icon from './img/Icon color.svg'


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
    if(e.target.checked == false){
      setAllowedEarnings1("")
    }

  }

  const handleCheck2 = (e) => {
    console.log("e.target.checked", e.target.checked);
    if (e.target.checked) {
      setAllowedEarnings2(allowance2)

    }
    if(e.target.checked == false){
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
              <Card.Title>Calculate Your Salary</Card.Title>
              <div>
                <img src={icon} onClick={resetForm} />
              </div>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" >

                    <Form.Control type="number" placeholder="Enter Basic Salary" onChange={handleBasic} />

                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Earnings</Form.Label>
                    <div>
                      <Form.Text className="text-muted">
                        Allowance,Fixed Allowance,Bonus and etc.
                      </Form.Text>
                    </div>

                    <Form.Control type="number" onChange={handleAllowance1} />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                      <Form.Check type="checkbox" label="EPF/ETF" onChange={handleCheck1} />
                    </Form.Group>

                    <Form.Control type="number" onChange={handleAllowance2} />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="EPF/ETF" onChange={handleCheck2} />
                    </Form.Group>
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
                    <button>Remove</button>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Deductions </Form.Label>
                    <div>
                      <Form.Text className="text-muted">
                        Salary Advances, Loan Deductions and all.
                      </Form.Text>
                    </div>


                    <Form.Control type="number" onChange={handleDeduction} />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    </Form.Group>


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
