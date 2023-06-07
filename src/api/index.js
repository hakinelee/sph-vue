// 统一管理项目接口的模块，在当前的这个模块，对所有API接口统一管理
// 引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./request";

// 三级联动的接口
// /api/product/getBaseCategoryList  get请求 无参数
// 发请求：axios发请求返回结果是Promise对象

// 对外暴露函数
/*
export const reqCategoryList = ()=>{
    // 发请求：axios发请求返回结果是Promise对象
    return requests({
        url:'/product/getBaseCategoryList',
        method: 'get',
    })
};
*/
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method: 'get'});
