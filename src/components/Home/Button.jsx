import React from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.div`
    padding-bottom: 20px;

    button{
    margin: 20px 14px 30px 0;
    padding: 8px 15px;
    border-radius: 30px;
    border: 1px solid;
    cursor: pointer;
    }

    button:hover{
    color: white;
    background: black;
}
`

const Button = () => {
    return (
        <ButtonBlock>
            <h2>빠른 링크</h2>
            <button>주문 상태</button>
            <button>쇼핑 도움말</button>
            <button>반품</button>
            <button>관심 목록</button>
        </ButtonBlock>
    );
};

export default Button;