import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { campSchema } from "./../../validation/index";

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
  experienc: "newbie",
  about: "",
  isReady: false,
};
const FormikCamp = () => {
  return (
    <div>
      <div>
        <h2>Заявка на участь</h2>
        <Formik
          initialValues={initialState}
          validationSchema={campSchema}
          onSubmit={() => {}}
        >
          {() => {
            return (
              <Form>
                <label>
                  <span>Ім'я або нікнейм</span>
                  <Field type="text" placeholder="Наприклад, PixelFox" name='nickname'/>
                  <ErrorMessage name='nickname'/>
                </label>
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
