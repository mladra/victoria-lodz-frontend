import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
    return (
        <>
        <h2>Skontaktuj się z nami</h2>
        <Form>
            <Form.Group controlId="formFullName">
                <Form.Label>Imię i nazwisko</Form.Label>
                <Form.Control type="text" placeholder="Podaj imię i nazwisko" />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Podaj adres email" />
            </Form.Group>

            <Form.Group controlId="formContent">
                <Form.Label>Treść</Form.Label>
                <Form.Control type="text" as="textarea" placeholder="Wpisz treść wiadomości" />
            </Form.Group>

            <Button variant="primary" type="submit">Wyślij</Button>
        </Form>
        </>
    );
};

export default Contact;