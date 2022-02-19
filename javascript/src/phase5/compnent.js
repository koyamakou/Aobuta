import React from "react"
import ReactDom from "react-dom"
import reactDOM from "../react.js";

(function(){
  const element = document.getElementById('phase5Content');
  reactDOM(element, 5);
}());


window.addEventListener('resize',function(){
  const element = document.getElementById('phase5Content');
  reactDOM(element, 5);
});
