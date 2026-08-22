const chance = {
    name: "Chance",

    title: "The House Favorite",

    role: "Vanguard",

    secondaryRoles: [
        "Guardian",
        "Warden"
    ],

    region: "Ferrumalis",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Chance/IMG_6557.png",

    heroArt:
        "Assets/Heroes/Chance/IMG_6561.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A gambler who turns every fight into a game of calculated chaos. Chance protects himself and his allies with enchanted cards, roulette shields, and sheer luck, forcing enemies to play by rules that seem to change every few seconds.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 6,

        survivability: 8,

        crowdControl: 8,

        mobility: 2,

        support: 5,

        range: 6

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Chance/Skins/Default/thumbnail.png"
        },

        {
            name: "Roll The Tides",

            rarity: "Epic",

            thumbnail:
                "Assets/Heroes/Chance/Skins/Roll-The-Tides/thumbnail.png"
        },

        {
            name: "Royal Flush",

            rarity: "Rare",

            thumbnail:
                "Assets/Heroes/Chance/Skins/Royal-Flush/thumbnail.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        Example:

        {
            title: "Early Chance Concept",

            image:
                "Assets/Heroes/Chance/Concept-Art/early-concept.png",

            description:
                "Early exploration of Chance's enchanted casino aesthetic."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — HOUSE RULES
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "House Rules",

            icon:
                "Assets/Heroes/Chance/Abilities/house-rules.png",

            preview:
                "Assets/Heroes/Chance/Abilities/house-rules-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Using an ability rolls a D6, granting Chance one of six temporary effects.",

            detailedDescription:
                "Every time Chance uses an ability, he rolls a Chance Die (D6). The result determines one of six effects. House Rules has a 10-second cooldown before another standard ability use can trigger a roll.",

            stats: {

                "Die":
                    "D6",

                "Possible Results":
                    "6",

                "Internal Cooldown":
                    "10 sec"

            },


            sections: [

                {
                    name:
                        "1 — Lucky Draw",

                    color:
                        "blue",

                    description:
                        "Chance's abilities cycle faster for a short duration.",

                    details: {

                        "Cooldown Reduction":
                            "20%",

                        "Duration":
                            "3 sec"

                    }

                },


                {
                    name:
                        "2 — Tough Luck",

                    color:
                        "white",

                    description:
                        "Chance gains temporary Bonus Health.",

                    details: {

                        "Bonus Health":
                            "100"

                    }

                },


                {
                    name:
                        "3 — Fortune's Favor",

                    color:
                        "green",

                    description:
                        "Chance restores a portion of his maximum health over time.",

                    details: {

                        "Healing":
                            "10% Max HP",

                        "Duration":
                            "2 sec"

                    }

                },


                {
                    name:
                        "4 — Payback",

                    color:
                        "teal",

                    description:
                        "Chance reflects a portion of the next instance of damage he receives.",

                    details: {

                        "Damage Reflected":
                            "35% of next damage taken"

                    }

                },


                {
                    name:
                        "5 — All In",

                    color:
                        "orange",

                    description:
                        "Chance temporarily increases his outgoing damage.",

                    details: {

                        "Damage Increase":
                            "+15%",

                        "Duration":
                            "4 sec"

                    }

                },


                {
                    name:
                        "6 — High Stakes",

                    color:
                        "red",

                    description:
                        "Chance becomes substantially more dangerous, but also more vulnerable.",

                    details: {

                        "Damage Increase":
                            "+20%",

                        "Incoming Damage Increase":
                            "+20%",

                        "Duration":
                            "2 sec"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — CARD SHOT
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Card Shot",

            icon:
                "Assets/Heroes/Chance/Abilities/card-shot.png",

            preview:
                "Assets/Heroes/Chance/Abilities/card-shot-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Rapidly flick enchanted playing cards, with every sixth shot becoming a piercing House Card.",

            detailedDescription:
                "Chance flicks enchanted playing cards from his deck in rapid succession. Every 6th card is transformed into a glowing golden House Card. House Cards deal increased damage, travel faster, pierce through enemies, and immediately trigger a House Rules die roll when they hit an enemy.",

            stats: {

                "Damage":
                    "35",

                "Projectile Speed":
                    "90 m/s",

                "Fire Rate":
                    "1.2 shots/sec",

                "Ammo":
                    "12",

                "House Card Frequency":
                    "Every 6th shot"

            },


            sections: [

                {
                    name:
                        "House Card",

                    color:
                        "yellow",

                    description:
                        "Every sixth card becomes a golden piercing projectile. Hitting an enemy immediately rolls Chance's passive die.",

                    details: {

                        "Damage":
                            "55",

                        "Projectile Speed":
                            "120 m/s",

                        "Pierces Enemies":
                            "Yes",

                        "Triggers House Rules":
                            "Immediately on hit"

                    }

                }

            ]

        }
