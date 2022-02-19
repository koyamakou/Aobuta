import React from "react"
import ReactDom from "react-dom"


/********************************************************/
/***********************画面幅が540未満*******************/
/********************************************************/
export function Phase2_Wide() {
  return (
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
  );
}

export function Phase3_Wide() {
  return (
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
  );
}

export function Phase4_Wide() {
  return (
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
  );
}

export function Phase5_Wide() {
  return (
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
  );
}

export function Phase6_Wide() {
  return (
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
  );
}


export function Phase7_Wide() {
  return (
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
  );
}

/********************************************************/
/***********************画面幅が540以上*******************/
/********************************************************/
export function Phase2_Narrow() {
  return (
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
  );
}

export function Phase3_Narrow() {
  return (
    <div class = "content-character">
      <div class = "content-character_visual"></div>
      <div id = "letter" class = "content-character_explanation">
      <div class = "character_syndrome">
        同じ日がループする現象
      </div>
        <div class = "character_title nthParent">
          青春ブタ野郎はプチデビル後輩の夢を見ない
        </div>
      </div>
    </div>
  );
}

export function Phase4_Narrow() {
  return (
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
  );
}

export function Phase5_Narrow() {
  return (
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
  );
}

export function Phase6_Narrow() {
  return (
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
  );
}

export function Phase7_Narrow() {
  return (
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
  );
}
