import './style/index.scss';
import dayjs from 'dayjs';


console.log("Hello Parcel world!");

console.log(dayjs().format('MMMM DD YYYY')); // January 18 2021
console.log(dayjs().subtract(10, 'days').format('DD/MM/YYYY')); // 08/01/2021