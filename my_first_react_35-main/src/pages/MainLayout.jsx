import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div className="container mx-auto">
            <header className="flex justify-center items-center gap-x-5 py-4 mb-10">
                <div className="text-2xl font-bold">LOGO</div>

                <nav className="flex gap-x-4">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/admin">Админ-панель</NavLink>
                    <NavLink to="/quizes">Квизы</NavLink>
                    <NavLink to="/Kt2">Kt2</NavLink>
                </nav>
            </header>

            <main><Outlet /></main>

            <footer>Подвал. Все права защищены</footer>
        </div >
    )
}
