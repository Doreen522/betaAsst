
import React, { useState } from 'react';
import { Row, Col, Form, Card, Container, InputGroup, FormControl } from 'react-bootstrap';

function NewField() {
    return (
        <div>
            <Form.Control type="number" onChange={handleAllowance1} />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                      <Form.Check type="checkbox" label="EPF/ETF" onChange={handleCheck1} />
                    </Form.Group>
            
        </div>
    )
}

export default NewField
