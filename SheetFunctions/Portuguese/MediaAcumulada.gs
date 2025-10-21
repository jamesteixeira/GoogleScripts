/**
 * MediaAcumulada.gs
 * Copyright (c) 2025 James Santos Teixeira
 *
 * Desenvolvido por James Santos Teixeira
 * com assistência do ChatGPT da OpenAI.
 *
 * Este software é disponibilizado sob a Licença MIT.
 * Consulte o arquivo LICENSE na raiz do repositório para mais detalhes.
 */


/**
 * Retorna a média acumulada (cumulative mean) como uma coluna (2D array).
 * Uso na planilha: =MediaAcumulada(B2:B11)
 * Opcional: =MediaAcumulada(B2:B11; 4)  -> arredonda para 4 casas
 */

function MediaAcumulada(inputRange, casas) {
  // recebe um intervalo (2D array) quando chamado como função personalizada
  var input = inputRange;
  var vals = [];

  if (Array.isArray(input)) {
    for (var i = 0; i < input.length; i++) {
      for (var j = 0; j < input[i].length; j++) {
        vals.push(input[i][j]);
      }
    }
  } else {
    vals = [input];
  }

  var medias = [];
  var soma = 0;
  var contador = 0;
  var pow10 = (typeof casas === 'number') ? Math.pow(10, casas) : null;

  for (var k = 0; k < vals.length; k++) {
    var v = vals[k];

    // Converte "1,23" para 1.23 (caso o usuário tenha texto com vírgula)
    var num = (typeof v === 'number') ? v : parseFloat(String(v).replace(',', '.'));

    if (!isNaN(num)) {
      soma += num;
      contador++;
      var avg = soma / contador;
      if (pow10 !== null) avg = Math.round(avg * pow10) / pow10;
      medias.push([avg]);
    } else {
      // mantém célula vazia para entradas não numéricas
      medias.push(['']);
    }
  }

  return medias; // retorna 2D array para "spill"
}