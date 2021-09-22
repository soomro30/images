// function createNode(element) {
//     return document.createElement(element);
//   }
  
//   function append(parent, el) {
//   return parent.appendChild(el);
//   }
  
//   const ul = document.getElementById('authors');
//   const url = 'https://pmsimages.musanada.com/Images/';
  
//   let headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//   headers.append('Accept', 'application/json');
//   headers.append('Origin','https://gisportal.musanada.com');
  
  
//   fetch(url, {mode: 'no-cors',method: 'GET', headers: headers})
//   .then((resp) => resp.json())
//   .then(function(data) {
//     console.log(data);
//   let authors = data.results;
//   return authors.map(function(author) {
//     // 
    
//     console.log(author);
//   })
//   })
//   .catch(function(error) {
//   console.log(error);
//   });
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const project = urlParams.get('id')
console.log(project);
document.getElementById('emoji').innerHTML = 'project';
fetch('https://pmsimages.musanada.com/Images/', { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(data => {
    var div = document.createElement('div');

    div.innerHTML = '';

    for (var prop in data) {
       console.log(data[prop].PERIOD.GSEC);

       data[prop].PERIOD.GSEC.forEach((person)=>{
           if(person.PROJECT_ID == project ) {
            div.innerHTML +=
            '<span style="display:inline;"><img src="'+person.PROJ_IMAGE+'"></span>';
           }
       
       });
      
    }
    document.getElementById('emoji').appendChild(div);
})
.catch(error => console.error(error))