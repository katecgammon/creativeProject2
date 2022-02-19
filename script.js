document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault();
    
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog1").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url2 = "https://dog.ceo/api/breeds/image/random";
    fetch(url2)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog2").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url3 = "https://dog.ceo/api/breeds/image/random";
    fetch(url3)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog3").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url4 = "https://dog.ceo/api/breeds/image/random";
    fetch(url4)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog4").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url5 = "https://dog.ceo/api/breeds/image/random";
    fetch(url5)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog5").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url6 = "https://dog.ceo/api/breeds/image/random";
    fetch(url6)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog6").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url7 = "https://dog.ceo/api/breeds/image/random";
    fetch(url7)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog7").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url8 = "https://dog.ceo/api/breeds/image/random";
    fetch(url8)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog8").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url9 = "https://dog.ceo/api/breeds/image/random";
    fetch(url9)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog9").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url10 = "https://dog.ceo/api/breeds/image/random";
    fetch(url10)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog10").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url11 = "https://dog.ceo/api/breeds/image/random";
    fetch(url11)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog11").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
    const url12 = "https://dog.ceo/api/breeds/image/random";
    fetch(url12)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        document.getElementById("dog12").innerHTML = "<img src=\"" + json.message + "\"" + "/>";
        console.log(json);
    });
});
