import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import { AppContainer, AppHeader, HeaderTitle } from "./styles";

const App = () => {
  return (
    <div >
      <AppContainer>
        <AppHeader>
          <HeaderTitle> ToDo List </HeaderTitle>
        </AppHeader>
        <AddTaskForm />
        <TaskList />
      </AppContainer>
    </div>
  );
}

export default App;
