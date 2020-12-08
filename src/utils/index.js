import dayjs from 'dayjs'
export function getNowDateFormat(){
  return dayjs(new Date().getSeconds()).format("YYYY-MM-DD HH:MM:SS");
}