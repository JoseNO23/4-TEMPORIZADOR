import { useState, useEffect } from "react";
function Countdown(){
    // targetSeconds, elapsedSeconds
    let [targetSeconds, SetTargetSeconds] = useState(null);
    let [elapsedSeconds, setElapsedSeconds] = useState(0);

    function parseForm(ev){
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        SetTargetSeconds(parseInt(seconds));
    }

    useEffect(function(){
        if(targetSeconds === null) return;

        // targetSeconds tiene un valor
        setElapsedSeconds(0);

        let interval = setInterval( function() {
            console.log(elapsedSeconds)
            setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1)
        }, 1000);

        return () =>{
            clearInterval(interval);
        }
    },[targetSeconds]);

    if(elapsedSeconds >= targetSeconds && targetSeconds !== null){
        return(
            <>
                <p>
                    ¡Terminó el conteo!
                </p>
                <button onClick={() => SetTargetSeconds(null)}>Reiniciar</button>
            </>
        )
    }

    if(targetSeconds !== null){
        return(
            <p>
                Faltan {targetSeconds - elapsedSeconds} segundos
            </p>
        );
    }
    
    return(
        <>
            <p>
                ¿Cuántos segundos quieres contar?
            </p>
            <form action="#" onSubmit={ ev => parseForm(ev)} >
                <input type="number" name="seconds" />
                <button>Iniciar</button>
            </form>
        </>
    )
}
export default Countdown;