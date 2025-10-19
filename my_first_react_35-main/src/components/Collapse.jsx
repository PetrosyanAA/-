import { useState } from "react"

export default function Collapse({ title, text }) {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                <h3>{title}</h3>
            </button>


            {
                isVisible && (
                    <p>{text}</p>
                )
            }

        </div>
    )
}