import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Score = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-right: 10px;
  text-align: center;
  font-weight: bold;

  .label {
    color: ${props => props.scoreColor};
    font-size: 22px;
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${props => props.scoreColor};
  border-radius: 50px;

  height: 43px;
  width: 43px;

  margin-right: 5px;

  span {
    color: #fff;
  };
`;
