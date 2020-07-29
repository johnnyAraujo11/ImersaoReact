import React from 'react'


function ButtonLink(props){
    // props pega várias coisas do componente
    console.log(props)
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}


export default ButtonLink;