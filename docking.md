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

请求地址：[http://identity.91bihu.me/connect/token](http://identity.91bihu.me/connect/token)

请求方式：POST

请求参数：

| 序号 | 字段     | 类型   | 说明         |
| ---- | -------- | ------ | ------------ |
| 1    | UserName | String | 登录的用户名 |
| 2    | Password | String | 登录的密码   |
| 3    | grant_type | String | 默认使用"password" |
| 4    | scope | String | 默认使用"employee_center car_business smart_car_mgts" |
| 5    | client_id | String | 默认使用"bot" |
| 6    | client_secret | String | 默认使用"secret" |

请求响应：
`{"access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjlDRDQ4NDI3QzVDMEJCMjBBQTU5NThGODcyQTFEODI2RjNCQUZEQzQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJuTlNFSjhYQXV5Q3FXVmo0Y3FIWUp2TzZfY1EifQ.eyJuYmYiOjE2MDI4MzkwMTgsImV4cCI6MTYwNDEzNTAxOCwiaXNzIjoiaHR0cDovL2lkZW50aXR5LjkxYmlodS5tZSIsImF1ZCI6WyJodHRwOi8vaWRlbnRpdHkuOTFiaWh1Lm1lL3Jlc291cmNlcyIsImNhcl9idXNpbmVzcyIsImVtcGxveWVlX2NlbnRlciIsInNtYXJ0X2Nhcl9tZ3RzIl0sImNsaWVudF9pZCI6ImJvdCIsInN1YiI6IjEwMiIsImF1dGhfdGltZSI6MTYwMjgzOTAxOCwiaWRwIjoibG9jYWwiLCJlbXBsb3llZUlkIjoiMTAyIiwiY29tcElkIjoiMTAyIiwidXNlck5hbWUiOiLpqazlsI_nv6DpobbnuqciLCJ1c2VyQWNjb3VudCI6Im1heGlhb2N1aSIsIkRlcHRJZCI6IjEiLCJJc0FkbWluIjoiVHJ1ZSIsIlJvbGVUeXBlIjoiMyIsIlJvbGVJZHMiOiI1NyIsImxvZ2luQ2xpZW50VHlwZSI6IjIiLCJsb2dpblN0YW1wIjoiMTYwMjgzOTAxOC02ZDI0YjJhMC1kMDg2LTQ4YmUtYjRlYi0zYTkzOGMwYzg2ZDciLCJzY29wZSI6WyJjYXJfYnVzaW5lc3MiLCJlbXBsb3llZV9jZW50ZXIiLCJzbWFydF9jYXJfbWd0cyJdLCJhbXIiOlsicHdkIl19.U53k-DjrUpRfkCzhosdiKAd1dQjv4mr26QIr7gFNHv-Hpq32aRM-1vBooNkLJoA1gqP4QBSwAc7dHvknTl5Z7S7useTUzyDOn-eHHdfTa8yt0rQPyBqFz0WM0KnOyXO8uHwOHxrqZFhA8MvHXt3m8Zvwwa0my-F776KJGsIU1ycgoI7xhgSNJH05NvDXqwqWI29YGq3un5Mh7vKbrXd08AmoWkcaaZNPnQOYSQasa683kZlEb85hpnmgEu75K9KzveEZVnJyrntrqo5yCx-a5flGHZrK-5b7p079H7S9s2RaEzSCOM8G0YqR3VMsiAVFXEnXAhdOmcT-zuUUFS8UQA","expires_in":1296000,"token_type":"Bearer"}`

## 脚本导入及调用
> 我们帮助您封装了请求授权的XMLHttpRequest，您可以直接使用如下代码，或者自己发起请求，请求脚本内容如下：

```
function RequestTokeInfo(options, callback) {
    this.requestUrl = options.requestUrl;
    this.params = options.params
    let requestData = Object.keys(this.params).map((key) => `${key}=${encodeURIComponent(this.params[key])}`)
        .join("&");
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        let res = JSON.parse(this.responseText);
        if (typeof callback === "function") {
            callback(res)
        }
    });
    oReq.open("POST", this.requestUrl);
    oReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    oReq.send(requestData);
}
```

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

## 下载
Demo下载地址：[V1.0.0](http://powerwxm.com/Demot.rar)

脚本下载地址：[httpRequestToken.js?v1.0.0](http://powerwxm.com/httpRequestToken.js)
