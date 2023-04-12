import "../styles/socialnet.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { store } from "../../Redux/store.config";
import { logoutSession } from "../../Redux/slice/user";

export const SocialNet = () => {
  const { isAuthenticated, storeS } = useSelector((state) => state.session);

  const dispatch = useDispatch();

  const logout = (event) => {
    fetch("http://localhost:5000/api/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(logoutSession());
      });
  };

  return (
    <motion.div
      drag
      dragConstraints={{
        top: -450,
        left: -1200,
        right: 25,
        bottom: 25,
      }}
      style={{ borderRadius: "15px" }}
      className="container-float "
    >
      <motion.div
        className="btn-group bg-dark dropstart"
        style={{ borderRadius: "15%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        whileHover={{
          border: "0 solid transparent",
          borderRadius: ["15%", "15%", "50%", "50%", "15%"],
        }}
      >
        <motion.svg
          whileHover={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            border: "0 solid transparent",
            borderRadius: ["15%", "15%", "50%", "50%", "15%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className="btn btn-secondary dropdown-toggle Navig"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ backgroundColor: "transparent" }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#797979"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </motion.svg>
        {
          <ul className="dropdown-menu bg-secondary dropgroup">
            {!isAuthenticated && (
              <li>
                <NavLink className="dropdown-item drop" to="/signin">
                  Log in
                </NavLink>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <NavLink className="dropdown-item drop" to="/signup">
                  Sign up
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <NavLink className="dropdown-item drop" to="/profile">
                  Profile
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <a className="dropdown-item drop" href="/sell">
                  Vender
                </a>
              </li>
            )}
            {isAuthenticated && storeS && (
              <li>
                <a className="dropdown-item drop" href="/user/shops">
                  Tiendas
                </a>
              </li>
            )}
            {isAuthenticated && (
              <li
                className="dropdown-item drop"
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
                onClick={logout}
              >
                Logout
              </li>
            )}
          </ul>
        }
      </motion.div>
    </motion.div>
  );
};
