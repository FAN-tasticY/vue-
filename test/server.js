const express = require('express')
const bodyParser = require('body-parser')

//你可知道有种东西叫做函数对象 这个东西他既是函数他也是对象你知道吗
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/getCategoryListData', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const dataObj = {
                    "code": 200,
                    "message": "成功",
                    "data": [
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 122
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 134
                                },
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "chrome",
                                            "categoryId": 21
                                        },
                                        {
                                            "categoryName": "IE/Edge",
                                            "categoryId": 22
                                        }
                                    ],
                                    "categoryName": "浏览器呀",
                                    "categoryId": 22
                                }
                            ],
                            "categoryName": "唉 我数据哪去了啊？",
                            "categoryId": 1123
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 2
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 2
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 2
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 3
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 3
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 3
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 4
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 4
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 4
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 5
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 5
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 5
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "我爱你",
                                            "categoryId": 6
                                        }
                                    ],
                                    "categoryName": "真的好玩",
                                    "categoryId": 6
                                }
                            ],
                            "categoryName": "数学、语文、政治地理",
                            "categoryId": 6
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 7
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 7
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 7
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 8
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 8
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 8
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 9
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 9
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 9
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 10
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 10
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 10
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 11
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 11
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 11
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 12
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 12
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 12
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 13
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 13
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 13
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 14
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 14
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 14
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 15
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 15
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 15
                        },
                        {
                            "categoryChild": [
                                {
                                    "categoryChild": [
                                        {
                                            "categoryName": "电子书",
                                            "categoryId": 16
                                        }
                                    ],
                                    "categoryName": "电子书刊",
                                    "categoryId": 16
                                }
                            ],
                            "categoryName": "图书、音像、电子书刊",
                            "categoryId": 16
                        }
                    ],
                    "ok": true
                }
    //然后使用json格式进行数据的传递
    res.send(dataObj)
})

app.get('/getBannerListData',(request,response)=>{
  const dataObj = {
      code:200,
      message:'状态获取成功',
      data:[
          {
            id:1,
            //对啊 这里匹配这个路由就是这样的  他再渲染出来之后寻找的就是本地里面的那个数据就完事了
            //imgUrl:'https://www.mercedes-benz.com.cn/content/dam/mb-cn/vehicles/amg-redesign/amg-c-63/1-kv/WKV-C63and63S.jpg' 
            imgUrl:'/images/banner1.jpg'
          },
          {
            id:2,
            imgUrl:'https://www.mercedes-benz.com.cn/content/dam/mb-cn/vehicles/amg-redesign/amg-c-63/2-%E6%80%A7%E8%83%BD/a2/%E6%80%A7%E8%83%BD-pc.jpg'
          },
          {
            id:3,
            imgUrl:'https://www.mercedes-benz.com.cn/content/dam/mb-cn/vehicles/amg-redesign/amg-c-63/1-kv/WKV-C63and63S.jpg'
          },
          {
            id:4,
            imgUrl:'https://www.mercedes-benz.com.cn/content/dam/mb-cn/vehicles/amg-redesign/amg-c-63/2-%E6%80%A7%E8%83%BD/a2/%E6%80%A7%E8%83%BD-pc.jpg'
          },
      ]
  }
  response.send(dataObj)
})

app.post('/postSearchList',(request,response)=>{
    console.log('有人请求数据了');
    const {
        pageNo,
        pageSize,
        category1Id,
        category2Id,
        category3Id,
        categoryName,
        keyword,
        props,
        trademark,
        order

    } = request.body
    //数据展示
    const dataDetailData = {
        "code": 200,
        "message": "成功",
        "data": {
            "trademarkList": [
                {
                    "tmId": 1,
                    "tmName": "苹果"
                },
                {
                    "tmId": 2,
                    "tmName": "华为"
                },
                {
                    "tmId": 3,
                    "tmName": "小米"
                },
                {
                    "tmId": 4,
                    "tmName": "诺基亚"
                },
                {
                    "tmId": 5,
                    "tmName": "小辣椒"
                },
                {
                    "tmId": 6,
                    "tmName": "天语"
                },
                {
                    "tmId": 7,
                    "tmName": "小黄蜂"
                },
                {
                    "tmId": 8,
                    "tmName": "荣耀"
                },
                {
                    "tmId": 9,
                    "tmName": "三星"
                },
            ],
            "attrsList": [
                {
                    "attrId": 1,
                    "attrName": "运行内存",
                    "attrValueList": [
                        "4G",
                        "6G",
                        "9G",
                        "16G"
                    ]
                },
                {
                    "attrId": 2,
                    "attrName": "电视尺寸",
                    "attrValueList": [
                        "100英寸",
                        "299英寸",
                        "699英寸"
                    ]
                },
                {
                    "attrId": 3,
                    "attrName": "出国旅游",
                    "attrValueList": [
                        "英国",
                        "美国",
                        "德国",
                        "法国",
                        "卢森堡",
                        "比利时",
                    ]
                },
                {
                    "attrId": 4,
                    "attrName": "大学",
                    "attrValueList": [
                        "清华大学",
                        "北京大学",
                        "南京大学",
                        "麻省理工",
                    ]
                },
                {
                    "attrId": 5,
                    "attrName": "价格",
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ]
                },
                {
                    "attrId": 6,
                    "attrName": "价格",
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ]
                },
                {
                    "attrId": 7,
                    "attrName": "价格",
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ]
                },
                {
                    "attrId": 8,
                    "attrName": "价格",
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ]
                },
                {
                    "attrId": 9,
                    "attrName": "价格",
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ]
                },
                {
                    "attrId": 11,
                    "attrName": "价格",
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ]
                },
                {
                    "attrId": 12,
                    "attrName": "价格",
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ]
                }
            ],
            "goodsList": [
                {
                    "id": 1,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 2,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 3,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 4,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 5,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 6,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 7,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 8,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 9,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 10,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 11,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 12,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 13,
                    "defaultImg": "/images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
            ],
            "total": 8,
            "pageSize": 2,
            "pageNo": 1,
            "totalPages": 4
        },
        "ok": true
    }

    //pageSize条件筛选
    let index = 0
    dataDetailData.data.goodsList = dataDetailData.data.goodsList.filter((dataObj)=>{
        index++
        return index <= pageSize
    })

    //keyword条件筛选
    dataDetailData.data.trademarkList = dataDetailData.data.trademarkList.filter((dataObj)=>{
      if(!keyword) return true
      return keyword === dataObj.tmName
    })

    //判断trademarkList是否为空
    function judgeTrademarkList(){
        if(dataDetailData.data.trademarkList.length === 0) {
            dataDetailData.data.trademarkList = [
                {
                    tmId:1,
                    tmName:'暂无此商品'
                }
            ]
        }
    }
    judgeTrademarkList()


    response.send(dataDetailData)
})

app.post('/getSearchSelectorList',(request,response)=>{
    const detailData = {
        "code":200,
        "status":"成功了",
        "data":{
            "category3Id": "61",
            "categoryName": "手机",
            "keyword": "小米",
            "order": "1:desc",
            "pageNo": 1,
            "pageSize": 10,
            "props": [
                "1:1700-2799:价格",
                "2:6.65-6.74英寸:屏幕尺寸"
            ],
            "trademark": "4:小米"
        }
    }
    response.send(detailData)
})


app.listen(3000,()=>{
  console.log('服务已启动 端口3000监听中');
})