import styled from 'styled-components';


export const Header = styled.header<{color: string}>`
  height: 50px;
  background-color: ${(props) => {
    switch (props.color) {
      case 'todo':
        return '#118ab2';

      case 'doing':
        return `#ffd166`;

      case 'done':
        return '#06d6a0';

      default:
        return props.color;
    }
  }};
  color: #FFFFFF;
  font-size: 18px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  align-items: center;
  
  padding: 0 32px;
  span {
    font-weight: 700;
    margin-left: 8px;
  }
`