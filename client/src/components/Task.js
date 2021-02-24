import React from 'react';
import styled from 'styled-components';

const Task = ({ content }) => {
    return (
        <StyledTask>
            <h1>
                {content}
           </h1>

            <div className="buttons">
                <div className="button markDoneButton"></div>
                <div className="button deleteTaskButton"></div>
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
    }
    .deleteTaskButton {
        background-color: #ff7575;
    }
    h1 {
        padding: 1rem;
        padding-left: 2.5rem;
        max-height: 200px;
        width:100%;
        overflow-y: scroll;
        
    }
`;

export default Task;
