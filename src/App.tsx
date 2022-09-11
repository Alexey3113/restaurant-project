import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer, Header } from "./components"
import { paths } from "./constants/paths"
import { IPath } from "./types/types"

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Routes>
                    {paths.map((el: IPath, i: number) => (
                        <Route key={i} path={el.path} element={el.element} />
                    ))}
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
