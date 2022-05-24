

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('post').addEventListener('click', (event) => {
  let element_unordered = document.getElementById('unordered');
  let new_ul = document.createElement('ul');
  new_ul.innerText = getNumberOrString(document.getElementById('comment-box').value);

  element_unordered.appendChild(new_ul);

});
