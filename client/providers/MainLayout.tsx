import React from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}
function MainContentLayout( {children}: MainLayoutProps ) {
    return (
        <div>{children}</div>
    )
}

export default MainContentLayout;