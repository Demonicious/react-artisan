import { useContext } from "react";
import type { FC } from "react";
import ArtisanContext from "./../ArtisanContext";

interface ToggleableToolProps {
    id: string
}

const SelectableTool : FC<ToggleableToolProps> = ({ id, children }) => {
    const { options } = useContext(ArtisanContext);

    const set = () => options.set(
        id,
        !options.includes(id)
    );

    return (
        <button
            id={id}
            className={ 
                "transition outline-none hover:text-indigo-400 " 
                + (options.includes(id) ? 'text-indigo-400' : 'text-white') 
            } 
            
            onClick={set}>

            {children}
        </button>
    )
}

export default SelectableTool;