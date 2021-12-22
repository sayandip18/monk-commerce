import styled from 'styled-components';

export const MainWrapper = styled.div`
    padding: 20px 50px 100px 50px;
    @media (min-width: 1000px){
        display:grid;
        grid-template-columns:calc( 50% ) calc( 50% );
        grid-column-gap:50px;
        align-content:center;
        justify-content:space-between;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-right: 50px;
`;

export const Button = styled.button`
    width: 250px;
    height: 60px;
    color: white;
    font-weight:900;
    font-size:15px;
    line-height:25px;
    padding: 15px 75px;
    cursor:pointer;
    background: #F53838;
    border-radius: 10px;
    border:none;

    box-shadow:0px 25px 50px 10px #f5383859;
`;

export const Text = styled.div`
    padding: 40px 0;
    @media (max-width:1000px){
        text-align:center;
        padding:20px 0;
        margin-bottom: 60px;
    }
`;

export const TopText = styled.h1`
    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 70px;
    color: #0B132A;
`;

export const BottomText = styled.p`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
`;