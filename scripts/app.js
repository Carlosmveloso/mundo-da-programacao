function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

    //Inicializa um String vazia para armazenar os Dados
    let resultados = "";
    
    //para cada dado dentro da lista de dados
    //Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        //Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
                        <h2>${dado.titulo}</h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Aprender mais !</a>
                    </div>
        `
    };
    //Atribui os resultados gerados à seção HTML 
    section.innerHTML = resultados  
}






