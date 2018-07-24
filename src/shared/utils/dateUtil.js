import moment from 'moment';
// 2018040210301122
function getMomentObj(time) {
    return new moment(time, 'YYYYMMDDHHmmSS')
}

function parseWeek(day) {
    var week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
    let index = day.indexOf('(') + 1
    return day.substring(0, index) + week[day.charAt(index)] + day.substring(index + 1)
}

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  4月22日（周日）10:00  
 */
export const monthDateSingle = (val) => {
    let moment = getMomentObj(val);
    let res = moment.format('M月DD日(d)H:mm');
    return parseWeek(res);
}

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  2018-04-23 
 */
export const YYYYMMDDLinkHor = (val) => {
    let moment = getMomentObj(val);
    return moment.format('YYYY-MM-DD');
}

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  2018.04.23 
 */
export const YYYYMMDDLinkSpot = (val) => {
    let moment = getMomentObj(val);
    return moment.format('YYYY.MM.DD');
}   

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  2018年10月11日（周日）
 */
export const yearMonthWeek = (val) => {
    let momentDate = new moment(val, 'YYYYMMDD')
    let parse = momentDate.format('YYYY年MM月DD日(d)')
    return parseWeek(parse)
}  

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  10月11日（周日）
 */
export const monthWeek = (val) => {
    let momentDate = new moment(val, 'YYYYMMDD')
    let parse = momentDate.format('MM月DD日(d)')
    return parseWeek(parse)
}  

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  时间范围同一天： 10月11日（周日）11:00~12:00
 */
export const monthDateMulti = (val) => {
    let momentStart = getMomentObj(val.split('_')[0])
    let momentEnd = getMomentObj(val.split('_')[1])
    let res = `${momentStart.format('M月DD日(d) H:mm')}-${momentEnd.format('H:mm')}`
    return parseWeek(res)
} 

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  时间范围同一天： 10月11日（周日）11:00~12:00
 */
export const yearDateMulti = (val) => {
    let momentStart = getMomentObj(val.split('_')[0])
    let momentEnd = getMomentObj(val.split('_')[1])
    let res = `${momentStart.format('YYYY年MM月DD日(d) H:mm')}-${momentEnd.format('H:mm')}`
    return parseWeek(res)
} 

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  时间范围同一天： 2018年06月22日(周五) 10:25
 */
export const yearDateSingle = (val) => {
    let momentStart = getMomentObj(val)
    let res = momentStart.format('YYYY年MM月DD日(d) H:mm')
    return parseWeek(res)
} 

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  具体日期数字24
 */
export const getDay = (val) => {
    let momentStart =  new moment(val, 'YYYYMMDD')
    return momentStart.format('D')
}

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  具体月份数字十二
 */
export const getMonth = (val) => {
    let momentStart =  new moment(val, 'YYYYMM')
    let month = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
    let monthIndex = momentStart.format('M') - 1
    return `${month[monthIndex]}月`
}

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  具体星期几数字 周二
 */
export const getWeek = (val) => {
    let momentStart = moment(val).format('E');
    var week = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    return week[momentStart];
}

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  2018.10.11 14.:23:23
 */
export const dateDotHour = (val) => {
    let momentStart =  getMomentObj(val)
    return momentStart.format('YYYY.MM.DD HH:mm:SS')
}

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  2018.10.11
 */
export const dateDot = (val) => {
    let momentStart =  getMomentObj(val)
    return momentStart.format('YYYY.MM.DD')
}

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  2018.10.11(周五)
 */
export const dateDotWeek = (val) => {
    let momentStart =  getMomentObj(val)

    let res = momentStart.format('YYYY.MM.DD(d)')
    return parseWeek(res)
}

/**
 * @desc 时间格式数据
 * @param  {str} 
 * @return {str}  2018.10.11(周五) 10:22:15
 */
export const dateDotWeekHour = (val) => {
    let momentStart =  getMomentObj(val)

    let res = momentStart.format('YYYY.MM.DD(d) dateDotWeek')
    return parseWeek(res)
}

