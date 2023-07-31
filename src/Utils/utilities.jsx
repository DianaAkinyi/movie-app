
const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
export const getMovies = async () =>{
    try{
        const response = await fetch (`${BASE_URL}/3/movie/popular`, {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
        }
    })
        const result = await response.json();
        return result
    }
    catch(error){
        return error.message;
    }
}
export const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `${BASE_URL}/3/search/movie?query=${query}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
          }
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  };
  export const nowPlaying=async()=>{
    try{
       const response= await fetch(`${BASE_URL}/3/movie/now_playing`,{
           method:`GET`,
           headers:{
               Authorization: `Bearer ${ACCESS_TOKEN}`,
               'Content-Type':'application/json'
           }       })
       const result=await response.json();
       return result   }
   catch(error){
       return error.message;
   }
   }

export default getMovies;

export const getMovieDetails = async (movieId) => {
    try {
      const response = await fetch(`${BASE_URL}/3/movie/${movieId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
  
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  };
  

// export const getMovieCredits = async (movieId) => {
// try {
// const response = await fetch(
// `https://api.themoviedb.org/3/movie/${movieId}/credits?`
// );
// if (!response.ok) {
// throw new Error('Failed to fetch movie credits');
// }
// const data = await response.json();
// return data;
// } catch (error) {
// console.error(error);
// return null;
// }
// };