import { useContext } from "react";
import type { FC } from "react";
import ArtisanContext from "./../ArtisanContext";

import { FiPlus, FiMinus } from "react-icons/fi"

interface SizeInputProps {
    id: string
}

const SizeInput : FC<SizeInputProps> = ({ id }) => {
    const { size, setSize } = useContext(ArtisanContext);

    const increment = () => setSize(Math.floor(size) + 1);
    const decrement = () => setSize(Math.floor(size) - 1 > 0 ? Math.floor(size) - 1 : 1);

    return (
        <div id={id} className="flex items-center">
            <button className="transition hover:bg-indigo-400 text-center outline-none text-white rounded-tl-md rounded-bl-md rounded-none bg-artisan-light w-9 h-7 flex items-center justify-center" onClick={decrement}>
                <FiMinus />
            </button>
            <input className="text-white outline-none text-sm bg-artisan-light rounded-none text-center h-7 w-10" value={size} disabled min="1" type="number" />
            <button className="transition hover:bg-indigo-400 text-center outline-none text-white rounded-tr-md rounded-br-md rounded-none bg-artisan-light w-9 h-7 flex items-center justify-center" onClick={increment}>
                <FiPlus />
            </button>
        </div>
    )
}

export default SizeInput;