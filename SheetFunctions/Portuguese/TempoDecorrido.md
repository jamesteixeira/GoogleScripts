## TEMPODECORRIDO

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

[Voltar para SheetFunctions/Portuguese/README.md](README.md)