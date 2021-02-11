import produtos from "../../data/produtos";

const TabelaProdutos = () => {

    const idProdutos = produtos.map((produto, i) => {
        return (
            <li key={i}>
                {produto.id}
            </li>
        )
    })

    const nomeProdutos = produtos.map((produto, i) => {
        return(
            <li key={i}>
                {produto.nome}
            </li>
        )
    })

    const precoProdutos = produtos.map((produto, i) => {
        return(
            <li key={i}>
               R$ {produto.preco}
            </li>
        )
    })

    const tableStyle = {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center"
    }

    const styleList = {
        listStyle: "none",
        textAlign: "center"
    }

    const styleTableItem = {
        backgroundColor: "#ddd",
        textAlign: "center",
    }

    return (
        <div style={tableStyle}>
            <div style={styleTableItem}>
                <h4>ID Produtos</h4>
                <ul style={styleList}>
                    {idProdutos}
                </ul>
            </div>

            <div style={styleTableItem}>
            <h4>Nome Produtos</h4>
                <ul style={styleList}>
                    {nomeProdutos}
                </ul>
            </div>

            <div style={styleTableItem}>
            <h4>Preço Produtos</h4>
                <ul style={styleList}>
                    {precoProdutos}
                </ul>
            </div>

        </div>
    )
}

export default TabelaProdutos