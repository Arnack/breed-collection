import React, {FC} from "react";
import {Header} from "./header/Header";

/**
 * Whole markup wrapper
 */
export const Layout: FC = ({ children }) => {
    return <>
        <Header />
        <div className="container">
            {children}
        </div>
    </>
}
