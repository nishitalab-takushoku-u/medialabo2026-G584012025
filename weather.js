
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data['coord']['lon']);
  console.log(data['coord']['lat']);
  console.log(data['weather'][0]['description']);
  console.log(data['main']['temp_min']);
  console.log(data['main']['temp_max']);
  console.log(data['wind']['speed']);;
}

// 課題5-1 の関数 printDom() はここに記述すること
let MVP = document.body;
MVP=addEventListener('click', printDom);

function printDom(data) {
  let one = document.createElement('div', 'result');
  let two = document.querySelector('#henkouori');
  two.insertAdjacentElement('afterend', one);
  let three = document.createElement('li');
  three.textContent=data.coord.lon;
  
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述

let m = document.querySelector('#henkou1');
m.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json';
  axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish); 
/*function sendRequest()*/ 
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};




