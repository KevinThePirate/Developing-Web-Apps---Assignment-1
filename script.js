let genres = ['Aquaman', 'Batgirl', 'Batman', 'Black Panther', 'Captain America', 'Doctor Strange', 'Ghost Rider', 'Spider-Man' ];
let movedGenres = [];
const init = () => {
  generateGenres()
  document.getElementById("form").addEventListener("submit", validate);
  console.log({genres});
  console.log({movedGenres});
}
const validate = (e) => {
  let valid = true;
  let inputs = document.querySelectorAll(".yoke");
  
    let checkboxes = document.querySelectorAll('.checkbox');
const checkboxArray = Array.apply(null, checkboxes);
const checkboxTest = box => box.checked;
let checkDoesPass = checkboxArray.every(checkboxTest);
    
  inputs.forEach((element) => {
    element.classList.remove("error");
    if (element.value == "" || checkDoesPass == false) {
        
      element.classList.add("error");
        console.log('Error at', {element})
      valid = false;
    }
  });
  if (valid == false) {
    e.preventDefault();
    return false;
  } else {
    return true;
  }
};
const moveGenre = (element) =>{
  console.log({genres});
  //element.style.backgroundColor = 'blue';
  //document.getElementById("genreSecond").appendChild(element);
  if(genres.includes(element.innerHTML)){
  const moving = genres.indexOf(element.innerHTML)
  movedGenres.push(genres[moving]);
  genres.splice(moving, 1);
  }else{
    const moving = movedGenres.indexOf(element.innerHTML)
  genres.push(movedGenres[moving]);
  movedGenres.splice(moving, 1);
  }
  console.log({genres});
  console.log({movedGenres});
  genres.sort();
  movedGenres.sort();
  generateGenres();


}
const generateGenres = () => {
  document.getElementById("genreFirst").innerHTML = '';
  document.getElementById("genreSecond").innerHTML = '';
  for (let i = 0; i < genres.length; i++) {
    //document.getElementById('genreFirst').innerHTML += genres[i];
    const genre = document.createElement('div');
    genre.setAttribute('class', 'genre');
    genre.setAttribute('onclick', 'moveGenre(this)');

    const textnode = document.createTextNode(genres[i]);       
    genre.appendChild(textnode);                         
    document.getElementById("genreFirst").appendChild(genre);
    
  }
  for (let i = 0; i < movedGenres.length; i++) {
    //document.getElementById('genreFirst').innerHTML += genres[i];
    const genre = document.createElement('div');
    genre.setAttribute('class', 'genre');
    genre.setAttribute('onclick', 'moveGenre(this)');

    const textnode = document.createTextNode(movedGenres[i]);       
    genre.appendChild(textnode);                         
    document.getElementById("genreSecond").appendChild(genre);
    
  }
  document.getElementById('genreSecond').value = movedGenres;
}


init()