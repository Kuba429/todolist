import React from 'react';
import styled from 'styled-components';

const AddTaskInput = ({
    tasks,
    setTasks,
    getStoredData,
    addingTask,
    setAddingTask,
}) => {
    const submitTaskHandler = (e) => {
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem('storedTasks'));
        let taskTBA = {
            content: document.querySelector('.input').value,
            isDone: false,
        };
        if (storedData) {
            storedData.push(taskTBA);
            localStorage.setItem('storedTasks', JSON.stringify(storedData));
        } else {
            const dataToBeStored = [taskTBA];
            localStorage.setItem('storedTasks', JSON.stringify(dataToBeStored));
        }
        getStoredData();
        setAddingTask(false);
    };
    return (
        <StyledAddTaskInput>
            <h1 onClick={() => setAddingTask(false)} className="exit">
                x
            </h1>
            <form onSubmit={submitTaskHandler}>
                <input
                    className="input"
                    type="text"
                    placeholder="Enter your task here"
                />
                <button className="submit">Add</button>
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
    backdrop-filter: grayscale(1) blur(5px);
    transition: ease 0.5s all;
    font-family: 'Poppins';

    .exit {
        position: absolute;
        left: 0;
        top: 0;
        margin: 2rem;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: ease all 0.4s;
        background-color: #ff7575;
        color: white;
        cursor: pointer;
        &:hover {
            background-color: red;
        }
    }
    form {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .input {
            width: 100%;
            padding: 2rem;
            font-size: 3rem;
            font-family: 'Poppins';
            border-radius: 15px;
            background-color: #3b4459;
            border: none;
            outline: none;
            color: white;
            transition: ease all 0.1s;
            &:focus {
                padding: 3rem;
            }
        }
        .submit {
            width: 30%;
            padding: 1rem;
            margin: 2rem;
            font-size: 2rem;
            outline: none;
            border: none;

            font-family: 'Poppins';

            cursor: pointer;
            background-color: #86e886;
            border-radius: 15px;
            transition: ease all 0.3s;
            &:hover {
                background-color: #65c165;
            }
        }
    }
`;
export default AddTaskInput;
