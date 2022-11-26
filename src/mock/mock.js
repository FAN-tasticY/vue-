//需要使用的插件
import Mock from 'mockjs'

//需要使用的数据
import floors from './floor.json'
import todayRecommend from './todayRecommend.json'

Mock.mock('/mock/floor',{code:200,data:floors})

Mock.mock('/mock/todayRecommend',{code:200,data:todayRecommend})