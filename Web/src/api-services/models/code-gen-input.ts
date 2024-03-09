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

 /**
 * 代码生成参数类
 *
 * @export
 * @interface CodeGenInput
 */
export interface CodeGenInput {

    /**
     * 当前页码
     *
     * @type {number}
     * @memberof CodeGenInput
     */
    page?: number;

    /**
     * 页码容量
     *
     * @type {number}
     * @memberof CodeGenInput
     */
    pageSize?: number;

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    field?: string | null;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    order?: string | null;

    /**
     * 降序排序
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    descStr?: string | null;

    /**
     * 作者姓名
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    authorName?: string | null;

    /**
     * 类名
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    className?: string | null;

    /**
     * 是否移除表前缀
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    tablePrefix?: string | null;

    /**
     * 库定位器名
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    configId?: string | null;

    /**
     * 数据库名(保留字段)
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    dbName?: string | null;

    /**
     * 数据库类型
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    dbType?: string | null;

    /**
     * 数据库链接
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    connectionString?: string | null;

    /**
     * 生成方式
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    generateType?: string | null;

    /**
     * 数据库表名
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    tableName?: string | null;

    /**
     * 命名空间
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    nameSpace?: string | null;

    /**
     * 业务名（业务代码包名称）
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    busName?: string | null;

    /**
     * 功能名（数据库表名称）
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    tableComment?: string | null;

    /**
     * 菜单应用分类（应用编码）
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    menuApplication?: string | null;

    /**
     * 菜单父级
     *
     * @type {number}
     * @memberof CodeGenInput
     */
    menuPid?: number;

    /**
     * 支持打印类型
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    printType?: string | null;

    /**
     * 打印模版名称
     *
     * @type {string}
     * @memberof CodeGenInput
     */
    printName?: string | null;
}
