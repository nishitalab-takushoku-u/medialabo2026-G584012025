function calc(){
  x = document.querySelector('p');
x = document.querySelector('p');
no = document.querySelector('input[name="right"]');
amo = no.value;
a = Number(amo);
on = document.querySelector('input[name="left"]');
oma = on.value;
b = Number(oma);
p = document.querySelector('span#answer');
keisan = a+b;
p.textContent = keisan;
}
let z = document.querySelector('span#answer');
z = addEventListener('click', calc);