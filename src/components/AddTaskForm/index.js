import React, { useState } from "react";
import { Button, FormContainer, Input } from "./styles";
import { useDispatch } from "react-redux";
import { addTask } from "../../state/task.slice";

const AddTaskForm = () => {

    const [formTask, setFormTask] = useState('');

    const dispatch = useDispatch();

    const handleTaskChange = e => {
        setFormTask(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if (formTask.trim() === '') return;
        const newTask = {
            id: Date.now(),
            name: formTask,
            completed:false,
        }

        dispatch(addTask(newTask));
        setFormTask('');
    }

    return(
        <>
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <Input type="text" 
                    placeholder="Ingresa una tarea" 
                    onChange={handleTaskChange}
                    value={formTask}
                />
                <Button type="submit">Agregar Tarea</Button>
            </form>
        </FormContainer>
        </>
    );
};

export default AddTaskForm;