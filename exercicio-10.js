function verificarString(texto) {
  let tamanho = texto.length; 
  let classificacao;

  if (tamanho <= 5) {
    classificacao = "pequena";
  } else if (tamanho <= 10) {
    classificacao = "média";
  } else {
    classificacao = "grande";
  }

  console.log(`A string '${texto}' é ${classificacao}.`);
}

verificarString("app");          
verificarString("computador");   
verificarString("aplicativos");  
