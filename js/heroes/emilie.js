/* =========================================================
   EMILIE — HERO DATA
========================================================= */

window.heroes = window.heroes || [];


window.heroes.push({

    /* =====================================================
       CORE INFORMATION
    ===================================================== */

    name:
        "Emilie",

    title:
        "The Speed of Lightning",

    region:
        "Ferrumalis",

    role:
        "Striker",

    secondaryRoles: [
        "Disruptor",
        "Hunter"
    ],


    /* =====================================================
       BASE STATS
    ===================================================== */

    baseHealth:
        "250",

    movementSpeed:
        "7 m/s",


    /* =====================================================
       ASSETS
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Emilie/thumbnail.png",

    heroArt:
        "Assets/Heroes/Emilie/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "An electrifying speedster who converts constant movement into stored energy. Emilie becomes faster the longer she stays in motion, using her charged gloves and overwhelming velocity to pressure enemies, disrupt their movement, and turn raw speed into offensive power.",


    /* =====================================================
       GAMEPLAY PROFILE
    ===================================================== */

    profile: {

        damage:
            7,

        survivability:
            4,

        crowdControl:
            6,

        mobility:
            10,

        support:
            1,

        range:
            6

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name:
                "Default",

            rarity:
                "Base",

            skinline:
                null,

            thumbnail:
                "Assets/Heroes/Emilie/Skins/Default/thumbnail.png",

            splash:
                "Assets/Heroes/Emilie/Skins/Default/splash.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        {
            name:
                "Emilie Concept",

            image:
                "Assets/Heroes/Emilie/Concept/concept-01.png"
        }

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — OVERCHARGE CORE
        ================================================= */

        {
            type:
                "Passive",

            key:
                "Passive",

            name:
                "Overcharge Core",

            icon:
                "Assets/Heroes/Emilie/Abilities/overcharge-core.png",

            preview:
                "Assets/Heroes/Emilie/Abilities/Previews/overcharge-core.mp4",

            previewType:
                "video",

            shortDescription:
                "Emilie charges her energy capsule by moving, gaining increasingly greater Movement Speed until becoming Overcharged.",

            detailedDescription:
                "Emilie's energy capsule charges as she moves. As she stores energy, she gains Movement Speed. Every 20 Energy grants an additional 10% Movement Speed. Upon reaching maximum Energy, Emilie becomes Overcharged and gains a significantly larger Movement Speed bonus. After Emilie stops moving for 1 second, her stored Energy rapidly begins to deplete.",

            stats: {

                "Charge Gain":
                    "+3 Energy per 5m moved",

                "Maximum Energy":
                    100,

                "Movement Speed per 20 Energy":
                    "+10%",

                "Overcharged Movement Speed":
                    "+80%",

                "Depletion Delay":
                    "1s without moving",

                "Charge Depletion":
                    "35 Energy/s"

            },

            sections: [

                {
                    name:
                        "Overcharged",

                    color:
                        "yellow",

                    description:
                        "At maximum Energy, Emilie's Overcharge Core reaches full output and dramatically increases her Movement Speed.",

                    details: {

                        "Required Energy":
                            100,

                        "Movement Speed Bonus":
                            "+80%",

                        "Primary Attack Speed Bonus":
                            "+25%"

                    }
                },

                {
                    name:
                        "Energy Depletion",

                    color:
                        "blue",

                    description:
                        "Stored Energy begins draining if Emilie remains stationary.",

                    details: {

                        "Grace Period":
                            "1s",

                        "Depletion Rate":
                            "35 Energy/s",

                        "Trigger":
                            "Not moving"

                    }
                }

            ]

        },


        /* =================================================
           PRIMARY — STATIC SHOCK
        ================================================= */

        {
            type:
                "Primary",

            key:
                "Primary",

            name:
                "Static Shock",

            icon:
                "Assets/Heroes/Emilie/Abilities/static-shock.png",

            preview:
                "Assets/Heroes/Emilie/Abilities/Previews/static-shock.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire rapid electric bolts that apply stacking Static, increasingly Slowing enemies.",

            detailedDescription:
                "Emilie fires quick electric bolts from her gloves. Each bolt applies one stack of Static to the enemy hit. Static Slows the target and can stack up to three times, increasing the total Slow. While Emilie is Overcharged, Static Shock's attack speed is increased by 25%.",

            stats: {

                "Damage":
                    28,

                "Fire Rate":
                    "2.5 shots/s",

                "Static Slow":
                    "10% per stack",

                "Static Duration":
                    "2s",

                "Maximum Static Stacks":
                    3,

                "Maximum Slow":
                    "30%",

                "Overcharged Attack Speed":
                    "+25%"

            },

            sections: [

                {
                    name:
                        "Static",

                    color:
                        "blue",

                    description:
                        "Each Static Shock hit applies Static, Slowing the target. Static stacks up to three times.",

                    details: {

                        "Slow per Stack":
                            "10%",

                        "Maximum Stacks":
                            3,

                        "Maximum Slow":
                            "30%",

                        "Duration":
                            "2s"

                    }
                },

                {
                    name:
                        "Overcharged",

                    color:
                        "yellow",

                    description:
                        "While Emilie is Overcharged, Static Shock fires significantly faster.",

                    details: {

                        "Attack Speed Bonus":
                            "+25%",

                        "Requirement":
                            "Overcharged"

                    }
                }

            ]

        },


        /* =================================================
           ABILITY 1 — PULSE KICK
        ================================================= */

        {
            type:
                "Ability 1",

            key:
                "1",

            name:
                "Pulse Kick",

            icon:
                "Assets/Heroes/Emilie/Abilities/pulse-kick.png",

            preview:
                "Assets/Heroes/Emilie/Abilities/Previews/pulse-kick.mp4",

            previewType:
                "video",

            shortDescription:
                "Deliver a short-range electrified kick that damages and Shoves an enemy away.",

            detailedDescription:
                "Emilie delivers a short-range electric kick that damages the enemy struck and violently Shoves them away from her.",

            stats: {

                "Damage":
                    50,

                "Range":
                    "4m",

                "Shove Distance":
                    "4m",

                "Cooldown":
                    "9s"

            }

        },


        /* =================================================
           ABILITY 2 — SHOCKWAVE
        ================================================= */

        {
            type:
                "Ability 2",

            key:
                "2",

            name:
                "Shockwave",

            icon:
                "Assets/Heroes/Emilie/Abilities/shockwave.png",

            preview:
                "Assets/Heroes/Emilie/Abilities/Previews/shockwave.mp4",

            previewType:
                "video",

            shortDescription:
                "Dash forward and unleash a cone-shaped electric blast whose damage scales with Emilie's current Movement Speed.",

            detailedDescription:
                "Emilie dashes forward, creating a cone-shaped electric blast in front of her. If she collides with an enemy during the dash, that enemy is knocked into the Shockwave. Shockwave's damage scales directly with Emilie's current Movement Speed, rewarding her for maintaining Energy and entering fights at high velocity.",

            stats: {

                "Dash Distance":
                    "5m",

                "Shockwave Arc":
                    "70°",

                "Shockwave Length":
                    "6m",

                "Base Damage":
                    60,

                "Movement Speed Scaling":
                    "1.5 × current Movement Speed (m/s)",

                "Cooldown":
                    "11s"

            },

            sections: [

                {
                    name:
                        "Velocity Scaling",

                    color:
                        "yellow",

                    description:
                        "Shockwave deals more damage the faster Emilie is moving when the ability is used.",

                    details: {

                        "Damage Formula":
                            "60 + 1.5 × Emilie's current Movement Speed (m/s)",

                        "Scaling Source":
                            "Current Movement Speed"

                    }
                },

                {
                    name:
                        "Collision",

                    color:
                        "blue",

                    description:
                        "If Emilie directly collides with an enemy during the dash, they are carried into the resulting Shockwave.",

                    details: {

                        "Dash Distance":
                            "5m",

                        "Result":
                            "Enemy is knocked into Shockwave"

                    }
                }

            ]

        },


        /* =================================================
           ABILITY 3 — ENERGY FLUX
        ================================================= */

        {
            type:
                "Ability 3",

            key:
                "3",

            name:
                "Energy Flux",

            icon:
                "Assets/Heroes/Emilie/Abilities/energy-flux.png",

            preview:
                "Assets/Heroes/Emilie/Abilities/Previews/energy-flux.mp4",

            previewType:
                "video",

            shortDescription:
                "Instantly restore Energy and temporarily increase Emilie's Movement Speed.",

            detailedDescription:
                "Emilie instantly expels stored power through her movement systems, gaining a temporary Movement Speed increase while restoring part of her Energy capsule.",

            stats: {

                "Movement Speed Bonus":
                    "+30%",

                "Duration":
                    "3s",

                "Energy Restored":
                    "20% of total Energy",

                "Energy Restored at 100 Maximum":
                    20,

                "Cooldown":
                    "13s"

            },

            sections: [

                {
                    name:
                        "Energy Restoration",

                    color:
                        "yellow",

                    description:
                        "Energy Flux immediately restores 20% of Emilie's maximum Energy.",

                    details: {

                        "Maximum Energy":
                            100,

                        "Energy Restored":
                            20

                    }
                }

            ]

        },


        /* =================================================
           ULTIMATE — VOLT CHARGE
        ================================================= */

        {
            type:
                "Ultimate",

            key:
                "Ultimate",

            name:
                "Volt Charge",

            icon:
                "Assets/Heroes/Emilie/Abilities/volt-charge.png",

            preview:
                "Assets/Heroes/Emilie/Abilities/Previews/volt-charge.mp4",

            previewType:
                "video",

            shortDescription:
                "Lock onto an enemy and surge toward them at extreme speed, dealing more damage based on Emilie's speed advantage.",

            detailedDescription:
                "Emilie channels all stored energy to lock onto a target and surge toward them. For 6 seconds, she gains a massive Movement Speed bonus. Volt Charge's damage increases based on how much faster Emilie is moving than her target. Upon impact, enemies within 5m are Stunned for 1 second and immediately receive maximum Static stacks, applying a 30% Slow.",

            stats: {

                "Lock-On Range":
                    "20m",

                "Movement Speed Bonus":
                    "+60%",

                "Duration":
                    "6s",

                "Base Damage":
                    100,

                "Speed Difference Scaling":
                    "2 × speed difference",

                "Stun Duration":
                    "1s",

                "Static Applied":
                    "3 stacks",

                "Static Slow":
                    "30%",

                "Effect Radius":
                    "5m",

                "Ultimate Cost":
                    3300

            },

            sections: [

                {
                    name:
                        "Velocity Damage",

                    color:
                        "yellow",

                    description:
                        "Volt Charge deals additional damage based on the difference between Emilie's Movement Speed and her target's Movement Speed.",

                    details: {

                        "Damage Formula":
                            "100 + 2 × (Emilie's Speed - Target's Speed)",

                        "Speed Unit":
                            "m/s",

                        "Scaling":
                            "Movement Speed difference"

                    }
                },

                {
                    name:
                        "Electrical Impact",

                    color:
                        "blue",

                    description:
                        "Enemies near Volt Charge's impact are Stunned and immediately receive maximum Static stacks.",

                    details: {

                        "Radius":
                            "5m",

                        "Stun Duration":
                            "1s",

                        "Static Stacks":
                            3,

                        "Resulting Slow":
                            "30%"

                    }
                }

            ]

        }

    ]

});
