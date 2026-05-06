import { withClickContext } from "../HOCs";

const ClickCount = (props) => {
  const { cliclCount, countClick } = props;
  return (
    <div onClick={countClick}>
      <h2>Глобальний лічильник кліків</h2>
      <p>Усього кліків: {cliclCount}</p>
    </div>
  );
};
const ClickCountWith = withClickContext(ClickCount);
export default ClickCountWith;
