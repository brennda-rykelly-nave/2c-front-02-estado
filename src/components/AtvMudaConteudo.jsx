import { useState } from "react";

/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/
export default function AtvMudaConteudo(){
    const [conteudo, setConteudo] = useState(null);

return(
    <div>
    <div style={{display: 'flex', gap: '10px' }}>
        <button onClick={() => setConteud('construcao')}>botão 1</button>
        <button onClick={() => setConteud('quadrados')}>botão 2</button>
    </div>
    <div style={{marginTop: '20px'}}>
    {conteudo === 'construcao' && (<p>Página em construção</p>)}
    </div>
    {conteudo === 'quadrados' && (
    <div style={{display: 'flex', gap: '10px' }}>
    <div style={{ width: '200px', height: '200px', backgroundColor: 'purple'}}></div>
    <div style={{ width: '200px', height: '200px', backgroundColor: 'teal'}}></div>
    <div style={{ width: '200px', height: '200px', backgroundColor: 'orange'}}></div>
    </div>
    )}
    </div>
 );
}