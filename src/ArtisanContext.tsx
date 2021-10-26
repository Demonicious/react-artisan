import { useState, createContext } from "react";
import type { FC } from "react";

interface ArtisanContextState {
    tool: {
        id: string,
        set: Function
    },
    options: {
        includes: Function,
        set: Function
    },

    size: number,
    setSize: Function
}

const ArtisanContext = createContext<ArtisanContextState>({
    tool: {
        id: '',
        set: () => null
    },

    options: {
        includes: () => null,
        set: () => null
    },

    size: 1,
    setSize: () => null
});

export const ArtisanProvider : FC = ({ children }) => {
    const [ tool, setTool ]       = useState<string>('pen');
    const [ size, setSize ]       = useState<number>(1);
    const [ options, setOptions ] = useState<string[]>([]);

    const includesOption = (id : string) => options.includes(id);
    const setOption = (id : string, status : boolean) => {
        if(status)
            setOptions([...options, id]);
        else
            setOptions(options.filter(opt => opt !== id));
    }

    return (
        <ArtisanContext.Provider value={ {
            tool: {
                id: tool,
                set: setTool
            },

            options: {
                includes: includesOption,
                set: setOption
            },

            size,
            setSize
        } }>
            {children}
        </ArtisanContext.Provider>
    )
}

export default ArtisanContext;