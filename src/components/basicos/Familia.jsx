import React from 'react'

export default function Familia(props) {
    return (
        <div>
            {/* {props.children} */}
            {React.Children.map(props.children, (children) => {
                return React.cloneElement(children, props)
            })}
            {/* {console.log(props.children)} */}
            <br />
            {props.children.map((valor) => React.cloneElement(valor, {...props})
            )}
            {/* <MembrosFamilia
                nome="Keylane"
                sobrenome="Silva">
            </MembrosFamilia>
            <MembrosFamilia
                nome="Adriana"
                {...props}>
            </MembrosFamilia>
            <MembrosFamilia
                nome="Ricardo"
                sobrenome={props.sobrenome}>
            </MembrosFamilia> */}

        </div>
    )
}
