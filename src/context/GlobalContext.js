import React, { createContext } from 'react'

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const state = {
        name: "Stephen A Smith",
        handle: "@stephenasmith",
        isVerified: true,
        bio: `The real Stephen A. Smith.
        
        Stream Stephen A's World daily on @ESPNPlus: es.pn/36evdIR`,
        followers: 54000000,
        following: 13,
        tweets: [
            {
                date: "9:17 PM - Oct 9, 2021",
                tweet: "WTH! This shit is insane. I give up! I give up! I have no idea what’s gonna happen next. Both could go with one punch",
                comments: 223,
                retweets: 760,
                likes: 8500,
                isRetweeted: false
            },
            {
                date: "9:06 PM - Oct 9, 2021",
                tweet: "I came into this fight thinking @BronzeBomber needed an early knockout to win.",
                comments: 104,
                retweets: 56,
                likes: 1300,
                isRetweeted: false
            },
            {
                date: "11:56 PM - Oct 9, 2021",
                tweet: "Ladies and Gentlemen, I thinking I’m looking at a future star. At least on some level. This kid looks special.",
                comments: 115,
                retweets: 49,
                likes: 868,
                isRetweeted: false
            }
        ]
    }

    return (
        <GlobalContext.Provider value={{
            ...state
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
