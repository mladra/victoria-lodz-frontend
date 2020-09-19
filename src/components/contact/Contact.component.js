import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import "./Contact.css";
import emailjs from "emailjs-com";


const Contact = () => {
    const serviceId = "ksv-contact-form";
    const templateId = "ksv-contact-template";
    const [showAlert, setShowAlert] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        emailjs.send(serviceId, templateId, {
            subject: subject,
            content: content,
            from_name: name,
            reply_to: email
        });
        clearForm();
        showAlertAndSetTimer();
    };

    const clearForm = () => {
        setName('');
        setEmail('');
        setSubject('');
        setContent('');
    };

    const showAlertAndSetTimer = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <>
        <Alert show={showAlert} variant="success" dismissible="true" onClose={() => setShowAlert(false)} className="alert-above">
            Pomyślnie wysłano email do klubu Victoria Łódź!
        </Alert>
        <h2>Skontaktuj się z nami</h2>
        <Form onSubmit={submitForm}>
            <Form.Group controlId="formFullName">
                <Form.Label>Imię i nazwisko</Form.Label>
                <Form.Control type="text" placeholder="Podaj imię i nazwisko" value={name} onChange={(event) => setName(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Podaj adres email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formSubject">
                <Form.Label>Temat</Form.Label>
                <Form.Control type="text" placeholder="Podaj temat" value={subject} onChange={(event) => setSubject(event.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formContent">
                <Form.Label>Treść</Form.Label>
                <Form.Control type="text" as="textarea" placeholder="Wpisz treść wiadomości" value={content} onChange={(event) => setContent(event.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">Wyślij</Button>
        </Form>
        </>
    );
};

export default Contact;