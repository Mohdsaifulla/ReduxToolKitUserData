import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const DisplayUser = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);
  return (
    <>
      {data.map((item, id) => {
        return <li key={id}>{item}</li>;
      })}
    </>
  );
};

export default DisplayUser;
