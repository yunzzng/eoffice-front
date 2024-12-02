import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

interface NavigateButtonsProps {
    label: string;
    onClick: () => {};
}

export const NavigateButtons : React.FC<NavigateButtonsProps> = ({label, onClick}) => {

    return (
        <button onClick={onClick} className={styles.button}>
            {label}
        </button>
    )
}
 