function findDivisors() {
      let number = parseInt(document.getElementById('numberInput1').value);
      
      let divisors = [];
      for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
          divisors.push(i);
        }
      }

      let table = '<table border="1">';

      for (let j = 0; j < divisors.length; j++) {
          table += '<td>' + divisors[j] + '</td>';
      }
      table += '</table>';

      document.getElementById('result1').innerHTML = table;
}

function createArray() {
    // Отримуємо значення з текстового рядка
    let number = parseInt(document.getElementById('numberInput2').value);

    // Створюємо масив з елементами відповідно до вказаного числа
    let array = [];
    for (let i = 1; i <= number; i++) {
        let element = '';
        for (let j = 0; j < i; j++) {
            element += i.toString();
        }
        array.push(element);
    }

    // Виводимо масив у вигляді рядка в абзаці
    document.getElementById('result2').innerText = array.join(', ');
}

function solveQuadraticEquation() {
  let input = document.getElementById('coefficients').value;
  let coefficients = input.split(',').map(function(item) {
    return parseInt(item.trim());
  });

  let a = coefficients[0];
  let b = coefficients[1];
  let c = coefficients[2];

  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById('x1').innerText = x1;
    document.getElementById('x2').innerText = x2;
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    document.getElementById('x1').innerText = x;
    document.getElementById('x2').innerText = x;
  } else {
    alert("Рівняння не має розв'язків у множині дійсних чисел.");
  }
}

function removeDuplicates() {
    let input = document.getElementById('values').value;
    let values = input.split(',').map(function(item) {
        return item.trim();
    });

    let seenValues = {};
    let duplicates = [];
    let uniqueValues = [];
    values.forEach(function(value) {
        if (seenValues[value]) {
            duplicates.push(value);
        } else {
            seenValues[value] = true;
            if (!duplicates.includes(value)) {
                uniqueValues.push(value);
            }
        }
    });

    if (duplicates.length > 0) {
        alert('Дублікати: ' + duplicates.join(', '));
    } else {
        alert('Дублікатів не знайдено.');
    }

    document.getElementById('uniqueValues').innerText = 'Унікальні значення: ' + uniqueValues.join(', ');
}



function reverseAndCalculate() {
  let input = document.getElementById('numbers').value;
  let numbers = input.split(',').map(function(item) {
    return parseFloat(item.trim());
  });

  let reversedNumbers = numbers.reverse();
  let sum = reversedNumbers.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  let average = sum / numbers.length;

  document.getElementById('result5').innerText = 'Розвернуті числа: ' + reversedNumbers.join(', ');
  document.getElementById('sum').innerText = 'Сума: ' + sum;
  document.getElementById('average').innerText = 'Середнє значення: ' + average.toFixed(2);
}

 