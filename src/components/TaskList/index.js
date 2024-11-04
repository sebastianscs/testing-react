import React, { useEffect } from "react";
import { ListContainer } from "./styles";
import Task from "../Task";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, removeTask, toggleTask } from "../../state/task.slice";
import { FAILED, IDLE, LOADING } from "../../state/status";

const TaskList = () => {
    
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const status = useSelector(state => state.tasks.status);
    useEffect(() => {
        status === IDLE && dispatch(fetchTasks());
    }, [dispatch, status]);

    const handleTaskRemove = (id) => {
        dispatch(removeTask(id));
    }
    const handleTaskToggle = (id) => {
        dispatch(toggleTask(id));
    }
    return(
        <ListContainer>
            {
                tasks && tasks.map(task => (
                    <Task 
                        key={task.id}
                        task={task.title}
                        onRemove={() => handleTaskRemove(task.id)}
                        onToggle={() => handleTaskToggle(task.id)}
                    />
                ))
            }

            {
               status === LOADING && <p>Cargando...</p>
            }
            {
                status === FAILED && <p>Error al cargar...</p>
            }
        </ListContainer>
    );
}

export default TaskList;