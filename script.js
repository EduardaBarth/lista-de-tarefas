const tarefas = [] // []-> array

function add(){
    //const input = document.querySelector("input");
    //const tarefa = input.value
    //if (tarefa) { // se o campo está vazio ele já dá falso
    //    tarefas.push(tarefa) //adiciona nova tarefa
    //    input.value = "" //barra do input "limpa"
    //    render()
    //}
    //outro jeito de fazer
    const input = document.querySelector("input")
    const tarefa = input.value
    if (!tarefa) {
        alert("escreva uma tarefa")
        return
    }
    tarefas.push(tarefa) //adiciona nova tarefa
    input.value = "" //barra do input "limpa"
    
    render()
}

function render(){ 
    
    const ol = document.querySelector("ol")
    ol.innerHTML = null // o conteúdo html dentro da ol é nulo
    tarefas.forEach(function(tarefa){
        const li = document.createElement("li") //criando um novo li
        li.innerText = tarefa //tradução: o texto dentro de li é a tarefa(o valor dentro do input)
        
        const input2 = document.createElement("input")
        li.appendChild(input2)

        const editar = document.createElement("button")
        editar.innerText="editar"
        li.appendChild(editar)
        editar.addEventListener("click", function(){
            const tarefaNova = input2.value
            const index = tarefas.indexOf(tarefa);
            if (index !== -1) {
                tarefas[index] = tarefaNova;
            }
            render()
        })

        const excluir = document.createElement("button")
        excluir.innerText = "apagar"
        li.appendChild(excluir)
        excluir.addEventListener("click", function(){
            const apagar = tarefas.indexOf(tarefa)
            tarefas.splice(apagar,1)
            render()
        });

        ol.appendChild(li)// fazer a tarefa aparecer dentro da lista
        
    })
}
render()
