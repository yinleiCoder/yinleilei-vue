import axios from 'axios';

// 读视频oss
const postUploadToken = fileName => axios.post('/api/v1/upload/token', {filename: fileName}).then(res => res.data);

export default postUploadToken;