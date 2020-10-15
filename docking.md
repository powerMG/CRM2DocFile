# 对接流程

## 合作说明

> 目前和壁虎建立合作的方式：

1. 壁虎商务人员商务拓展
2. 通过合作伙伴介绍
3. 通过网站、等媒介直接联系壁虎建立合作

> 双方达成合作意向，签订商务合同。壁虎开始服务商户。

1. 壁虎有专门技术支持，帮助搭建车险机器人运行环境
2. 壁虎运营人员授权并开通顶级账号
3. 壁虎技术人员服务于对接
4. 壁虎运营长期帮助合作伙伴的解决各类问题

## 登录授权接口对接说明

请求地址：[http://identity.91bihu.me/api/v1/login/LoginApiOut](http://identity.91bihu.me/api/v1/login/LoginApiOut)

请求方式：GET

请求参数：

| 序号 | 字段     | 类型   | 说明         |
| ---- | -------- | ------ | ------------ |
| 1    | UserName | String | 登录的用户名 |
| 2    | Password | String | 登录的密码   |

请求响应：

`{"data":null,"code":0,"message":"用户名或密码错误"}`

## 页面对接说明

> 登录授权后可通过直接访问以下绝体地址进行系统内嵌

| 序号 | 嵌入 URL                                                       | 嵌入页面   |
| ---- | -------------------------------------------------------------- | ---------- |
| 1    | https://bot.91bihu.com/#/Customer/List                         | 客户列表页 |
| 2    | https://bot.91bihu.com/#/BatchRenewal/BatchRenewalIndex        | 批量续保页 |
| 3    | https://bot.91bihu.com/#/corrections/index                     | 批量续保页 |
| 4    | https://bot.91bihu.com/#/QuotationReceipt/QuotationReceiptList | 已出保单页 |
| 5    | https://bot.91bihu.com/#/SystemSetting/DefeatHistory           | 战败列表页 |
| 6    | https://bot.91bihu.com/#/Customer/RecycleList                  | 回收站页   |
