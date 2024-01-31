import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/palkrashish")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });

  return (
    <>
      <div className="bg-graay-400">
      <h3>Github user name  <b>{data.name}</b> </h3>
        <h3>How many user follow me <b>{data.followers}</b> </h3>

        <img src=" {data.avatar_url}"alt="Git Pic"  width={200}/>
      </div>
    </>
  );
};

export default Github;
