import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [isFollower, setIsFollower] = useState(false);

    const state = {
        name: "Stephen A Smith",
        handle: "@stephenasmith",
        isVerified: true,
        bio: <span>The real Stephen A. Smith. {"\n\n"}Stream Stephen A's World daily on <span className="bio-link">@ESPNPlus</span> : <span className="bio-link">es.pn/36evdIR</span></span>,
        followers: 5494487,
        following: 13,
        isFollower,
        tweets: [
            {
                date: "9:06 PM - Oct 9, 2021",
                tweet: <span>I came into this fight thinking <span className="bio-link">@BronzeBomber</span> needed an early knockout to win.</span>,
                comments: 102,
                retweets: 56,
                likes: 1300,
                isRetweeted: false
            }
        ]
    }

    const formatStats = (stat) => {
        var statAsString = stat.toString()
        if (statAsString.length >= 7) {
            return (stat / 1000000).toFixed(1) + "M";
        } else if (statAsString.length >= 4) {
            return (stat / 1000).toFixed(1) + "K";
        } else {
            return stat;
        }
    }

    return (
        <GlobalContext.Provider value={{
            ...state,
            formatStats,
            isFollower,
            setIsFollower
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
