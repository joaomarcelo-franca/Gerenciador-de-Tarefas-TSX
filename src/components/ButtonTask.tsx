import type { ReactNode } from "react";

interface ButtonTaskProps {
  onClickFunction: () => void;
  children: ReactNode;
}

function ButtonTask({ onClickFunction, children }: ButtonTaskProps) {
  return (
    <button
      onClick={onClickFunction}
      className="bg-slate-400 p-2 rounded-md text-white"
    >
      {children}
    </button>
  );
}
export default ButtonTask;
