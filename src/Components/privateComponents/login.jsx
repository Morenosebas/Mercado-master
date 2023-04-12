import "../styles/login.css";
import { useInitSession } from "../Controllers/fetch.js";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

export const Login = () => {
  const [isAuthenticated, fetchSession, error] = useInitSession();
  const [show, setShow] = useState(false);
  const message = () => {

      return error
        ? "Error en el servidor... Intenta más tarde"
        : "Error en el usuario o Contraseña, por favor revisa...";

  };

  const id = "signin";
  const onSubmit = (e) => {
    e.preventDefault();
    fetchSession(id, e);

    console.log(message());
  };

  return (
    <div className="container containerForm">
      <div className="login-form ">
        <h2 className="text-center ">Iniciar sesión</h2>
        <form id={id} method="POST" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group ">
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Correo electrónico"
              required="required"
            />
          </div>
          <div className="form-group padgrp">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name="password"
              required="required"
            />
          </div>
          <div className="form-group">
            <button
              onClick={
                !isAuthenticated ? () => setShow(true) : () => setShow(false)
              }
              type="submit"
              className="btn btn-danger "
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="clearfix">
            <label className="float-left checkbox-inline">
              <input type="checkbox" /> Recordarme
            </label>
            <NavLink to="/recover" className="float-right login-link">
              ¿Olvidaste tu contraseña?
            </NavLink>
          </div>
        </form>
        <p className="text-center login-link">
          ¿No tienes una cuenta? <NavLink to="/signup">Regístrate aquí</NavLink>
        </p>
      </div>
      <Toast
        className="bg-dark"
        onClose={() => setShow(false)}
        show={show}
        delay={5000}
        autohide
        style={{
          position: "absolute",
          right: 0,
          color: "#fff",
        }}
      >
        <Toast.Header className="bg-dark">
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong
            style={{ color: "red", fontWeight: "bold" }}
            className="me-auto"
          >
            Error!
          </strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{message()}</Toast.Body>
      </Toast>
    </div>
  );
};
