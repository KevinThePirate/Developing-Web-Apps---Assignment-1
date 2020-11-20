let genres = ['Aquaman', 'Batgirl', 'Batman', 'Black Panther', 'Captain America', 'Doctor Strange', 'Ghost Rider', 'Spider-Man' ];
let movedGenres = [];
const images = document.getElementsByClassName('verify-image')
let find = Math.ceil(Math.random() * 4);
let correctImage = false;
let valid = true;
/*let checkboxes = document.querySelectorAll('.checkbox');
const checkboxArray = Array.apply(null, checkboxes);
const checkboxTest = box => box.checked;
let checkDoesPass = checkboxArray.every(checkboxTest);*/
let checkDoesPass = false;
const init = () => {
  generateGenres()
  //document.getElementById("form").addEventListener("submit", validate);
  console.log({genres});
  console.log({movedGenres});

  find = Math.ceil(Math.random() * 4);
  document.getElementById('find').innerHTML = find;
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('onclick', 'imageCheck(this)');
    
  }
  document.getElementById('submit-button').addEventListener('click', submit)
}
const validate = (e) => {
  valid = true;

  let inputs = document.querySelectorAll(".yoke");
  if(document.getElementById('field-3').checked == true){checkDoesPass = true;}else{checkDoesPass = false;}

const revealError = (box, errorMessage) =>{
  let errorBox = box.nextElementSibling;
  errorBox.style.opacity = 1;
  errorBox.innerHTML = errorMessage;
}
let errorBoxes = document.querySelectorAll('.error-message');
errorBoxes.forEach(element => {
  element.style.opacity = 0;
})



  inputs.forEach((element) => {
  var str = document.getElementById('field-2').value;
  var patt = new RegExp(/.+\@.+\..+/);
  var res = patt.test(str);

    element.classList.remove("error");
    document.getElementById("genreSecond").classList.remove("error");

    if (element.value == "") {
      revealError(element, 'Error!')
      //element.nextElementSibling.innerHTML = 'Error!'

      element.classList.add("error");
        console.log('Error at', element)
      valid = false;
    }else if(res == false){
      console.log('Error at', {element})
      revealError(document.getElementById('field-2'), 'Please Enter Valid Email!')
      valid = false;}
    if(checkDoesPass == false){
      console.log('Error at', {element})
      revealError(document.getElementById('field-3'), 'Please Check!')
      valid = false;
    } 
    if(movedGenres.length == 0){
      console.log('Error at', {element})
      revealError(document.getElementById("genre-title"), 'Please Select!')
      document.getElementById("genreSecond").classList.add("error");
      valid = false;
    }
    if(correctImage == false){
      console.log('Error at', {element})
      revealError(document.getElementById("image-title"), 'Try Again!')
      valid = false;
    }//else{ valid = true;}
  });
  /*if (valid == false) {
    e.preventDefault();
    return false;
  } else {
    alert('validated')
    return true;
  }*/
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
const imageCheck = (element) => {
  const number = element.getAttribute('value');
  const overlays = document.querySelectorAll('.overlay')
  let imageArray = Array.apply(null, images)
  const place = imageArray.indexOf(element)
  document.getElementById('find').innerHTML = find;
  if(overlays[place].classList.contains('clicked')){
    console.log(overlays[place].classList)
    overlays[place].classList.remove('clicked')
    console.log(overlays[place].classList)
    for (let i = 0; i < overlays.length; i++) {
      overlays[i].classList.remove('invalid')
    }
  }else{
    for (let i = 0; i < overlays.length; i++) {
      overlays[i].classList.add('invalid') 
    }
    overlays[place].classList.add('clicked')
  }
  if(number == find){
    correctImage = true;
  }else{
    correctImage = false;
  }
  
  overlays[place].classList.remove('invalid');
  console.log(correctImage)
  }

const submit = () => {
  validate()
  if(valid == true){
    url = ''
  url +=  'https://webdevcit.com/displayvalues.php?';
  url += 'name=' + escape(document.getElementById('field-1').value)
  url += '&email=' + escape(document.getElementById('field-2').value); 
  url += '&data=' + escape(checkDoesPass);
  url += '&superhero=' + escape(movedGenres.join(','));
  url += '&captca=' + escape(correctImage)

  location = url;
  }
}

init();