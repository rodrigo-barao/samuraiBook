import styled from 'styled-components';

export const Container = styled.div`
  .score {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: ${props => props.scoreColor};
    border-radius: 150px;
    height: 220px;
    width: 220px;

    font-size: 22px;
    font-weight: bold;
    color: #fff;
    text-align: center;

    margin: auto;
    margin-top: 30px;

    .summary-score-value {
      font-size: 98px;
    }
  }

  .score-comment {
    text-align: center;
  }
`;
