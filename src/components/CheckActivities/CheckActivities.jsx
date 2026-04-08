import { useEffect, useState } from "react";
import styles from "./checkActivities.module.scss";
const INACTIVE_TIME = 5000;
const CheckActivities = () => {
  const [isInActive, setIsInActive] = useState(false);
  useEffect(() => {
    let timerId = null;
    const pauseTimer = () => {
      clearTimeout(timerId);
      setIsInActive(false);
      timerId = setTimeout(() => {
        setIsInActive(true);
      }, INACTIVE_TIME);
    };
    window.addEventListener("click", pauseTimer);
    window.addEventListener("mousemove", pauseTimer);  
    window.addEventListener("keydown", pauseTimer);
    pauseTimer();
    return () => {
       window.removeEventListener("click", pauseTimer);
       window.removeEventListener("mousemove", pauseTimer);
       window.removeEventListener("keydown", pauseTimer);
       clearTimeout(timerId);
    };
  }, []);

  const handlerClick = () => {
    setIsInActive(false);
  };
  return (
    <>
      <div className={styles.container}>
        <h2>Перевірка активності</h2>
        <p>Рухайте мишкою або натискайте клавіші</p>
      </div>
      {isInActive && (
        <div className={styles.containerModal}>
          <p>❓ Ви ще тут?</p>
          <button onClick={handlerClick}>Я тут</button>
        </div>
      )}
    </>
  );
};

export default CheckActivities;
