interface IRocket {
    "mission_name": string,
    "launch_date_local": Date,
    "launch_site": {
        "site_name_long": string
    },
    "links": {
        "article_link": null,
        "video_link": string
    },
    "rocket": {
        "rocket_name": string,
        "first_stage": {
            "cores": ICores[],
            "second_stage": {
                "payloads": IPayloads[]
            }
        }
    }
}

interface IPayloads {
    "payload_type": string,
    "payload_mass_kg": number,
    "payload_mass_lbs": number
}

interface ICores {
    "flight": number,
    "core": {
        "reuse_count": number,
        "status": unknown | boolean
    }
}

