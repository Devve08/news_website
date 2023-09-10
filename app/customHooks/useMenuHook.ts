"use client";

import { useAppDispatch } from "../kits/hooks";
import { handleMenuStatusAction } from "../redux/reducerLayer/menuReducer";

const useMenuHook = () => {
  const dispatch = useAppDispatch();
  const handleMenuStatus = () => {
    dispatch(handleMenuStatusAction());
  };
  return { handleMenuStatus };
};

export default useMenuHook;
