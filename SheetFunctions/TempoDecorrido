function tempodecorrido(dataInicial, dataFinal) {
  // Verificar se as entradas são datas válidas
  if (!(dataInicial instanceof Date) || !(dataFinal instanceof Date)) {
    return "Datas inválidas";
  }

  // Garantir que a dataFinal seja sempre depois da dataInicial
  if (dataFinal < dataInicial) {
    return "A data final deve ser maior que a data inicial.";
  }

  // Calcular a diferença total em milissegundos
  const totalMilissegundos = dataFinal - dataInicial;
  
  // Calcular os anos, meses e dias
  const anos = dataFinal.getFullYear() - dataInicial.getFullYear();
  const meses = dataFinal.getMonth() - dataInicial.getMonth();
  const dias = dataFinal.getDate() - dataInicial.getDate();

  // Ajustar a diferença caso o número de meses ou dias seja negativo
  let ajusteMeses = meses;
  let ajusteAnos = anos;

  if (meses < 0) {
    ajusteMeses = 12 + meses;  // Ajusta os meses para o valor positivo
    ajusteAnos -= 1;  // Decrementa um ano, pois não completou o mês
  }

  let ajusteDias = dias;

  if (dias < 0) {
    const prevMonth = new Date(dataFinal.getFullYear(), dataFinal.getMonth(), 0); // Pega o último dia do mês anterior
    ajusteDias = prevMonth.getDate() + dias;  // Ajusta os dias para o valor positivo
    ajusteMeses -= 1;  // Decrementa um mês, pois não completou o dia
    if (ajusteMeses < 0) {
      ajusteMeses = 11;
      ajusteAnos -= 1;  // Decrementa um ano, pois não completou o mês
    }
  }

  // Criar a string de resultado
  let resultado = [];

  // Adicionar "ano(s)" se houver anos
  if (ajusteAnos > 0) {
    resultado.push(ajusteAnos + " " + (ajusteAnos === 1 ? "ano" : "anos"));
  }

  // Adicionar "mês(es)" se houver meses
  if (ajusteMeses > 0) {
    resultado.push(ajusteMeses + " " + (ajusteMeses === 1 ? "mês" : "meses"));
  }

  // Adicionar "dia(s)" se houver dias
  if (ajusteDias > 0) {
    resultado.push(ajusteDias + " " + (ajusteDias === 1 ? "dia" : "dias"));
  }

  // Combinar tudo com "e" no final, se necessário
  if (resultado.length > 1) {
    const ultimo = resultado.pop(); // Remove o último valor
    return resultado.join(", ") + " e " + ultimo; // Junta os valores restantes e adiciona o "e" no final
  }

  // Se houver apenas um valor, retornar diretamente
  return resultado.join("");
}