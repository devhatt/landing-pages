import React from "react";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-purple-100">
            <p>Layout octopost</p>
            {children}
        </div>
    );
}
