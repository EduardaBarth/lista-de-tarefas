const tarefas = ['html', 'css', 'js'] // []-> array

function add(){
    //const input = document.querySelector("input");
    //const tarefa = input.value
    //if (tarefa) { // se o campo está vazio ele já dá falso
    //    tarefas.push(tarefa) //adiciona nova tarefa
    //    input.value = "" //barra do input "limpa"
    //    render()
    //}
    //outro jeito de fazer
    const input = document.querySelector("input");
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
    
    const ol = document.querySelector("ol");
    ol.innerHTML = null // o conteúdo html dentro da ol é nulo
    tarefas.forEach(function(tarefa){
        const li = document.createElement("li"); //criando um novo li
        li.innerText = tarefa //tradução: o texto dentro de li é a tarefa(o valor dentro do input)
        ol.appendChild(li) // fazer a tarefa aparecer dentro da lista
    })
    
}
render()
