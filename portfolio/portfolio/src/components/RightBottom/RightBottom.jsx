import React from 'react'
import BotomComponents from './BotomComponents'


import style from './Rightdiv.module.css'


const RightBottom = () => {
  return (
    <div>
      <h4>My Services</h4>
      <div>
        <BotomComponents
          text1="Web Development"
          text2="Blog, E-commerce"
          text3="UI/UX Design"
          text4="Mobile App, Website Design"
          text5="Game Development"
          text5_5="Tic Tac Toe, Snake "
          text6="App Deveopment"
          text6_6="Calculator"
          text7="System Design"
          text7_7="Hotel Management Sustem"
          text8="Backend"
          
        />
      </div>
    </div>
  );
}

export default RightBottom
