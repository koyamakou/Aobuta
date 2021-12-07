/*************************************************/
/**************anime.js改造済み*******************/
/*************************************************/

/**
 * タイピング風アニメーション
 * @param  {[type]} param               [description]
 * @return {[type]}       [description]
 */
function typeWrite(param) {
  /*element関係の変数*/
  let el = document.querySelector(param.el);
  let parentElement = document.querySelector(param.el);
  let childElement  = [];
  // 子要素の取得
  for (let i = 0; i < parentElement.children.length; i++) {
    childElement[i] = parentElement.children[i];
  }

  let title = param.title.split("");
  let write = param.write.split(",");
  let line = [""];

  let dispWriteLine = [""];
  let char = "";

  for (let i = 0; i < write.length; i++ ) {
    let tempDispWriteLine = [""];
    char = "";
    // 一文字ずつ区切る
    line[i] = write[i].split("");
    //　分割した文字を一文字ずつ足していく
    line[i].forEach(function(element, index) {
      index++;
      char += element;
      tempDispWriteLine[index] = char;
    })
    dispWriteLine[i] = tempDispWriteLine;
  }

  let dispTitle = [""];

  /*charの初期化*/
  char = "";
  //　分割した文字を一文字ずつ足していく
  title.forEach(function(element, index) {
    index++;
    char += element;
    dispTitle[index] = char;
  });

  let typeWriteAnimetion = anime.timeline({
    easing: 'easeInOutQuad',
    direction: 'normal',
    loop: false,
    autoplay: false
  });
/**************animation*******************/
  typeWriteAnimetion
  .add({
    // キャレットだけ数秒間表示
    targets: childElement[0],
    duration: 2600
  })
  .add({
    targets: childElement[0],
    duration: 1500,
    textContent: dispTitle,
    begin: function() {
      // カスタムデータの変更
      if (childElement[0].getAttribute('data-blinking') === 'on') {
        childElement[0].setAttribute('data-blinking', 'off');
      }
    },
    complete: function(){
      // カスタムデータの変更
      if (childElement[0].getAttribute('data-blinking') === 'off') {
        childElement[0].setAttribute('data-blinking', 'on');
      }
    }
  })
  .add({
    targets: childElement[0],
    duration: 2700,
    complete: function(){
      // カスタムデータの変更
      if (childElement[0].getAttribute('data-blinking') === 'on') {
        childElement[0].setAttribute('data-blinking', '');
      }
    }
  })
  .add({
    targets: childElement[1],
    duration: 2900,
    textContent: dispWriteLine[0],
    begin: function() {
      // カスタムデータの変更
      if (childElement[1].getAttribute('data-blinking') === '') {
        childElement[1].setAttribute('data-blinking', 'off');
      }
    },
    complete: function() {
      // カスタムデータの変更
      if (childElement[1].getAttribute('data-blinking') === "off") {
        childElement[1].setAttribute('data-blinking', 'on');
      }
    }
  })
  .add({
    targets: childElement[1],
    duration: .1,
    complete: function(){
      // カスタムデータの変更
      if (childElement[1].getAttribute('data-blinking') === 'on') {
        childElement[1].setAttribute('data-blinking', '');
      }
    }
  })
  .add({
    targets: childElement[2],
    duration: 1200,
    textContent: dispWriteLine[1],
    begin: function() {
      // カスタムデータの変更
      if (childElement[2].getAttribute('data-blinking') === '') {
        childElement[2].setAttribute('data-blinking', 'off');
      }
    },
    complete: function() {
      // カスタムデータの変更
      if (childElement[2].getAttribute('data-blinking') === "off") {
        childElement[2].setAttribute('data-blinking', 'on');
      }
    }
  });
  typeWriteAnimetion.play();
}


typeWrite({
  el: "#typingWrite",
  title: "思春期症候群───",
  write: "多感で不安定な思春期だけに起こると噂される、,不思議な現象"
})
