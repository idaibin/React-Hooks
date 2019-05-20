import { useState, useCallback } from "react";

/**
 * @param {*object} form 表单字段
 * @param {*object} rule 校验规则，正则 和 callback(必须return)
 */
const useForm = (form = {}, rule = {}) => {
  const [formData, setFormData] = useState(form)
  const func = useCallback((event) => {
    const name = event.target.name
    let value = event.target.value

    if (rule[name]) { // 是否存在校验
      if (typeof rule[name] === 'function') { // callback
        value = rule[name](value)
      } else if (!rule[name].test(value)) { // reg
        value = formData[name]
      }
    }
    setFormData({
      ...formData,
      [name]: value
    })
  })
  return [formData, func]
}

/**
 * @param {*string} initValue input值
 * @param {*object} property input属性
 */
const useInput = (initValue = '', property = { type: 'text' }) => {
  const [value, setValue] = useState(initValue)
  return {
    ...property,
    value,
    onChange: event => {
      setValue(event.target.value)
    }
  }
}

/**
 * @param {*string} initValue input值
 */
const useInputNumber = (initValue = '', property = {}) => {
  const input = useInput(initValue, {
    ...property,
    type: 'number'
  })
  return input
}

/**
 * @param {*string} initValue input值
 */
// const useInputPhone = (initValue = '') => {
//   const input = useInput(initValue, { type = 'number' })
//   return input
// }

export { useForm, useInput, useInputNumber }
