import { useState, useEffect } from "react";
import styles from "./UploudFile.module.scss";
const UploudFile = () => {
  const [progress, setProgress] = useState(0);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    if (isLoad === false) return;
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          setIsLoad(false);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, [isLoad]);

  const startUploud = () => {
    setProgress(0);
    setIsLoad(true);
  };
  return (
    <section className={styles.wrapper}>
      <h2>Завантаження файлу</h2>
      <div className={styles.progresBar}>
        <div className={styles.progres} style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}%</p>
      <button disabled={isLoad} onClick={startUploud}>
        {isLoad ? "Завантаження..." : "Завантажити файл"}
      </button>
      {progress === 100 && <p>✅ Файл успішно завантажено</p>}
    </section>
  );
};

export default UploudFile;
