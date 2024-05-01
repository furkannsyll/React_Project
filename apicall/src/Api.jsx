import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: 'Client-ID BN0lwt2SgisP3-mNzS8KfWrm1f00RYpvfJS_40WKKGw'
        },
        params: {
          query:term
        }
      })
    return response.data.results;
    }

    export default searchImages;