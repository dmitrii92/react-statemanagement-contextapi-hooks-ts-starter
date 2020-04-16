import React from 'react';

export interface ContextInterface {
  removeEmployee(
    id: number
  ): void
};

const Context = React.createContext<ContextInterface | null>(null);

export default Context;