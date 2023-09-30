import styled from '@emotion/styled';

export const ContactListCss = styled.ul`
  width: 320px;
  padding-left: 24px;
  margin-left: 40px;
`;

export const Items = styled.li`
  margin-bottom: 10px;
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
