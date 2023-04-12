import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const CreateProduct = () => {
  const { idShop } = useParams();
  const [created, setCreated] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(`Create Product`);
    const formulario = new FormData();
    formulario.append("Nombre", e.target.Nombre.value);
    formulario.append("descripcion", e.target.descripcion.value);
    formulario.append("categoriaProduct", e.target.categoriaProduct.value);
    formulario.append("price", e.target.Price.value);
    formulario.append("stock", e.target.Stock.value);
    formulario.append("image", e.target.myImageProducto.files[0]);

    const data = await fetch(`http://localhost:5000/api/${idShop}/addprod`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: formulario,
    })
      .catch(err => console.warn(err))
    const response = await data.json()
    console.log(response)
    if (response.created) {
      setCreated(true)
    } else {
      setCreated(false)
    }
  };

  return (
    <div
      className="container-fluid col w-50 justify-content-center d-flex align-items-center"
      style={{ paddingTop: "5%" }}
    >
      <div className="card row justify-content-center d-flex align-items-center  ">
        <div
          className="card-header justify-content-center d-flex align-items-center fw-bolder"
          style={{ backgroundColor: "#d70505", color: "#fff" }}
        >
          Añade tu producto
        </div>
        <div className="card-body bg-dark  w-100 " style={{ color: "#fff" }}>
          <form className="row " method="POST" onSubmit={onSubmit}>
            <div className="pt-2  justify-content-space-beetwen d-flex align-items-center flex-column">
              <label htmlFor="Nombre-product">Nombre: </label>
              <input type="text" name="Nombre" id="Nombre-product" required />
            </div>
            <div className="pt-2  justify-content-space-beetwen d-flex align-items-center flex-column">
              <label htmlFor="descripcion-product">Descripcion: </label>
              <textarea
                placeholder="Escribe una descripcion sobre tu negocio"
                name="descripcion"
                id="descripcion-product"
                required
              />
            </div>
            <div className="pt-2  justify-content-space-beetwen d-flex align-items-center flex-column">
              <label htmlFor="Category-Product">Categoria: </label>
              <select name="categoriaProduct" id="Category-Product">
                <optgroup label="Comida">
                  <option value="Vegano" label="Vegano" />
                  <option value="Asiatica" label="comida asiatica" />
                  <option value="europea" label="comida europea" />
                  <option value="Colombiana" label="comida colombiana" />
                  <option value="callejera" label="comida callejera" />
                </optgroup>
              </select>
            </div>
            <div className="pt-2  justify-content-space-beetwen d-flex align-items-center flex-column">
              <label htmlFor="Price">Precio: </label>
              <input required type="number" id="Price" name="Price" />
            </div>
            <div className="pt-2  justify-content-space-beetwen d-flex align-items-center flex-column">
              <label htmlFor="Stock">Stock: </label>
              <input type="number" required name="Stock" id="Stock" />
            </div>
            <div className="pt-2  justify-content-space-beetwen d-flex align-items-center flex-column">
              <label htmlFor="Imagen">Imagen del Producto: </label>
              <input
                id="myImageProducto"
                name="myImageProducto"
                type="file"
                accept="image/png, image/webp, image/jpeg, image/jpg"
                required
              />
            </div>
            <p className="pt-2 d-flex align-items-center flex-column">
              <button className="btn btn-light btn d-flex align-items-bottom p-2">
                enviar
              </button>
            </p>
          </form>
        </div>
        <div
          className="card-footer d-flex align-items-center flex-column"
          style={{ backgroundColor: "#d10001" }}
        >
          <p className="text-muted fw-bolder ">
            <small>FastEats</small>
          </p>
        </div>
      </div>
    </div>
  );
};
