import React, { MouseEvent, useState } from "react";
import "./index.css";
import { Task } from "../Task";

interface Props {
  tasks: Task[];
}

export const KanbanBoard = (props: Props) => {
  // Each task is uniquely identified by its name.
  // Therefore, when you perform any operation on tasks, make sure you pick tasks by names (primary key) instead of any kind of index or any other attribute.
  const [tasks, setTasks] = useState<Task[]>(props.tasks);
  const stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];

  console.log(tasks);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("e.target: ", e.target);
    console.log("e.currentTarget: ", e.currentTarget);

    const taskname: string = e.currentTarget.dataset.taskname!;
    console.log('taskname: ', taskname);

    let currentstage: number = Number(e.currentTarget.dataset.currentstage);
    console.log("currentstage: ", currentstage);

    let testid: string = e.currentTarget.dataset.testid!;
    console.log("testid: ", testid);

    let direction: string = e.currentTarget.dataset.direction!;
    console.log("direction: ", direction);

    let nextTasks: Task[] = [];

    nextTasks = tasks.map((task:Task) => {
      if(taskname === task.name) {
        if(direction === 'forward' && currentstage < 3) {
          task.stage++;
          return task;
        } else if(direction === 'back' && currentstage > 0) {
          task.stage--;
          return task;
          }
      } return task;
    });
    setTasks(nextTasks);
  };

  const stagesTasks: Task[][] = [];

  for (let i: number = 0; i < stagesNames.length; ++i) {
    stagesTasks.push([]);
  }

  for (let task of tasks) {
    const stageId = task.stage;
    stagesTasks[stageId].push(task);
  }
  console.log(stagesTasks);

  return (
    <div className="mt-20 layout-column justify-content-center align-items-cente">
      <div className="mt-50 layout-row">
        {stagesTasks.map((tasks, i) => {
          return (
            <div key={`${i}`} className="card outlined ml-20 mt-0">
              <div className="card-text">
                <h4>{stagesNames[i]}</h4>
                <ul className="styled mt-50" data-testid={`stage-${i}`}>
                  {tasks.map((task: Task, index: number) => {
                    return (
                      <li className="slide-up-fade-in" key={`${i}${index}`}>
                        <div className="li-content layout-row justify-content-between align-items-center">
                          <span
                            data-testid={`${task.name
                              .split(" ")
                              .join("-")}-name`}
                          >
                            {task.name}
                          </span>
                          <div className="icons">
                            <button className="icon-only x-small mx-2"
                              data-testid={`${task.name
                                .split(" ")
                                .join("-")}-back`}
                              data-currentstage={`${task.stage}`}
                              data-direction={`back`}
                              data-taskname={`${task.name}`}
                              onClick={handleClick}
                            >
                              <i className="material-icons">arrow_back</i>
                            </button>
                            <button className="icon-only x-small mx-2"
                              data-testid={`${task.name
                                .split(" ")
                                .join("-")}-forward`}
                                data-currentstage={`${task.stage}`}
                                data-direction={`forward`}
                                data-taskname={`${task.name}`}
                              onClick={handleClick}
                            >
                              <i className="material-icons">arrow_forward</i>
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
