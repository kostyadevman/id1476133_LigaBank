import dayjs from 'dayjs';

export const formatDate = (date) => {
  return dayjs(date).format(`DD.MM.YYYY`).toString()
}

export const prettify = (out) => {
  return Math.round( ( out + Number.EPSILON ) * 10000 ) / 10000
}
