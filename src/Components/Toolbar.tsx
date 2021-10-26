import type { FC } from "react";

import ToolGroup from "./ToolGroup";
import Action from "./Action";
import SelectableTool from "./SelectableTool";
import ToggleableTool from "./ToggleableTool";
import SizeInput from "./SizeInput";

import { FiEdit2, FiSquare, FiCircle, FiPlusCircle, FiMinusCircle, FiRotateCw, FiRotateCcw, FiPrinter, FiCopy, FiSave } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdSquare } from "react-icons/io";
import { FaBorderStyle } from "react-icons/fa";

const Toolbar : FC = () => {
    return (
        <section className="toolbar bg-artisan-dark h-12 flex justify-between items-center">
            <div className="tools flex flex-row px-8">
                <ToolGroup>
                    <Action id="zoom-out" onClick={ () => null }>
                        <FiPlusCircle />
                    </Action>
                    <Action id="zoom-out" onClick={ () => null }>
                        <FiMinusCircle />
                    </Action>
                </ToolGroup>

                <ToolGroup>
                    <SelectableTool id="pen">
                        <FiEdit2 />
                    </SelectableTool>
                    <SelectableTool id="rect">
                        <FiSquare />
                    </SelectableTool>
                    <SelectableTool id="ellipse">
                        <FiCircle />
                    </SelectableTool>
                    <SelectableTool id="arrow">
                        <BsArrowUpRight />
                    </SelectableTool>
                </ToolGroup>

                <ToolGroup>
                    <SizeInput id="size-input" />

                    <ToggleableTool id="solid">
                        <IoMdSquare />
                    </ToggleableTool>
                    <ToggleableTool id="dashed">
                        <FaBorderStyle />
                    </ToggleableTool>
                </ToolGroup>

                <ToolGroup>
                    <Action id="undo" onClick={() => null}>
                        <FiRotateCcw />
                    </Action>
                    <Action id="redo" onClick={() => null}>
                        <FiRotateCw />
                    </Action>
                </ToolGroup>
            </div>
            <div className="actions flex flex-row gap-4 px-8">
                <Action id="print" onClick={() => null}>
                    <FiPrinter />
                </Action>
                <Action id="copy" onClick={() => null}>
                    <FiCopy />
                </Action>
                <Action id="save" onClick={() => null}>
                    <FiSave />
                </Action>
            </div>
        </section>
    )
}

export default Toolbar;