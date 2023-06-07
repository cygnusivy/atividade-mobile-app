import styled from 'styled-components/native';

export const Text = styled.Text`
    margin-bottom: 10px;
`;

export const Container = styled.View`
    flex: 1;
    background-color: rgb(243, 252, 231);
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 30px;
    background-color: rgba(212, 221, 208, 0.698);
    border: none;
    border-radius: 20px;
    padding-left: 4.5%;
    margin-bottom: 10px;
    color: black;
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    margin-top: 1rem;
    width: 100%;
    height: 30px;
    cursor: pointer;
    color: rgb(152, 192, 101);
    background-color: rgb(22, 27, 49);
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const MensagemErro = styled.View`
    display: none;
    color: #FF0000;
    font-size: 12px;
    font-weight: bold;
    margin-top: 5px;
`;
export const MensagemSucesso = styled.View`
  display: none;
  color: green;
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
`;