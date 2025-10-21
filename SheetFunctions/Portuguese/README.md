# Instalação e uso

- Abra o documento do Google Sheets.
- Vá em Extensões → Apps Script.
- Apague qualquer código existente (se necessário) e cole o script da função.
- Salve o projeto (pode nomear como “Funções Personalizadas”).
- Você pode, também, adicionar um arquivo para cada função, caso queira adicionar mais de uma função e salvar o arquivo com o nome da própria função (Ex. MediaAcumulada.gs).
- Feche o editor do Apps Script.
- De volta à planilha, use a função como qualquer outra função nativa.

Se a função não atualizar de imediato, recarregue a planilha ou digite novamente a fórmula. \
A função personalizada é executada automaticamente e não requer permissões adicionais.

# Funções

## MEDIAACUMULADA

- [MediaAcumulada](MediaAcumulada.md)

Calcula a média acumulada (ou média móvel crescente) de uma coluna de números e retorna o resultado como uma matriz de coluna.  
Cada célula do resultado representa a média de todos os valores desde a primeira até aquela linha.


### Exemplo de uso

```MEDIAACUMULADA(A2:A06, 8)```

### Sintaxe

```MEDIAACUMULADA(intervalo, [casas])```

### Parâmetros

- **intervalo** — O intervalo de entrada contendo os valores numéricos a serem utilizados no cálculo da média. Células não numéricas são ignoradas, mas mantidas vazias no resultado.

- **casas** — *(opcional)* O número de casas decimais para arredondar o resultado. Se omitido, o resultado não é arredondado.

### Exemplo
| Entrada | Fórmula | Saída |
|----------|----------|-------|
| 2 | =MEDIAACUMULADA(A2:A6) | 2 |
| 4 |  | 3 |
| 6 |  | 4 |
| 8 |  | 5 |
| 10 |  | 6 |

**Observações:**
- A função deve ser inserida como uma *fórmula de matriz* (ela se expande automaticamente no Google Sheets).  
- Valores de texto são ignorados; vírgulas em textos numéricos (por exemplo, `"1,23"`) são interpretadas como ponto decimal (`1.23`).

## TEMPODECORRIDO

- [TempoDecorrido](TempoDecorrido.md)

Calcula o tempo decorrido entre duas datas e retorna o resultado em anos, meses e dias, no formato de texto. \
A função ajusta automaticamente os valores para considerar meses e dias incompletos.

### Exemplo de uso

```TEMPODECORRIDO(A2; B2)```

### Sintaxe

```TEMPODECORRIDO(data_inicial, data_final)```

### Parâmetros

- **data_inicial** — A data de início do intervalo.

- **data_final** — A data de término do intervalo. Deve ser posterior à data inicial.

## Retorno

Uma string descritiva com o tempo decorrido entre as duas datas, por exemplo:

"2 anos, 3 meses e 5 dias" \
"1 ano e 12 dias" \
"4 meses e 2 dias"

### Exemplos
| A | B | Fórmula | Saída |
|-----|-----|----------|-------|
| 01/01/2020 | 15/03/2023 | =TEMPODECORRIDO(A2; B2) | 3 anos, 2 meses e 14 dias |
| 10/05/2022 | 25/06/2022 | =TEMPODECORRIDO(A3; B3) | 1 mês e 15 dias |
| 01/01/2024 | 01/01/2025 | =TEMPODECORRIDO(A4; B4) | 1 ano |

**Observações:**

Se alguma das datas for inválida, a função retornará "Datas inválidas". \
Se a data final for anterior à data inicial, a função retornará "A data final deve ser maior que a data inicial.". \
O resultado é apenas textual e não pode ser usado diretamente em cálculos.