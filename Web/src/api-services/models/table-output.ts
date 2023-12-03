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

import {
    
} from ".";

/**
 * 数据库表
 *
 * @export
 * @interface TableOutput
 */
export interface TableOutput {

    /**
     * 库定位器名
     *
     * @type {string}
     * @memberof TableOutput
     */
    configId?: string | null;

    /**
     * 表名（字母形式的）
     *
     * @type {string}
     * @memberof TableOutput
     */
    tableName?: string | null;

    /**
     * 实体名称
     *
     * @type {string}
     * @memberof TableOutput
     */
    entityName?: string | null;

    /**
     * 创建时间
     *
     * @type {string}
     * @memberof TableOutput
     */
    createTime?: string | null;

    /**
     * 更新时间
     *
     * @type {string}
     * @memberof TableOutput
     */
    updateTime?: string | null;

    /**
     * 表名称描述（功能名）
     *
     * @type {string}
     * @memberof TableOutput
     */
    tableComment?: string | null;
}
