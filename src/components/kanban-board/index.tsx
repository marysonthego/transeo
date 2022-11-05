import React, { useState } from "react";
import "./index.css";
import {Task} from '../Task';

interface Props {
tasks: Task[];
}

export const KanbanBoard = (props: Props) => {

    // Each task is uniquely identified by its name.
    // Therefore, when you perform any operation on tasks, make sure you pick tasks by names (primary key) instead of any kind of index or any other attribute.
    const [tasks, setTasks] = useState<Task[]>(props.tasks);
    const stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];

  const handleForwardClick = (e) => {
    let btn = e.target.current;
    console.log('Forward Click happened');
    if( btn < 3)
      e.target.current.stage--;
    }

  const handleBackClick = (e) => {
    let btn = e.target.current;
    console.log('Back Click happened');
    if(btn > 0)
      e.target.current.stage++;
    }

    let stagesTasks = [];
    for (let i = 0; i < stagesNames.length; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="mt-20 layout-column justify-content-center align-items-center">
        <div className="mt-50 layout-row">
            {stagesTasks.map((tasks, i) => {
                return (
                    <div className="card outlined ml-20 mt-0" key={`${i}`}>
                        <div className="card-text">
                            <h4>{stagesNames[i]}</h4>
                            <ul className="styled mt-50" data-testid={`stage-${i}`}>
                                {tasks.map((task, index) => {
                                    return <li className="slide-up-fade-in" key={`${i}${index}`}>
                                      <div className="li-content layout-row justify-content-between align-items-center">
                                        <span data-testid={`${task.name.split(' ').join('-')}-name`}>{task.name}</span>
                                        <div className="icons">
                                          <button className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-back`} onClick={handleBackClick}>
                                            <i className="material-icons">arrow_back</i>

                                          </button>
                                          <button className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-forward`} onClick={handleForwardClick}>
                                            <i className="material-icons">arrow_forward</i>
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
