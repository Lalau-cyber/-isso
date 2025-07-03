const tela1 = document.querySelector('.tela1');
const tela2 = document.querySelector('.tela2');
const tela3 = document.querySelector('.tela3');




document.getElementById('azul').onclick = function () {
  tela1.style.display = 'none';
  tela2.style.display = 'inline-block';
  tela3.style.display = 'none';
};




document.getElementById('verde').onclick = function () {
  tela1.style.display = 'none';
  tela2.style.display = 'none';
  tela3.style.display = 'inline-block';
};




document.getElementById('vermelho1').onclick = function () {
  tela1.style.display = 'inline-block';
  tela2.style.display = 'none';
  tela3.style.display = 'none';
};




document.getElementById('vermelho2').onclick = function () {
  tela1.style.display = 'inline-block';
  tela2.style.display = 'none';
  tela3.style.display = 'none';
};