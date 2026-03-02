function imprimirAnoAtual() {
  const dataAtual = new Date();       
  const anoAtual = dataAtual.getFullYear(); 
  console.log("O ano atual é:", anoAtual);
}

imprimirAnoAtual();
