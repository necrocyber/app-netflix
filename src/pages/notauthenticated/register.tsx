import { ChangeEvent, FC, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { postUserApi } from "../../services/user-api.service";
import { useHistory } from "react-router";

type formType = {
  name: string;
  email: string;
  password: string;
};

const Register: FC = () => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState<formType>({
    name: "",
    email: "",
    password: "",
  });
  const { push } = useHistory();
  const handlerRegister = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await postUserApi(values);
      setShow(true);
    } catch (error) {}
  };
  const handleClose = () => setShow(false);
  const handleClouseAndContinue = () => {
    setShow(false);
    push("/login");
  };

  return (
    <Container>
      <Form onSubmit={handlerRegister}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Ingrese su nombre"
            onChange={(e) =>
              setValues({
                name: e.target.value,
                email: values.email,
                password: values.password,
              })
            }
            value={values.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Ingrese su email"
            onChange={(e) =>
              setValues({
                name: values.name,
                email: e.target.value,
                password: values.password,
              })
            }
            value={values.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Ingrese su password"
            onChange={(e) =>
              setValues({
                name: values.name,
                email: values.email,
                password: e.target.value,
              })
            }
            value={values.password}
          />
        </div>
        <button className="btn btn-primary">Registrar</button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Validación Netflix</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>El usuario está registrado.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClouseAndContinue} variant="primary">
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Register;
