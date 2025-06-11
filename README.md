## Carrinho de Compras

O **Carrinho de Compras** é um projeto web interativo que simula a adição de produtos a um carrinho virtual. Ele permite calcular automaticamente o valor total com base na quantidade e no item selecionado.

## Funcionalidades

Utilizando este projeto, você pode:

- Selecionar um produto com preço fixo (Fone de Ouvido, Celular ou Oculus VR);
- Informar a quantidade desejada;
- Adicionar os itens ao carrinho, visualizando cada item e o valor correspondente;
- Limpar o carrinho e zerar o total com um clique.

**Exemplo prático:**

Input: 2 unidades de "Fone de ouvido - R$100"  
Output:  
- Lista: `2x Fone de ouvido R$100`  
- Total: `R$1600` (supondo um celular já existente no carrinho)

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (manipulação do DOM)
- Google Fonts (Inter, Chakra Petch)

## Autores

Codado por Lucas C.  
Baseado em exercícios e desafios do curso da Alura — consulte o curso [aqui](https://cursos.alura.com.br/course/logica-programacao-praticando-desafios).

---

**Nota:** Embora o projeto funcione corretamente, há pontos que podem ser refatorados:
- Evitar a repetição de código nas condições do `adicionar()`;
- Melhorar a estrutura e controle do array `numeros`;
- Isolar melhor a lógica de soma e renderização.

