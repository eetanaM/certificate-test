
import styles from "./Button.module.css"

const Button = ():React.JSX.Element => {
    return (
        <>
            <div className={styles.container}>
                <button>Оформить!</button>
            </div>
        </>
    )
}

export default Button
