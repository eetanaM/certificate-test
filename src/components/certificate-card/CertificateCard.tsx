import { ICertificateCardProps } from "../../utils/types/type"
import { useAppSelector } from "../../hooks/pretypedHooks"

import { getOrder } from "../../services/order/slice"

import styles from "./CertificateCard.module.css"

const CertificateCard = ({ certificate, setOrderHandler, resetOrderHandler }: ICertificateCardProps):React.JSX.Element => {
    const currentOrder = useAppSelector(getOrder);
    const isActive = currentOrder?.ID === certificate.ID ? true : false

    const handleClick = () => {
        if (isActive) {
            resetOrderHandler()
        } else {
            setOrderHandler(certificate)
        }
    }
    return (
        <>
            <div
                className={isActive
                    ? `${styles.card_container} ${styles.active}`
                    : styles.card_container}
                onClick={handleClick}
            >
                <h2>{certificate.NAME}</h2>
                <span
                    className={certificate.DISCOUNT ? `${styles.card_price} ${styles.discounted}` : styles.card_price}
                >
                    Стоимость: {+certificate.PRICE} руб.
                </span>
                {
                    certificate.DISCOUNT
                    ? <span className={styles.card_discount}>Скидка: {+certificate.DISCOUNT} %</span>
                    : null
                }
                <span className={styles.card_discounted_price}>Стоимость с учётом скидки: <br />{+certificate.SUMMA} руб.</span>
            </div>
        </>
    )
}

export default CertificateCard
