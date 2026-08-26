/* =========================================================
   KILLIAN
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Killian",

    title: "Previous Captain of the Elaris Guards",

    role: "Vanguard",

    secondaryRoles: [
        "Guardian"
    ],

    region: "Solari",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Killian/thumbnail.png",

    heroArt:
        "Assets/Heroes/Killian/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A steadfast battlefield captain whose strength grows alongside his allies, Killian anchors the frontline through sheer resolve. With shield in hand, he absorbs pressure, rallies his team, and locks down enemies who try to break through his formation.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 5,

        survivability: 10,

        crowdControl: 7,

        mobility: 5,

        support: 8,

        range: 2

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Killian/thumbnail.png",

            splash:
                "Assets/Heroes/Killian/hero-art.png"
        },

      {
            name: "Star Athlete",

            rarity: "Legendary",

            thumbnail:
                "Assets/Heroes/Killian/thumbnail.png",

            splash:
                "Assets/Heroes/Killian/hero-art.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Captain Armor Study",

            image:
                "Assets/Heroes/Killian/Concept-Art/captain-armor-study.png",

            description:
                "Exploration of Killian's shield, armor silhouette, and military design language."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — FORTITUDE
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Fortitude",

            icon:
                "Assets/Heroes/Killian/Abilities/fortitude.png",

            preview:
                "Assets/Heroes/Killian/Abilities/fortitude-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Gain Bonus Health for nearby allies and rally the team with a burst of Bonus Health when Killian becomes critically wounded.",

            detailedDescription:
                "Killian's resolve grows stronger in the presence of allies. Each allied hero within 10 meters grants Killian additional Bonus Health, up to 5 allies. When Killian drops below 30% Health, he emits a Rallying Aura that grants Bonus Health to himself and nearby allies.",

            stats: {

                "Bonus Health per Nearby Ally":
                    "+25",

                "Nearby Ally Radius":
                    "10 m",

                "Maximum Allies Counted":
                    "5",

                "Maximum Passive Bonus Health":
                    "+125",

                "Rallying Aura Trigger":
                    "Below 30% HP",

                "Rallying Aura Duration":
                    "3 sec",

                "Rallying Aura Radius":
                    "8 m",

                "Rallying Aura Cooldown":
                    "60 sec"

            },


            sections: [

                {
                    name:
                        "Allied Resolve",

                    color:
                        "white",

                    description:
                        "Killian gains additional Bonus Health for every nearby allied hero.",

                    details: {

                        "Bonus Health per Ally":
                            "+25",

                        "Radius":
                            "10 m",

                        "Maximum Allies":
                            "5",

                        "Maximum Bonus Health":
                            "+125"

                    }

                },


                {
                    name:
                        "Rallying Aura",

                    color:
                        "yellow",

                    description:
                        "When Killian becomes critically wounded, his presence rallies everyone nearby with temporary Bonus Health.",

                    details: {

                        "Trigger":
                            "Below 30% HP",

                        "Self Bonus Health":
                            "+150",

                        "Ally Bonus Health":
                            "+100",

                        "Radius":
                            "8 m",

                        "Duration":
                            "3 sec",

                        "Cooldown":
                            "60 sec"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — CAPTAIN'S SLASH
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Captain's Slash",

            icon:
                "Assets/Heroes/Killian/Abilities/captains-slash.png",

            preview:
                "Assets/Heroes/Killian/Abilities/captains-slash-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Deliver precise sword strikes in a short frontal arc.",

            detailedDescription:
                "Killian swings his sword in a controlled frontal arc, damaging enemies in close range.",

            stats: {

                "Damage":
                    "54",

                "Range":
                    "3.5 m frontal arc",

                "Attack Rate":
                    "1.2 attacks/sec"

            }

        },


        /* =================================================
           SECONDARY — CAPTAIN'S SHIELD
        ================================================= */

        {
            type: "Secondary Fire",

            key: "M2",

            name: "Captain's Shield",

            icon:
                "Assets/Heroes/Killian/Abilities/captains-shield.png",

            preview:
                "Assets/Heroes/Killian/Abilities/captains-shield-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Raise Killian's shield to block incoming damage until he lowers it or the shield breaks.",

            detailedDescription:
                "Killian raises his shield and blocks incoming damage. He may hold the shield up until he chooses to lower it or until its Health is depleted. While the shield is not deployed, it passively regenerates Health.",

            stats: {

                "Shield Health":
                    "600",

                "Shield Regeneration":
                    "100 HP/s",

                "Blocks Damage":
                    "Yes",

                "Regenerates While Lowered":
                    "Yes"

            }

        },


        /* =================================================
           ABILITY 1 — SHIELD MARCH
        ================================================= */

        {
            type: "Ability 1",

            key: "E",

            name: "Shield March",

            icon:
                "Assets/Heroes/Killian/Abilities/shield-march.png",

            preview:
                "Assets/Heroes/Killian/Abilities/shield-march-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Charge forward behind the shield, becoming CC Immune and knocking enemies aside before ending with a stunning slam.",

            detailedDescription:
                "Killian raises his shield and charges forward, becoming Crowd Control Immune during the charge. Enemies struck are damaged, knocked aside, and Slowed. Colliding with terrain or recasting Shield March causes Killian to slam down, damaging and Stunning nearby enemies.",

            stats: {

                "Charge Distance":
                    "8 m",

                "Impact Damage":
                    "65",

                "Slow":
                    "20%",

                "Slow Duration":
                    "2 sec",

                "Crowd Control Immunity":
                    "During charge",

                "Slam Damage":
                    "80",

                "Slam Radius":
                    "4 m",

                "Stun Duration":
                    "0.5 sec",

                "Cooldown":
                    "9 sec"

            },


            sections: [

                {
                    name:
                        "Shield Charge",

                    color:
                        "blue",

                    description:
                        "Killian pushes through the battlefield with his shield raised, resisting Crowd Control and knocking enemies aside.",

                    details: {

                        "Distance":
                            "8 m",

                        "Damage":
                            "65",

                        "Slow":
                            "20%",

                        "Slow Duration":
                            "2 sec",

                        "Crowd Control Immunity":
                            "Yes"

                    }

                },


                {
                    name:
                        "Shield Slam",

                    color:
                        "orange",

                    description:
                        "Colliding with terrain or recasting Shield March ends the charge with a powerful area slam.",

                    details: {

                        "Damage":
                            "80",

                        "Radius":
                            "4 m",

                        "Stun Duration":
                            "0.5 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — LEADER'S WARCRY
        ================================================= */

        {
            type: "Ability 2",

            key: "SHIFT",

            name: "Leader's Warcry",

            icon:
                "Assets/Heroes/Killian/Abilities/leaders-warcry.png",

            preview:
                "Assets/Heroes/Killian/Abilities/leaders-warcry-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Rally nearby allies with increased healing while weakening enemy damage and movement.",

            detailedDescription:
                "Killian bellows a commanding warcry that strengthens himself and nearby allies while weakening enemies. Allies receive increased healing, while affected enemies deal reduced damage to everyone except Killian and suffer reduced Movement Speed. If at least 3 enemies are affected, Killian and his allies also gain increased Movement Speed.",

            stats: {

                "Radius":
                    "12 m",

                "Healing Received":
                    "+20%",

                "Healing Buff Duration":
                    "4 sec",

                "Enemy Damage Reduction":
                    "-15% against everyone except Killian",

                "Enemy Movement Speed":
                    "-15%",

                "Enemy Debuff Duration":
                    "4 sec",

                "Bonus Trigger":
                    "3+ enemies hit",

                "Cooldown":
                    "14 sec"

            },


            sections: [

                {
                    name:
                        "Rally the Line",

                    color:
                        "green",

                    description:
                        "Killian and nearby allies receive increased healing for a short duration.",

                    details: {

                        "Healing Received":
                            "+20%",

                        "Duration":
                            "4 sec"

                    }

                },


                {
                    name:
                        "Face the Captain",

                    color:
                        "red",

                    description:
                        "Affected enemies deal less damage to Killian's allies but continue dealing their normal damage to Killian himself.",

                    details: {

                        "Damage Reduction":
                            "-15%",

                        "Applies Against":
                            "Everyone except Killian",

                        "Movement Speed":
                            "-15%",

                        "Duration":
                            "4 sec"

                    }

                },


                {
                    name:
                        "Advance Together",

                    color:
                        "yellow",

                    description:
                        "If Leader's Warcry catches at least 3 enemies, Killian and nearby allies gain additional Movement Speed.",

                    details: {

                        "Required Enemies":
                            "3+",

                        "Movement Speed":
                            "+15%",

                        "Duration":
                            "3 sec"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — JUDGMENT HOLD
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Judgment Hold",

            icon:
                "Assets/Heroes/Killian/Abilities/judgment-hold.png",

            preview:
                "Assets/Heroes/Killian/Abilities/judgment-hold-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Create a gravity field that heavily Slows enemies, Grounds them, and pulls them inward before weakening their defenses.",

            detailedDescription:
                "Killian slams his sword and shield into the ground, creating a powerful gravity field for 5 seconds. Enemies caught inside are heavily Slowed and cannot use movement abilities. When the field expires, affected enemies are pulled toward its center for 1 second and suffer reduced resistances. Killian immediately gains Bonus Health on cast and gains additional Bonus Health for every enemy pulled inward.",

            stats: {

                "Duration":
                    "5 sec",

                "Radius":
                    "8 m",

                "Slow":
                    "50%",

                "Movement Abilities":
                    "Disabled",

                "Final Pull Duration":
                    "1 sec",

                "Resistance Reduction":
                    "-15%",

                "Resistance Reduction Duration":
                    "6 sec",

                "Bonus Health on Cast":
                    "+200",

                "Bonus Health per Enemy Pulled":
                    "+50",

                "Ultimate Cost":
                    "3300"

            },


            sections: [

                {
                    name:
                        "Judgment Field",

                    color:
                        "blue",

                    description:
                        "Enemies inside the gravity field are heavily Slowed and Grounded, preventing them from using movement abilities.",

                    details: {

                        "Radius":
                            "8 m",

                        "Duration":
                            "5 sec",

                        "Slow":
                            "50%",

                        "Grounded":
                            "Yes"

                    }

                },


                {
                    name:
                        "Final Judgment",

                    color:
                        "violet",

                    description:
                        "When Judgment Hold ends, enemies are pulled inward and temporarily lose part of their defensive resistance.",

                    details: {

                        "Pull Duration":
                            "1 sec",

                        "Resistance Reduction":
                            "-15%",

                        "Resistance Reduction Duration":
                            "6 sec"

                    }

                },


                {
                    name:
                        "Unbreakable Captain",

                    color:
                        "white",

                    description:
                        "Killian gains Bonus Health when Judgment Hold begins and gains even more for every enemy caught by the final pull.",

                    details: {

                        "Bonus Health on Cast":
                            "+200",

                        "Bonus Health per Enemy Pulled":
                            "+50"

                    }

                }

            ]

        }

    ]

});
