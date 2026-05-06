import { useContext } from "react";
import { ClickContext } from "./../../context/index";

export const withClickContext = (Component) => {
  return (props) => {
    const { cliclCount, setCliclCount } = useContext(ClickContext);
    const countClick = () => setCliclCount((prev) => prev + 1);
    return (
      <Component {...props} cliclCount={cliclCount} countClick={countClick} />
    );
  };
};
