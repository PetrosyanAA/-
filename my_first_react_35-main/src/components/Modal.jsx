import { useState } from "react"

export default function Modal({ title, text, openModalText }) {

    const [isShown, setIsShown] = useState(false)

    return (
        <div>
            <button onClick={() => setIsShown(true)}>{openModalText}</button>
            {
                isShown && (
                    <div className="modal-overlay">
                        <div className="modal-body">
                            <h2>{title} <button onClick={() => setIsShown(false)}>X</button> </h2>
                            <p>{text}</p>
                        </div>
                    </div>
                )
            }


        </div>
    )
}