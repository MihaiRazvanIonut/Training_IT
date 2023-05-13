import React from "react";
import { my_passions } from "../../data/passions";
import styles from './Home.module.scss';

function Home(){

    return <div className={styles.container}>

    <img src={my_passions[0].image} alt={"Passion Image"} className={styles.image}/>
    <div className={styles.infoContainer}>

        <div className={styles.titleContainer}>

        <h1 className={styles.title}>{my_passions[0].title}</h1>
        <h4 className={styles.importance}>{my_passions[0].importance}</h4>

        </div>

        <p className={styles.descriptions}>{my_passions[0].descriptions}</p>

    </div>

    </div>

}

export default Home