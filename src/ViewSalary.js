import React from 'react'
import { Card, Table } from 'react-bootstrap'




function ViewSalary(props) {
    let epfEight=0;
    let epfTwelve=0;
    let etfThree =0;


    const handleEpf8 = () => {
        console.log("props.basicSalary", props.basicSalary, props.allowedEarn);
        epfEight = (Number(props.basicSalary) + Number(props.allowedEarn)) * 0.08
        console.log("summm", epfEight);
        
        return epfEight;

    }
   
    
    const handleNetSalary = () => {
        let net =  Number(props.gross) - Number(props.deduct) - epfEight
        return net;

    }




const handleEpfTwelve = () => {
    console.log("props.basicSalary", props.basicSalary, props.allowedEarn);
    epfTwelve = ((Number(props.basicSalary) + Number(props.allowedEarn)) * 0.12).toFixed(1)
    console.log("summm12", epfTwelve);
    
    return epfTwelve;

}
const handleEtfThree = () => {
    console.log("props.basicSalary", props.basicSalary, props.allowedEarn);
     etfThree = ((Number(props.basicSalary) + Number(props.allowedEarn)) * 0.03).toFixed(1)
    console.log("summm3", etfThree);
    
    return etfThree;

}

const handleCost = () => {

    let cost =  (Number(props.gross) - Number(props.deduct) + Number(epfTwelve) + Number(etfThree)).toFixed(1)
        return cost;
}

    return (
        <div>
            <Card>
                <Card.Title>Your Salary</Card.Title>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>items</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gross Earnings</td>
                                <td>{props.gross}</td>
                            </tr>
                            <tr>
                                <td>Gross Deduction</td>
                                <td>{props.deduct}</td>
                            </tr>
                            <tr>
                                <td>Employee EPF(8%)</td>
                                <td>{handleEpf8()}</td>
                            </tr>
                            <tr>
                                <td><h6>Net Salary (Take Home)</h6></td>
                                <td><h6>{ handleNetSalary()}</h6></td>
                            </tr>

                            <tr>Contribution from the Employer</tr>
                            <tr>
                                <td>Employee EPF(12%)</td>
                                <td>{handleEpfTwelve()}</td>
                            </tr>
                            <tr>
                                <td>Employee ETF(3%)</td>
                                <td>{handleEtfThree()}</td>
                            </tr>
                            <tr>
                                <td>CTC (Cost TO Company)</td>
                                <td>{handleCost ()}</td>
                            </tr>

                        </tbody>
                    </Table>


                </Card.Body>


            </Card>


        </div>
    )
}

export default ViewSalary
