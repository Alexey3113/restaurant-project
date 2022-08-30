import AboutPage from "../pages/about_us"
import DeliveryPage from "../pages/delivery"
import MainPage from "../pages/main"
import { IPath } from "../types/types"

export const paths: IPath[] = [{ element: <MainPage />, path: "/" }, 
{ element: <DeliveryPage />, path: "/delivery" },
{ element: <AboutPage />, path: "/about" }
]
