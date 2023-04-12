import "../styles/createShop.css";
import { useDispatch, useSelector } from "react-redux";
import { createShop } from "../../Redux/slice/user";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const CreateShops = () => {
  const dispatch = useDispatch();
  const { storeS } = useSelector((state) => state.session);
  const [shop, setShop] = useState(false);
  console.log(storeS);
  const onSubmit = (e) => {
    e.preventDefault();
    const formulario = new FormData();
    formulario.append("name", e.target.name.value);
    formulario.append("descripcion", e.target.descripcion.value);
    formulario.append("direccion", e.target.direccion.value);
    formulario.append("categoriaStore", e.target.categoriaStore.value);
    formulario.append("image", e.target.myImage.files[0]);

    fetch("http://localhost:5000/api/shops", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: formulario,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.created) {
          dispatch(
            createShop({
              storeS: data.created,
            })
          );
          // Actualizar el estado aquí
          setShop(true);
        }
      });
  };

  useEffect(() => {}, [shop]);
  if (shop) return <Navigate to="/sell " />;
  return (
    <div className="container newStoreCont">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div
            className="card bg-dark"
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
              <h3 className="card-title">Crear Tienda</h3>
            </div>
            <div className="card-body">
              <form id="formCreateStore" method="POST" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="nameStore">Nombre de la tienda </label>
                  <input
                    placeholder="Nombre"
                    type="text"
                    required
                    id="nameStore"
                    name="name"
                    maxLength={30}
                  />
                  <label htmlFor="myImage">Logo de la tienda </label>
                  <input
                    id="myImage"
                    type="file"
                    name="myImage"
                    accept="image/png, image/webp, image/jpeg, image/jpg"
                    required
                  />
                  <label htmlFor="categoriaStore">Categoria </label>
                  <select name="categoriaStore" id="categoriaStore">
                    <optgroup label="Comun">
                      <option value="Pollo">Pollo</option>
                      <option value="Asados">Asados</option>
                      <option value="Fritos">Fritos</option>
                      <option value="Papas">Papas Francesas</option>
                      <option value="Hamburguesas-Perros">
                        Hamburguesa y/o Perros
                      </option>
                    </optgroup>
                    <optgroup label="Oriental">
                      <option value="Comida-China">China</option>
                      <option value="Comida-Coreana">Coreana</option>
                      <option value="Comida-Japonesa">Japonesa</option>
                      <option value="Comida-Oriental">Otras orientales</option>
                    </optgroup>
                    <optgroup label="Colombiana">
                      <option value="Comida-Paisa">Paisa</option>
                      <option value="Comida-Costeña">Costeña</option>
                      <option value="Comida-Santandereana">
                        Santandereana
                      </option>
                      <option value="Comida-general">General</option>
                    </optgroup>
                  </select>
                  <label htmlFor="direccion">Dirección </label>
                  <input
                    placeholder="Direccion"
                    type="text"
                    required
                    id="direccion"
                    name="direccion"
                  />
                  <label htmlFor="descripcion">Descripcion </label>
                  <textarea
                    placeholder="max 150 caracteres"
                    type="text"
                    required
                    id="descripcion"
                    name="descripcion"
                    maxLength={150}
                  />
                  <button type="submit" className="btn btn-danger">
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
