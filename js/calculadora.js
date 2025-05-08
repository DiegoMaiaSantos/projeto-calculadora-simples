const resultado = document.getElementById('resultado');
const botoes = document.querySelectorAll('.teclado button');

let expressao = '';

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    const valor = btn.getAttribute('data-value');

    switch (valor) {
      case 'C':
        expressao = '';
        atualizar();
        break;
      case '←':
        expressao = expressao.slice(0, -1);
        atualizar();
        break;
      case '=':
        calcular();
        break;
      default:
        expressao += valor;
        atualizar();
        break;
    }
  });
});

function atualizar() {
  resultado.innerText = expressao || '0';
}

function calcular() {
  try {
    if (/^[0-9.+\-*/() ]+$/.test(expressao)) {
      const resultadoCalc = new Function(`return ${expressao}`)(); 
      expressao = resultadoCalc.toString();
    } else {
      expressao = 'Erro';
    }
  } catch {
    expressao = 'Erro';
  }
  atualizar();
}
