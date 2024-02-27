import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [total, setTotal] = useState("");

  const addNumbers = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    const sum = num1 + num2;
    setTotal(sum.toString());
  };
  return (
    <div className="Calculator">
      <Container>
        <h3>Calculator</h3>
        <Form>
          <Form.Group controlId="formFirstNumber">
            <Form.Label>First Number</Form.Label>
            <Form.Control
              type="number"
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formSecondNumber">
            <Form.Label>Second Number</Form.Label>
            <Form.Control
              type="number"
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={addNumbers} className="mt-3">
            Add Two Numbers
          </Button>
        </Form>
        <div className="mt-3">
          <h4 className="text-muted">Total: {total}</h4>
        </div>
      </Container>
    </div>
  );
};

export default Calculator;
