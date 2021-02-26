import React from 'react';
import styled from 'styled-components';

const Task = ({ content,tasks,setTasks }) => {
//handlers
const deleteTaskHandler = (e)=>{
    const updatedTasks = tasks.filter(item=>item.content!=content)
    setTasks(updatedTasks)
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks))
}
    return (
        <StyledTask>
            <h1>{content}</h1>

            <div className="buttons">
                <div className="button markDoneButton" ></div>
                <div className="button deleteTaskButton" onClick={deleteTaskHandler}></div>
            </div>
        </StyledTask>
    );
};
const StyledTask = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-height: 200px;
    background-color: #ffffff;
    border-radius: 10px;
    overflow-x: hidden;
    margin: 2rem;
    .button {
        width: 80px;
        height: 100%;
        transition: ease all 0.3s;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .markDoneButton {
        background-color: #86e886;

        &:hover {
            background-color: #65c165;
        }
    }
    .deleteTaskButton {
        background-color: #ff7575;
        &:hover{
            background-color: #D22424;
    }
    }
    h1 {
        padding: 1rem;
        padding-left: 2.5rem;
        max-height: 200px;
        width: 100%;
        overflow-y: scroll;
    }
`;

export default Task;
