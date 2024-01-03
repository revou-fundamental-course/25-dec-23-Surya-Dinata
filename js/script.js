
// Area of Triangle
function calculateArea() {
    // Get the input values
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    // Check if the inputs are valid numbers
    if (isNaN(base) || isNaN(height)) {
        alert('Mohon isi panjang alas dan tinggi dengan benar!');
        return;
    }

    // Calculate the area using the formula: 1/2 * base * height
    var area = 0.5 * base * height;

    // Display the result
    document.getElementById('resultArea').textContent = 'Hasil perhitungan luas segitiga adalah L =' + area.toFixed(2);
}

function resetAreaForm() {
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('resultArea').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
    var inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach(function (inputField) {
        inputField.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                calculateArea();
            }
        });
    });
});


// Circumference of Triangle
function calculateCircumference() {
    // Get the input values
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    // Check if the inputs are valid numbers
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
      alert('Mohon isi panjang sisi dengan benar');
      return;
    }

    // Check if the given sides form a valid triangle
    if (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB) {
      // Calculate the result
      var area = sideA + sideB + sideC;
      // Display the result
      document.getElementById('resultCircumference').textContent = 'Hasil dari perhitungan keliling segitiga adalah K =' + area.toFixed();
    } else {
        alert('Mohon isi panjang sisi dengan benar!');
    }
  }
function resetCircumferenceForm() {
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('resultCircumference').innerHTML = '';
  }
  document.addEventListener('DOMContentLoaded', function() {
    var inputFields = document.querySelectorAll('input[type="text"]');
    inputFields.forEach(function(inputField) {
        inputField.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                calculateCircumference();
            }
        });
    });
});
