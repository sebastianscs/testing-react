import { render, screen } from "@testing-library/react";
import TaskList from "../TaskList";
import { Provider } from "react-redux";
import store from "../../app/store";
import axios from "axios";
import '@testing-library/jest-dom';
import { fetchTasks } from "../../state/task.slice";

jest.mock("axios");
document.getElementById = jest.fn(() => document.createElement("div"));

it("renderiza la lista de tareas", async () => {
  axios.get.mockResolvedValue({
    data: [
      { id: 1, title: "Tarea de prueba 1", completed: false },
      { id: 2, title: "Tarea de prueba 2", completed: true },
    ],
  });

  render(
    <Provider store={store}>
      <TaskList />
    </Provider>
  );

  expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();

  const taskItem1 = await screen.findByText("Tarea de prueba 1");
  const taskItem2 = await screen.findByText("Tarea de prueba 2");

  expect(taskItem1).toBeInTheDocument();
  expect(taskItem2).toBeInTheDocument();
});
