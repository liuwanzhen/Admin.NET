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

import { NoticeStatusEnum } from './notice-status-enum';
import { NoticeTypeEnum } from './notice-type-enum';
import {
    NoticeStatusEnum,NoticeTypeEnum,
} from ".";

/**
 * 
 *
 * @export
 * @interface UpdateNoticeInput
 */
export interface UpdateNoticeInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof UpdateNoticeInput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof UpdateNoticeInput
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof UpdateNoticeInput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof UpdateNoticeInput
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof UpdateNoticeInput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof UpdateNoticeInput
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof UpdateNoticeInput
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof UpdateNoticeInput
     */
    isDelete?: boolean;

    /**
     * 标题
     *
     * @type {string}
     * @memberof UpdateNoticeInput
     */
    title: string;

    /**
     * 内容
     *
     * @type {string}
     * @memberof UpdateNoticeInput
     */
    content: string;

    /**
     * @type {NoticeTypeEnum}
     * @memberof UpdateNoticeInput
     */
    type?: NoticeTypeEnum;

    /**
     * 发布人Id
     *
     * @type {number}
     * @memberof UpdateNoticeInput
     */
    publicUserId?: number;

    /**
     * 发布人姓名
     *
     * @type {string}
     * @memberof UpdateNoticeInput
     */
    publicUserName?: string | null;

    /**
     * 发布机构Id
     *
     * @type {number}
     * @memberof UpdateNoticeInput
     */
    publicOrgId?: number;

    /**
     * 发布机构名称
     *
     * @type {string}
     * @memberof UpdateNoticeInput
     */
    publicOrgName?: string | null;

    /**
     * 发布时间
     *
     * @type {Date}
     * @memberof UpdateNoticeInput
     */
    publicTime?: Date | null;

    /**
     * 撤回时间
     *
     * @type {Date}
     * @memberof UpdateNoticeInput
     */
    cancelTime?: Date | null;

    /**
     * @type {NoticeStatusEnum}
     * @memberof UpdateNoticeInput
     */
    status?: NoticeStatusEnum;
}
