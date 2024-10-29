import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/pretypedHooks";
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";

import { getOrder, isSuccess } from "../../services/order/slice";
import { executePurchase } from "../../services/order/actions";

import styles from "./Form.module.css"

interface IFormData {
    name: string,
    phone: string,
    message?: string,
    email: string
}

const Form = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const currentOrder = useAppSelector(getOrder);
    const success = useAppSelector(isSuccess)
    const { register, handleSubmit, formState: { errors } } = useForm<IFormData>();

    useEffect(() => {
        if (success) {
            navigate('/payment', {replace: true})
        }
    }, [success])

    const returnBack = () => {
        navigate(-1)
    }


    const onSubmit: SubmitHandler<IFormData> = (data: IFormData) => {
        if (currentOrder && data) {
            const requestData = {
                ID: currentOrder.ID,
                TABLENAME: currentOrder.TABLENAME,
                PRIMARYKEY: currentOrder.PRIMARYKEY,
                PRICE: currentOrder.PRICE,
                SUMMA: currentOrder.SUMMA,
                CLIENTNAME: data.name,
                PHONE: data.phone,
                EMAIL: data.email,
                PAYMENTTYPEID: 2,
                USEDELIVERY: 0,
                DELIVERYADRESS: "",
                ISGIFT: 0,
                MSGTEXT: data.message,
                PNAME: "",
                PPHONE: "",
            }
            dispatch(executePurchase(requestData))
        }
    }

    return (
        <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
            <span>{currentOrder?.NAME}</span>
            <label>
                ФИО*
                <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Введите ФИО"
                />
                {errors.name?.type === "required" ? <span className={styles.error_text}>Поле обязательно к заполнению</span> : null}
            </label>
            <label>
                Номер телефона*
                <input
                    {...register("phone", { required: true })}
                    placeholder="+7 (999)-999-99-99"
                />
                {errors.phone?.type === "required" ? <span className={styles.error_text}>Поле обязательно к заполнению</span> : null}
            </label>
            <label>
                Сообщение
                <textarea
                    {...register("message")}
                />
            </label>
            <label>
                Почта*
                <input
                    {...register("email", { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })}
                    placeholder="abcd@efg.hi"
                />
                {errors.email?.type === "required" ? <span className={styles.error_text}>Поле обязательно к заполнению</span> : null}
                {errors.email?.type === "pattern" ? <span className={styles.error_text}>Форма не соответствует шаблону</span> : null}
            </label>

            <div className={styles.buttons_container}>
                <button onClick={returnBack}>Назад</button>
                <button type="submit">Оплатить</button>
            </div>
        </form>
    )
}

export default Form
