const NumeroAleatorio = (props) => {
    
    const randomNum = (min, max) => {
        return (
         Math.floor(Math.random() * (max - min) + min)
        )
    }

    return(
        <p>
            O número aleatório é... 
            <strong>{ randomNum(props.min, props.max) }</strong>
        </p>
    )
}

export default NumeroAleatorio;