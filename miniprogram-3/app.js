//app.js
App({
  data:{
    whether_login:true,
    name:"pony",
    password:"123",
    // 出发站和目的站
    from_station:"北京站",
    from_station_code:"BJP",
    to_station:"重庆站",
    to_station_code:"CQW",
    // 是点地出发还是目的地
    station_of_from_or_to: "",
    // 现在时间
    now_time:"",
    // 搜索得到的车次
    train_list:[],
    // 选择的车次，即将转到详情页
    train_list_selected:[],
    // 某个市的景点页
    municipal_scenery_list: [],
    // 某市名称
    municipal_name:"",
    // order_id
    order_id:"",
    // 服务器地址
    server:"https://songbin.club/alipay/index.php?",
    // 云数据库
    cloud_env: "pony-lfdc2"
  },
   "sitemapLocation": "sitemap.json"
})