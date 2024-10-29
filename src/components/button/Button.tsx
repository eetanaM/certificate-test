import { useNavigate } from "react-router"
import { useAppSelector } from "../../hooks/pretypedHooks"

import { getOrder } from "../../services/order/slice"

import styles from "./Button.module.css"

const Button = ():React.JSX.Element => {
    const navigate = useNavigate();
    const currentOrder = useAppSelector(getOrder);
    const SUMMA = currentOrder && currentOrder.SUMMA

    const handleClick = () => {
        navigate("/purchase")
    }

    return (
        <>
            {SUMMA && <div className={styles.container}>
                <span className={styles.price}>К оплате: {+SUMMA} руб.</span>
                <button onClick={handleClick}>Оформить</button>
            </div>}
        </>
    )
}

export default Button
