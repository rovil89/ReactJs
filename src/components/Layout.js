import NavBar from "./NavBar";

export const Layout =({ children })=> {
    return (
        <main className="">
            <NavBar />
            {children}
        </main>
    );
};