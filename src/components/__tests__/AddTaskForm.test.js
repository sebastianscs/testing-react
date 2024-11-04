import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddTaskForm from '../AddTaskForm';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);
const mockAddTask = jest.fn();

describe('AddTaskForm', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            tasks: [],
        });
    });

    it('renders the AddTaskForm component', () => {
        render(
            <Provider store={store}>
                <AddTaskForm addTask={mockAddTask} />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('Ingresa una tarea');
        expect(inputElement).toBeInTheDocument();

        const addButton = screen.getByRole('button');
        expect(addButton).toBeInTheDocument();
    });

});
