import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  margin: 0 auto;
`;

export const TitleText = styled.p`
  color: #000;
  font-size: 25px;
  font-weight: 600;
`;

export const discriptionText = styled.p`
  color: #939191;
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
`;
export const InputFieldContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TitleTextField = styled.p`
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  color: #000000;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: none;
  background-color: #f6f5f8;
  margin-bottom: 8px;

  ::placeholder {
    color: #aaaaaa;
    font-size: 14px;
  }
`;

export const SignupButton = styled.button`
  width: 60%;
  height: 40px;
  margin-top: 45px;
  margin-bottom: 100px;
  background-color: #313030;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;