import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';

function Botao(){
        const [count, setCount] = useState(0);

        useEffect(() => {
            document.title = `você clicou ${count} vezes`;

        });

        return (
            <div>
                <p>você clicou {count} vezes</p>
                <button onClick={() => setCount(count + 1 )}>
                     Clique
                </button>
            </div>
        );
}

export default Botao;
