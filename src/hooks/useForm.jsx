import { useState } from "react";

/**
 *
 * @param {*object} form 表单字段
 * @param {*object} rule 校验规则，正则 和 callback(必须return)
 */
const useForm = (form = {}, rule = {}) => {
  const [formData, setFormData] = useState(form);
  const func = event => {
    const name = event.target.name;
    let value = event.target.value;

    if (rule[name]) {
      // 是否存在校验
      if (typeof rule[name] === "function") {
        // callback
        value = rule[name](value);
      } else if (!rule[name].test(value)) {
        // reg
        value = formData[name];
      }
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return [formData, func];
};

export default useForm;
