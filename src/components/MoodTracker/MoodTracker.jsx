import { useState, useEffect, useContext } from "react";
import styles from "./MoodTracker.module.scss";
import { ClickContext } from "./../../context/index";
const moods = ["😄", "🙂", "😐", "😔", "😡"];
const loadHistoryMood = () => {
  try {
    const savedHistoryMood = localStorage.getItem("moodHistory");
    return savedHistoryMood ? JSON.parse(savedHistoryMood) : [];
  } catch {
    return [];
  }
};
const MoodTracker = () => {
  const { setCliclCount } = useContext(ClickContext);
  const [selectMood, setSelectMood] = useState("");
  const [historyMood, setHistoryMood] = useState(loadHistoryMood);
  useEffect(() => {
    localStorage.setItem("moodHistory", JSON.stringify(historyMood));
  }, [historyMood]);
  const showMood = (mood) => (
    <span
      key={mood}
      onClick={() => {
        setSelectMood(mood);
        const today = new Date().toLocaleDateString();
        const newMood = { date: today, mood };
        setHistoryMood((prev) => [...prev, newMood]);
      }}
    >
      {mood}
    </span>
  );
  const showMoodSave = (mood, index) => (
    <li key={index}>
      {mood.date} - {mood.mood}
    </li>
  );
  const clearHistoryMood = () => {
    setHistoryMood([]);
  };
  const countClick = () => setCliclCount((prev) => prev + 1);
  return (
    <section className={styles.tracker} onClick={countClick}>
      <h2>Як ти сьогодні?</h2>
      <div>{moods.map(showMood)}</div>
      {selectMood && <p>Твій вибір: {selectMood}</p>}

      <h3>Історія:</h3>
      <ul>{historyMood.map(showMoodSave)}</ul>
      <button onClick={clearHistoryMood}>Очистити</button>
    </section>
  );
};

export default MoodTracker;
