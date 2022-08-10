import moment from 'moment';

export default (val) => {
  return moment(val).format("YYYY年MM月DD日 HH时mm分ss秒");
};
