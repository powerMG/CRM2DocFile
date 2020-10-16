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

