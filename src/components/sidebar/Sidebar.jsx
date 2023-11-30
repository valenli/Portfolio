import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/toggleButton";
import { useState } from "react";
import { motion } from "framer-motion";



  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 30,
        //展開速度
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
        //白圈出現的速度
      },
    },
  };
  const Sidebar = () => {
    const [open, setOpen] = useState(false);
    //初次渲染為關閉狀態
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
  };

export default Sidebar;
