export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
export const BACKGROUND_IMAGE = "https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
export const PROFILE_PIC = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
export const MOVIE_CARD_IMG_URL = "https://image.tmdb.org/t/p/w500/"

export const API_OPTIONS= {
    method: 'GET',
    headers: {
        accept:"application/json",
        // Authorization: 'Bearer '+ import.meta.env.TMDB_KEY
        Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_KEY

    }
}

export const LANG_PREF = [{identifier: "en", name:"English"},{identifier: "hin", name:"हिन्दी"},{identifier: "tel", name:"తెలుగు"}]

export const OPENAI_GPT_KEY = ""
    
