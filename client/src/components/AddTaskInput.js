import React from 'react';
import styled from 'styled-components';

const AddTaskInput = ({
    tasks,
    setTasks,
    getStoredData,
    addingTask,
    setAddingTask,
}) => {
    return (
        <StyledAddTaskInput onClick={()=>{setAddingTask(false)}}>
            <form>
                <input
                    className="input"
                    type="text"
                    placeholder="Enter your task here"
                />
            </form>
        </StyledAddTaskInput>
    );
};

const StyledAddTaskInput = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5;
    background: transparent;
    backdrop-filter: blur(5px);
    transition: ease 0.5s all;

    form {
        width: 60%;
        .input {
            width: 100%;
        }
    }
`;
export default AddTaskInput;
