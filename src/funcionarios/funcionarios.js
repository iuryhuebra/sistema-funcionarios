import funcionarios from '../../databases/banco.js'
import { api } from '../../services/api.js'

// Referência do DOM HTML

const tbodyList = document.getElementById('tbodyList')
const modalProdutos = document.getElementById('modalProdutos')
const inputId= document.getElementById('inputId')
const inputNome= document.getElementById('inputNome')
const inputDep= document.getElementById('inputDep')
const inputFunc= document.getElementById('inputFunc')
const inputSal= document.getElementById('inputSal')

// Lógica

export async function consultaAPI() {
    try {
        const response = await api.get('listfunc')
        atualizarTabela(response.data.result)
        return response.data.result
        
    } catch (error) { 
        console.log({'MSG':error})
        
    }
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
                            <img id="btnTrash" src="../assets/trash.png" class="icons">
                            <img id="btnEdit" src="../assets/edit2.png" class="icons">
                    </td>
                </tr>`
    }
  
    tbodyList.innerHTML = rows
}

export function filtrar(nomeBusca, response){
    const produtosFiltrados = response.filter(funcionario => 
        funcionario.nome.toLowerCase().includes(nomeBusca.toLowerCase())
    )
    atualizarTabela(produtosFiltrados)
}

export async function cadastrar(dados){
    try {
        const response = await api.post('createfunc', dados)
        if (response.status == 201){
            modalProdutos.close()
            Swal.fire({
                title: "Cadastro efetuado com sucesso",
                icon: "success"
            })
            consultaAPI()
            limparModal()
        }
        
    } catch (error) {
        console.log({'MSG':error})
    }
}

function limparModal() {
    inputNome.value = ''
    inputDep.value = ''
    inputFunc.value = ''
    inputSal.value = ''
}

export async function deletar(id) {
    try {
        Swal.fire({
            title: 'Deseja excluir o funcionário?',
            showDenyButton: true,
            confirmButtonText: 'Sim',
            denyButtonText: 'Não',
            customClass: {
                actions: 'my-actions',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await api.delete(`func/${id}`)
                console.log(response);
                if(response.status == 200){
                    consultaAPI()
                }
                Swal.fire('Excluído com sucesso!', '', 'success')
            }
          })
        
    } catch (error) {
        console.log({'MSG':error})
    }

}

export function exibirDadosModal(dados) {
    
    inputId.value = dados.id
    inputNome.value = dados.nome
    inputDep.value = dados.dep
    inputFunc.value = dados.funcao
    inputSal.value = dados.sal

    modalProdutos.showModal()
}

export function pegarDadosModal() {
    const dados = {
        id: inputId.value,
        nome: inputNome.value,
        departamento: inputDep.value,
        funcao: inputFunc.value,
        salario: inputSal.value
    }     

    return dados
}

export async function alterar(dados) {
    try {
        const response = await api.put(`func/${dados.id}`, dados)
        if (response.status == 201){
            Swal.fire('Alterado com sucesso!', '', 'success')
        }

    } catch (error) {
        console.log({'MSG':error}) 
    }
    modalProdutos.close()
    limparModal()
    consultaAPI()
}