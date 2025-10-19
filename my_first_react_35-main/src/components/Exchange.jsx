import { useEffect, useState } from "react"

export default function Exchange() {

    const [summa, setSumma] = useState(0)
    const [currency, setCurrency] = useState('$')
    const [result, setResult] = useState(null)

    useEffect(() => {
        if (currency === '$') {
            setResult((summa / 90).toFixed(2))
        } else if (currency === 'euro') {
            setResult((summa / 101).toFixed(2))
        }

    }, [summa, currency])

    return (
        <div>
            <input value={summa} onInput={(e) => setSumma(e.target.value)} type="number" placeholder="Введите сумму обмена" />
            <select onChange={(e) => setCurrency(e.target.value)}>
                <option value="$">$</option>
                <option value="euro">Euro</option>
            </select>
            <h3>Вы получите</h3>
            <p>{result}</p>
        </div>

    )
}