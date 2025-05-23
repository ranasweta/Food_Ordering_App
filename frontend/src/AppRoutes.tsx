
import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layout/layout"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout>HOME PAGE</Layout>} />
            <Route path="/user-profile" element={<Layout>USER PROFILE PAGE</Layout>} />
            <Route path="*" element={<Navigate to="/" />} />
            {/* this is for the 404 page */}
        </Routes>
    )
}
