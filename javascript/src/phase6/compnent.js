import React from "react"
import ReactDom from "react-dom"
import reactDOM from "../react.js";

(function(){
  const element = document.getElementById('phase6Content');
  reactDOM(element, 6);
}());


window.addEventListener('resize',function(){
  const element = document.getElementById('phase6Content');
  reactDOM(element, 6);
});
