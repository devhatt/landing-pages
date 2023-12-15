import React from "react";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-blue-300">
            <p>Layout petdex</p>
            {children}
        </div>
    );
}
