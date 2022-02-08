function getDataHtml(){
  const sale = Number(document.getElementById('sale').value);
  const amountPaid = Number(document.getElementById('amount-paid').value);
  
  return {
    sale,
    amountPaid
  }
}

function calculateThing() {
  const {sale, amountPaid} = getDataHtml();
  const sum = (sale - amountPaid ) * -1 ;

  if (sale > amountPaid) {
    
     window.alert('Valor da venda é maior que o valor pago');
     document.getElementById('result').innerHTML = '';

  } else {
    
    document.getElementById('result').innerHTML = sum;
  }

  return sum;
}
function validateThing() {
  const  valueThing = calculateThing();
  const values = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05];
  return {
    valueThing,
    values
  }

}

function calculate(){
  arr = new Array();
  let {valueThing, values } = validateThing();

  for(v in values) {
    if( values[v] > valueThing) continue;
    const passChange = parseInt(valueThing / values[v]);

    arr.push([passChange, values[v]]);
    valueThing = valueThing - (passChange * values[v]);

    for(let i =0; i<arr.length; i++){
      const lengthh = arr[i].length;
    
 
      document.getElementById('result-thing').innerHTML = `A quantidade minima de moeda a serem recebidas como troco são ${lengthh} sendo ${arr} `;

    }

    

    // document.getElementById('result').innerHTML = arr;



  }
  return arr;

}