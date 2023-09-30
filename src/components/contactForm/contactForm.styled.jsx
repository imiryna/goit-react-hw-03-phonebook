import styled from '@emotion/styled';

export const Text = styled.h1`
  margin-top: 40px;
  margin-left: 40px;
`;

export const ContactFormCss = styled.form`
  width: 320px;
  padding: 24px;
  margin: 40px;

  outline: 1px solid #000;
`;
export const Description = styled.label`
  display: block;
  margin-bottom: 8px;
`;
export const InputFormCss = styled.input`
  display: block;
  width: 220px;
  height: 40px;
  padding: 12px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;
export const ButtonCss = styled.button`
  display: block;
  width: 100px;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 12px;
  background-color: rgb(186, 188, 188);
  color: #000;

  &: hover {
    color: #fff;
    background-color: rgb(93, 172, 180);
    cursor: pointer;
    border: 2px solid;
  }
`;
