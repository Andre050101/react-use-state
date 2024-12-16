import React from "react";
import styles from "./DescriptionComponent.module.css";

function DescriptionComponent({ language }) {
    return (
        <div className={styles.description}>
            <h2>{language.title}</h2>
            <p>{language.description}</p>
        </div>
    )
}

export default DescriptionComponent;