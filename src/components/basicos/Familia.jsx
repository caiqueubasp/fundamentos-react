import { cloneElement } from "react"

const Familia = (props) => {


    return (
        <div className="Familia" >

            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }


        </div>
    )
}

export default Familia