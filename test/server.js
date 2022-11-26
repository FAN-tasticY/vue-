const express = require('express')
const app = express()


//真是不好意思了 修改服务器之后我们需要进行重启这样服务器才会生效
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
            //哈哈 原来是前面的名字搞错了真的就是这样啦 有时候找错真的是麻烦唉
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




app.listen(3000,()=>{
  console.log('服务已启动 端口3000监听中');
})