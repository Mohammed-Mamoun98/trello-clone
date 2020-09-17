import React, { useEffect } from "react";
import { TextField, CircularProgress } from "@material-ui/core";
import useFetch from "./../../hooks/useFetch";
import { useState } from "react";
import Child from "./child";

export default function About() {
  const [id, setId] = useState(1);
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const { data, loading, error } = useFetch(url, "GET", [id]);

  console.log({ loading, id });
  const handleChange = (e) => {
    const { value } = e.target;

    setId(+value);
  };
  return (
    <div className="">
      {/* <div className="flex">
        <TextField
          fullWidth
          style={{ maxWidth: "25rem" }}
          placeholder="enter todo id..."
          variant="outlined"
          onChange={handleChange}
        />
        {loading && <CircularProgress />}
      </div>
      <div className="">{JSON.stringify(data, null, 4)}</div>
      <div className="">{JSON.stringify(error, null, 4)}</div>
      <Child id={id} /> */}
    </div>
  );
}
