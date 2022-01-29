/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px blue;
    border-radius: 20px;
    padding: 8px;
    margin: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: "0px",
    color: "green"
  });

  const StyledButton = styled.button`
    background-color: skyblue;
    border: none;
    padding: 10px;
    &:hover {
      background-color: black;
      color: blanchedalmond;
      cursor: pointer;
    }
  `;

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>-Emotion-</p>
      <StyledButton>MINODA</StyledButton>
    </div>
  );
};
