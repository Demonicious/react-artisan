import type { FC } from "react";

const ToolGroup : FC = ({ children }) => {
    return (
        <div className="tool-group flex flex-row gap-4">
            {children}

            <div className="separator w-px bg-artisan-light h-8 mr-4" />
        </div>
    )
}

export default ToolGroup;