import * as React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navslinks = ["/products", "/Shops", "/Farmacias", "/about"];
const textLinks = ["Productos", "Tiendas", "Farmacias", "About us"];

export const MenuItem = ({ i }) => {
  return (
    <motion.li
      className="liVariant"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink className="navlinks" to={`${Navslinks[i]}`}>
        {textLinks[i]}
      </NavLink>
    </motion.li>
  );
};
