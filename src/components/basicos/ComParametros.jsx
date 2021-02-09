const ComParametros = (props) => {
    const status = props.nota >= 7 ? "Aprovado!" : "Reprovado!"

    return(
        <div>
            <h1>{ props.titulo }</h1>
            <p>
                <strong> { props.aluno } </strong>
                tem nota 
                <strong> { props.nota } </strong>
                e foi 
                <strong> { status } </strong>
            </p>
        </div>

    )
}

export default ComParametros;