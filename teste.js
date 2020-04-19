
const lancamentos = [
  {
    "id": "c171e5f5-cf53-4eaf-9714-b6f44eec17ef",
    "title": "Salario",
    "value": "5",
    "type": "T"
  },
  {
    "id": "8af6797c-1ce0-447d-a53e-3f7ff8b247a5",
    "title": "Salario",
    "value": "5",
    "type": "T"
  },
  {
    "id": "2f5a4a16-65f6-48e4-85a2-8e62d0ef8ab1",
    "title": "Salario",
    "value": "1",
    "type": "income"
  },
  {
    "id": "7a30a12d-6041-4b08-8348-ae0fb0ca18ff",
    "title": "Salario",
    "value": "10",
    "type": "income"
  },
  {
    "id": "f2f1e929-3676-4c87-aacd-1638b6ae328d",
    "title": "Salario",
    "value": "1",
    "type": "income"
  }
]



const result =  lancamentos.reduce(( agrupador , lancamento) => {
  lancamento.type === "income" ? agrupador.a +=  parseInt(lancamento.value) : agrupador.b += parseInt(lancamento.value)

  return agrupador
},{
  a: 0,
  b: 0,
})
console.log(result)
