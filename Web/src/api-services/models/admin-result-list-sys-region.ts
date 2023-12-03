/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 515096995@qq.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { SysRegion } from './sys-region';
import {
    SysRegion,
} from ".";

/**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultListSysRegion
 */
export interface AdminResultListSysRegion {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultListSysRegion
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultListSysRegion
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultListSysRegion
     */
    message?: string | null;

    /**
     * 数据
     *
     * @type {Array<SysRegion>}
     * @memberof AdminResultListSysRegion
     */
    result?: Array<SysRegion> | null;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultListSysRegion
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultListSysRegion
     */
    time?: Date;
}
