import { useEffect, useRef, useState } from "react";
import { Button, FloatingLabel, Toast, ToastContainer } from "react-bootstrap";
import { Form, useActionData } from "react-router-dom";

type ActionData = {
  success: boolean;
  message: string;
};

const Contact = () => {
  const actionData = useActionData<ActionData | undefined>();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (actionData?.success) {
      setShowToast(true);
      formRef.current?.reset();
    }
  }, [actionData]);

  return (
    <>
      <h1>Contact</h1>
      <p>Have feedback or ideas? Send me a message below.</p>

      <Form method="post" replace ref={formRef}>
        <div className="mb-3">
          <FloatingLabel controlId="contactName" label="Your name">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Jane Doe"
              required
            />
          </FloatingLabel>
        </div>
        <div className="mb-3">
          <FloatingLabel controlId="contactEmail" label="Email address">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="name@example.com"
              required
            />
          </FloatingLabel>
        </div>
        <div className="mb-3">
          <FloatingLabel controlId="contactMessage" label="Message">
            <textarea
              name="message"
              className="form-control"
              placeholder="Write your message here..."
              style={{ height: 120 }}
              required
            />
          </FloatingLabel>
        </div>
        <Button type="submit" variant="primary">
          Send message
        </Button>
      </Form>

      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Message sent</strong>
          </Toast.Header>
          <Toast.Body>
            {actionData?.message ?? "Thanks for reaching out!"}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Contact;
