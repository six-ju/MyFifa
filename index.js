import config from "/config.js"

$(document).ready(function(){
    $('.pw').click(function(){
        let id = $('.id').val()
        fifa(id)
    })
})

function fifa(id){
    let API_KEY = config.fifaKey;
    let characterName = `${id}`;
    let ouId = "https://open.api.nexon.com/fconline/v1/id?nickname=" + characterName;

    let answer = fetch(ouId, {
        headers:{
          "x-nxopen-api-key": API_KEY
        }
    })
      .then(response => response.json())
      .then(data => fifaUser(data))
      .catch(error => console.error(error))
}

function fifaUser(data){
    let API_KEY = config.fifaKey;
    let userInfo = "https://open.api.nexon.com/fconline/v1/user/basic?ouid=" + data.ouid;
    let answers = fetch(userInfo, {
        headers:{
          "x-nxopen-api-key": API_KEY
        }
    })
      .then(response => response.json())
      .then(data => { // 예시: 가져온 데이터를 HTML에 추가하는 경우
        $('.here').html(`
            <p>Nickname: ${data.nickname}</p>
            <p>Level: ${data.level}</p>
        `);
    })
}
