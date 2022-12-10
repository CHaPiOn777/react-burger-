import { AppDispatch, AppThunk, RootState } from './../../services/types/index';
import { useState } from "react";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

export function useForm(inputValues: any) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: any) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
}

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook; 
export const useDispatch = () => dispatchHook<AppDispatch & AppThunk>(); 