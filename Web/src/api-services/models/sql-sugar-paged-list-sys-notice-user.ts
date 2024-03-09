/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { SysNoticeUser } from './sys-notice-user';
 /**
 * 分页泛型集合
 *
 * @export
 * @interface SqlSugarPagedListSysNoticeUser
 */
export interface SqlSugarPagedListSysNoticeUser {

    /**
     * 页码
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    page?: number;

    /**
     * 页容量
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    pageSize?: number;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    total?: number;

    /**
     * 总页数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    totalPages?: number;

    /**
     * 当前页集合
     *
     * @type {Array<SysNoticeUser>}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    items?: Array<SysNoticeUser> | null;

    /**
     * 是否有上一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    hasPrevPage?: boolean;

    /**
     * 是否有下一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysNoticeUser
     */
    hasNextPage?: boolean;
}
