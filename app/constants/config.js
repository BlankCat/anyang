import Storage from 'react-native-storage'
const storage = new Storage({
    //最大容量
    size:1000,
    //数据过期时间：一天
    defaultExpires:1000*3600*24,
    //读写在内存中的缓存数据。默认为启动
    enableCache:true,
    //如果storage中没有相应数据，或数据过期则会调用sync同步方法，无法返回新数据
    sync:{
        //同步方法说明在后文提到
    }
})
global.storage = storage;
const serviceUrl = 'http://192.168.56.1:8889/v1/'       //host
export default {
    initTab:'Msg',
    loginUrl:serviceUrl,
    registerUrl: serviceUrl + 'register',
    accountUrl: serviceUrl + 'account',
    accountSignUrl: serviceUrl + 'account/sign',
    fileUpload: serviceUrl + 'file/save',
    fileUrl: serviceUrl + 'file/',
    postsUrl: serviceUrl + 'article/posts',
    postUrl: serviceUrl + 'article/post/',

    pageSize:10,

    postListApi: serviceUrl + 'post/list/',
    postApi: serviceUrl + 'post/add/',

    postApiTest: serviceUrl + 'file/singleSave/',

    postApi2: serviceUrl + 'post/post/',

    postAll: serviceUrl +  'post/lists',

    thumbnailApi: serviceUrl + 'file/thumbnail/',//缩略图

    word:'WORD',
    picture:'PICTURE'
}

