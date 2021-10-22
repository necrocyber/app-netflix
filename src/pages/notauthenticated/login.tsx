import { FC } from "react";
import { Container, Form } from "react-bootstrap";

const Login: FC = () => {
  return (
    <Container>
      <Form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese su password"
          />
        </div>
        <button className="btn btn-primary">Ingresar</button>
      </Form>
    </Container>
  );
};

export default Login;
