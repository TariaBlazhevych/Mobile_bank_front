import styled from "styled-components";

export default function Header({ name, onClick }) {
  return (
    <HeaderTag>
      <NameTag>{name}</NameTag>
      <LoginButtontTag onClick={onClick}>Log In</LoginButtontTag>
    </HeaderTag>
  );
}

const LoginButtontTag = styled.div`
  color: #fff;

  padding: 1px 10px 4px 10px;
  border: 1px solid #fff;
  border-radius: 15px;
  cursor: pointer;
`;
const NameTag = styled.div`
  color: #fff;
`;
const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: #1e1e1e;

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */
  color: #fff;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 20px;
`;
