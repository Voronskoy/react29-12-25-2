import { useState } from "react";
import { laptopData } from "./data";
import styles from "./LaptopConfig.module.scss";
const LaptopConfig = () => {
  const [cpuSelect, setCpuSelect] = useState("");
  const [ramSelect, setRamSelect] = useState("");
  const [optSelect, setOptSelect] = useState([]);
  const [amountSelect, setAmountSelect] = useState(1);
  const [result, setResult] = useState(null);
  const showOption = (processor) => (
    <option key={processor.name} value={processor.name}>
      {processor.name} (+${processor.price})
    </option>
  );
  const changeRam = (event) => {
    setRamSelect(event.target.value);
  };
  const showRadio = (ram) => (
    <label key={ram.name}>
      <input
        type="radio"
        name="ram"
        value={ram.name}
        checked={ramSelect === ram.name}
        onChange={changeRam}
      />
      <span>
        {ram.name} (+${ram.price})
      </span>
    </label>
  );
  const changeOptSelect = (event) => {
    const value = event.target.value;
    const newOptSelect = optSelect.includes(value)
      ? optSelect.filter((o) => o !== value)
      : [...optSelect, value];
    setOptSelect(newOptSelect);
  };
  const showCheckBox = (opt) => (
    <label key={opt.name}>
      <input
        type="checkbox"
        name="opt"
        value={opt.name}
        checked={optSelect.includes(opt.name)}
        onChange={changeOptSelect}
      />

      <span>
        {opt.name} (+${opt.price})
      </span>
    </label>
  );
  const changeCpu = (event) => {
    setCpuSelect(event.target.value);
  };
  const changeAmount = (event) => {
    setAmountSelect(Number(event.target.value));
  };

  const calculate = () => {
    const cpuPrice =
      laptopData.processors.find((p) => p.name === cpuSelect)?.price || 0;
    const ramPrice =
      laptopData.ramVariants.find((r) => r.name === ramSelect)?.price || 0;
    const optionPrice = optSelect.reduce((acc, opt) => {
      const optPrice =
        laptopData.extraOptions.find((o) => o.name === opt)?.price || 0;
      return acc + optPrice;
    }, 0);
    const totalPrice = (optionPrice + ramPrice + cpuPrice) * amountSelect;
    const newResult = {
      cpuSelect,
      ramSelect,
      optSelect,
      amountSelect,
      totalPrice,
    };
    setResult(newResult);
  };
  return (
    <section className={styles.wrapper}>
      <article>
        <h2>Конфігуратор ноутбука</h2>
        <label>
          <span>1. Виберіть процесор</span>
          <select value={cpuSelect} onChange={changeCpu}>
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
        <label>
          <span>4. Кількість пристроїв</span>
          <input
            type="number"
            min={1}
            max={100}
            value={amountSelect}
            onChange={changeAmount}
          />
        </label>
        <button disabled={!(cpuSelect && ramSelect)} onClick={calculate}>
          Сформувати кошик
        </button>
      </article>
      {result && (
        <article>
          <h3>Ваше замовлення:</h3>
          <p>
            <em>Процесор:</em> {result.cpuSelect}
          </p>
          <p>
            <em>ОЗП:</em>
            {result.ramSelect}
          </p>
          <p>
            <em>Опції:</em>
            {result.optSelect.join(", ")}
          </p>
          <p>
            <em>Кількість:</em>
            {result.amountSelect}
          </p>
          <p>
            <em>Підсумкова сума:</em>
            {result.totalPrice}
          </p>
        </article>
      )}
    </section>
  );
};

export default LaptopConfig;
