export default function CreateDirectQuestion({ question, editQuestion }) {
    return (

        <div>
            <label>
                <p>Введите вопрос</p>
                <input value={question.question} onInput={(e) => editQuestion(question.id, e.target.value, 'question')} type="text" placeholder="Вопрос" />
            </label>
            <label>
                <p>Введите правильный ответ</p>
                <input value={question.correctAnswer} onInput={(e) => editQuestion(question.id, e.target.value, 'correctAnswer')} type="text" placeholder="Ответ" />
            </label>
        </div>

    )
}
