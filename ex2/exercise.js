fetch("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=768424cc9c2294daa296a0d0a70d1035")
  .then(response => response.json())
  .then(data => {
      var body = document.querySelector('body');
      var p1 = document.createElement('p');
      var p2 = document.createElement('p');
      var p3 = document.createElement('p');
      body.appendChild(p1);
      body.appendChild(p2);
      body.appendChild(p3);
      p1.innerHTML = data.weather[0].description
      p2.innerHTML = data.name
      p3.innerHTML = data.main.temp
      console.log(data)
     }
  )