import "../styles/sell.css";
import { NavLink } from "react-router-dom";

export const Sell = () => {
  return (
    <div className="sellcont">
      <div className="row headerSell">
        <div className="col-2 headerSell">Vender</div>
        <div className="col-10 colHeader">
          Para Vender en FastEats <br />
          necesitas crear tu tienda. Hazlo ahora!
        </div>
      </div>
      <div className="row bodySell">
        <img
          src={require("../img/logo/FastEats_2.png")}
          alt="carro"
          className="imgBike"
        />
      </div>
      <div
        className="row"
        style={{
          width: "100%",
          height: "15%",
          display: "flex",
          position: "absolute",
          bottom: 0,
          left: -5,
          padding: "5px",
          margin: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="col-4"
          style={{
            color: "black",
            width: "20%",
            height: "100%",
            fontSize: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
              height: "100%",
            }}
            to="/user/newshop"
          >
            Crear ya
          </NavLink>
        </button>
      </div>
    </div>
  );
};
