import funcionarios from '../../databases/banco.js'

// Referência do DOM HTML

const tbodyList = document.getElementById('tbodyList')


// Lógica

export async function consultaAPI() {
    const response = await funcionarios
    atualizarTabela(response.banco)
    return response.banco
}

export function atualizarTabela(dados) {
    let rows= ''
    console.log(dados)
    
    for (let i = 0; i < dados.length; i++) {
        rows += `<tr>
                    <td>${dados[i].id}</td>
                    <td>${dados[i].nome}</td>
                    <td>${dados[i].departamento}</td>
                    <td>${dados[i].funcao}</td>
                    <td>${dados[i].salario}</td>
                    <td>
                        Apagar
                        Editar
                    </td>
                </tr>`
    }
  
    tbodyList.innerHTML = rows
}