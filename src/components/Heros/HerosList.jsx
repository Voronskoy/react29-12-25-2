import HeroCard from "./HeroCard";
import heroes from "./heros";
import styles from "./Heroes.module.css";
import { useState } from "react";
const HerosList = () => {
  const [selectHero, setSelectHero] = useState(null);
  const showHero = (hero) => (
    <HeroCard key={hero.id} hero={hero} setSelectHero={setSelectHero} />
  );
  return (
    <section className={styles.heroes}>
      <h2>Оберіть улюбленого героя</h2>
      <div>{heroes.map(showHero)}</div>
      <h2>Ви обрали</h2>
      {selectHero ? <HeroCard hero={selectHero} /> : <p>Героя ще не вибрано</p>}
    </section>
  );
};

export default HerosList;
