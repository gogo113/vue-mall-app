import Axios from 'axios';
import baseURL, { URLS } from './URLS';

const appkey = 'pangyu_1620529196816';

const request = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});

const getSideList = (type) => request.get(
  URLS.getSide,
  { paramsa: { type } },
);
export default {
  getSideList,
};
