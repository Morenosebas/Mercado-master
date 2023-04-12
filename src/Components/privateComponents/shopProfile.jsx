import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export const ShopProfile = () => {
  const { idShop } = useParams();
  const [shop, setShop] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/shops/${idShop}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setShop(data);
        setLoad(false);
      });
  }, []);
  console.log(shop);

  if (load) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div
      className="position-absolute justify-content-center d-flex align-items-center w-100 h-100"
      style={{ zIndex: -1 }}
    >
      <div className="card bg-dark mb-3 " style={{ maxWidth: "640px" }}>
        <div className="row g-0 ">
          <div className="col-md-4">
            <div className="justify-content-center d-flex align-items-center w-100 h-100 p-1  ">
              <img
                src={`http://localhost:5000${shop.image.path}`}
                className="img-fluid rounded-center"
                alt="Logo"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body bg-light">
              <h5 className="card-title fw-bolder  ">{shop.name}</h5>
              <p className="card-text text-dark">{shop.description}</p>
              <div className="card-text">
                <section
                  className="d-flex align-items-center p-1 col"
                  style={{ backgroundColor: "#D90202", borderRadius: "5px" }}
                >
                  <div
                    className="card-text fw-bolder"
                    style={{ color: "white" }}
                  >
                    Products:
                    <div>
                      {shop.products.map((product) => {
                        return (
                          <div key={product.id}>
                            <img
                              src={`http://localhost:5000${product.image.path}`}
                              className="img-fluid rounded-center w-100"
                              alt="Producto imagen"
                            />
                          </div>
                        );
                      })}
                    </div>
                    <p
                      className="position-relative "
                      style={{ marginTop: "25px" }}
                    >
                      <button
                        className="btn btn-dark p-2"
                        style={{ fontSize: "10px", flexWrap: "wrap" }}
                      >
                        <NavLink
                          className={"text-decoration-none"}
                          style={{ color: "white" }}
                          to={`/shop/${idShop}/addproduct`}
                        >
                          Añadir Producto
                        </NavLink>
                      </button>
                    </p>
                  </div>
                </section>
                <small className="text-muted">
                  Direccion: {shop.direccion}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
