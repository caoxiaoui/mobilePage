

//全局过滤器，进行时间的格式化
Vue.filter("dateFormat", function (dateStr, pattern) {
  var dt = new Date(dateStr);//根据给定的时间字符串，得到特定的时间
  //比如 yyyy-mm-dd
  var y = dt.getFullYear();//年
  var m = (dt.getMonth() + 1).toString().padStart(2,"0");//月
  var d = dt.getDate().toString().padStart(2,"0");//日
  // return y + "-" + m + "-" + d;//通常都这么写
  // return `${y}-${m}-${d}`;//也可以这样写

  if (pattern.toLowerCase() === "yyyy-mm-dd") {
    return `${y}-${m}-${d}`;//也可以这样写
  } else {
    var hh = dt.getHours().toString().padStart(2,"0");
    var mm = dt.getMinutes().toString().padStart(2,"0");
    var ss = dt.getSeconds().toString().padStart(2,"0");
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }
})

var vm = new Vue({
  el: "#app",
  data: {
    id: "",
    name: "",
    age: "",
    gender: "",
    ctime: "",
    keywords: "",
    list: [
      { id: 1, name: "tom", age: 20, gender: "男", ctime: new Date() },
      { id: 2, name: "jam", age: 30, gender: "男", ctime: new Date() },
      { id: 3, name: "mark", age: 18, gender: "女", ctime: new Date() },
    ]
  },
  methods: {
    search(keywords) {//通过关键字搜索
      //第一种方法
      // var newList=[];
      // this.list.forEach(item =>{
      //   if(item.name.indexOf(keywords) != -1){
      //     newList.push(item)
      //   }
      // });
      // return newList;


      //第二种方法
      //filter方法是数组的过滤方法，返回一个新的数组，不会对原数组修改，return true 为想要的值，return false 则为去掉的值
      return this.list.filter(item => {
        if (item.name.includes(keywords)) {
          return item
        }
      })
    }
  }
})