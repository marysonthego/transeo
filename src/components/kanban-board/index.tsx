import React, { useState } from "react";
//import "./index.css";
import {Task} from '../Task';

interface Props {
Tasks: Task[];
}

export const KanbanBoard = (props: Props) => {

    // Each task is uniquely identified by its name.
    // Therefore, when you perform any operation on tasks, make sure you pick tasks by names (primary key) instead of any kind of index or any other attribute.
    const [tasks, setTasks] = useState<Task[]>([]);
    const stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];

  const handleForwardClick = (e : React.MouseEvent<HTMLButtonElement>) :void => {
    // let btn = e.target.name;
    // let value = e.target.value;
    console.log('Forward Click happened');
    // if( value < 3)
    //   btn.stage--;
    }

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) :void=> {
    let btn = (e.target as HTMLButtonElement).name;
    let value = (e.target as HTMLButtonElement).value;
    console.log('Back Click happened');
    console.log('btn: ', btn);
    console.log('value', value);
    // if(value > 0)
    //   btn.stage++;
    // }
  }
    const stagesTasks: Task[] = [];
    // for (let i = 0; i < stagesNames.length; ++i) {
    //   //stagesTasks.push(stage:i);
    //   setTasks[...tasks, ]
    // }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks.push(task);
    }


    return (
      <div >
        <div>
            {stagesTasks.map((task, i) => {
                return (
                    <div key={`${i}`}>
                        <div >
                            <h4>{stagesNames[i]}</h4>
                            <ul data-testid={`stage-${i}`}>
                                {tasks.map((task: Task, index: number) => {
                                    return <li  key={`${i}${index}`}>
                                      <div >
                                        <span data-testid={`${task.name.split(' ').join('-')}-name`}>{task.name}</span>
                                        <div >
                                          <button data-testid={`${task.name.split(' ').join('-')}-back`} onClick={handleBackClick}>
                                            <i >arrow_back</i>
                                          </button>
                                          <button data-testid={`${task.name.split(' ').join('-')}-forward`} onClick={handleForwardClick}>
                                            <i >arrow_forward</i>
                                          </button>
                                        </div>
                                      </div>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    );
  }
