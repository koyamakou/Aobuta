import * as comAnimation from './comAnimation.js';

/**
 * アニメーションの口
 * @param  {[type]} pahse               [description]
 * @return {[type]}       [description]
 */
export async function pahseAnimation(phase) {
  let phaseState = phase;

  switch(phaseState) {
    case 2:
      return await phase2();
    case 3:
      return await phase3();
    case 4:
      return await phase4();
    case 5:
      return await phase5();
    case 6:
      return await phase6();
    case 7:
      return await phase7();
  }

  async function phase2() {
    const windowWidth = window.innerWidth;
    const element = document.querySelector("#letter");
    if (windowWidth > 540) {
      const title = element.children[0].innerHTML;
      const syndrome = element.children[1].innerHTML;
      if (!　title.includes('span')) {
        // 多重で<span>を付加させないように、<span>の文字列がない場合行う。
        // <span>の付加
        element.children[0].innerHTML = comAnimation.splitString(title);
        element.children[1].innerHTML = comAnimation.splitString(syndrome);
        await comAnimation.dispWrite_Horizontal( element.children[0], element.children[1]);
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
        await comAnimation.dispWrite_Vertical(element.children[0].children[0], element.children[0].children[1], element.children[1].children[0]);
      }
    }
  }

  async function phase3() {
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
        await comAnimation.dispWrite_Horizontal( element.children[1], element.children[0]);
      }
    } else {
      const title_line1 = element.children[0].children[0].innerHTML;
      const title_line2 = element.children[0].children[1].innerHTML;
      const syndrome = element.children[2].children[0].innerHTML;
      if (!title_line1.includes('span')) {

        // 多重で<span>を付加させないように、<span>の文字列がない場合行う。
        // <span>の付加
        element.children[0].children[0].innerHTML = comAnimation.splitString(title_line1);
        element.children[2].children[0].innerHTML = comAnimation.splitString(syndrome);
        await comAnimation.dispWrite_Vertical(element.children[0].children[0], element.children[0].children[1], element.children[2].children[0]);
      }
    }
  }

  async function phase4() {
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
        await comAnimation.dispWrite_Horizontal( element.children[1], element.children[0]);
      }
    } else {
      const title_line1 = element.children[0].children[0].innerHTML;
      const title_line2 = element.children[0].children[1].innerHTML;
      const syndrome = element.children[2].children[0].innerHTML;
      if (!title_line1.includes('span')) {
        // 多重で<span>を付加させないように、<span>の文字列がない場合行う。
        // <span>の付加
        element.children[0].children[0].innerHTML = comAnimation.splitString(title_line1);
        element.children[2].children[0].innerHTML = comAnimation.splitString(syndrome);
        await comAnimation.dispWrite_Vertical(element.children[0].children[0], element.children[0].children[1], element.children[2].children[0]);
      }
    }
  }

  async function phase5() {
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
        await comAnimation.dispWrite_Horizontal( element.children[1], element.children[0]);
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
        await comAnimation.dispWrite_Vertical(element.children[0].children[0], element.children[0].children[1], element.children[1].children[0]);
      }
    }
  }

  async function phase6() {
    const windowWidth = window.innerWidth;
    const element = document.querySelector("#letter");

    if (windowWidth > 540) {
      const title = element.children[0].innerHTML;
      const syndrome = element.children[1].innerHTML;
      if (!　syndrome.includes('span')) {
        // 多重で<span>を付加させないように、<span>の文字列がない場合行う。
        // <span>の付加
        element.children[0].innerHTML = comAnimation.splitString(title);
        element.children[1].innerHTML = comAnimation.splitString(syndrome);
        await comAnimation.dispWrite_Horizontal( element.children[0], element.children[1]);
      }
    } else {
      const title_line1 = element.children[0].children[0].innerHTML;
      const title_line2 = element.children[0].children[1].innerHTML;
      const syndrome_line1 = element.children[2].children[0].children[0].innerHTML;
      const syndrome_line2 = element.children[2].children[0].children[1].innerHTML;
      if (!title_line1.includes('span')) {
        // 多重で<span>を付加させないように、<span>の文字列がない場合行う。
        // <span>の付加
        element.children[0].children[0].innerHTML = comAnimation.splitString(title_line1);
        element.children[2].children[0].children[0].innerHTML = comAnimation.splitString(syndrome_line1);
        element.children[2].children[0].children[1].innerHTML = comAnimation.splitString(syndrome_line2);
        await comAnimation.dispWrite_Vertical(element.children[0].children[0], element.children[0].children[1],
                                        element.children[2].children[0].children[0], element.children[2].children[0].children[1]);
      }
    }
  }

  async function phase7() {
    const windowWidth = window.innerWidth;
    const element = document.querySelector("#letter");

    if (windowWidth > 540) {
      const title = element.children[0].innerHTML;
      const syndrome = element.children[1].innerHTML;
      if (!　syndrome.includes('span')) {
        // 多重で<span>を付加させないように、<span>の文字列がない場合行う。
        // <span>の付加
        element.children[0].innerHTML = comAnimation.splitString(title);
        element.children[1].innerHTML = comAnimation.splitString(syndrome);
        await comAnimation.dispWrite_Horizontal( element.children[0], element.children[1]);
      }
    } else {
      const title_line1 = element.children[0].children[0].innerHTML;
      const title_line2 = element.children[0].children[1].innerHTML;
      const syndrome_line1 = element.children[2].children[0].children[0].innerHTML;
      const syndrome_line2 = element.children[2].children[0].children[1].innerHTML;
      if (!title_line1.includes('span')) {
        // 多重で<span>を付加させないように、<span>の文字列がない場合行う。
        // <span>の付加
        element.children[0].children[0].innerHTML = comAnimation.splitString(title_line1);
        element.children[2].children[0].children[0].innerHTML = comAnimation.splitString(syndrome_line1);
        element.children[2].children[0].children[1].innerHTML = comAnimation.splitString(syndrome_line2);
        await comAnimation.dispWrite_Vertical(element.children[0].children[0], element.children[0].children[1],
                                        element.children[2].children[0].children[0], element.children[2].children[0].children[1]);
      }
    }
  }
}
