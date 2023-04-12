import { useEffect, useState } from "react";
import "../styles/shopList.css";
import { NavLink } from "react-router-dom";

export const ShopList = () => {
  const [tiendas, setTiendas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/user/shops", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        
        if (tiendas.length !== data.data.length) {
          setTiendas(data.data);
          console.log(data.data);
        }
      })
      .catch((error) => console.log(error));
  }, [tiendas]);

  return (
    <div className="container newStoreCont">
      <div className="row justify-content-center ">
        <div className="col-md-8">
          <div
            className="card bg-danger "
            style={{
              color: "#fff",
            }}
          >
            <div
              className="card-header"
              style={{
                backgroundColor: "#d70505",
              }}
            >
              <h3 className="card-title">Tus Tiendas</h3>
            </div>
            <div className="card-body d-flex justify-content-center align-items-center row overr">
              {tiendas.map((tienda, index) => {
                return (
                  <div
                    key={index}
                    className="card mb-3 bg-dark "
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row g-0 d-flex justify-content-center align-items-center">
                      <div className="col-md-4">
                        <img
                          src={`http://localhost:5000${tienda.image.path}`}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{tienda.name}</h5>
                          <div className="card-text">
                            <ul key={tienda._id}>
                              <li>Direccion: {tienda.direccion}</li>
                              <li>Categoria: {tienda.category}</li>
                              <li>Descripcion: {tienda.description}</li>
                            </ul>
                          </div>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              <button className="btn btn-light fw-bold">
                                <NavLink
                                  to={`/user/shops/${tienda._id}`}
                                  style={{ textDecoration: "none",color: "#000"  }}
                                >
                                  entrar
                                </NavLink>
                              </button>
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
