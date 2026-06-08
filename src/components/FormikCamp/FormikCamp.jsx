import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { campSchema } from "./../../validation/index";
import styles from './FormikCamp.module.scss'

const directionLabels = {
  "content-creator": "Контент-кріейтор",
  gamedev: "Геймдев",
  music: "Музика та бітмейкінг",
  streaming: "Стріми та відео",
};

const experienceLabels = {
  newbie: "Новачок",
  explorer: "Вже пробував",
  pro: "Впевнено в темі",
};
const initialState = {
  nickname: "",
  age: "",
  email: "",
  direction: "content-creator",
  experience: "newbie",
  about: "",
  isReady: false,
};
const FormikCamp = () => {
  const showOption = ([key, value]) => (
    <option key={key} value={key}>
      {value}
    </option>
  );
  const showRadio = ([key, value]) => (
    <label key={key}>
      <Field value={value} name="experience" type="radio" />
      <span>{value}</span>
    </label>
  );
  const handleSubmit = (values) => {
    alert('submit')
    console.log(values);
  };
  return (
    <div>
      <div>
        <h2>Заявка на участь</h2>
        <Formik
          initialValues={initialState}
          validationSchema={campSchema}
          onSubmit={handleSubmit}
        >
          {() => {
            return (
              <Form className={styles.form}>
                <label>
                  <span>
                    Ім'я або нікнейм <span>*</span>
                  </span>
                  <Field
                    type="text"
                    placeholder="Наприклад, PixelFox"
                    name="nickname"
                  />
                  <ErrorMessage name="nickname" />
                </label>
                <div className={styles.row}>
                  <label>
                    <span>Вік<span>*</span></span>
                    <Field type="number" name="age" placeholder="12" />
                    <ErrorMessage name="age" />
                  </label>
                  <label>
                    <span>email<span>*</span></span>
                    <Field
                      type="email"
                      name="email"
                      placeholder="camp@example.com"
                    />
                    <ErrorMessage name="email" />
                  </label>
                </div>
                <label>
                  <span>Напрям табору<span>*</span></span>
                  <Field as="select" name="derection">
                    {Object.entries(directionLabels).map(showOption)}
                  </Field>
                </label>
                <fieldset>
                  <legend>Рівень досвіду<span>*</span></legend>
                  <div>{Object.entries(experienceLabels).map(showRadio)}</div>
                  <ErrorMessage name="experience" />
                </fieldset>
                <label>
                  <span>
                    Чому саме тебе треба взяти?<span>*</span>
                  </span>
                  <Field
                    as="textarea"
                    name="about"
                    placeholder="Розкажи, що ти любиш створювати і який вайб принесеш у табір."
                  />
                </label>
                <label>
                  <Field type="checkbox" name="isReady" />
                  <span>Готовий(-а) брати участь у мінічеленджах табору</span>
                </label>
                <button type="submit">Надіслати заявку</button>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div>
        <h2>Порада</h2>
        <p>
          Напиши в мотивації щось конкретне: який контент хочеш створити, яку
          гру мрієш зібрати або який трек записати. Так заявка виглядатиме
          сильніше.
        </p>
      </div>
    </div>
  );
};

export default FormikCamp;
