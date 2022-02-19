
// モジュールパターン
// クロージャにより、グローバル変数の汚染を防ぐことができる。
let depictionBackgeroundImg = (function(){
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  // 背景画像をリサイズする一時変数
  const tmpCanvas = document.createElement('canvas');
  const tmpContext = tmpCanvas.getContext('2d');

  // imgオブジェクト
  let img_leter = new Image();
  let img_backgeround = new Image();

  //  画面の大きさ
  let windowWidth;
  let windowHeight;

  /**
   * レスポンシブ対応背景画像の作成
   * [loadDisp_img description]
   * @param  {[type]} imgPath   画像のパス
   */
   function loadDisp_img(imgPath) {
     img_backgeround.src = imgPath;
     img_backgeround.addEventListener('load', function() {
       init();
     });
     //レスポンシブ時に発火
     window.onresize = onreSizeImg;
   };

   function init () {
  	 canvas.width = windowWidth = window.innerWidth;
  	 canvas.height = windowHeight = window.innerHeight;
     resizeBackgeroundImg();
     dispBackgeroundImg();
   };

  /**
   * [resizeBackgeroundImg description]
   * 背景用の画像をcanvas(fillStyle)に収まるようにリサイズする
   * @return {[type]} [description]
   */
   function resizeBackgeroundImg() {
     // 初回書き込み
     tmpCanvas.width = img_backgeround.naturalWidth;
     tmpCanvas.height = img_backgeround.naturalHeight;
     tmpContext.drawImage(img_backgeround, 0, 0);
     const pattern = tmpContext.createPattern(tmpCanvas, 'no-repeat');

     // リサイズ結果を転写する
     const scaleWidth = windowWidth/tmpCanvas.width;
     const scaleHeight = windowHeight/tmpCanvas.height;
     //  scale()でも問題ない
     tmpContext.setTransform(scaleWidth, 0, 0, scaleHeight, 0, 0);
     tmpContext.fillStyle = pattern;
     // canvasの背景に描写
     tmpContext.fillRect(0, 0, tmpCanvas.width * 2, tmpCanvas.height * 2);
   }

   /**
    * 背景用の画像を表示
    * [dispBackgeroundImg description]
    * @return {[type]} [description]
    */
   function dispBackgeroundImg() {
     let pattern = context.createPattern(tmpCanvas, 'no-repeat');
     context.fillStyle = pattern;
     // 画像の表示
   	context.fillRect(0, 0, img_backgeround.width, img_backgeround.height);
   	context.fill();
   };

   function onreSizeImg() {
     canvas.width = windowWidth = window.innerWidth;
     canvas.height = windowHeight = window.innerHeight;
     imgLeterWidth = img_leter.width;
     imgLeterHeight = img_leter.height;
     // 背景用の画像をcanvas内に収める
     resizeBackgeroundImg();
     // 背景用画像の描写
     dispBackgeroundImg();
   }
   return {
     loadDisp_img: loadDisp_img
   }
})();

depictionBackgeroundImg.loadDisp_img('../img/phase1/sky.png');
