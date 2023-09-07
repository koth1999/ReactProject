import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100vh; 
`;

const Button = styled.button`
    background-color: #007bff; 
    color: #fff; 
    border: none;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    outline: none;

    &:hover {
        background-color: skyblue; 
    }
`;

const Main = () => {
    return (
        <MainBlock>
            <Link to="/portfolio">
                <Button>포트폴리오 보기</Button>
            </Link>
            <Link to="/image">
                <Button>이미지 보기</Button>
            </Link>
        </MainBlock>
    );
};

export default Main;
