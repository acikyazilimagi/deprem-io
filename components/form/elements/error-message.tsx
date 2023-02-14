import React from 'react';

type TErrorMessage = {
  message: string;
};

function ErrorMessage({ message }: TErrorMessage) {
  return (
    <p>
      <label className="label">
        <span className="label-text-alt text-error">{message}</span>
      </label>
    </p>
  );
}

export default ErrorMessage;
