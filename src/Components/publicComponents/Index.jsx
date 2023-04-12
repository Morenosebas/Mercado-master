import "../styles/Index.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Index = ({allProducts}) => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <motion.div className="container principal">
        <motion.div className="container contproducts">
          {allProducts.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 0, width: "100%" }}
              animate={{ opacity: 1, y: 0, width: "33%" }}
              transition={{
                duration: 0.1,
                stiffness: 2000,
                type: "keyframes",
                delay: 1,
                ease: "circInOut",
              }}
              key={item.id}
              className="contIndex"
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <motion.div className="card " style={{ width: "18rem" }}>
                <motion.img
                  src={`${item.img}`}
                  className="card-img-top"
                  alt="..."
                />
                <motion.div className="card-body ">
                  <motion.p style={{ color: "#000" }} className="card-text">
                    {item.title}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="despl"
              transition={{
                type: "keyframes",
                duration: 0.8,
                mass: 0.5,
                stiffness: 300,
                damping: 20,
              }}
              layoutId={selectedId}
            >
              <motion.div
                className="select"
                layoutId={allProducts.find((item) => item.id === selectedId)}
              >
                <motion.div
                  onClick={() => setSelectedId(null)}
                  className="exit"
                >
                  x
                </motion.div>
                <motion.img
                  className="imgContainer col-6"
                  src={`${allProducts.find((item) => item.id === selectedId).img}`}
                />
                <motion.div style={{ margin: "5px" }} className="card-body">
                  <motion.h5 style={{ margin: "5px" }} className="card-title">
                    {allProducts.find((item) => item.id === selectedId).title}
                  </motion.h5>
                  <motion.h6
                    style={{ margin: "5px" }}
                    className="card-subtitle mb-2 text-muted"
                  >
                    Pizza
                  </motion.h6>
                  <motion.p style={{ margin: "5px" }} className="card-text">
                    {allProducts.find((item) => item.id === selectedId).description}
                  </motion.p>
                  <button className="btn btn-success">
                    <NavLink href="#" className={"btn-buynow"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      Buy now
                    </NavLink>
                  </button>
                  <button
                    href="#"
                    style={{ margin: "5px" }}
                    className="btn btn-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    Add car
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
