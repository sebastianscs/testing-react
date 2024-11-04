
import React from "react";
import { RemoveButton, TaskContainer, TaskText } from "./styles";

const Task = ({ task, onRemove, onToggle }) => {
    return(
        <>
        <TaskContainer>
            <input type="checkbox" onChange={onToggle}/>
            <TaskText>{task}</TaskText>
            <RemoveButton onClick={onRemove}>Eliminar</RemoveButton>
        </TaskContainer>
        </>
    )
}

export default Task;