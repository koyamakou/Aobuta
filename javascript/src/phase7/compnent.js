import React from "react"
import ReactDom from "react-dom"
import reactDOM from "../react.js";

(function(){
  const element = document.getElementById('phase7Content');
  reactDOM(element, 7);
}());


window.addEventListener('resize',function(){
  const element = document.getElementById('phase7Content');
  reactDOM(element, 7);
});
