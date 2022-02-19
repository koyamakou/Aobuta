import React from "react"
import ReactDom from "react-dom"
import reactDOM from "../react.js";

(function(){
  const element = document.getElementById('phase3Content');
  reactDOM(element, 3);
}());


window.addEventListener('resize',function(){
  const element = document.getElementById('phase3Content');
  reactDOM(element, 3);
});
