import React from "react"
import ReactDom from "react-dom"


/********************************************************/
/***********************画面幅が540未満*******************/
/********************************************************/
export function Phase2_Wide_Transition() {
  return (
    <div id = "phase2">
      <div id = "phase2Content" class = "content">
        <div id = "letter" class = "content-character">
          <div class = "character_syndrome">
            <div class = "character_line_1">青春ブタ野郎は</div>
            <div class = "character_line_2">バニーガール先輩の夢を見ない</div>
          </div>
          <div class = "content-character_explanation">
            <div class = "character_title">
            透明化現象
            </div>
          </div>
          <div class = "content-character_visual"></div>
        </div>
      </div>
    </div>
  );
}

export function Phase3_Wide_Transition() {
  return (
    <div id = "phase3">
      <div id = "phase3Content" class = "content">
        <div id = "letter" class = "content-character">
          <div class = "character_title">
            <div class = "character_line_1">青春ブタ野郎は</div>
            <div class = "character_line_2">プチデビル後輩の夢を見ない</div>
          </div>
        <div class = "content-character_visual"></div>
        <div class = "content-character_explanation">
          <div class = "character_syndrome">
            同じ日がループする現象
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase4_Wide_Transition() {
  return (
    <div id = "phase4">
      <div id = "phase4Content" class = "content">
        <div id = "letter" class = "content-character">
          <div class = "character_title">
            <div class = "character_line_1">青春ブタ野郎は</div>
            <div class = "character_line_2">ロジカルウィッチの夢を見ない</div>
          </div>
          <div class = "content-character_visual"></div>
          <div class = "content-character_explanation">
            <div class = "character_syndrome">
              ドッペルゲンガー現象
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase5_Wide_Transition() {
  return (
    <div id = "phase5">
      <div id = "phase5Content" class = "content">
        <div id = "letter" class = "content-character">
          <div class = "character_title">
            <div class = "character_line_1">青春ブタ野郎は</div>
            <div class = "character_line_2">シスコンアイドル夢を見ない</div>
          </div>
          <div class = "content-character_explanation">
            <div class = "character_syndrome">
              入れ替わり現象
            </div>
          </div>
          <div class = "content-character_visual"></div>
        </div>
      </div>
    </div>
  );
}

export function Phase6_Wide_Transition() {
  return (
    <div id = "phase6">
      <div id = "phase6Content" class = "content">
        <div id = "letter" class = "content-character">
          <div class = "character_title">
            <div class = "character_line_1">青春ブタ野郎は</div>
            <div class = "character_line_2">おるすばん妹の夢を見ない</div>
          </div>
          <div class = "content-character_visual"></div>
          <div class = "content-character_explanation">
            <div class = "character_syndrome">
              <div class = "character_title_1">
                心の痛みが体に
              </div>
              <div class = "character_title_2">
                刻まれる現象
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function Phase7_Wide_Transition() {
  return (
    <div id = "phase7">
      <div id = "phase7Content" class = "content">
        <div id = "letter" class = "content-character">
          <div class = "character_title">
            <div class = "character_line_1">青春ブタ野郎は</div>
            <div class = "character_line_2">ゆめみる少女の夢を見ない</div>
          </div>
          <div class = "content-character_visual"></div>
          <div class = "content-character_explanation">
            <div class = "character_syndrome">
              <div class = "character_title_1">
                未来の自分を
              </div>
              <div class = "character_title_2">
                作り出す現象
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/********************************************************/
/***********************画面幅が540以上*******************/
/********************************************************/
export function Phase2_Narrow_Transition() {
  return (
    <div id = "phase2">
      <div id = "phase2Content" class = "content">
        <div class = "content-character">
          <div class = "content-character_visual"></div>
          <div id = "letter" class = "content-character_explanation">
            <div class = "character_syndrome nthParent">
              青春ブタ野郎はバニーガール先輩の夢を見ない
            </div>
            <div class = "character_title">
              透明化現象
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase3_Narrow_Transition() {
  return (
    <div id = "phase3">
      <div id = "phase3Content" class = "content">
        <div class = "content-character">
          <div class = "content-character_visual"></div>
          <div  id = "letter" class = "content-character_explanation">
            <div class = "character_syndrome">
              同じ日がループする現象
            </div>
            <div class = "character_title nthParent">
              青春ブタ野郎はプチデビル後輩の夢を見ない
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase4_Narrow_Transition() {
  return (
    <div id = "phase4">
      <div id = "phase4Content" class = "content">
        <div class = "content-character">
          <div id = "letter" class = "content-character_explanation">
            <div class = "character_syndrome">
              ドッペルゲンガー現象
            </div>
            <div class = "character_title nthParent">
              青春ブタ野郎はロジカルウィッチの夢を見ない
            </div>
          </div>
          <div class = "content-character_visual"></div>
        </div>
      </div>
    </div>
  );
}

export function Phase5_Narrow_Transition() {
  return (
    <div id = "phase5">
      <div id = "phase5Content" class = "content">
        <div class = "content-character">
          <div id = "letter" class = "content-character_explanation">
            <div class = "character_syndrome">
              入れ替わり現象
            </div>
            <div class = "character_title nthParent">
              青春ブタ野郎はシスコンアイドルの夢を見ない
            </div>
          </div>
          <div class = "content-character_visual"></div>
        </div>
      </div>
    </div>
  );
}

export function Phase6_Narrow_Transition() {
  return (
    <div id = "phase6">
      <div id = "phase6Content" class = "content">
        <div class = "content-character">
          <div class = "content-character_visual"></div>
          <div id = "letter" class = "content-character_explanation">
            <div class = "character_title nthParent">
              青春ブタ野郎はおるすばん妹の夢を見ない
            </div>
            <div class = "character_syndrome">
              心の痛みが体に刻まれる現象
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Phase7_Narrow_Transition() {
  return (
    <div id = "phase7">
      <div id = "phase7Content" class = "content">
        <div class = "content-character">
          <div class = "content-character_visual"></div>
          <div id = "letter" class = "content-character_explanation">
            <div class = "character_title nthParent">
              青春ブタ野郎はゆめみる少女の夢を見ない
            </div>
            <div class = "character_syndrome">
              未来の自分を作り出す現象
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/************phase8は画面の幅でDOM変更はしない****************/


export function Phase8_Transition() {
  return (
    <div id = "react">
      <div id = "phase8">
        <div id = "phase8Content" class = "content">
          <div id = "contentTitle" class = "content-title"></div>
          <div id = "contentTransition" class = "content-transition">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div id = "home">
        <header id = "header" class = "header" data-menu = "close">
          <nav class = "header-navigation">
            <ul class = "header-navigation-menu">
              <li><a href="https://twitter.com/aobuta_anime/" target="_blank">Twitter</a></li>
              <li><a href="https://dengekibunko.jp/special/aobuta/" target="_blank">公式サイト</a></li>
              <li><a href="https://ao-buta.com/" target="_blank">アニメサイト</a></li>
            </ul>
          </nav>
          <div id = "hamburgerMenu" class = "header-hamburgerMenu">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>
        <main class = "main">
          <div class = "main_background"></div>
          <div class = "mainWrapper">
            <div class = "mainWrapperContent">
              <div class = "mainWrapperContent-character"></div>
              <img class = "mainWrapperContent-catchphrase" src = "./img/home/catchphrase.jpg" />
              <div class = "mainWrapperContent-section">
                <div class = "mainWrapperContent_book">
                  <a href = "https://dengekibunko.jp/product/aobuta/321907000725.html" target = "_blank"><img class = "book_11" src = "./img/home/第十一弾.jpg" /></a>
                  <a href = "https://dengekibunko.jp/product/aobuta/321906000877.html" target = "_blank"><img class = "book_10" src = "./img/home/第十弾.jpg" /></a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
