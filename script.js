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
document.getElementById("form").addEventListener("submit", validate);