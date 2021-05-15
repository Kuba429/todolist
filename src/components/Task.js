import React from 'react';
import styled from 'styled-components';

const Task = ({ isDone, content, tasks, setTasks }) => {
    //handlers
    const deleteTaskHandler = (e) => {
        const updatedTasks = tasks.filter((item) => item.content != content);
        setTasks(updatedTasks);
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    };
    const markDoneHandler = () => {
        const updatedTasks = [...tasks];
        updatedTasks.forEach((element) => {
            if (element.content == content) {
                element.isDone = !element.isDone;
            }
        });
        setTasks(updatedTasks);
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    };
    return (
        <StyledTask>
            <h1 className={`${isDone ? 'done' : 'notDone'}`}>{content}</h1>

            <div className="buttons">
                <div
                    className="button markDoneButton"
                    onClick={markDoneHandler}
                ></div>
                <div
                    className="button deleteTaskButton"
                    onClick={deleteTaskHandler}
                ></div>
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
    margin-top: 2rem;
    margin-bottom: 2rem;

    .button {
        width: 80px;
        height: 100%;
        transition: ease all 0.3s;
        cursor: pointer;
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
        &:hover {
            background-color: #d22424;
        }
    }
    h1 {
        padding: 1rem;
        padding-left: 2.5rem;
        max-height: 200px;
        width: 100%;
        overflow-y: scroll;
        transition: ease all 0.3s;
        opacity: 100%;
    }
    .done {
        text-decoration: line-through;
        opacity: 0.4;
    }


    @media (max-width: 550px){
        h1{
            font-size: 1.74rem;
        }
        .button{
            width: 74px;
        }
    }
    @media (max-width: 450px){
        h1{
            font-size: 1.45rem;
        }
        .button{
            width: 66px;
        }
    }
    @media (max-width: 400px){
        h1{
            font-size: 1.2rem;
        }
        .button{
            width: 61px;
        }
    }
    @media (max-width: 370px){
        h1{
            font-size: 1.1rem;
        }
        .button{
            width: 56px;
        }
    }
`;

export default Task;
