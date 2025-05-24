// API call com Xhr
const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // Definir parâmetros de conexão no xhr
    xhr.open(obj.method, obj.url, true);

    // Mandar requisição
    xhr.send();

    // Assim que a chamada api tiver um retorno
    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

// Ao clicar, chama a função carregar página
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}