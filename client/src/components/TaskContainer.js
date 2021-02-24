import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
//components
import Task from './Task';

const TaskContainer = ({ tasks, setTasks }) => {
  

    return (
        <StyledTaskContainer>
            {tasks
                ? tasks.map((item) => {
                      return <Task content={item.content} key={uuidv4()} />;
                  })
                :  <h1>Add tasks with the button above!</h1>}
        </StyledTaskContainer>
    );
};

const StyledTaskContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default TaskContainer;
