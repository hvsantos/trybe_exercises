function checkValues(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Um dos valores não é do tipo númerico');
  }
  if (num1 === '' || num2 === '') {
    throw new Error('Um dos valores não foi inserido');
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    checkValues(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  }
  catch (error){
    document.getElementById('result').innerHTML = ''
    return alert(error.message);
  }
  finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
