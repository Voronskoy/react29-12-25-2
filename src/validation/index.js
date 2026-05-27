import * as Yup from "yup";

export const campSchema = Yup.object({
  nickname: Yup.string()
    .trim()
    .min(2, "Нікнейм має містити щонайменше 2 символи.")
    .required("Обов'язкове поле"),
  age: Yup.number().min(12).max(18).required("Обов'язкове поле"),
  email: Yup.string().trim().email().required("Обов'язкове поле"),
  direction: Yup.string().required("Обов'язкове поле"),
  experienc: Yup.string().required("Обов'язкове поле"),
  about: Yup.string().trim().required("Обов'язкове поле"),
  isReady: Yup.boolean(),
});
