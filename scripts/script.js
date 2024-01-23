function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i) {   
      setTimeout(function() {
          elemento.innerHTML += letra;
          if (i === textoArray.length - 1) {
              // Quando a animação de digitação estiver concluída
              setTimeout(function() {
                  // Adiciona uma classe para a animação de subir
                  elemento.classList.add('move-up');
              }, 500); // Ajuste o tempo conforme necessário
          }
      }, 1 * i);
  });
}

// Chama a função typeWrite com o elemento desejado
const titulo = document.querySelector('.birth-text');
typeWrite(titulo);

const botao = document.querySelector('#scroll-down-btn')

botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
    botao.style.display = 'none'
})
