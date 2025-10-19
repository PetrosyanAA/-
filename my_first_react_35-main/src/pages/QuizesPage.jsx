import { NavLink } from "react-router"

export default function QuizesPage() {

    const quizes = JSON.parse(localStorage.getItem('quizes'))

    return (
        <div className="flex flex-col justify-center items-center gap-y-4">
            {
                quizes.map(quiz => (
                    <NavLink className="text-2xl hover:text-amber-500" to={`/quizes/${quiz.id}`}>{quiz.title}</NavLink>
                ))
            }
        </div>
    )
}
