import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 555px;
  height: 396px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: auto;
  height: 30px;
  margin-bottom: 20px;
`;

export const InputFieldContainer = styled.div`
  width: 65%;
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
  margin-bottom: 2px;
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

export const LoginButton = styled.button`
  width: 65%;
  height: 40px;
  margin-top: 7px;
  background-color: #313030;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const SignupButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 25px;

  &:hover {
    color: #555555;
  }
`;
