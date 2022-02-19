// It's a function that sends a request to Discord to change about me with axios
const axios = require("axios").default; 
const change = async (token, bio) => { 
    await axios.get('https://discordapp.com/api/v9/experiments').then(res => res.data['fingerprint']).then(async fingerprint => { 
        await axios.get('https://discord.com').then(res => res.headers['set-cookie']).then(async Cookies => { 
            const Dcfduid = Cookies.find(el => el.includes('__dcfduid')).split('; Expires')[0].split('=')[1]; 
            const Sdcfduid = Cookies.find(el => el.includes('__sdcfduid')).split('; Expires')[0].split('=')[1]; 
            const cookies = "__dcfduid=" + Dcfduid + "; " + "__sdcfduid=" + Sdcfduid + "; " + "locale=us"; 
            const headers = { 
                "authorization": token, 
                "cookie": cookies, 
                "accept": "*/*", 
                "Connection": "keep-alive", 
                "accept-encoding": "gzip, deflate, br", 
                "accept-language": "en-GB", 
                "content-type": "application/json", 
                "X-Debug-Options": "bugReporterEnabled", 
                "cache-control": "no-cache", 
                "sec-ch-ua": "'Chromium';v='92', ' Not A;Brand';v='99', 'Google Chrome';v='92'", 
                "sec-fetch-site": "same-origin", 
                "x-context-properties": "eyJsb2NhdGlvbiI6IkpvaW4gR3VpbGQiLCJsb2NhdGlvbl9ndWlsZF9pZCI6Ijg4NTkwNzE3MjMwNTgwOTUxOSIsImxvY2F0aW9uX2NoYW5uZWxfaWQiOiI4ODU5MDcxNzIzMDU4MDk1MjUiLCJsb2NhdGlvbl9jaGFubmVsX3R5cGUiOjB9", 
                "x-fingerprint": fingerprint, 
                "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRmlyZWZveCIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IHJ2OjkzLjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvOTMuMCIsImJyb3dzZXJfdmVyc2lvbiI6IjkzLjAiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTAwODA0LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==", 
                "sec-fetch-dest": "empty", 
                "sec-fetch-mode": "cors", 
                "sec-fetch-site": "same-origin", 
                "origin": "https://discord.com", 
                "referer": "https://discord.com/channels/@me", 
                "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.16 Chrome/91.0.4472.164 Electron/13.4.0 Safari/537.36", 
                "te": "trailers" 
            } 
            
            await axios.patch(`https://discord.com/api/v9/users/@me`, { 
                bio: bio 
            }, { 
                headers: headers 
            }); 
        }); 
    }); 
}; 



// Interval function || Change token and Bio
let bio = ["bio1", "bio2", "bio3"] 
setInterval(async () => { 
    var randomBio = Math.floor(Math.random() * bio.length);  
    var bigraphy = bio[randomBio]; 
    await change("token", bigraphy)     
}, 30*1*1000); 





// LEGACY TEAM | ! ◮ 𝐋𝐚𝐯𝐞𝐧𝐜𝐲 ᴛᴡɪɢ#1989
