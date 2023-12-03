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

import { JobCreateTypeEnum } from './job-create-type-enum';
import {
    JobCreateTypeEnum,
} from ".";

/**
 * 
 *
 * @export
 * @interface AddJobDetailInput
 */
export interface AddJobDetailInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof AddJobDetailInput
     */
    id?: number;

    /**
     * 组名称
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    groupName?: string | null;

    /**
     * 作业类型FullName
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    jobType?: string | null;

    /**
     * 程序集Name
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    assemblyName?: string | null;

    /**
     * 描述信息
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    description?: string | null;

    /**
     * 是否并行执行
     *
     * @type {boolean}
     * @memberof AddJobDetailInput
     */
    concurrent?: boolean;

    /**
     * 是否扫描特性触发器
     *
     * @type {boolean}
     * @memberof AddJobDetailInput
     */
    includeAnnotations?: boolean;

    /**
     * 额外数据
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    properties?: string | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof AddJobDetailInput
     */
    updatedTime?: Date | null;

    /**
     * @type {JobCreateTypeEnum}
     * @memberof AddJobDetailInput
     */
    createType?: JobCreateTypeEnum;

    /**
     * 脚本代码
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    scriptCode?: string | null;

    /**
     * 作业Id
     *
     * @type {string}
     * @memberof AddJobDetailInput
     */
    jobId: string;
}
