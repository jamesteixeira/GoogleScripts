## MEDIAACUMULADA

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

[Voltar para README](README.md)