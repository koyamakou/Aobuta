import * as typing from "./phase1/typingAnimation.js";
import * as phaseTransition from "./react.js";
import * as phaseAnimation from "./phaseAnimation.js";
import * as logoDisplaying  from "./phase8/animation.js";

(async function(){

  let phaseState = 1;
  const element = document.getElementById('root');

  window.addEventListener('resize',function(){
    if (phaseState == 1 || phaseState == 8) {
      /**phase1とphase8の時はDOM編集しない**/
      return;
    }
    phaseTransition.reactDOM_Transition(element, phaseState);
    phaseAnimation.pahseAnimation(phaseState);
  });
  /***********phase1*************/
  await typing.typeWrite();
  /***********phase2*************/
  phaseState = 2;
  await phaseTransition.reactDOM_Transition(element, phaseState);
  await phaseAnimation.pahseAnimation(phaseState);
  /***********phase3*************/
  phaseState = 3;
  await phaseTransition.reactDOM_Transition(element, phaseState);
  await phaseAnimation.pahseAnimation(phaseState);
  /***********phase4*************/
  phaseState = 4;
  await phaseTransition.reactDOM_Transition(element, phaseState);
  await phaseAnimation.pahseAnimation(phaseState);
  /***********phase5*************/
  phaseState = 5;
  await phaseTransition.reactDOM_Transition(element, phaseState);
  await phaseAnimation.pahseAnimation(phaseState);
  /***********phase6*************/
  phaseState = 6;
  await phaseTransition.reactDOM_Transition(element, phaseState);
  await phaseAnimation.pahseAnimation(phaseState);
  /***********phase7*************/
  phaseState = 7;
  await phaseTransition.reactDOM_Transition(element, phaseState);
  await phaseAnimation.pahseAnimation(phaseState);
  /***********phase8*************/
  phaseState = 8;
  await phaseTransition.reactDOM_Transition(element, phaseState);
  await logoDisplaying.logoDisplaying('#contentTitle', './img/phase8/log.svg');
  await logoDisplaying.hamburgerButton();

}());
