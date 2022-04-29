import instance from './axios'

//banner
export const getBannerList = () =>{
    return instance({
        url:'/bannerList'
    })
}

export default {
    getBannerList
}
