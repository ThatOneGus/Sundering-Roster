const esmeralda = {
    name: "Esmeralda",

    title: "The Psychic Princess",

    role: "Striker",

    secondaryRoles: [
        "Ravager"
    ],

    region: "Elaris",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Esmeralda/IMG_6470.png",

    heroArt:
        "Assets/Heroes/Esmeralda/IMG_6485.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A royal psychic combatant who overwhelms her enemies with conjured Crimson Daggers. Esmeralda turns every successful attack into another weapon on the battlefield, surrounding her targets before unleashing devastating chains of psionic blades.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 9,

        survivability: 2,

        crowdControl: 5,

        mobility: 8,

        support: 1,

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
                "Assets/Heroes/Esmeralda/Skins/Default/thumbnail.png"
        },

        {
            name: "Sunlit Escape",

            rarity: "Legendary",

            thumbnail:
                "Assets/Heroes/Esmeralda/Skins/Sunlit-Escape/thumbnail.png"
        },

        {
            name: "Kingdom's Princess",

            rarity: "Epic",

            thumbnail:
                "Assets/Heroes/Esmeralda/Skins/Kingdoms-Princess/thumbnail.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        Example:

        {
            title: "Early Esmeralda Concept",

            image:
                "Assets/Heroes/Esmeralda/Concept-Art/early-concept.png",

            description:
                "Early exploration of Esmeralda's psychic dagger combat style."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — MINDPIERCER
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Mindpiercer",

            icon:
                "Assets/Heroes/Esmeralda/Abilities/mindpiercer.png",

            preview:
                "Assets/Heroes/Esmeralda/Abilities/mindpiercer-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Damaging enemies creates Crimson Daggers that make nearby enemies increasingly Vulnerable when enough gather around them.",

            detailedDescription:
                "Hitting enemies with basic attacks or abilities drops a Crimson Dagger at their feet. Enemies near 2 or more Crimson Daggers take increased damage, with each nearby Dagger increasing their Vulnerability.",

            stats: {

                "Dagger Duration":
                    "6 sec",

                "Vulnerability per Dagger":
                    "+4%",

                "Minimum Daggers for Vulnerability":
                    "2",

                "Vulnerability Range":
                    "6 m",

                "Maximum Daggers":
                    "12"

            }

        },


        /* =================================================
           PRIMARY — CRIMSON DAGGER
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Crimson Dagger",

            icon:
                "Assets/Heroes/Esmeralda/Abilities/crimson-dagger.png",

            preview:
                "Assets/Heroes/Esmeralda/Abilities/crimson-dagger-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Throw a fast psychic dagger that damages the first enemy struck and leaves a Crimson Dagger at the impact location.",

            detailedDescription:
                "Esmeralda throws a fast Crimson Dagger in a straight line, damaging the first enemy hit. The attack drops a Crimson Dagger at the impact location.",

            stats: {

                "Damage":
                    "35",

                "Projectile Speed":
                    "150 m/s",

                "Fire Rate":
                    "2.1 shots/sec",

                "Ammo Count":
                    "12",

                "Can Crit":
                    "Yes"

            }

        },


        /* =================================================
           ABILITY 1 — PSYCHIC REND
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Psychic Rend",

            icon:
                "Assets/Heroes/Esmeralda/Abilities/psychic-rend.png",

            preview:
                "Assets/Heroes/Esmeralda/Abilities/psychic-rend-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Dash through enemies to mark them, causing nearby Crimson Daggers to home in and strike.",

            detailedDescription:
                "Esmeralda dashes forward through enemies, damaging and marking each enemy she passes through. Nearby Crimson Daggers within range of Esmeralda home toward marked targets and strike them. Hitting more than one enemy with the dash reduces Psychic Rend's cooldown.",

            stats: {

                "Dash Damage":
                    "30",

                "Dash Range":
                    "10 m",

                "Crimson Dagger Homing Range":
                    "8 m centered on Esmeralda",

                "Crimson Dagger Damage":
                    "20",

                "Cooldown Reduction":
                    "2 sec per enemy hit",

                "Cooldown":
                    "10 sec"

            }

        },


        /* =================================================
           ABILITY 2 — MIND SHATTER
        ================================================= */

        {
            type: "Ability 2",

            key: "E",

            name: "Mind Shatter",

            icon:
                "Assets/Heroes/Esmeralda/Abilities/mind-shatter.png",

            preview:
                "Assets/Heroes/Esmeralda/Abilities/mind-shatter-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Detonate nearby Crimson Daggers before recalling them to Esmeralda, Rooting enemies struck on their return.",

            detailedDescription:
                "Esmeralda detonates all Crimson Daggers within range. Each Dagger explodes at its current location before returning to Esmeralda. Returning Daggers damage enemies they pass through and briefly Root them.",

            stats: {

                "Detonation Radius":
                    "8 m around Esmeralda",

                "Explosion Radius":
                    "3 m per Dagger",

                "Explosion Damage":
                    "40",

                "Return Damage":
                    "40",

                "Return Speed":
                    "90 m/s",

                "Root Duration":
                    "1.25 sec",
                
                "Cooldown":
                    "15 sec"

            }

        },


        /* =================================================
           ABILITY 3 — CRIMSON ECHO
        ================================================= */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "Crimson Echo",

            icon:
                "Assets/Heroes/Esmeralda/Abilities/crimson-echo.png",

            preview:
                "Assets/Heroes/Esmeralda/Abilities/crimson-echo-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Blink backward and leave behind a Crimson Dagger that explodes after a delay.",

            detailedDescription:
                "Esmeralda blinks backward, immediately repositioning away from danger while leaving behind a delayed-exploding Crimson Dagger at her previous location.",

            stats: {

                "Blink Distance":
                    "8 m backward",

                "Explosion Radius":
                    "4 m",

                "Explosion Damage":
                    "40",

                "Cooldown":
                    "12 sec"

            }

        },


        /* =================================================
           ULTIMATE — PSIONIC BLOODFALL
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Psionic Bloodfall",

            icon:
                "Assets/Heroes/Esmeralda/Abilities/psionic-bloodfall.png",

            preview:
                "Assets/Heroes/Esmeralda/Abilities/psionic-bloodfall-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Enter a heightened psychic state where every attack calls additional Crimson Daggers down from above.",

            detailedDescription:
                "Esmeralda enters a heightened psychic state for 6 seconds. During Psionic Bloodfall, her basic attacks and abilities summon 3 additional Crimson Daggers from above. Enemies struck by 3 or more Daggers simultaneously are Silenced and Slowed. Esmeralda also gains increased Attack Speed, and Mind Shatter's detonation radius is increased for the duration.",

            stats: {

                "Duration":
                    "6 sec",

                "Attack Speed Bonus":
                    "+20%",

                "Additional Daggers":
                    "3 per basic attack or ability",

                "Crimson Dagger Damage":
                    "20 per Dagger",

                "Mind Shatter Radius Increase":
                    "+4 m",

                "Ultimate Energy Cost":
                    "3200"

            },


            sections: [

                {
                    name:
                        "Psychic Overload",

                    color:
                        "red",

                    description:
                        "Enemies struck by at least 3 Daggers simultaneously are overwhelmed by Esmeralda's psychic assault.",

                    details: {

                        "Required Simultaneous Hits":
                            "3+ Daggers",

                        "Silence Duration":
                            "1.25 sec",

                        "Slow":
                            "30%",

                        "Slow Duration":
                            "2 sec"

                    }

                }

            ]

        }

    ]

}
