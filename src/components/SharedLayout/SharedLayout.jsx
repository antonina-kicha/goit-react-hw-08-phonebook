import { Outlet } from "react-router-dom";
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from "react";
import { Container } from './SharedLayout.styled';




export const SharedLayout = () => {
    return (
        <Container>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </Container>
    )

}