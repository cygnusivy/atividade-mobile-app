import styled from 'styled-components/native';

export const ViewContainer = styled.View`
    height: 50%;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
    display: block;
`;

export const ViewPostagem = styled.View`
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
    margin-top: 20%;
    flex-direction: column;
`;


export const ImagePost = styled.Image`
    width: 20rem;
    heigth: 20rem;
    border-color: #040C33;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ViewButton = styled.View`
    flex-direction: row;
    flex: 1;
    justifyContent: space-between;
`;

export const ButtonPostagem = styled.TouchableOpacity`
    display: flex;
    margin-top: 1rem;
    width: 45%;
    height: 30px;
    cursor: pointer;
    color: rgb(152, 192, 101);
    background-color: rgb(22, 27, 49);
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;