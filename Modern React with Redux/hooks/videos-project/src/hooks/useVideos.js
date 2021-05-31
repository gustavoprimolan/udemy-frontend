import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    const videos = response.data.items;

    setVideos(videos);
    // setSelectedVideo(videos[0]);
  };

  return [videos, search];
};

export default useVideos;