import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Card({ token }) {
  const [store, setstore] = useState("");
  const { id } = useParams();
  useEffect(async () => {
    console.log(id, "id");
    const res = await axios.get(`https://cats-tuwaiqb.herokuapp.com/card/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    console.log(res.data);
    setstore(res.data);
  }, []);

  return (
    <div>
      <div>ييييي</div>
    </div>
  );
}
