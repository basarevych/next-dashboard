import { commitMutation, graphql } from "react-relay";

const mutation = graphql`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp(input: $input) {
      success
      accessToken
      refreshToken
    }
  }
`;

export default async (di, input) => {
  return new Promise((resolve, reject) => {
    commitMutation(di.get("env"), {
      mutation,
      variables: { input: input || {} },
      onCompleted: (data, errors) => resolve({ data, errors }),
      onError: reject
    });
  });
};
