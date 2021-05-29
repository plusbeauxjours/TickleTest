import gql from 'graphql-tag';

const GET_OPTION = gql`
    query option {
        option {
            multiple
            recurring
        }
    }
`;

export default GET_OPTION;
