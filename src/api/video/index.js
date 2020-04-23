import axios from 'axios';

// const intance = axios.create({
//     baseURL: 'http://localhost:3000',
// })
// const postVideo = form => intance.post('/api/v1/videos', form).then(res => res.data);

// const getVideo = id => intance.post(`/api/v1/video/${id}`).then(res => res.data);

// const getVideos = () => intance.post('/api/v1/videos').then(res => res.data);

//不用上面那样做了,用反向代理接口.
const postVideo = form => axios.post('/api/v1/videos', form).then(res => res.data);

const getVideo = id => axios.get(`/api/v1/video/${id}`).then(res => res.data);

const getVideos = (start, limit) => axios.get('/api/v1/videos', { params: { start, limit } }).then(res => res.data);

export {
    getVideos,
    getVideo,
    postVideo,
}