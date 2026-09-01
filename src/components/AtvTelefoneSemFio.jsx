/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/
import React, { useState } from 'react';
    const [v, sV] = useState;
    const [t1, sT1] = useState(''), [ t2, sT2] = useState('');

    return(
        <div>
        <div onClick={() => sV1(1)}>botão 1
        <div onClick={() => sV1(2)}>botão 2
    </div>
        {v === 1 && 
        <div>
        <p>{t2}</p>
        <input value={t1} onChange={e => sT1(e.target.value>)}>
        </div>}
        {v === 1 && 
        <div>
        <p>{t2}</p>
        <input value={t1} onChange={e => sT1(e.target.value>)}>
        </div>}
        
    )