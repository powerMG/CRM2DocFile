<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
  </div>
</template>

<script>
import datePickerFactory from "./datePicker";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      value1: "",
      pickerOptions: {
        cellClassName: (data) => {
          let _currentData = datePickerFactory.getDate(data);
          datePickerFactory.initData();
          let _dataObj = datePickerFactory.assignDate({
            "2021/3/8": 5,
            "2021/3/9": 31,
            "2021/3/10": 61,
            "2021/3/11": 100,
            "2021/3/12": 99,
          });
          if (_dataObj[_currentData] > -1) {
            return `cell-num ${
              _dataObj[_currentData] < 100
                ? "cell-num-data-" + _dataObj[_currentData]
                : "cell-num-data"
            }`;
          }
        },
      },
    };
  },
  created() {},
  compute: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "./datePicker.less";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
