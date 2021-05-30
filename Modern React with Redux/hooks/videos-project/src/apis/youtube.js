import axios from 'axios';

const KEY = 'AIzaSyAJ3hI-_qlr4O6E-liC4Fc62GUDKYobL7U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});