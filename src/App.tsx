import {FC} from 'react';
import './App.css';
import {KanbanBoard} from './components/kanban-board/index';
import 'h8k-components';
import {Task} from './components/Task';

const title = "Mary's Kanban Board";

export interface Props {
  tasks: Task[];
  tab?: string;
}

const App: FC<Props> =({tasks, tab}: Props) => {

    return (
      <div>
        <h4>{title}</h4>
        <KanbanBoard tasks={tasks}/>
      </div>
    );
}

export default App;
