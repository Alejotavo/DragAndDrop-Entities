import "./App.css";
import EntitiesLayoutTree from "./components/EntitiesLayoutTree/EntitiesLayoutTree";
import { fetchData } from "../src/services/service";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("data", data);
  return (
    <div style={{ display: "flex" }}>
      <EntitiesLayoutTree data={data} />
    </div>
  );
}

export default App;
