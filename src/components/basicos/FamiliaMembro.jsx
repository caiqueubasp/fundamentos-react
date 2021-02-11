
const FamiliaMembro = (props) => {


    return (
        <div className="FamiliaMembro" >
            <span>{props.nome}  <strong>{props.sobrenome}</strong></span>
        </div>
    )
}

export default FamiliaMembro