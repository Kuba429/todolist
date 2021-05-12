import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//components
import AddTaskInput from './AddTaskInput';
import TaskContainer from './TaskContainer';
const LandingPage = () => {
    //state
    const [tasks, setTasks] = useState([{ content: 'pozdro' }]);
    const [addingTask, setAddingTask] = useState(false);
    //functions/handlers
    const getStoredData = () => {
        let storedData = JSON.parse(localStorage.getItem('storedTasks'));
        if (storedData != null) {
            setTasks(storedData);
        } else {
            setTasks([]);
        }
    };

    //use effect
    useEffect(() => {
        getStoredData();
    }, []);
    return (
        <StyledLandingPage>
            {addingTask && (
                <AddTaskInput
                    getStoredData={getStoredData}
                    tasks={tasks}
                    setTasks={setTasks}
                    addingTask={addingTask}
                    setAddingTask={setAddingTask}
                />
            )}
            <div className="upperPart">
                <h1
                    onClick={() => {
                        setAddingTask(true);
                    }}
                >
                    Add Task
                </h1>
            </div>
            <TaskContainer
                getStoredData={getStoredData}
                tasks={tasks}
                setTasks={setTasks}
            />
        </StyledLandingPage>
    );
};
const StyledLandingPage = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3b4459;
    font-family: 'Poppins';
    font-weight: 300;
    .upperPart {
        width: 100%;
        height: 20vh;
        display: flex;
        justify-content: center;
        color: white;
        h1 {
            margin: 1rem;
            padding: 1rem;
            height: 80px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            transition: ease 0.3s all;
            &:hover {
                color: #3b4459;
                background-color: white;
            }
        }
    }
`;

export default LandingPage;
