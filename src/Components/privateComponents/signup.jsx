import "../styles/login.css";
import { useInitSession } from "../Controllers/fetch.js";
import { NavLink } from "react-router-dom";

//falta validar que al repetir la contraseña si inicie session
export const SignUp = () => {
  const [isAuthenticated, fetchSession] = useInitSession();
  const id = "signup";

  const onSubmit = (e) => {
    e.preventDefault();
    fetchSession(id, e);
  };
  return (
    <div className="container containerForm">
      <div className="login-form ">
        <h1 className="text-center ">Registrate</h1>
        <form id={id} method="POST" onSubmit={onSubmit}>
          <div className="form-group ">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Correo electrónico"
              required="required"
            />
          </div>
          <div className="form-group padgrp">
            <label htmlFor="pass">Contraseña</label>
            <input
              id="password"
              type="password"
              className="form-control"
              name="password"
              placeholder="Contraseña"
              required="required"
            />
            <label htmlFor="repeat-pass">Repite la contraseña</label>
            <input
              id="repeat-pass"
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required="required"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-danger btn-block">
              Crear Cuenta
            </button>
          </div>
          <div className="clearfix">
            <label className="float-left checkbox-inline">
              <input type="checkbox" /> Recordarme
            </label>
          </div>
        </form>
        <p className="text-center login-link">
          ¿Tienes una cuenta? <NavLink to="/signin">Inicia sesión aquí</NavLink>
        </p>
      </div>
    </div>
  );
};
