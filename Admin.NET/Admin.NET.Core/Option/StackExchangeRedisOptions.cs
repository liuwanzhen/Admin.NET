﻿namespace Admin.NET.Core;

/// <summary>
/// StackExchangeRedisOptions 配置选项
/// </summary>
public sealed class StackExchangeRedisOptions : IConfigurableOptions
{
    /// <summary>
    /// master名称
    /// </summary>
    public string ServiceName { get; set; }

    /// <summary>
    /// master访问密码
    /// </summary>
    public string Password { get; set; }

    /// <summary>
    /// 哨兵访问密码
    /// </summary>
    public string SentinelPassword { get; set; }

    /// <summary>
    /// 哨兵端口
    /// </summary>
    public List<string> EndPoints { get; set; }

    /// <summary>
    /// 默认库
    /// </summary>
    public int DefaultDb { get; set; }

    /// <summary>
    /// 主前缀
    /// </summary>
    public string MainPrefix { get; set; }

    /// <summary>
    /// SignalR前缀
    /// </summary>
    public string SignalRChannelPrefix { get; set; }
}