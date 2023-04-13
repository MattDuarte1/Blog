import { forwardRef } from 'react';
import * as Styled from './styles';

interface IError {
  code: string;
  message: string;
  fatal: boolean;
  response?: string;
}

type StatusConnectionProps = {
  message: string;
  status: string;
  error?: IError | null;
};

const StatusConnection = forwardRef<HTMLDivElement, StatusConnectionProps>(
  ({ message, status, error, ...props }, ref) => {
    return (
      <Styled.Container ref={ref} {...props}>
        {error ? (
          <>
            <span>Error: {error.code}</span>
            <span>{error.message}</span>
          </>
        ) : (
          <>
            <Styled.Ball status={status} /> <p>{message}</p>
          </>
        )}
      </Styled.Container>
    );
  },
);

StatusConnection.displayName = 'StatusConnection component';

export default StatusConnection;
