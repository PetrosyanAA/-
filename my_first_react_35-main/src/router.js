import { createBrowserRouter } from "react-router";
import IndexPage from "./pages/IndexPage";
import AdminPage from "./pages/AdminPage";
import MainLayout from "./pages/MainLayout";
import QuizesPage from "./pages/QuizesPage";
import CreateQuizPage from "./pages/CreateQuizPage";
import PlayQuizPage from "./pages/PlayQuizPage";
import Kt2 from "./components/kt2/Kt2";

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: IndexPage
            },
            {
                path: 'admin',
                Component: AdminPage
            },
            {
                path: 'quizes',
                Component: QuizesPage
            },
            {
                path: 'quizes/create',
                Component: CreateQuizPage
            },
            {
                path: 'quizes/:id',
                Component: PlayQuizPage
            },
            {
                path: 'Kt2',
                Component: Kt2
            }
        ]
    }
]);