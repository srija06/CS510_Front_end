// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

fetch(url)
   .then(response=> response.json())
   .then(data => {
       
    let characters = [];
    for(const character of data) {
        let characterObj = {
                  'name': character.fullName,
                  'title': character.title,
                   'image': character.imageUrl,
        }
        characters.push(characterObj);
    }
    let htnl = '';
    for(const character of characters ) {       
        html = html +
        '<div class="character" width="250px">' +
        '<img src= "' + character.image + '" width="250px" height="250px"' +
        '<div>' + character.name + '</div>' + 
        '<div>' + character.title + '</div>' +
    '</div>';
    }
    let section = document.getElementsByClassName('characters') [0];
    section.innerHTML = html;
    let elements = document.getElementsByClassName('character');
    for(const element of elements) {
        element.style.margin = '6px';
        element.style.textAlign ='center';
        element.style.width ='250px';
    }
    for(const element of elements) {
        element.onmouseover = function() {
        element.style.color ='white';
        element.style.backgroundcolor = 'teal';
        };
        element.onmouseover =function() {
            element.style.color = "";
            element.style.backgroundcolor ="";
        }
    };
});
