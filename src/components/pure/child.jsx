import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value
        alert(`Text in input ${text}`);
    }
    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }
    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On mouse over')}>Hola {name}</p>
            <button onClick={() => console.log('Botón 1 pulsado')}>
                Botón 1
            </button>
            <button onClick={pressButton}>
                Botón 2
            </button>
            <button onClick={() => pressButtonParams('Hello')}>
                Botón 3
            </button>
            <input 
                placeholder='Escribe un texto' 
                onFocus={() => console.log('input focus')}
                onChange={(e) => console.log('Input changed:', e.target.value)}
                onCopy={() => console.log('copied tex from input')}
                ref={messageRef}
                />
            <button onClick={() => send(messageRef.current.value)}>
                Enviar mensaje
            </button>
            <div className='mt-2'>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='escribe tu nombre'/>
                    <button type='submit'>Actualizar nombre</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
