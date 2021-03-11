fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
.then(response => response.json())
  .then(data =>{console.log(data)
    data.Search.forEach(element => {
   var body = document.querySelector('body');
   var p = document.createElement('p');
   var p2 = document.createElement('p');
   var p3 = document.createElement('p');
   var image = document.createElement('img');
   body.appendChild(image)
   body.appendChild(p);
   body.appendChild(p2);
   body.appendChild(p3);
   p.innerHTML = element.Title;
   p2.innerHTML = element.Year;
   p3.innerHTML = element.Poster; 
   image.setAttribute("src", element.Poster)
})
   
   });
  

 