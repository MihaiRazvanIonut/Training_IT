import React from "react";
import styles from "./PassionCard.module.scss";

function PassionCard(props) {
    console.log(props);
    const { passion } = props;
    const { image, title, importance, descriptions } = passion;
    return (

        <div className={styles.container}>

            <img src={passion.image} alt={"Passion"} className={styles.image} />
            <div className={styles.infoContainer}>

                <div className={styles.titleContainer}>

                    <h1 className={styles.title}>{passion.title}</h1>
                    <h4 className={styles.importance}>{passion.importance}</h4>

                </div>

                <p className={styles.descriptions}>{passion.descriptions}</p>

            </div>

        </div>

    )

}


export default PassionCard;