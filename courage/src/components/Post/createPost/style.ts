import styled from "styled-components";

export const CreatePostContainer = styled.div`
  width: 55%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageUploadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #f9f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #a0a0a0;
  }
`;

export const ImageUploadIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const ImageUploadText = styled.p`
  font-size: 14px;
  color: #c4c1c1;
`;

export const HiddenFileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #f9f7f7;
`;

export const EnterContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 50px;
`;

export const MediumText = styled.p`
  font-size: 14px;
  color: #000000;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: left;
`;

interface MediumTextFieldProps {
  multiline?: boolean;
}

export const MediumTextField = styled.input.attrs<MediumTextFieldProps>(
  ({ multiline }) => ({
    as: multiline ? "textarea" : "input",
  })
)<MediumTextFieldProps>`
  width: 100%;
  height: ${({ multiline }) => (multiline ? "100px" : "35px")};
  padding: 10px 40px 10px 10px;
  font-size: 13px;
  color: #000000;
  border: 1px solid #f6f5f8;
  border-radius: 5px;
  outline: none;
  background-color: #f6f5f8;
  resize: ${({ multiline }) => (multiline ? "vertical" : "none")};
  ::placeholder {
    color: #c4c1c1;
    font-size: 13px;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const Tag = styled.div<{ selected: boolean }>`
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ selected }) => (selected ? "#7C7C7C" : "#B7B7B7")};
  background-color: ${({ selected }) => (selected ? "#B7B7B7" : "#fff")};
  border: 1px solid ${({ selected }) => (selected ? "#B7B7B7" : "#B7B7B7")};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const SendButton = styled.button`
  width: 100%;
  height: 38px;
  background-color: #313030;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 30px;
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: #ff4d4f;
  margin-top: 5px;
  margin-bottom: 10px;
`;
