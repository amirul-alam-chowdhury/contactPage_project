import React from 'react'
import style from './Icons.module.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Icons = () => {
  return (
    <div>
      <div className={style.icons}>
        <FaFacebookSquare fontSize="25" />
        <FaLinkedin fontSize="25" />
        <FaGithubSquare fontSize="25" />
        <FaSquareXTwitter fontSize="25" />
      </div>
      <div className={style.dotted}></div>
    </div>
  );
}

export default Icons
