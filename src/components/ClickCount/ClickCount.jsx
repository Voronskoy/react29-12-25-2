import { useContext } from "react";
import { ClickContext } from "./../../context/index";

const ClickCount = () => {
  const { cliclCount, setCliclCount } = useContext(ClickContext);
  const countClick = () => setCliclCount((prev) => prev + 1);
  return (
    <div onClick={countClick}>
      <h2>Глобальний лічильник кліків</h2>
      <p>Усього кліків: {cliclCount}</p>
    </div>
  );
};

export default ClickCount;
