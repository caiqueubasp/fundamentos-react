import alunos from "../../data/alunos"

const ListaAlunos = (props)=>{

    const alunosList = alunos.map((aluno, i) => {
        return(
            <li key={i}>
                {aluno.id} {aluno.nome} {aluno.nota}
            </li>
        )
    })

    const styleList = {
        listStyle: "none"
    }

    return(
        <div>
            <ul style={styleList}>
                {alunosList}
            </ul>
        </div>
    )
}

export default ListaAlunos;