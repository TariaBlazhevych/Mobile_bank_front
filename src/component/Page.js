import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  /* background: linear-gradient(62.93deg, #d219a4 19.68%, #70049f 89.55%); */
  background: rgb(95, 14, 217);
  background: linear-gradient(
    57deg,
    rgba(95, 14, 217, 1) 0%,
    rgba(226, 29, 253, 1) 50%,
    rgba(69, 243, 252, 1) 100%
  );
  /* робимо фон на всю ширину */
  width: 100%;
`;
