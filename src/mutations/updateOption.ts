import gql from 'graphql-tag';

const UPDATE_OPTION = gql`
    mutation updateOption($multiple: Int, $recurring: Float) {
        updateOption(multiple: $multiple, recurring: $recurring) {
            multiple
            recurring
        }
    }
`;

export default UPDATE_OPTION;
