import { laptopData } from "./data";
import styles from './LaptopConfig.module.scss'
const LaptopConfig = () => {
  const showOption = (processor) => (
    <option key={processor.name} value={processor.name}>
      {processor.name} (+${processor.price})
    </option>
  );
  const showRadio = (ram) => (
    <label key={ram.name}>
      <input type="radio" name="ram" />
      <span>
        {ram.name} (+${ram.price})
      </span>
    </label>
  );

  const showCheckBox = (opt) => (
    <label key={opt.name}>
      <input type="checkbox" name="opt" />

      <span>
        {opt.name} (+${opt.price})
      </span>
    </label>
  );
  return (
    <article className={styles.wrapper}>
      <h2>Конфігуратор ноутбука</h2>
      <label>
        <span>1. Виберіть процесор</span>
        <select>
          <option value="">-- оберіть процесор --</option>
          {laptopData.processors.map(showOption)}
        </select>
      </label>
      <div>
        <span>2. Оберіть обсяг оперативної пам’яті</span>
        {laptopData.ramVariants.map(showRadio)}
      </div>
      <div>
        <span>3. Додаткові опції</span>
        {laptopData.extraOptions.map(showCheckBox)}
      </div>
      <label><span>4. Кількість пристроїв</span>
      <input type="number" min={1} max={100}/> 
      </label>
      <button>Сформувати кошик</button>
    </article>
  );
};

export default LaptopConfig;
