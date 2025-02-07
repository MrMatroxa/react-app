import { useContext } from 'react';
import { ToDosContext } from './ToDosContext';

const useToDosContext = () => useContext(ToDosContext);

export default useToDosContext;