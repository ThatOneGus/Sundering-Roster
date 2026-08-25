/* =========================================================
   NYREIDIA
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Nyreidia",

    title: "The Siren",

    role: "Striker",

    secondaryRoles: [
        "Hunter",
        "Disruptor"
    ],

    region: "Thaloria",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Nyreidia/thumbnail.png",

    heroArt:
        "Assets/Heroes/Nyreidia/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A predatory Siren who weaponizes attention itself, Nyreidia manipulates sight, sound, and instinct to draw enemies into vulnerable positions. Those who look at her for too long risk falling under her influence, while those who turn away leave themselves open to her relentless pursuit.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 6,

        survivability: 5,

        crowdControl: 10,

        mobility: 9,

        support: 2,

        range: 5

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Nyreidia/thumbnail.png",

            splash:
                "Assets/Heroes/Nyreidia/hero-art.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Siren Exploration",

            image:
                "Assets/Heroes/Nyreidia/Concept-Art/siren-exploration.png",

            description:
                "Early exploration of Nyreidia's aquatic silhouette and hypnotic visual language."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — SIREN'S ALLURE
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Siren's Allure",

            icon:
                "Assets/Heroes/Nyreidia/Abilities/sirens-allure.png",

            preview:
                "Assets/Heroes/Nyreidia/Abilities/sirens-allure-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Enemies who keep Nyreidia in their vision gradually fall under her influence, becoming Slowed and eventually Charmed.",

            detailedDescription:
                "Enemies who maintain vision of Nyreidia for more than 1.5 seconds begin falling under her influence and are Slowed. If they continue looking at her for another 2 seconds, they become Charmed. Becoming Charmed deals immediate damage and causes the affected enemy to move slowly toward Nyreidia.",

            stats: {

                "Influence Delay":
                    "1.5 sec",

                "Initial Slow":
                    "10%",

                "Additional Time to Charm":
                    "2 sec",

                "Total Time to Charm":
                    "3.5 sec",

                "Charm Damage":
                    "TBD",

                "Charm Duration":
                    "TBD"

            },


            sections: [

                {
                    name:
                        "Influenced",

                    color:
                        "blue",

                    description:
                        "Enemies who maintain sight of Nyreidia begin to fall under her influence.",

                    details: {

                        "Time Required":
                            "1.5 sec",

                        "Slow":
                            "10%"

                    }

                },


                {
                    name:
                        "Charmed",

                    color:
                        "pink",

                    description:
                        "Enemies who continue looking at Nyreidia after becoming Influenced are Charmed, taking damage and moving toward her.",

                    details: {

                        "Additional Gaze Time":
                            "2 sec",

                        "Instant Damage":
                            "TBD",

                        "Forced Movement":
                            "Toward Nyreidia",

                        "Attack / Ability Restriction":
                            "TBD"

                    }

                }

            ]

        },


        /* =================================================
           PASSIVE — STRONG SWIMMER
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Strong Swimmer",

            icon:
                "Assets/Heroes/Nyreidia/Abilities/strong-swimmer.png",

            preview:
                "Assets/Heroes/Nyreidia/Abilities/strong-swimmer-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Maintaining forward movement causes Nyreidia to rapidly accelerate.",

            detailedDescription:
                "Moving forward continuously for 0.5 seconds causes Nyreidia to enter a faster swimming state, significantly increasing her Movement Speed. The acceleration is lost when she stops maintaining forward movement.",

            stats: {

                "Acceleration Delay":
                    "0.5 sec",

                "Movement Speed Increase":
                    "TBD"

            }

        },


        /* =================================================
           PRIMARY — LACERATE
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Lacerate",

            icon:
                "Assets/Heroes/Nyreidia/Abilities/lacerate.png",

            preview:
                "Assets/Heroes/Nyreidia/Abilities/lacerate-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Rapidly slash enemies in a short-ranged area directly in front of Nyreidia.",

            detailedDescription:
                "Nyreidia lashes out with rapid close-range slashes, damaging enemies within a short area in front of her.",

            stats: {

                "Damage":
                    "TBD",

                "Range":
                    "TBD",

                "Fire Rate":
                    "TBD"

            }

        },


        /* =================================================
           ABILITY 1 — SIREN SONG
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Siren Song",

            icon:
                "Assets/Heroes/Nyreidia/Abilities/siren-song.png",

            preview:
                "Assets/Heroes/Nyreidia/Abilities/siren-song-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Sing through a fan-shaped area, damaging enemies over time and Dazing those exposed long enough.",

            detailedDescription:
                "Nyreidia releases a hypnotic song through a fan-shaped arc for 1 second. Enemies within the song take damage over time. An enemy exposed for at least 0.5 seconds becomes Dazed, reducing their vision range and blurring their visuals. Enemies facing Nyreidia during the cast suffer doubled effects and reduced healing received.",

            stats: {

                "Channel Duration":
                    "1 sec",

                "Daze Exposure Requirement":
                    "0.5 sec",

                "Daze Duration":
                    "1.5 sec",

                "Damage":
                    "TBD",

                "Range":
                    "TBD",

                "Cone Angle":
                    "TBD"

            },


            sections: [

                {
                    name:
                        "Dazed",

                    color:
                        "blue",

                    description:
                        "Enemies exposed to Siren Song for at least half a second suffer reduced vision range and blurred visuals.",

                    details: {

                        "Required Exposure":
                            "0.5 sec",

                        "Duration":
                            "1.5 sec"

                    }

                },


                {
                    name:
                        "Facing Nyreidia",

                    color:
                        "pink",

                    description:
                        "Enemies looking toward Nyreidia while affected by Siren Song suffer twice the normal effect and temporarily receive less healing.",

                    details: {

                        "Effect Strength":
                            "Doubled",

                        "Healing Received":
                            "-15%",

                        "Healing Reduction Duration":
                            "2 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — SIREN'S MIRAGE
        ================================================= */

        {
            type: "Ability 2",

            key: "E",

            name: "Siren's Mirage",

            icon:
                "Assets/Heroes/Nyreidia/Abilities/sirens-mirage.png",

            preview:
                "Assets/Heroes/Nyreidia/Abilities/sirens-mirage-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Create a dancing illusion that mimics Nyreidia and Silences enemies who look directly at it.",

            detailedDescription:
                "Nyreidia creates a dancing illusion ahead of herself that mimics her movements for 3 seconds. Enemies whose reticle remains close enough to the illusion's body are considered to be facing it and become Silenced.",

            stats: {

                "Mirage Duration":
                    "3 sec",

                "Silence Duration":
                    "1 sec",

                "Placement Range":
                    "TBD",

                "Facing Detection":
                    "Reticle proximity"

            },


            sections: [

                {
                    name:
                        "Mirage Gaze",

                    color:
                        "violet",

                    description:
                        "Enemies who directly face the illusion are prevented from casting abilities.",

                    details: {

                        "Silence Duration":
                            "1 sec",

                        "Trigger":
                            "Facing the Mirage"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — LURELIGHT
        ================================================= */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "Lurelight",

            icon:
                "Assets/Heroes/Nyreidia/Abilities/lurelight.png",

            preview:
                "Assets/Heroes/Nyreidia/Abilities/lurelight-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Throw a bioluminescent lure that periodically forces nearby enemies to turn toward it.",

            detailedDescription:
                "Nyreidia throws a glowing orb of bioluminescent energy that sticks to terrain or units. The orb remains active for 6 seconds and emits a pulse every 2 seconds. Enemies hit by a pulse have their vision forcibly drawn toward the Lurelight for a brief duration.",

            stats: {

                "Duration":
                    "6 sec",

                "Pulse Interval":
                    "2 sec",

                "Forced Facing Duration":
                    "0.4 sec",

                "Pulse Radius":
                    "TBD",

                "Throw Range":
                    "TBD",

                "Sticks to Terrain":
                    "Yes",

                "Sticks to Units":
                    "Yes"

            },


            sections: [

                {
                    name:
                        "Luring Pulse",

                    color:
                        "teal",

                    description:
                        "Each pulse briefly takes control of an enemy's facing direction and forces them to look toward the orb.",

                    details: {

                        "Pulse Interval":
                            "2 sec",

                        "Forced Facing":
                            "0.4 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 4 — DEEP DIVE
        ================================================= */

        {
            type: "Ability 4",

            key: "F",

            name: "Deep Dive",

            icon:
                "Assets/Heroes/Nyreidia/Abilities/deep-dive.png",

            preview:
                "Assets/Heroes/Nyreidia/Abilities/deep-dive-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Dive beneath the surface to become untargetable and reposition before erupting beneath nearby enemies.",

            detailedDescription:
                "Nyreidia dives beneath the water's surface, becoming Untargetable and gaining increased Movement Speed for up to 3 seconds. She may recast Deep Dive to resurface early. When Nyreidia resurfaces, she bursts upward in a short-ranged area, damaging and briefly launching nearby enemies. Enemies who were recently Charmed or Silenced are additionally Slowed.",

            stats: {

                "Maximum Dive Duration":
                    "3 sec",

                "Untargetable":
                    "Yes",

                "Movement Speed Increase":
                    "TBD",

                "Resurface Damage":
                    "TBD",

                "Resurface Radius":
                    "TBD",

                "Launch Duration":
                    "TBD",

                "Early Recast":
                    "Yes",

                "Cooldown":
                    "TBD"

            },


            sections: [

                {
                    name:
                        "Submerged",

                    color:
                        "blue",

                    description:
                        "While submerged, Nyreidia cannot be targeted and moves significantly faster.",

                    details: {

                        "Duration":
                            "Up to 3 sec",

                        "Untargetable":
                            "Yes",

                        "Movement Speed":
                            "Increased"

                    }

                },


                {
                    name:
                        "Resurface",

                    color:
                        "teal",

                    description:
                        "Nyreidia erupts from beneath the surface, damaging and launching nearby enemies.",

                    details: {

                        "Damage":
                            "TBD",

                        "Radius":
                            "TBD",

                        "Launch":
                            "Yes"

                    }

                },


                {
                    name:
                        "Predator's Pursuit",

                    color:
                        "pink",

                    description:
                        "Enemies who were recently Charmed or Silenced are additionally Slowed when struck by the resurfacing attack.",

                    details: {

                        "Slow":
                            "30%",

                        "Slow Duration":
                            "2 sec",

                        "Requirement":
                            "Recently Charmed or Silenced"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — SONG OF THE DEEP
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Song of the Deep",

            icon:
                "Assets/Heroes/Nyreidia/Abilities/song-of-the-deep.png",

            preview:
                "Assets/Heroes/Nyreidia/Abilities/song-of-the-deep-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Unleash a haunting song that Charms enemies in a massive cone and grows longer whenever one of its victims dies.",

            detailedDescription:
                "Nyreidia channels a haunting melody through a large cone. Enemies struck by the initial wave are immediately Charmed and slowly walk toward her, unable to attack or cast abilities. Charmed enemies also receive reduced healing. If an affected enemy is eliminated while Song of the Deep is active, the song's duration is extended.",

            stats: {

                "Charm Duration":
                    "1.5 sec",

                "Healing Received Reduction":
                    "30%",

                "Healing Reduction Duration":
                    "3 sec",

                "Initial Duration":
                    "TBD",

                "Duration Extension per Enemy Death":
                    "TBD",

                "Range":
                    "TBD",

                "Cone Angle":
                    "TBD",

                "Ultimate Cost":
                    "TBD"

            },


            sections: [

                {
                    name:
                        "Call of the Deep",

                    color:
                        "pink",

                    description:
                        "Enemies caught by the initial wave are Charmed and slowly approach Nyreidia while unable to attack or cast.",

                    details: {

                        "Charm Duration":
                            "1.5 sec",

                        "Forced Movement":
                            "Toward Nyreidia",

                        "Can Attack":
                            "No",

                        "Can Cast Abilities":
                            "No"

                    }

                },


                {
                    name:
                        "Drowned Recovery",

                    color:
                        "teal",

                    description:
                        "Enemies affected by Song of the Deep receive substantially less healing.",

                    details: {

                        "Healing Received":
                            "-30%",

                        "Duration":
                            "3 sec"

                    }

                },


                {
                    name:
                        "Endless Verse",

                    color:
                        "violet",

                    description:
                        "Each affected enemy who dies during Song of the Deep prolongs the performance.",

                    details: {

                        "Duration Extension":
                            "TBD per enemy death"

                    }

                }

            ]

        }

    ]

});
