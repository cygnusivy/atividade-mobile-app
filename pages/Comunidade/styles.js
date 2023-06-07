import styled from 'styled-components/native';

export const ViewPostagem = styled.View`
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
    margin-top: 3%;
    margin-right: 10px;
    margin-left: 10px;
    flex-direction: column;
    height: fit-content;
`;

export const ImagePostagem = styled.Image`
    width: 100%;
    height: 250px;
`;

export const ViewComentario = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 8px;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom: 15px;
`;

export const ViewConteudoComentario = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    height: fit-content;
    flex-direction: row;
`;

export const ImageUsuario = styled.Image`
    margin-top: 1%;
    border-radius: 20px;
    height: 35px;
    width: 35px;
    margin-left: 5px;
    margin-right: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const TextNomeUsuario = styled.Text`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    align-items: center;
    margin-top: 2%;
    color: #000000;
`;