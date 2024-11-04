
import {React, act} from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Task from "../Task";

describe("Task Component", () => {
    const mockTask = [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
        ];

    const mockRemove = jest.fn();
    const mockToggle = jest.fn();

    it("renders the task", () => {
        render(
           <>
             {mockTask.map(tasks => (
                <Task 
                    key={tasks.id}
                    task={tasks.title} 
                    onRemove={mockRemove} 
                    onToggle={mockToggle} 
                />
                ))}
           </>
            
        );
        
        const taskText = screen.getByText('delectus aut autem');
        expect(taskText).not.toBeNull();
        
        mockTask.forEach(() => {
            const taskRole = screen.getAllByRole('checkbox');
            expect(taskRole).not.toBeNull();
        });

        mockTask.forEach(() => {
            const taskButton = screen.getAllByText("Eliminar");
            expect(taskButton).not.toBeNull();
        });
    });

    it("calls onRemove when delete button is clicked", () => {
        const { getByText } = render(
            <Task task={mockTask.title} onRemove={mockRemove} onToggle={mockToggle} />
        );

        fireEvent.click(getByText("Eliminar"));

        expect(mockRemove).toHaveBeenCalled();
    });

    test("calls onToggle when checkbox is checked", () => {
        const { getByRole } = render(
            <Task task={mockTask.title} onRemove={mockRemove} onToggle={mockToggle} />
        );

        fireEvent.click(getByRole("checkbox"));

        expect(mockToggle).toHaveBeenCalled();
    });
});
