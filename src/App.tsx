import { useAppDispatch, useAppSelector } from './hooks/pretypedHooks';
import { useEffect } from 'react';

import { getCertificates } from './services/certificates/actions';
import { getAllCertificates } from './services/certificates/slice';

import './App.css'
import CertificateCard from './components/certificate-card/CertificateCard';

function App(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const certificates = useAppSelector(getAllCertificates)
  console.log(certificates)

  useEffect(() => {
    dispatch(getCertificates())
  }, [])

  const certificatesToRender = certificates.map(certificate => {
    return (
      <CertificateCard NAME={certificate.NAME} PRICE={certificate.PRICE} DESCRIPTION={certificate.DESCRIPTION} key={certificate.ID}/>
    )
  })

  return (
    <>
      {certificatesToRender}
    </>
  )
}

export default App
