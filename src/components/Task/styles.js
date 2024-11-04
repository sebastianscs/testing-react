import styled from "styled-components";

const TaskContainer = styled.section`
    display: flex;
    align-items: center;
    padding:12px;
    box-sizing: border-box;
    background-color: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const TaskText = styled.section`
    flex-grow: 1;
    text-decoration:none;
`;

const RemoveButton = styled.button`
    padding: 5px;
    background-color: #888;
    color: #FFF;
    border-radius: 5px;
    cursor: pointer;
`;

export {
    TaskContainer,
    TaskText,
    RemoveButton,
}