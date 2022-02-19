import React from "react"
import ReactDom from "react-dom"
import reactDOM from "../react.js";

(function(){
  const element = document.getElementById('phase4Content');
  reactDOM(element, 4);
}());


window.addEventListener('resize',function(){
  const element = document.getElementById('phase4Content');
  reactDOM(element, 4);
});
