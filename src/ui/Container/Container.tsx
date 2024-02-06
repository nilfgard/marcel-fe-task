import styled from 'styled-components';

interface ContainerProps {
  readonly $center?: boolean;
  readonly $direction?: 'row' | 'column';
  readonly $centerItems?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: ${({ $center }) => ($center ? 'center' : 'start')};
  flex-direction: ${({ $direction }) => ($direction ? $direction : 'row')};
  align-items: ${({ $centerItems }) => ($centerItems ? 'center' : 'start')};
`;

export default Container;
