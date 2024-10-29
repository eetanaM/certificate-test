import { useAppDispatch, useAppSelector } from "../../hooks/pretypedHooks"

import CertificateCard from "../../components/certificate-card/CertificateCard"
import Button from "../../components/button/Button"

import { getAllCertificates } from "../../services/certificates/slice"
import { getOrder, resetOrder, setOrder } from "../../services/order/slice"

import { ICertificate } from "../../utils/types/type"

import styles from "./HomePage.module.css"

const HomePage = () => {
  const dispatch = useAppDispatch();
  const certificates = useAppSelector(getAllCertificates)
  const currentOrder = useAppSelector(getOrder)

  const setCertificateToOrder = (certificate: ICertificate) => {
    dispatch(setOrder(certificate))
  }

  const resetCertificateToOrder = () => {
    dispatch(resetOrder())
  }
  const certificatesToRender = certificates.map(certificate => {
    return (
      <CertificateCard
        certificate={certificate}
        setOrderHandler={setCertificateToOrder}
        resetOrderHandler={resetCertificateToOrder}
        key={certificate.ID}
      />
    )
  })
  return (
      <>
      <div className={styles.home_page_container}>
          {certificatesToRender}
      </div>
      {
        currentOrder
        ? <Button />
        : null
      }
      </>
  )
}

export default HomePage
