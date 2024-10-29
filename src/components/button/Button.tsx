import { useNavigate } from "react-router"
import { useAppSelector } from "../../hooks/pretypedHooks"
import { useEffect, useRef } from "react"

import { getOrder } from "../../services/order/slice"

import styles from "./Button.module.css"

const Button = ():React.JSX.Element => {
    const navigate = useNavigate();
    const buttonRef = useRef<HTMLDivElement>(null)
    const currentOrder = useAppSelector(getOrder);
    const SUMMA = currentOrder && currentOrder.SUMMA

    useEffect(() => {
        if(buttonRef.current) {
            buttonRef.current.scrollIntoView({behavior: "smooth"})
        }
    }, [currentOrder, buttonRef])

    const handleClick = () => {
        navigate("/purchase")
    }

    return (
        <>
            {SUMMA && <div className={styles.container} ref={buttonRef}>
                <span className={styles.price}>К оплате: {+SUMMA} руб.</span>
                <button onClick={handleClick}>Оформить</button>
            </div>}
        </>
    )
}

export default Button
