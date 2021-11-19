// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

fetch(url)
   .then(response=> response.json())
   .then(data => {
       console.log("Data: ",data);
    let characters = [];
    for(const character of data) {
        let characterObj = {
                  'name': character.fullName,
                  'title': character.title,
                  'image': character.imageUrl,
                  'imageUrl':character.image
        }
        characters.push(characterObj);
    }
    for(const character of characters ) {
       console.log("Obj: ",character);
       const div=document.createElement("div");
       const p1=document.createElement("h4");
       const p2=document.createElement("h5");
       p2.innerText=character.name;
       p1.innerText=character.title;
       div.innerHTML='<img src="' +character.image +'" width="250px" height="250px" alt= "'+character.imageUrl+'"/>';
       div.appendChild(p2);
       div.appendChild(p1);
       document.querySelector(".characters").appendChild(div);
    }
    let section = document.getElementsByClassName('characters') [0];
    let elements = document.getElementsByClassName('character');
    for(const element of elements) {
        element.style.margin = '6px';
        element.style.textAlign ='center';
        element.style.width ='250px';
    }
    
});
