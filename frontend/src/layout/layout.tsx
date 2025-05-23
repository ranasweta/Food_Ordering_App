import Header from "@/components/header";

type props = {
  children: React.ReactNode;
};      
const Layout = ({children}: props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container mx-auto flex-1 py-10">{children}</div>
        </div>
    );
};  
export default Layout;
// This is the layout component for the app. It contains the header and the main content area.
// The header is imported from the header.tsx file and the main content area is passed as a prop to the layout component.
// The layout component is used in the main.tsx file to wrap the app routes.
// The layout component is also used in the app.tsx file to wrap the app routes.
// The layout component is used to provide a consistent layout for the app.
// The layout component is used to provide a consistent layout for the app.