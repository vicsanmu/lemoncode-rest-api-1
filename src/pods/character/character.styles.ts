import { css } from 'emotion';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .character-detail-title {
    display: flex;
    align-items: center;
  }

  .character-detail-title .MuiAvatar-root {
    margin-right: 8px;
  }

  button {
    width: 120px;
  }
`;
