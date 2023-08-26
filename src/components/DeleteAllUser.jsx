import React from "react";
import { MdBluetoothConnected } from "react-icons/md";
import { clearUser } from "../store/slices/useSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";
const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteUsers = () => {
    console.log("hi");
    dispatch(clearUser());
  };
  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteUsers}>
        Clear Users
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
export default DeleteAllUser;
