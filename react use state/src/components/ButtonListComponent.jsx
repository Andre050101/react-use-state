import React from "react";
import styles from "./ButtonListComponent.module.css";

function ButtonListComponent({ languages, selectedLanguage, onSelectLanguage }) {
    return (
        <div className={styles.buttonList}>
            {languages.map((language) => (
                <button
                    key={language.id}
                    onClick={() => onSelectLanguage(language)}
                    className={
                        selectedLanguage.id === language.id
                            ? `${styles.button} ${styles.active}`
                            : styles.button
                    }>
                    {language.title}
                </button>
            ))}
        </div>
    );
}

export default ButtonListComponent;