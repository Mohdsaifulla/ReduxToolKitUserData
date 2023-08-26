import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/useSlice";

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  const deleteUsers = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <>
      {data.map((item, id) => {
        return (
          <li key={id} className="name-set">
            {`${id + 1} ${item}`}
            <button className="btn-delete" onClick={() => deleteUsers(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </>
  );
};

export default DisplayUser;
