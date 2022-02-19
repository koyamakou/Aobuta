import * as comAnimation from '../comAnimation.js';


(function() {
  animation();
}());

window.addEventListener('resize',function(){
  animation();
});

function animation() {
  const windowWidth = window.innerWidth;
  const element = document.querySelector("#letter");

  if (windowWidth > 540) {
    const syndrome = element.children[0].innerHTML;
    const title = element.children[1].innerHTML;
    if (!　syndrome.includes('span')) {
      // 多重で<span>を付加させないように、<span>の文字列がない場合行う。
      // <span>の付加
      element.children[0].innerHTML = comAnimation.splitString(syndrome);
      element.children[1].innerHTML = comAnimation.splitString(title);
      comAnimation.dispWrite_Horizontal( element.children[1], element.children[0]);
    }
  } else {
    const title_line1 = element.children[0].children[0].innerHTML;
    const title_line2 = element.children[0].children[1].innerHTML;
    const syndrome = element.children[1].children[0].innerHTML;
    if (!title_line1.includes('span')) {
      // 多重で<span>を付加させないように、<span>の文字列がない場合行う。
      // <span>の付加
      element.children[0].children[0].innerHTML = comAnimation.splitString(title_line1);
      element.children[1].children[0].innerHTML = comAnimation.splitString(syndrome);
      comAnimation.dispWrite_Vertical(element.children[0].children[0], element.children[0].children[1], element.children[1].children[0]);
    }
  }
}
