import { useState, useEffect } from "react"

export default function Kt2() {

    const [data, setData] = useState([
        { id: 1, name: 'Велосипед', price: 1000, count: 1 },
        { id: 2, name: 'Самокат', price: 700, count: 1 },
        { id: 3, name: 'Ролики', price: 1300, count: 2 },
        { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
    ]) 

    // Функция добавления нового товара
    function addNewProduct() {
        const input = prompt('Добавить товар (с названием и ценой)', 'Велосипед 1000')
        
        if (input && input.trim()) {
            const parts = input.trim().split(' ')
            if (parts.length >= 2) {
                const name = parts.slice(0, -1).join(' ')
                const price = parseInt(parts[parts.length - 1])
                
                if (!isNaN(price) && price > 0) {
                    const newProduct = {
                        id: Date.now(),
                        name: name,
                        price: price,
                        count: 1
                    }
                    setData([...data, newProduct])
                } else {
                    alert('Цена должна быть числом больше 0')
                }
            } else {
                alert('Введите название и цену через пробел')
            }
        }
    }

    // Функция изменения количества товара
    function changeCount(id, delta) {
        setData(data.map(item => {
            if (item.id === id) {
                const newCount = item.count + delta
                if (newCount >= 0 && newCount <= 25) {
                    return { ...item, count: newCount }
                }
            }
            return item
        }))
    }

    // Функция удаления товара
    function removeProduct(id) {
        setData(data.filter(item => item.id !== id))
    }

    // Обработчик двойного клика
    function handleDoubleClick(id) {
        removeProduct(id)
    }

    // Проверка и удаление товаров с count = 0
    useEffect(() => {
        const hasZeroCount = data.some(item => item.count === 0)
        if (hasZeroCount) {
            setData(data.filter(item => item.count > 0))
        }
    }, [data])

    return (
        <div className="p-8 bg-white min-h-screen">
            <button 
                className="block mx-auto mb-8 px-6 py-3 border border-black bg-white text-black text-center hover:bg-gray-50"
                onClick={addNewProduct}
            >
                Добавить новый товар
            </button>
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
                {
                    data.map(card => (
                        <div 
                            key={card.id}
                            className="border border-black bg-white p-4 text-center cursor-pointer"
                            onDoubleClick={() => handleDoubleClick(card.id)}
                        >
                            <p className="text-lg font-bold mb-2">{card.name}</p>
                            <p className="mb-3">Price: {card.price}</p>
                            <div className="flex justify-center items-center gap-2">
                                <button 
                                    className="w-8 h-8 border border-black bg-white text-black flex items-center justify-center hover:bg-gray-50"
                                    onClick={() => changeCount(card.id, -1)}
                                >
                                    -
                                </button>
                                <span className="mx-2">{card.count}</span>
                                <button 
                                    className="w-8 h-8 border border-black bg-white text-black flex items-center justify-center hover:bg-gray-50"
                                    onClick={() => changeCount(card.id, 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}