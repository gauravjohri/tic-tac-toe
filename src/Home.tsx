import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Button, Col, Container, FloatingLabel, Form, Row, Stack, ThemeProvider } from "react-bootstrap";

export const Home = () => {
    const [data, setData] = useState({});
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);

    }
    useEffect(() => {

    }, [])
    return (

        <Container>
            <Row>
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
                <Col>
                    <Button variant="primary">Save changes</Button>
                    <Button variant="outline-secondary">Cancel</Button>
                </Col>
            </Row>
            <Form>
                {["checkbox", "radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="1"
                            name="group1"
                            type="checkbox"
                            id={`inline-${type}-1`}
                        />


                    </div>
                ))}
            </Form>
            <>
                <Form.Label>Range</Form.Label>
                <Form.Range />
            </>
            <>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
            </>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </Container >
    )
}