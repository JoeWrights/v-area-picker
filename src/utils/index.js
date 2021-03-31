import areaCode from './area.js'

export const getAreaData = key => {
  if (!['province', 'city', 'county'].includes(key)) {
    throw new Error('[getAreaList]: 参数必须是"province", "city", "county"其中之一')
  }
  return areaCode[`${key}_list`]
}

export const getArea = () => {
  return areaCode
}

export const getProvinceList = () => {
  return Object.keys(getAreaData('province'))
    .map(code => {
      return {
        code,
        name: getAreaData('province')[code]
      }
    })
}

export const getCityListByProvince = provinceCode => {
  const codeArr = Object.keys(getAreaData('city'))
    .filter(code => code.slice(0, 2) === provinceCode.slice(0, 2))
  return codeArr.map(code => {
    return {
      code,
      name: getAreaData('city')[code]
    }
  })
}

export const getCountyListByCity = cityCode => {
  const codeArr = Object.keys(getAreaData('county'))
    .filter(code => code.slice(0, 4) === cityCode.slice(0, 4))
  return codeArr.map(code => {
    return {
      code,
      name: getAreaData('county')[code]
    }
  })
}
