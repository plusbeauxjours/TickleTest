import styled from 'styled-components/native';
import colors from '../styles/sharedColors';

const Container = styled.View`
    height: 200px;
    border-bottom-width: 0.5px;
    border-color: ${colors.borderColor};
    padding: 20px;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`;

const Title = styled.Text`
    font-size: 20px;
`;

const Text = styled.Text`
    font-size: 16px;
`;

const GrayText = styled(Text)`
    font-size: 14px;
    color: #999;
`;

export { Container, Row, Title, Text, GrayText };
