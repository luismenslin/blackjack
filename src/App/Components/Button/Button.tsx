import styles from "./Button.module.scss"

interface ButtonProps {
    label: string
    onClick: () => void
}

const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button