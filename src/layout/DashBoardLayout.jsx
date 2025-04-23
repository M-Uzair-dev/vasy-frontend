import React from "react";
import SearchInput from "../components/UI/Inputs/SearchInput";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";

const DashBoardLayout = ({
  children,
  onChange,
  showSearch,
  heading,
  button,
  button1,
  onClick,
}) => {
  return (
    <div className="px-6 pt-9">
      <div className="flex justify-between items-center">
        <h1 className="text-secondary text-2xl font-bold">{heading}</h1>
        <div className="flex justify-center items-center gap-5">
          {button && (
            <Button
              outline
              title="+ Add New"
              onclick={onClick}
              className="px-7 py-1"
            />
          )}
          {button1 && (
            <Button
              outline
              title="+ Request new"
              onclick={onClick}
              className="px-7 py-1"
            />
          )}
          {false && <SearchInput onchange={onChange} />}
        </div>
      </div>
      <div className="mt-9"></div>
      {children}
    </div>
  );
};

export default DashBoardLayout;
