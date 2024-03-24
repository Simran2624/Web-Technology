function arraySizeChange(n){
    let array=[];
    let text="Array :";
    for (let i = 0; i < n-1; i++) {
        array.push(Math.floor(Math.random() * (n+20 - 1 + 1)) + 1);
        text+= ` ${array[i]}`
        text+=','
    }
    array.push(Math.floor(Math.random() * (n+20 - 1 + 1)) + 1);
    text+= ` ${array[n-1]}`

    console.log(array); 
    
    arrayHeading.textContent = text;
}
// Get reference to the range input element
const arrayHeading = document.getElementById('array');
const arrayRangeInput = document.getElementById('arrayRange');


// Add event listener for the 'input' event
arrayRangeInput.addEventListener('input', function() {
  // Call the arraySizeChange function passing the new value
  arraySizeChange(arrayRangeInput.value);
});
