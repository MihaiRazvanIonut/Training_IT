import React, { useState } from "react";
import PassionCard from "../../components/PassionCard/PassionCard";
import { my_passions } from "../../data/passions";
import styles from "./Home.module.scss"

function Home() {

    const [number, setNumber] = useState(0);

    function Add() {

        setNumber(number + 1);
        console.log(number);

    }


    return (

        <div>
            <div className={styles.cardsContainer}>

                {my_passions.map((pass) => {


                    return <PassionCard passion={pass} />


                })}

            </div>
            <button onClick={() => Add()}>click me</button>
            <p>{number}</p>



        </div>
    )
}

export default Home