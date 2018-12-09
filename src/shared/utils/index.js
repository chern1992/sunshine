/**
 * 工具类集合
 * @author  ChenDC
 *
 * 使用说明：
 *
 * import  Utils from '../../../public/utils';
 *
 * 深复制简单实用
 * let new_obj =   Utils.clone(obj);
 *
 * 将保存后返回的数据更新到页面中
 * 调用完方法后，allD为更新后的数据结构对象
 * Utils.filterResult(allD,data[tableid].rows);
 *
 *
 * 表格数查询启用状态值转化
 * 改方法在获取后台数据放置到页面时调用，已经获取页面数据传递给后台时调用
 * let  rows = Utils.convertGridEnablestate(rows);
 *
 * 过来表格删除的行
 * @param  rows 页面表格中行数据的数组
 * Utils.filterDelRows(tableData.rows);
 *
 *
 * 后台返回表格数处理
 * @param   props   prpos参数
 * @param   tableid 表格id
 * @param   data    后台返回数据对象
 * @param   empty   数据为空时执行回调方法
 * @param   notEmpty    数据不为空时执行回调方法
 * @param   after   处理完成后执行回到方法
 * Utils.handleTableReData({
 		data : data,
		tableid : tableid,
		props : this.props,
		empty : (data) => {

		},
		notEmpty : (data)=>{
			data[tableid].rows.forEach(function(item, index, array){
				if (item.values['doclevel'].value === '1') {
					item.values['code'].disabled = 'on';
					item.values['name'].disabled = 'on';
					item.values['mngctlmode'].disabled = 'on';
					item.values['isgrade'].disabled = 'on';
				}
			});

		},
		after : (data)=> {
			allTableData = data[tableid];
			this.updateButtonStatus();
		}
	});
 */

import {filterResult,convertGridEnablestate,filterDelRows,handleTableReData } from './tableUtil';
import deepClone from './deepClone';

import BaseUtils from './base.js'

import {checkHasChildren,dealTreeData, convertTree} from './treeUtil';
import {checkHasProps} from './formUtil';
import {arrayEqual, objectEqual, strEqual} from './equalUtil';
import {isEmptyObj, isEmptyArr} from './emptyUtil';
import {hasClass, addClass, removeClass} from './classNameUtil';
import {getCookie, setCookie, removeCookie} from './cookieUtil';
import Storage from './storageUtil';
import {getExplore, getOS, phoneModules, isPhoneDevice, isIpad, testApp, openApp, getUUID} from './deviceUtil';
import {lunCheck, phoneCheck, urlCheck, isInteger} from './typeRegUtil';
import {parseQueryString, urlHost, urlHostName, urlPost, urlProtocol, fullScreen, exitFullScreen} from './urlUtil';
import {cutStr, getRandomNum, random, smalltoBIG} from './numberUtil';
import {monthDateSingle, YYYYMMDDLinkHor, YYYYMMDDLinkSpot, yearMonthWeek, monthWeek, monthDateMulti, 
		yearDateMulti, yearDateSingle, getDay, getMonth, dateDotHour, dateDot, dateDotWeek, dateDotWeekHour, getWeek} from './dateUtil';
import {strContains, copyToClipboard} from './stringUtil';
import {chunk, compact, dedupe, orderBy, union, complement, interset, minus, unique, uniqueByObj, indexof, removeEle,
		removeObj} from './arrayUtil';

var Utils = {
  clone : deepClone,
  filterResult : filterResult,
  convertGridEnablestate : convertGridEnablestate,
  filterDelRows : filterDelRows,
  handleTableReData : handleTableReData,
  checkHasChildren:checkHasChildren,
  checkHasProps:checkHasProps,
	dealTreeData:dealTreeData,
	arrayEqual: arrayEqual,
	isEmptyObj: isEmptyObj,
	isEmptyArr: isEmptyArr,
	hasClass: hasClass,
	addClass: addClass,
	removeClass: removeClass,
	getCookie: getCookie,
	setCookie: setCookie,
	removeCookie: removeCookie,
	setStorage: Storage.setStorage,
	getStorage: Storage.getStorage,
	removeStorage: Storage.removeStorage,
	clearStorage: Storage.clearStorage,
	getExplore: getExplore,
	getOS: getOS,
	phoneModules: phoneModules,
	isPhoneDevice: isPhoneDevice,
	isIpad: isIpad,
	testApp: testApp,
	openApp: openApp,
	lunCheck: lunCheck,
	phoneCheck: phoneCheck,
	urlCheck: urlCheck,
	parseQueryString: parseQueryString,
	urlHost: urlHost,
	urlHostName: urlHostName,
	urlPost: urlPost,
	urlProtocol: urlProtocol,
	cutStr: cutStr,
	monthDateSingle: monthDateSingle,
	monthDateSingle: monthDateSingle, 
	YYYYMMDDLinkHor: YYYYMMDDLinkHor,
	YYYYMMDDLinkSpot: YYYYMMDDLinkSpot, 
	yearMonthWeek: yearMonthWeek, 
	monthWeek: monthWeek,
	monthDateMulti: monthDateMulti, 
	yearDateMulti: yearDateMulti, 
	yearDateSingle: yearDateSingle,
	getDay: getDay,
	getMonth: getMonth,
	dateDotHour: dateDotHour,
	dateDot: dateDot,
	dateDotWeek: dateDotWeek,
	dateDotWeekHour: dateDotWeekHour,
	getWeek: getWeek,
	getRandomNum: getRandomNum,
	random: random,
	strContains: strContains,
	compact: compact,
	copyToClipboard: copyToClipboard,
	dedupe: dedupe,
	fullScreen: fullScreen,
	exitFullScreen: exitFullScreen,
	convertTree: convertTree,
	smalltoBIG: smalltoBIG,
	isInteger: isInteger,
	objectEqual: objectEqual,
	strEqual: strEqual,
	orderBy: orderBy,
	union: union,
	chunk: chunk,
	complement: complement,
	interset: interset,
	minus: minus,
	unique: unique,
	uniqueByObj: uniqueByObj,
	indexof: indexof,
	removeEle: removeEle,
	removeObj: removeObj,
	getUUID: getUUID
};

export default Utils;
export {BaseUtils}

