import { ICertificateCardProps } from "../../utils/types/type"

const CertificateCard = ({ NAME, DESCRIPTION, PRICE }: ICertificateCardProps):React.JSX.Element => {
    return (
        <>
            <div>
                <h3>{NAME}</h3>
                <p>{DESCRIPTION ? DESCRIPTION : "Нет описания"}</p>
                <span>{PRICE}</span>
            </div>
        </>
    )
}

export default CertificateCard
