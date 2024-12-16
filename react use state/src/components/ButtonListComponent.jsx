import React from "react";
import styles from "./ButtonListComponent.module.css";

function ButtonListComponent({ languages, selectedLanguage, onSelectLanguage }) {
    return (
        <div>
            {languages.map((language) => (
                <button key={language.id} onClick={() => onSelectLanguage(language)}>
                    {language.title}
                </button>
            ))}
        </div>
    );
}

export default ButtonListComponent;