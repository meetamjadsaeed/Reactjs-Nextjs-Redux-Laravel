import axios from 'axios';

// export const signin = user => {

// };

export function signin(user) {

    await axios.get('http://127.0.0.1:8000/api/posts  ',{
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2FmYmIxZTVmNDQ5NDBiNTgyNWYwOGJhNTNkNTRlNGE2ZWVjM2M3ZWYwOWM4NWI4MmZkZjNkMjU1YmRiNTM4NDYxOWRkZWU5ZmY0MjgxNmUiLCJpYXQiOjE2NjQ2MjkxMzcuNTkyMzI0LCJuYmYiOjE2NjQ2MjkxMzcuNTkyMzM2LCJleHAiOjE2OTYxNjUxMzcuNTgwNDA5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.FUjq1OuqNlZI2wz5RHKUPlC9NM2SDskryEHZNj0CaQqekKiOtAO2VSjlNDkuZRwyXr3zGr71HESXb6oBcKcMhG5vUMu8VALGumFa9UqBbQD8hAo5vlzPM99v4pFFsJKcU-QgmKNWAJO2En9ET9kvW0jCkodBgpaT5XbJgdbXUao7eSL04L5Kc6ygezv0NzYGItsA5IvOsb7mqh3MK5GlC0quoGpFncZwTvN46iShntZVRvfkA2w0CBOn4Dx-Ta65jfFQsT3U1nL08tFx1wF59cEa8yOGCtz6e0TQN6CmnbbPo5Bvxmyo731k2r336krC6kaIG6-hvt_nklajzODuq0TlmSTwvf7TAT4owJb0EEzb3jDBdAmqt_XoSYYUOZNQSi6uyoDMhUCJ4Pq-5gPCRpBgW7Q4SHwvAEdD3PeC98bz2lh7NGqHPtwB0BeaC_s_8EEQnnUdrufNE_3OyNydRzB0iIMb-DhnCwSzxGmu5nEa-0Gpryifaf4E5_neZWMovYsMqXuSkH2zO3GMZfE5k2ynZGnUIObyTtz0VyPahUMTt_v0orstJykM5lKJaMimDVrXUoQLFjrn2QuV8D_9uIFRPzfDzBP7F__ZrRZvWSeCzow3VJgqyXMt5Sar6YO-ydU_ln-7O8nwcy-PMBAa7y0CpS7f9SU9GvF5d77Yipo"
      }
      
    }).then((result)=>setproject(result.data.posts));
    // return <p>Hello!</p>
  
}