import { useContext } from "react";
import type { FC } from "react";
import ArtisanContext from "./../ArtisanContext";

interface SelectableToolProps {
    id: string
}

const SelectableTool : FC<SelectableToolProps> = ({ id, children }) => {
    const { tool } = useContext(ArtisanContext);

    return (
        <button
            id={id}
            className={ 
                "transition outline-none hover:text-indigo-400 " 
                + (tool.id === id ? 'text-indigo-400' : 'text-white') 
            } 
            
            onClick={() => tool.set(id)}>

            {children}
        </button>
    )
}

export default SelectableTool;