
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data['coord']['lon']);
  console.log(data['coord']['lat']);
  console.log(data['weather'][0]['description']);
  console.log(data['main']['temp_min']);
  console.log(data['main']['temp_max']);
  console.log(data['wind']['speed']);;
  console.log(data['name']);
}

// 課題5-1 の関数 printDom() はここに記述すること
let MVP = document.querySelector('button#henkouori');
MVP.addEventListener('click', printDom);

function printDom(data) {
  let place = document.querySelector('button#henkouori');
  let p = document.createElement('p');
  place.insertAdjacentElement('afterend', p);
  let li1 = document.createElement('li');
  li1.textContent = "軽度：" + data['coord']['lon'];
  p.insertAdjacentElement('beforeend', li1);
  li2= document.createElement('li');
  li2.textContent = "緯度：" + data['coord']['lat'];
  p.insertAdjacentElement('beforeend', li2);
  li3 = document.createElement('li');
  li3.textContent = "天気：" + data['weather'][0]['description'];
  p.insertAdjacentElement('beforeend', li3);
  li4 = document.createElement('li');
  li4.textContent = "最低気温：" + data['main']['temp_min'];
  p.insertAdjacentElement('beforeend', li4);
  li5 = document.createElement('li');
  li5.textContent = "最高気温：" + data['main']['temp_min'];
  p.insertAdjacentElement('beforeend', li5);
  li6 = document.createElement('li');
  li6.textContent = "風速：" + data['wind']['speed'];
  p.insertAdjacentElement('beforeend', li6);
  li6 = document.createElement('li');
  li6.textContent = "都市名：" + data['name'];
  p.insertAdjacentElement('beforeend', li6);
  let remove = document.querySelector('button#henkouori');
  remove.remove();
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述

let m = document.querySelector('#henkouori');
m.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + num + '.json';
  axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish); 
/*function sendRequest()*/ 
}

// 課題6-1: 通信が成功した時の処理は以下に記述

pick = document.querySelector('label#santaro');
pick = document.querySelector('select#select');
let id = pick.value;
if ( pick['value'] === "360630"){
  id = '360630'
}
if ( pick['value'] === "360630"){
  id = '360630'
}
if ( pick['value'] === "524901"){
  id = '524901'
}
if ( pick['value'] === "993800"){
  id = '993800'
}
if ( pick['value'] === "1816670"){
  id = '1816670'
}
if ( pick['value'] === "1850147"){
  id = '1850147'
}
if ( pick['value'] === "1880252"){
  id = '1880252'
}
if ( pick['value'] === "2147714"){
  id = '2147714'
}
if ( pick['value'] === "2643743"){
  id = '2643743'
}
if ( pick['value'] === "2968815"){
  id = '2968815'
}
if ( pick['value'] === "3451189"){
  id = '3451189'
}
if ( pick['value'] === "5128581"){
  id = '5128581'
}
if ( pick['value'] === "5368361"){
  id = '5368361'
}
let num = Number(id);

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

    printDom(data);
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




