import { cadastrar, consultaAPI, filtrar } from './funcionarios/funcionarios.js'

// Referências do DOM HTML

const btnIncluir = document.getElementById('btnIncluir')
const inpFiltrarNome = document.getElementById('inpFiltrarNome')
const tbodyList = document.getElementById('tbodyList')

const modalProdutos = document.getElementById('modalProdutos')
const btnFecharModal = document.getElementById('btnFecharModal')
const btnIncluirModal = document.getElementById('btnIncluirModal')
const inputNome= document.getElementById('inputNome')
const inputDep= document.getElementById('inputDep')
const inputFunc= document.getElementById('inputFunc')
const inputSal= document.getElementById('inputSal')


// Lógica

let response = await consultaAPI();

btnIncluir.onclick = ()=>{
    modalProdutos.showModal()
}

btnFecharModal.onclick = ()=>{
    modalProdutos.close()
}

btnIncluirModal.onclick = ()=>{
    let dados = {'nome': inputNome.value,
    'departamento': inputDep.value,
    'funcao': inputFunc.value,
    'salario': inputSal.value
    }

    cadastrar(dados)
}

inpFiltrarNome.onchange = ()=>{
    filtrar(inpFiltrarNome.value, response)
}


tbodyList.addEventListener('click', (event) => {
    const target = event.target

    if (target.tagName === 'IMG') { 
        const row = target.closest('tr');  
        
        const dados = {
            id: row.cells[0].innerHTML,
            nome: row.cells[1].innerHTML,
            dep: row.cells[2].innerHTML,
            funcao: row.cells[3].innerHTML,
            sal: row.cells[4].innerHTML
            
        }     
        console.log(dados);
          
        if (target.id == 'btnTrash') {
            exibirDadosModal(dados , 1)
            
        }
       
        else if (target.id == 'btnEdit') {
            exibirDadosModal(dados, 2)
        }
    }
})