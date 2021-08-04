import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
//components
import Task from "./Task";

const TaskContainer = ({ tasks, setTasks }) => {
  //handlers

  return (
    <StyledTaskContainer>
      {tasks && tasks.length > 0 ? (
        tasks.map((item) => {
          return (
            <Task
              tasks={tasks}
              setTasks={setTasks}
              content={item.content}
              isDone={item.isDone}
              key={uuidv4()}
            />
          );
        })
      ) : (
        <h1 className="noTasksWarning">Add tasks with the button above!</h1>
      )}
    </StyledTaskContainer>
  );
};

const StyledTaskContainer = styled.div`
  width: 90%;

  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: ease all 0.3s;
  .noTasksWarning {
    text-align: center;
    color: white;
  }
`;

export default TaskContainer;
