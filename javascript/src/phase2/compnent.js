import React from "react"
import ReactDom from "react-dom"
import reactDOM from "../react.js";

(async function(){
  const element = document.getElementById('phase2Content');
  await reactDOM(element, 2);
}());


window.addEventListener('resize',function(){
  const element = document.getElementById('phase2Content');
  reactDOM(element, 2);
});
