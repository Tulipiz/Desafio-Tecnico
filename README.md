# TESTE PROGRAMAÇÃO DESENVOLVEDOR JUNIOR

**Instruções:**

1. Leia atentamente os requisitos de cada tarefa antes de iniciar.
2. Utilize JavaScript ou TypeScript conforme indicado nas tarefas.
3. Escolha entre Vue2 ou React para a parte de framework.
4. Não utilize ajuda de IA para realizar as tarefas.

---

### **Parte 1: Lógica de Programação - JavaScript/TypeScript**

**Instruções:**

Implemente as funções a seguir utilizando JavaScript ou TypeScript. Utilize loops, manipulação de objetos e arrays conforme necessário.

---

### **Tarefa 1: Manipulação de Arrays e Objetos**

Crie uma função chamada `transformData` que recebe um array de objetos representando usuários e retorna um novo array com os seguintes critérios:

1. Cada objeto do array original possui as propriedades: `id`, `name`, `age`, `isActive`.
2. A função deve retornar um novo array contendo apenas os usuários ativos (`isActive: true`).
3. Adicionalmente, o novo array deve conter apenas as propriedades `id` e `name`.
4. Ordene o array final por `name` em ordem alfabética.

**Exemplo de entrada:**

```jsx

const users = [
  { id: 1, name: 'Alice', age: 25, isActive: true },
  { id: 2, name: 'Bob', age: 30, isActive: false },
  { id: 3, name: 'Charlie', age: 22, isActive: true }
];
```

**Exemplo de saída esperada:**

```jsx

[
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' }
]
```

---

### **Tarefa 2: Função Assíncrona**

Implemente uma função assíncrona chamada `fetchUserData` que faz uma chamada para uma API REST fictícia (simule a chamada usando `fetch` ou `axios`).

1. A função deve fazer uma requisição `GET` para a URL `https://jsonplaceholder.typicode.com/users`.
2. Após obter os dados, filtre os usuários cujo `username` comece com a letra "C".
3. Retorne uma promessa que resolve com esses dados filtrados.

**Dica:** Use `async/await` para simplificar o código assíncrono

---

### **Tarefa 3: Contagem de Ocorrências**

Crie uma função chamada `countOccurrences` que recebe um array de strings e retorna um objeto onde as chaves são as strings do array e os valores são o número de vezes que cada string aparece no array.

**Exemplo de entrada:**

```jsx

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
```

**Exemplo de saída esperada:**

```jsx

{
  apple: 3,
  banana: 2,
  orange: 1
}
```

---

### **Tarefa 4: Agrupamento de Objetos**

Implemente uma função chamada `groupByCategory` que recebe um array de objetos, onde cada objeto representa um item com uma `category`. A função deve retornar um objeto onde as chaves são as categorias e os valores são arrays contendo os itens correspondentes a cada categoria.

**Exemplo de entrada:**

```jsx

const items = [
  { name: 'apple', category: 'fruit' },
  { name: 'carrot', category: 'vegetable' },
  { name: 'banana', category: 'fruit' },
  { name: 'broccoli', category: 'vegetable' }
];

```

**Exemplo de saída esperada:**

```jsx

{
  fruit: [
    { name: 'apple', category: 'fruit' },
    { name: 'banana', category: 'fruit' }
  ],
  vegetable: [
    { name: 'carrot', category: 'vegetable' },
    { name: 'broccoli', category: 'vegetable' }
  ]
}

```

---

### **Tarefa 5: Mesclar Arrays de Objetos**

Implemente uma função chamada `mergeArrays` que recebe dois arrays de objetos e mescla os objetos que têm a mesma chave `id`. O resultado deve ser um novo array de objetos onde cada objeto contém todas as propriedades dos objetos com o mesmo `id`. Se uma propriedade for compartilhada, o valor do segundo array deve sobrescrever o do primeiro.

**Exemplo de entrada:**

```jsx

const array1 = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 }
];

const array2 = [
  { id: 1, age: 26, email: 'alice@example.com' },
  { id: 3, name: 'Charlie', age: 22 }
];
```

**Exemplo de saída esperada:**

```jsx

[
  { id: 1, name: 'Alice', age: 26, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 22 }
]

```

---

### **Parte 2: Familiaridade com Frameworks (Vue2 ou React)**

**Instruções:**

Escolha uma das opções abaixo para implementar as tarefas.

---

### **Opção A: Vue2**

### **Tarefa 1: Componente de Lista de Tarefas**

Implemente um componente Vue2 chamado `TaskList` que exibe uma lista de tarefas. Cada tarefa tem um nome e um status de conclusão (concluída ou não).

1. O componente deve permitir adicionar novas tarefas.
2. Cada tarefa deve ter um botão para marcar como concluída ou não concluída.
3. Utilize o sistema de `props` e `emit` para comunicar as mudanças entre componentes.
4. Adicione um botão para filtrar as tarefas concluídas.

---

### **Opção B: React**

### **Tarefa 1: Componente de Lista de Tarefas**

Implemente um componente React chamado `TaskList` que exibe uma lista de tarefas. Cada tarefa tem um nome e um status de conclusão (concluída ou não).

1. O componente deve permitir adicionar novas tarefas.
2. Cada tarefa deve ter um botão para marcar como concluída ou não concluída.
3. Utilize o hook `useState` para gerenciar o estado das tarefas.
4. Adicione um botão para filtrar as tarefas concluídas.
