import React, { useState, useEffect } from 'react';

export const Componente3 = () => {

    const [title, setTitle] = useState('Meu Terceiro Componente')

    //Controla quando a função precisa renderizar de novo, ele existe enquanto o componente existir
    useEffect(() => {
        console.log('Componente renderizou')
        setTitle('Texto mudou')

        //Ele desmonta quando essa tela some
        return() => {
            console.log('Componente desmontou');
        }
        //Ele roda, mas fica de olho na variável, se ela mudar a função roda de novo
    }, [title])

    return(
        <h1 className="fonte">{title}</h1>
    )
}