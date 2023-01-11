const express = require('express')
const bodyParser = require('body-parser')
const { response, request } = require('express')
const fs = require('fs')

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
                            "categoryName": "手机、电视、电子手表",
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
                    "price": 1111,
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
                    "price": 2222,
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
                    "price": 3333,
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
                    "price": 4444,
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
                    "price": 5555,
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
                    "price": 6666,
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
                    "price": 7777,
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
                    "price": 8888,
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
                    "price": 9999,
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
                    "price": 10000,
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
                    "price": 999999,
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
                    "price": 666666666,
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
                    "price": 66666666648,
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
            "total": 16,
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


    function judgeOrder(){
        let arr = []
        if(order.split(':')[1] === 'desc'){
            //倒序排列
            /* for(let i=0;i<dataDetailData.data.goodsList.length;i++){
                // arr.push(dataDetailData.data.goodsList[i].price)
                dataDetailData.data.goodsList[i].price = dataDetailData.data.goodsList[9-i].price
            } */

            //管他什么排序呢 反正就是排序
            for(let i=0;i<dataDetailData.data.goodsList.length;i++){
                for(let j=i+1;j<dataDetailData.data.goodsList.length;j++){
                    if(dataDetailData.data.goodsList[i].price < dataDetailData.data.goodsList[j].price){
                        //首先借助一个变量 将那个数值存起来
                        let temp = dataDetailData.data.goodsList[i].price
                        dataDetailData.data.goodsList[i].price = dataDetailData.data.goodsList[j].price
                        dataDetailData.data.goodsList[j].price = temp 
                    }
                }
            }
        }
    }


    judgeTrademarkList()
    judgeOrder()


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

app.get('/getDetailInfo/:skuId',(request,response)=>{
  const dataObj = {
    "code": 200,
    "message": "成功",
    "data": {
        "valuesSkuJson": "{\"3|5|7\":6,\"3|4|7\":2,\"2|4|7\":3,\"1|5|7\":5,\"1|4|7\":1,\"2|5|7\":4}",
        "price": 5499,
        "categoryView": {
            "id": 61,
            "category1Id": 2,
            "category1Name": "手机",
            "category2Id": 13,
            "category2Name": "手机通讯",
            "category3Id": 61,
            "category3Name": "手机"
        },
        "spuSaleAttrList": [
            {
                "id": 1,
                "spuId": 1,
                "baseSaleAttrId": 1,
                "saleAttrName": "选择颜色",
                "spuSaleAttrValueList": [
                    {
                        "id": 1,
                        "spuId": 1,
                        "baseSaleAttrId": 1,
                        "saleAttrValueName": "黑色",
                        "saleAttrName": "选择颜色",
                        "isChecked": "0"
                    },
                    {
                        "id": 2,
                        "spuId": 2,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "白色",
                        "saleAttrName": "选择颜色",
                        "isChecked": "0"
                    },
                    {
                        "id": 3,
                        "spuId": 3,
                        "baseSaleAttrId": 3,
                        "saleAttrValueName": "绿色",
                        "saleAttrName": "选择颜色",
                        "isChecked": "0"
                    },
                    {
                        "id": 4,
                        "spuId": 4,
                        "baseSaleAttrId": 4,
                        "saleAttrValueName": "蓝色",
                        "saleAttrName": "选择颜色",
                        "isChecked": "0"
                    },
                    {
                        "id": 5,
                        "spuId": 5,
                        "baseSaleAttrId": 5,
                        "saleAttrValueName": "银色",
                        "saleAttrName": "选择颜色",
                        "isChecked": "0"
                    },
                
                ]
            },
            {
                "id": 2,
                "spuId": 1,
                "baseSaleAttrId": 2,
                "saleAttrName": "选择版本",
                "spuSaleAttrValueList": [
                    {
                        "id": 4,
                        "spuId": 1,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "64GB",
                        "saleAttrName": "选择版本",
                        "isChecked": "0"
                    },
                    {
                        "id": 5,
                        "spuId": 1,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "128GB",
                        "saleAttrName": "选择版本",
                        "isChecked": "0"
                    },
                    {
                        "id": 6,
                        "spuId": 1,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "256GB",
                        "saleAttrName": "选择版本",
                        "isChecked": "0"
                    },
                    {
                        "id": 7,
                        "spuId": 1,
                        "baseSaleAttrId": 2,
                        "saleAttrValueName": "1TB",
                        "saleAttrName": "选择版本",
                        "isChecked": "0"
                    },


                ]
            },
            {
                "id": 3,
                "spuId": 1,
                "baseSaleAttrId": 3,
                "saleAttrName": "选择套装",
                "spuSaleAttrValueList": [
                    {
                        "id": 7,
                        "spuId": 1,
                        "baseSaleAttrId": 3,
                        "saleAttrValueName": " 官方标配",
                        "saleAttrName": "选择套装",
                        "isChecked": "0"
                    },
                    {
                        "id": 8,
                        "spuId": 1,
                        "baseSaleAttrId": 3,
                        "saleAttrValueName": " 旗舰套装",
                        "saleAttrName": "选择套装",
                        "isChecked": "0"
                    },
                    {
                        "id": 9,
                        "spuId": 1,
                        "baseSaleAttrId": 3,
                        "saleAttrValueName": " 顶级套装",
                        "saleAttrName": "选择套装",
                        "isChecked": "0"
                    },

                ]
            }
        ],
        "skuInfo": {
            "id": 2,
            "spuId": 1,
            "price": 5499,
            "skuName": "Apple iPhone 11 (A2223) 64GB 红色 移动联通电信双卡双待",
            "skuDesc": "主体\n入网型号\nA2223\n品牌\nApple\n产品名称\niPhone 11\n上市年份\n2019年\n上市月份\n9月\n基本信息\n机身颜色\n红色\n机身长度（mm）\n150.9\n机身重量（g）\n194\n机身材质工艺\n以官网信息为准\n机身宽度（mm）\n75.7\n机身材质分类\n玻璃后盖\n机身厚度（mm）\n8.3\n运营商标志或内容\n无",
            "weight": "0.47",
            "tmId": 1,
            "category3Id": 61,
            "skuDefaultImg": "/images/mobile01.png"        ,
            "isSale": 1,
            "skuImageList": [
                {
                    "id": 6,
                    "skuId": 2,
                    "imgName": "63e862164165f483.jpg",
                    "imgUrl": "/images/s1.png"         ,
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 7,
                    "skuId": 2,
                    "imgName": "63e862164165f483.jpg",
                    "imgUrl": "/images/s2.png"         ,
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 8,
                    "skuId": 2,
                    "imgName": "63e862164165f483.jpg",
                    "imgUrl": "/images/s3.png"         ,
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 9,
                    "skuId": 2,
                    "imgName": "63e862164165f483.jpg",
                    "imgUrl": "/images/s1.png"         ,
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 10,
                    "skuId": 2,
                    "imgName": "63e862164165f483.jpg",
                    "imgUrl": "/images/s2.png"         ,
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 11,
                    "skuId": 2,
                    "imgName": "63e862164165f483.jpg",
                    "imgUrl": "/images/s3.png"         ,
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 12,
                    "skuId": 2,
                    "imgName": "63e862164165f483.jpg",
                    "imgUrl": "/images/s1.png"         ,
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 13,
                    "skuId": 2,
                    "imgName": "63e862164165f483.jpg",
                    "imgUrl": "/images/s2.png"         ,
                    "spuImgId": 2,
                    "isDefault": "0"
                },
                {
                    "id": 14,
                    "skuId": 2,
                    "imgName": "63e862164165f483.jpg",
                    "imgUrl": "/images/s3.png"         ,
                    "spuImgId": 2,
                    "isDefault": "0"
                },
            ],
            "skuAttrValueList": [
                {
                    "id": 6,
                    "attrId": 1,
                    "valueId": 6,
                    "skuId": 2
                },


            ],
            "skuSaleAttrValueList": null
        }
    },
    "ok": true
}
    response.send(dataObj)
})

//这个参数好像是params参数啊
app.post('/postAddShopingCart/:skuId/:skuNum',(request,response)=>{
    const dataObj = {
        "code": 200,
        "message": "成功",
        "data": null,
        "ok": true
    }
    const dataObj2 = {
        "code": 302,
        "message": "失败",
        "data": null,
        "ok": true
    }
    let skuId = request.params.skuId
    let skuNum = request.params.skuNum
    if(skuId<1000){
        response.send(dataObj)
    }else{
        response.send(dataObj2)
    }
})

app.get('/getCarList/:num/:goodsNum/:index',(request,response)=>{
  let dataObj = {
    "code": 200,
    "message": "成功",
    "data": [],
    "ok": true
}

function countNum(num){
    for(let i = 1;i<=num;i++){
        //整个浅复制试试 不好使 难道是闭包的概念？
        // showData = {...showData}
        const showData = {
            "id": 61,
            "userId": "2",
            "skuId": 4,
            "cartPrice": 5999,
            "skuNum": 4,
            "imgUrl": "/images/mobile01.png",
            "skuName": "Apple iPhone 11 (A2223) ",
            "isChecked": 1,
            "skuPrice": 5999,
            "goodsNum":1
        }
        showData.skuPrice = Math.ceil(Math.random()*100+5000)
        dataObj.data.push(showData)
    }

    // dataObj.data = dataObj.data.map((item)=>{
    //    showData.skuPrice = Math.random()*100+5000
    //    return showData
    // })
}
function changeGoodsNum(index,goodsNum){
    dataObj.data[index].goodsNum = goodsNum 
}

let {num,index,goodsNum} = request.params 
// console.log(index,1);
if(index === 'undefined'){
    if(num) countNum(num)
    fs.writeFile('data.txt', JSON.stringify(dataObj.data) , (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('文件写入成功了');
        }
    });
}
function modify(index,goodsNum){
     if(index != 'undefined'){
        try {
            const data = fs.readFileSync('data.txt');
            dataObj.data = JSON.parse(data)
          } catch (error) {
            console.error(error);
          }      
        //更改数据
        dataObj.data[index].goodsNum = goodsNum

        //写入数据
        fs.writeFile('data.txt', JSON.stringify(dataObj.data) , (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('文件写入成功了');
            }
        });
    }
}
//首次上来该函数不执行
modify(index,goodsNum)



response.send(dataObj)


})
//打不死你的终将让你更强大！！！


//添加用户信息
app.get('/addUserInfo/:userInfo',(request,response)=>{
    let data = request.params.userInfo

    const obj = {
        "code":200,
        "data":null
    }
    let dataArr = []

    const readData = fs.readFileSync('message.txt')
    //buffer数据可以看length
    if(readData.length === 0){
        dataArr.push(data)
    }else{
        JSON.parse(readData.toString()).forEach((item)=>{
          dataArr.push(item)
        })
        // console.log(JSON.parse(readData.toString()));
        dataArr.push(data)
    }


    fs.writeFileSync('message.txt', JSON.stringify(dataArr) ,(err) => {
        if (err) {
          console.error(err);
          return;
        }
    });
    response.send(obj)
})

//读取用户信息
app.get('/getUserInfo/:userInfo',(request,response)=>{
    //将对象变为字符串就可以进行比较了
    let data = request.params.userInfo
    let flag = false
    const obj = {
        "code":200,
        "token":"ab1hdj23djijdwwerr8aha90ad7g7a8gsdxc7z7v6b5d5g4gsa10a"
    }
    const obj2 = {
        "code":300
    }
    const readData = fs.readFileSync('message.txt');
    JSON.parse(readData.toString()).forEach((item)=>{
        //flag为true说明该用户存在
      if(item === data) flag = true
    })
    if(flag){
        response.send(obj)
    }else{
        response.send(obj2)
    }
})

//获取fantastic用户名称
app.get('/getPersonInfo',(request,response)=>{
  const obj = {
      "name":'Fantastic!',
      "code":200
  }
  response.send(obj)
})

app.get('/getShopingCartInfo',(request,response)=>{
  let obj = {
      "code":200,
      "data":[]
  }
  //读取文件内容
  const readData = fs.readFileSync('data.txt').toString()
  JSON.parse(readData).forEach((item)=>{
    obj.data.push(item)
  })
  response.send(obj)
})

app.get('/getUserAddress',(request,response)=>{
    const obj = {
        "code":200,
        "data":[
            {
                "isChecked":1,
                "name":"张三",
                "address":"北京市昌平区宏福科技园综合楼6层",
                "phoneNum":18541243516
            },
            {
                "isChecked":0,
                "name":"李四",
                "address":"深圳市昌平区宏福科技园综合楼6层",
                "phoneNum":15042974921
            },
            {
                "isChecked":0,
                "name":"王五",
                "address":"上海市昌平区宏福科技园综合楼6层",
                "phoneNum":15142956225
            }
        ]
    }
    response.send(obj)
    //这回咱不使用vuex了
})

app.post('/getOrder',(request,response)=>{
    const obj = {
        "code":200,
        "data":''
    }
    obj.data =Math.ceil(Math.random()*1000+9000)

    let tradeInfo = request.body 
    fs.writeFile('userInfo.txt',JSON.stringify(tradeInfo),(err)=>{
      if(err){
          console.log(err);
          return
      }
    })

    response.send(obj)
})

app.get('/circleConsult',(request,response)=>{
  const obj = {
      "code":300,
      "data":''
  }

  //这个东西每请求一次，然后这个文件就全都重新执行一次，所以定时器不好使了呗
  //我可以记录你请求了几次

  let readData = JSON.parse(fs.readFileSync('record.txt'))

  fs.writeFileSync('record.txt',JSON.stringify(readData+1),(err)=>{
    if(err) return
  })

  if(readData === 5){
      obj.code = 200
      fs.writeFileSync('record.txt',JSON.stringify(0),(err)=>{
        if(err) return
      })
  }

  response.send(obj)
})

app.get('/www.final',(request,response)=>{
    const obj = {
        "code": 200,
        "message": "成功",
        "data": {
            "records": [
                {
                    "id": 70,
                    "consignee": "admin",
                    "consigneeTel": "15011111111",
                    "totalAmount": 29495,
                    "orderStatus": "UNPAID",
                    "userId": 2,
                    "paymentWay": "ONLINE",
                    "deliveryAddress": "北京市昌平区2",
                    "orderComment": "",
                    "outTradeNo": "ATGUIGU1584247289311481",
                    "tradeBody": "Apple iPhone 11 (A2223) 128GB手机 双卡双待 A",
                    "createTime": "2020-03-15 12:41:29",
                    "expireTime": "2020-03-16 12:41:29",
                    "processStatus": "UNPAID",
                    "trackingNo": null,
                    "parentOrderId": null,
                    "imgUrl": null,
                    "orderDetailList": [
                        {
                            "id": 81,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 11 (A2223) 64GB 红色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 5499,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        {
                            "id": 82,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 12 (A2223) 128GB 白色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 5299,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        {
                            "id": 83,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 12 (A2223) 256GB 白色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 6499,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        {
                            "id": 84,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 14 (A2223) 256GB 白色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 12999,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        
                    ],
                    "orderStatusName": "未支付",
                    "wareId": null
                },
                {
                    "id": 706,
                    "consignee": "admin",
                    "consigneeTel": "15011111111",
                    "totalAmount": 99999,
                    "orderStatus": "UNPAID",
                    "userId": 2,
                    "paymentWay": "ONLINE",
                    "deliveryAddress": "北京市昌平区2",
                    "orderComment": "",
                    "outTradeNo": "ATGUIGU1584247289311481",
                    "tradeBody": "Apple iPhone 11 (A2223) 128GB手机 双卡双待 A",
                    "createTime": "2020-03-15 12:41:29",
                    "expireTime": "2020-03-16 12:41:29",
                    "processStatus": "UNPAID",
                    "trackingNo": null,
                    "parentOrderId": null,
                    "imgUrl": null,
                    "orderDetailList": [
                        {
                            "id": 581,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 11 (A2223) 64GB 红色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 5499,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        {
                            "id": 852,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 12 (A2223) 128GB 白色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 5299,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        {
                            "id": 835,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 12 (A2223) 256GB 白色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 6499,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        {
                            "id": 854,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 14 (A2223) 256GB 白色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 12999,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        
                    ],
                    "orderStatusName": "未支付",
                    "wareId": null
                },
                {
                    "id": 701,
                    "consignee": "fantastic",
                    "consigneeTel": "15042974921",
                    "totalAmount": 12999,
                    "orderStatus": "UNPAID",
                    "userId": 2,
                    "paymentWay": "ONLINE",
                    "deliveryAddress": "上海市昌平区2",
                    "orderComment": "",
                    "outTradeNo": "ATGUIGU1584247289311481",
                    "tradeBody": "Apple iPhone 11 (A2223) 128GB手机 双卡双待 A",
                    "createTime": "2020-03-15 12:41:29",
                    "expireTime": "2020-03-16 12:41:29",
                    "processStatus": "UNPAID",
                    "trackingNo": null,
                    "parentOrderId": null,
                    "imgUrl": null,
                    "orderDetailList": [
                        {
                            "id": 8221,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 11 (A2223) 64GB 红色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 5499,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        {
                            "id": 8231,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 12 (A2223) 128GB 白色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 5299,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        {
                            "id": 823,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 12 (A2223) 256GB 白色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 6499,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        {
                            "id": 184,
                            "orderId": 70,
                            "skuId": 2,
                            "skuName": "Apple iPhone 14 (A2223) 256GB 白色",
                            "imgUrl": "/images/mobile01.png",
                            "orderPrice": 12999,
                            "skuNum": 1,
                            "hasStock": null
                        },
                        
                    ],
                    "orderStatusName": "未支付",
                    "wareId": null
                },
            ],
            "total": 41,
            "size": 2,
            "current": 1,
            "pages": 21
        },
        "ok": true
    }
    response.send(obj)
})



app.listen(3000,()=>{
  console.log('服务已启动 端口3000监听中');
})