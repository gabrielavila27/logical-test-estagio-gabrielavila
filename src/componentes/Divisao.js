import { useState } from "react"
import styles from './Divisao.module.css'

function Divisao(){

    const[valorUm, setValorUm] = useState();
    const[valorDois, setValorDois] = useState();
    const[res, setRes] = useState();
    //const [resAtual, setAtualRes] = useState(); 
    let resAtual;


    function divisao(){
        setRes(valorUm/valorDois)
        resAtual = res;
        setInterval(() => {
            while(res < valorUm){
                resAtual += resAtual;
                setRes(resAtual)
            } 
        },  (valorDois * 1000))
        setValorUm('');
        setValorDois('');
            
        }

    return(
        <div className={styles.divContainer}>

            <label className={styles.labelInput}>Valor</label>

            <input className={styles.input} type="number" placeholder="Digite um valor" onChange={(e) => setValorUm(e.target.value)} value={valorUm}></input>

            <label className={styles.labelInput}>Divisor</label>

            <input className={styles.input} type="number" placeholder="Digite um valor" onChange={(i) => setValorDois(i.target.value)} value={valorDois}></input>

            <button className={styles.botao} onClick={divisao}>Enviar</button>

            {res &&(
                <div className={styles.divResposta}>

                    <p className={styles.pResposta}>Resultado = {res}</p>
                </div>
            )}

        </div>
    )
}

export default Divisao