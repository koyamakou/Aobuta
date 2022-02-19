import React from "react"
import ReactDom from "react-dom"
import * as reactPhase from "./reactPhase.js";


export default reactDOM;

/**
 * 仮想DOM生成の口
 * 仮想DOMを生成する際に使用
 *
 * @param  {[type]} element DOM生成を行うelement
 * @param  {[type]} phase   phaseの指定
 * @return {[type]}         [description]
 */
export async function reactDOM(element, phase){
  return new Promise(resolve => {
    const windowWidth = window.innerWidth;
    if (windowWidth <=  540) {
      ReactDom.render(
        <Layout compnent={SwitchingWide} phase={phase}/>,
        element
      );
    } else {
      ReactDom.render(
        <Layout compnent={SwitchingNarrow} phase={phase}/>,
        element
      );
    }
    resolve();
  });
}

function Layout(props) {
  return (
    <props.compnent phase={props.phase}/>
  );
}


function SwitchingWide(props) {
  switch(props.phase) {
    case 2:
      return (
        <reactPhase.Phase2_Wide />
      );
    case 3:
      return (
        <reactPhase.Phase3_Wide />
      );
    case 4:
      return (
        <reactPhase.Phase4_Wide />
      );
    case 5:
      return (
        <reactPhase.Phase5_Wide />
      );
    case 6:
      return (
        <reactPhase.Phase6_Wide />
      );
    case 7:
      return (
        <reactPhase.Phase7_Wide />
      );
  }
}

function SwitchingNarrow(props) {
  switch(props.phase) {
    case 2:
      return (
        <reactPhase.Phase2_Narrow />
      );
    case 3:
      return (
        <reactPhase.Phase3_Narrow />
      );
    case 4:
      return (
        <reactPhase.Phase4_Narrow />
      );
    case 5:
      return (
        <reactPhase.Phase5_Narrow />
      );
    case 6:
      return (
        <reactPhase.Phase6_Narrow />
     );
    case 7:
     return (
       <reactPhase.Phase7_Narrow />
    );
  }
}
