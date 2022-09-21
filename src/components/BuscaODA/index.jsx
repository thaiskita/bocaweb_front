export const BuscaODA = ({busca, buscaODA}) =>{
    return (
        <div className = 'busca'>
            <input id="usr"
            name='busca'
            type='text'
            value={busca}
            placeholder='O que deseja buscar?'
            onChange={buscaODA}
            />
        </div>
    )
}