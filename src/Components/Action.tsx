import type { FC } from "react";

interface ToggleableToolProps {
    id: string,
    onClick: Function
}

const SelectableTool : FC<ToggleableToolProps> = ({ id, onClick, children }) => {
    return (
        <button
            id={id}
            className="transition outline-none text-white hover:text-indigo-400"
            onClick={(e) => onClick(e)}>

            {children}
        </button>
    )
}

export default SelectableTool;