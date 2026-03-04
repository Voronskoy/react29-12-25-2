import React from "react";
import styles from './Heroes.module.css'
const HeroCard = (props) => {
  const { hero, setSelectHero } = props;
  const {id, name, power, rating } = hero
  return (
    <article onClick={()=>setSelectHero(hero)} className={styles.hero}>
      <h3>{name}</h3>
      <div>
        <span>Power:{power}</span>
        <div>
          {rating} <button>👍</button>
          <button>👎</button>
        </div>
      </div>
    </article>
  );
};

export default HeroCard;
