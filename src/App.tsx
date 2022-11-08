import {FC} from 'react';
//import './App.css';
import {KanbanBoard} from './components/kanban-board/index';
import {Task} from './components/Task';

const title = "Kanban Board";

export interface Props {
  tasks: Task[];
  tab?: string;
}

const App: FC<Props> =({tasks, tab}: Props) => {

    return (
      <div>
        <KanbanBoard Tasks={tasks}/>
      </div>
    );
}

export default App;
