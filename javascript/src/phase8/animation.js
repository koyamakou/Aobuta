import * as svgLoad from '../SVGload.js';

export async function logoDisplaying(target, svgPath){
  // 非同期処理となっているため、Promiseで渡す。
  return await svgLoad.load(target, svgPath, function(){
    const targetId = document.querySelectorAll(target)[0];
    // svgのPathの長さを取得する際は、 pathタグ<path/>からgetTotalLength()を使用して取得する
    const svgId = document.getElementById('path1022');
    const svgPathLength = svgId.getTotalLength();

    // anime.jsで使用するId
    const transitionId = document.getElementById('contentTransition');

    let animationTL = anime.timeline({
      targets: svgId,
      direction: 'alternate',
      loop: false,
      autoplay: false
    })
    .add({
      easing:'easeInQuad',
      strokeDashoffset: [anime.setDashoffset, 4425],
      duration: 8000,
    })
    .add({
      easing:'linear',
      fillOpacity: [0, 1],
      duration: 800,
    }, '+=300')
    // 画面遷移アニメーション
    .add({
      targets: transitionId.children[0],
      easing:'linear',
      width: ['0%', '100%'],
      duration: 120,
    }, '+=1000')
    .add({
      targets: transitionId.children[1],
      easing:'linear',
      width: ['0%', '100%'],
      duration: 120,
    })
    .add({
      targets: transitionId.children[2],
      easing:'linear',
      width: ['0%', '100%'],
      duration: 120,
    })
    .add({
      targets: transitionId.children[3],
      easing:'linear',
      width: ['0%', '100%'],
      duration: 120,
    })
    .add({
      targets: transitionId,
      easing:'linear',
      width: ['100%', '0%'],
      duration: 120,
      begin: function() {
        let cssId = document.getElementById('phase8');
        cssId.style.opacity = 0;
        let imgId = document.getElementById('home');
        imgId.style.opacity = 1;
        imgId.style.pointerEvents = "initial";
      }
    }, '+=400');
    animationTL.play();
    return animationTL;
  });

};

export async function hamburgerButton () {
  let triggerId = document.getElementById('hamburgerMenu');
  let targetId = document.getElementById('header');
  triggerId.addEventListener('click', () => {
    let targeCustom = targetId.getAttribute('data-menu');
    //カスタムデータの検証
    if (targeCustom === 'close') {
      targetId.setAttribute('data-menu', 'open');
      hamburger_Open(document.getElementById('hamburgerMenu'));
      return ;
    } else {
      targetId.setAttribute('data-menu', 'close');
      hamburger_Close(document.getElementById('hamburgerMenu'));
      return ;
    }
  });
}

function hamburger_Open(targetId) {

  const openAnimetion_1 = anime.timeline({
    easing: 'easeInOutQuad',
    direction: 'normal',
    loop: false,
    autoplay: false
  }).add({
    targets: targetId.children[1],
    translateX: '19vw',
    scale: 1.7,
    duration: '800'
  }).add({
    targets: targetId.children[1],
    opacity: 0,
    duration: '500'
  }, '-=300');

  const openAnimetion_2 = anime.timeline({
    targets: targetId.children[2],
    easing: 'easeInOutQuad',
    direction: 'normal',
    loop: false,
    autoplay: false
  }).add({
    targets: targetId.children[2],
    translateX: '42vw',
    scale: 1.7,
    duration: '800'
  }).add({
    targets: targetId.children[2],
    opacity: 0,
    duration: '500'
  }, '-=300');

  const openAnimetion_3 = anime.timeline({
    targets: targetId.children[3],
    easing: 'easeInOutQuad',
    direction: 'normal',
    loop: false,
    autoplay: false
  }).add({
    targets: targetId.children[3],
    translateX: '67vw',
    scale: 1.7,
    duration: '800'
  }).add({
    targets: targetId.children[3],
    opacity: 0,
    duration: '500'
  }, '-=300');

  openAnimetion_1.play();
  openAnimetion_2.play();
  openAnimetion_3.play();
}


function hamburger_Close(targetId) {

  const openAnimetion_1 = anime.timeline({
    easing: 'easeInOutQuad',
    direction: 'normal',
    loop: false,
    autoplay: false
  }).add({
    targets: targetId.children[1],
    opacity: 1,
    duration: '500'
  }).add({
    targets: targetId.children[1],
    translateX: '0vw',
    scale: 1,
    duration: '800'
  }, '-=300');

  const openAnimetion_2 = anime.timeline({
    targets: targetId.children[2],
    easing: 'easeInOutQuad',
    direction: 'normal',
    loop: false,
    autoplay: false
  }).add({
    targets: targetId.children[2],
    opacity: 1,
    duration: '500'
  }).add({
    targets: targetId.children[2],
    translateX: '0vw',
    scale: 1,
    duration: '800'
  }, '-=300');

  const openAnimetion_3 = anime.timeline({
    targets: targetId.children[3],
    easing: 'easeInOutQuad',
    direction: 'normal',
    loop: false,
    autoplay: false
  }).add({
    targets: targetId.children[3],
    opacity: 1,
    duration: '500'
  }).add({
    targets: targetId.children[3],
    translateX: '0vw',
    scale: 1,
    duration: '800'
  }, '-=300');

  openAnimetion_1.play();
  openAnimetion_2.play();
  openAnimetion_3.play();
}

//hamburgerButton();
//logoDisplaying('#contentTitle', '../img/phase8/log.svg');
