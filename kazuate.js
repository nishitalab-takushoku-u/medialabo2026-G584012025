// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let suika=0;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  if (suika === 1 || kaisu >= 3) {
        let m = document.querySelector("p#result");
        m.textContent = "答えは " + kotae + " でした。すでにゲームは終わっています。";
        return;
    }

    kaisu= kaisu+1;
    let om = document.querySelector("span#kaisu");
    om.textContent = kaisu;

    let oi = document.querySelector('input[name="opi"]');
    let huh = Number(oi.value);

    let m = document.querySelector("p#result");

    if (huh === kotae) {
        m.textContent = "正解です。おめでとう！";
        suika = 1;
    }
    else if (kaisu === 3) {
        m.textContent = "まちがい。残念でした。答えは " + kotae + " です。";
        suika = 1;
    }
    else if (huh < kotae) {
        m.textContent = "まちがい。答えはもうちょっと大きいよ。";
    }
    else {
        m.textContent = "まちがい。答えはもうちょっと小さいよ。";
    }
//   kaisu = Number(kaisu+1);
//   let yosokaisu = kaisu;
//   let om = document.querySelector('span#kaisu');
//   om.textContent = yosokaisu;


//   // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新

//   // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
//   // ここから: テキストボックスに指定された数値を yoso に代入する
// let oi = document.querySelector('input[name="opi"]');
// let oioi = oi.value;
// let huh = Number(oioi);
// let yoso2 = Number(huh);
// let result = document.querySelector('span#kaisu');
// result.textContent = yoso2;
//   // ここまで: テキストボックスに指定された数値を yoso に代入する
  
//   // ここから: 正解判定する

// if ( Number(kaisu)>=4 || Number(suika)===1){
//   let m = document.querySelector('p#result');
//   m.textContent = '答えは' + kotae + 'でした、すでにゲームは終わっています';
// }
// if ( Number(kaisu)===Number(kotae) && Number(suika!==1 )){
//   m.document.querySelector('p#result');
//   v=1;
//   m.textContent='正解です。おめでとう';
// }
// if ( Number(huh)!==Number(kotae) && Number(kaisu)===3){
//   m=document.querySelector('p#result');
//   m.textContent = 'まちがい。残念でした答えは' + kotae + 'です。';
// }
// if ( Number(kaisu)<3 && Number(kotae)>Number(huh)){
//   m=document.querySelector('p#result');
//   m.textContent = 'まちがい。答えはもうちょっと大きいよ';
// }
// if ( Number(kaisu)<3 && Number(kotae)<Number(huh)){
//   m = document.querySelector('p#result');
// }
  }
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する

let zebra = document.querySelector('button#ans');
zebra.addEventListener('click', hantei);
// ここから: ボタンを押した時のイベントハンドラとして hantei を登録

// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
