# Sistema de Controle de Funcionários - Website

Este repositório contém o código-fonte de um **sistema web para controle de funcionários**, desenvolvido como parte de um projeto para uma disciplina da faculdade. O sistema permite gerenciar informações sobre funcionários, incluindo nome, departamento, função e salário, e interage com uma API para persistir os dados no banco de dados.

## Funcionalidades

O sistema web inclui as seguintes funcionalidades:

- **Visualização de Funcionários**: Exibe uma tabela com os dados dos funcionários cadastrados.
- **Adicionar Funcionário**: Permite incluir novos funcionários na tabela. Ao clicar no botão "Incluir", uma modal é exibida solicitando as informações de:
  - Nome
  - Departamento
  - Função
  - Salário
- **Persistência de Dados**: Quando um funcionário é adicionado, os dados são enviados a um banco de dados via API utilizando **Axios**.
- **Alerta de Sucesso**: Após a inclusão de um funcionário, um alerta do **SweetAlert2** é exibido informando que a operação foi realizada com sucesso.
- **Filtro de Funcionários**: Possui um campo de input para buscar e filtrar funcionários pelo nome.
- **Excluir Funcionário**: Cada linha da tabela de funcionários possui um botão de lixeira, permitindo excluir um funcionário. Ao clicar no botão, um alerta do **SweetAlert2** é exibido, solicitando confirmação para a exclusão do registro.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página web.
- **CSS**: Estilização do layout da página.
- **JavaScript**: Funcionalidades dinâmicas, como inclusão, exclusão e filtro de funcionários.
- **Axios**: Comunicação com a API para enviar e receber dados do banco de dados.
- **SweetAlert2**: Biblioteca para exibição de alertas interativos e modais.
