export const ListaODA = ({_id, nome, usuario, descricao, data_inclusao, palavras_chave}) =>{
    return (
        <div id="lista" key={_id}>
              <h1 id="nome"> Nome: {nome}</h1>
              <p id="usuario"> <span className="bold">Cadastrado por: </span>{usuario} </p>
              <div id="desc">
                <p id="descricao"> <span className="bold">Descrição: </span>{descricao} </p> 
                <p id="data_inclusao"> <span className="bold">Data de inclusão: </span>{data_inclusao}</p>
                <p id="palavras_chave"> <span className="bold">Palavras-chave: </span>{palavras_chave}</p>
              </div>
            </div>
    )
}