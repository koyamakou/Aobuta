export function splitString (string) {
  let write = "";
  string.split("").forEach( item => {
    write += "<span>"+item+"</span>"
  });
  return write;
}

/**
 * 540以上のアニメーション
 * @param  {[type]} title                  [description]
 * @param  {[type]} syndrome               [description]
 * @return {[type]}          [description]
 */
export function dispWrite_Horizontal(title, syndrome) {
  const dispWriteAnimetion1 = anime.timeline({
    targets: title.childNodes,
    easing: 'easeInOutQuad',
    direction: 'normal',
    duration: 450,
    delay: anime.stagger(50),
    loop: false,
    autoplay: false
  });
  dispWriteAnimetion1.add({
    opacity: [0, 1],
    translateY: ['-1.5vw', '0vw'],
  });

  const dispWriteAnimetion2 = anime.timeline({
    targets: syndrome.childNodes,
    easing: 'easeInOutQuad',
    direction: 'normal',
    duration: 2000,
    delay: anime.stagger(100),
    loop: false,
    autoplay: false,
  });
  dispWriteAnimetion2.add({
    opacity: [0, 1]
  });

  dispWriteAnimetion1.play();
  dispWriteAnimetion2.play();
}

/**
 * 540以下のアニメーション
 * @param  {[type]} title1                  [description]
 * @param  {[type]} title2                  [description]
 * @param  {[type]} syndrome1               [description]
 * @param  {[type]} syndrome2               [description]
 * @return {[type]}           [description]
 */
export function dispWrite_Vertical(title1, title2, syndrome1, syndrome2) {
  const dispWriteAnimetion1 = anime.timeline({
    targets: title1.childNodes,
    easing: 'easeInOutQuad',
    direction: 'normal',
    duration: 900,
    delay: anime.stagger(70),
    loop: false,
    autoplay: false
  });
  dispWriteAnimetion1.add({
    opacity: [0, 1],
  })
  .add({
    targets: title2,
    opacity: [0, 1],
    delay: anime.stagger(0),
    duration: 550,
    left: ['calc(3vw + 1.5vh)', '0%']
  }, '-=300');

  const dispWriteAnimetion2 = anime.timeline({
    targets: syndrome1.childNodes,
    easing: 'easeInOutQuad',
    direction: 'normal',
    duration: 2000,
    delay: anime.stagger(100),
    loop: false,
    autoplay: false,
  });
  dispWriteAnimetion2.add({
    opacity: [0, 1]
  });

  if (typeof syndrome2 !== 'undefined') {
    dispWriteAnimetion2.add({
      targets: syndrome2.childNodes,
      duration: 1500,
      opacity: [0, 1]
    }, '-=1400');
  }

  dispWriteAnimetion1.play();
  dispWriteAnimetion2.play();

  /*
  const dispWriteAnimetion3 = anime.timeline({
    easing: 'easeInOutQuad',
    direction: 'normal',
    duration: 2000,
    delay: anime.stagger(100),
    loop: false,
    autoplay: false,
  });
  dispWriteAnimetion3.add({
    opacity: [0, 1]
  });

  dispWriteAnimetion3.play();*/

}
