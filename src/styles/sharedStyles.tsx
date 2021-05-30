import styled from 'styled-components/native';
import colors from '../styles/sharedColors';

const Container = styled.View`
    min-height: 160px;
    border-bottom-width: 0.5px;
    border-color: ${colors.borderColor};
    padding: 20px;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    margin-bottom: 20px;
`;

const Title = styled.Text`
    font-size: 20px;
`;

const Text = styled.Text`
    font-size: 16px;
`;

const GrayText = styled(Text)`
    font-size: 14px;
    color: ${colors.grayTextColor};
`;

export { Container, Row, Title, Text, GrayText };
