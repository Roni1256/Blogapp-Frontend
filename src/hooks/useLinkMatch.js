import React from 'react'

export const useLinkMatch = (link) => {
    const linkFunc=()=>{
    if(link.includes("instagram")){
        return "https://www.instagram.com/"
    }
    else if(link.includes("facebook")){
        return "https://www.facebook.com/"
    }
    else if(link.includes("twitter")){
        return "https://twitter.com/"
    }
    else if(link.includes("linkedin")){
        return "https://www.linkedin.com/"
    }
    else if(link.includes("youtube")){
        return "https://www.youtube.com/"
    }
    else if(link.includes("github")){
        return "https://github.com/"
    }
    else if(link.includes("website")){
        return "https://"
    }
    else if(link.includes("medium")){
        return "https://medium.com/"
    }
    else if(link.includes("other")){
        return "https://"
    }
    else{
        return "https://"
    }}

    return [linkFunc]
}
