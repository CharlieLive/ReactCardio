import { Alert } from './Alert';

export const App = () => {
  return (
    <>
      <Alert variant="info">Please update your email</Alert>
      <Alert variant="error" outlined={true}>There was an error during transaction!</Alert>
      <Alert variant="success" elevated={true}>Payment recived!</Alert>
      <Alert variant="warning" outlined={true} elevated={true}>Please update your email</Alert>
    </>
  );
};
