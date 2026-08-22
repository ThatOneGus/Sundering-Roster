window.heroes = window.heroes || [];

window.heroes.push({
    name: "Cedric",

    title: "The Smoke Warden",

    role: "Vanguard",

    secondaryRoles: [
        "Warden"
    ],

    region: "Ferrumalis",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Cedric/IMG_6588.png",

    heroArt:
        "Assets/Heroes/Cedric/IMG_6591.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "An industrial frontline defender who turns the battlefield into a choking fortress of steel and smoke. Cedric deploys durable structures, suppresses enemy damage, and thrives when fighting inside the hazy territory created by his own machinery.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 5,

        survivability: 8,

        crowdControl: 7,

        mobility: 2,

        support: 6,

        range: 4

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Cedric/Skins/Default/thumbnail.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        {
            title: "Smoke Vent Concept",

            image:
                "Assets/Heroes/Cedric/Concept-Art/smoke-vent.png",

            description:
                "Early exploration of Cedric's deployable industrial smoke machinery."
        }

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — SMOKE SYSTEMS ONLINE
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Smoke Systems Online",

            icon:
                "Assets/Heroes/Cedric/Abilities/smoke-systems-online.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/smoke-systems-online-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Cedric becomes more durable for every active smoke structure while nearby smoke weakens enemies.",

            detailedDescription:
                "For every Smoke Vent or Smoke Barricade Cedric has active, he gains increased Damage Resistance. Enemies near any of Cedric's smoke clouds are Slowed and deal reduced outgoing damage while inside the haze.",

            stats: {

                "Damage Resistance per Structure":
                    "+5%",

                "Maximum Damage Resistance":
                    "+15%",

                "Enemy Slow":
                    "10%",

                "Enemy Outgoing Damage Reduction":
                    "7%"

            }

        },


        /* =================================================
           PRIMARY — GAUNTLET BASH
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Gauntlet Bash",

            icon:
                "Assets/Heroes/Cedric/Abilities/gauntlet-bash.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/gauntlet-bash-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Deliver a measured three-hit melee combo with steam-assisted industrial gauntlets.",

            detailedDescription:
                "Cedric attacks with a three-hit melee sequence using his heavy industrial gauntlets. The combo progresses from a quick hook into an upward strike before ending with a broad two-handed slam. Going 2 seconds without attacking resets the combo to the first strike.",

            stats: {

                "Combo Reset Time":
                    "2 sec"

            },


            sections: [

                {
                    name:
                        "Hit 1 — Left Hook",

                    color:
                        "white",

                    description:
                        "A quick opening swing.",

                    details: {

                        "Damage":
                            "20"

                    }

                },


                {
                    name:
                        "Hit 2 — Right Uppercut",

                    color:
                        "white",

                    description:
                        "A slower upward strike that slightly lifts the enemy.",

                    details: {

                        "Damage":
                            "30",

                        "Extra Effect":
                            "Small vertical knock"

                    }

                },


                {
                    name:
                        "Hit 3 — Both Slam",

                    color:
                        "orange",

                    description:
                        "Cedric slams both fists down in a wide cone that cleaves enemies in front of him.",

                    details: {

                        "Damage":
                            "50",

                        "Area":
                            "Wide frontal cone",

                        "Cleave":
                            "Yes"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — SMOKE VENT
        ================================================= */

        {
            type: "Ability 1",

            key: "E",

            name: "Smoke Vent",

            icon:
                "Assets/Heroes/Cedric/Abilities/smoke-vent.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/smoke-vent-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Deploy an industrial smoke vent that fills an area with haze and scorches nearby enemies.",

            detailedDescription:
                "Cedric deploys a small industrial Smoke Vent that continuously spews thick smoke and scorches nearby enemies in short bursts. The vent prioritizes enemies attacking allies or enemies at low health.",

            stats: {

                "Radius":
                    "7 m",

                "Base Damage":
                    "30/sec",

                "Structure HP":
                    "150",

                "Targeting Priority":
                    "Enemies attacking allies or low-health enemies",

                "Maximum Active":
                    "1",

                "Cooldown":
                    "16 sec"

            }

        },


        /* =================================================
           ABILITY 2 — SMOKE BARRICADE
        ================================================= */

        {
            type: "Ability 2",

            key: "SHIFT",

            name: "Smoke Barricade",

            icon:
                "Assets/Heroes/Cedric/Abilities/smoke-barricade.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/smoke-barricade-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Deploy a durable metal barricade that blocks vision and projectiles while venting debilitating smoke.",

            detailedDescription:
                "Cedric deploys a solid metal barricade that vents smoke around itself, blocking enemy vision and projectiles. Enemies who touch the surrounding smoke are pinged to all allies and temporarily take increased damage from Smoke Vent.",

            stats: {

                "Structure HP":
                    "400",

                "Duration":
                    "8 sec or until destroyed",

                "Smoke Radius":
                    "3 m around wall",

                "Maximum Active":
                    "2",

                "Cooldown":
                    "14 sec"

            },


            sections: [

                {
                    name:
                        "Smoke Contact",

                    color:
                        "white",

                    description:
                        "Enemies who touch the barricade's smoke are exposed to Cedric's team and become more vulnerable to Smoke Vent.",

                    details: {

                        "Ping Duration":
                            "3 sec",

                        "Smoke Vent Damage Taken":
                            "+15%",

                        "Damage Increase Duration":
                            "4 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — OVERBURN PULSE
        ================================================= */

        {
            type: "Ability 3",

            key: "F",

            name: "Overburn Pulse",

            icon:
                "Assets/Heroes/Cedric/Abilities/overburn-pulse.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/overburn-pulse-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Overcharge every active smoke structure while empowering Cedric and nearby allies.",

            detailedDescription:
                "Cedric ignites all active smoke devices and rallies nearby allies for 4 seconds. Smoke Vents become more lethal, Smoke Barricades gain additional durability, nearby allies deal increased damage, and Cedric gains increased Movement Speed. The effect radiates from Cedric and each active smoke structure.",

            stats: {

                "Duration":
                    "4 sec",

                "Area of Effect":
                    "5 m around Cedric and each smoke structure",

                "Cooldown":
                    "20 sec"

            },


            sections: [

                {
                    name:
                        "Smoke Vent Overburn",

                    color:
                        "orange",

                    description:
                        "Smoke Vents burn hotter and attack more frequently for the duration.",

                    details: {

                        "Damage Increase":
                            "+50%",

                        "Damage":
                            "30/sec → 45/sec",

                        "Flare Rate Increase":
                            "+25%",

                        "Burst Interval":
                            "2 sec → 1.5 sec"

                    }

                },


                {
                    name:
                        "Smoke Barricade Reinforcement",

                    color:
                        "orange",

                    description:
                        "Smoke Barricades temporarily gain additional durability.",

                    details: {

                        "Bonus HP":
                            "+100"

                    }

                },


                {
                    name:
                        "Rally",

                    color:
                        "yellow",

                    description:
                        "Nearby allies gain increased damage while Cedric gains additional Movement Speed.",

                    details: {

                        "Ally Damage":
                            "+10%",

                        "Cedric Movement Speed":
                            "+20%"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — IRONCLAD BLACKOUT
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Ironclad Blackout",

            icon:
                "Assets/Heroes/Cedric/Abilities/ironclad-blackout.png",

            preview:
                "Assets/Heroes/Cedric/Abilities/ironclad-blackout-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Deploy a massive armored smoke-core furnace that turns the surrounding area into Cedric's fortified domain.",

            detailedDescription:
                "Cedric slams his gauntlets together and deploys a massive armored smoke-core furnace for 8 seconds. The furnace immediately creates an Advanced Smoke Vent while Cedric becomes dramatically harder to displace or kill. Enemies trapped inside the smoke field are Slowed and deal reduced damage. Cedric remains free to attack and use abilities throughout the Ultimate. When the furnace expires, it implodes and pulls nearby enemies toward its center.",

            stats: {

                "Duration":
                    "8 sec",

                "Cedric Damage Resistance":
                    "+50%",

                "Knockback Immunity":
                    "Yes",

                "Enemy Slow":
                    "10%",

                "Enemy Outgoing Damage Reduction":
                    "10%",

                "Expiration Effect":
                    "Implodes and pulls enemies toward center",

                "Ultimate Energy Cost":
                    "3900"

            },


            sections: [

                {
                    name:
                        "Advanced Smoke Vent",

                    color:
                        "orange",

                    description:
                        "Ironclad Blackout instantly deploys an Advanced Smoke Vent with increased durability and burn output. Its attacks also Slow enemies on hit.",

                    details: {

                        "Structure HP":
                            "300",

                        "Damage":
                            "60/sec",

                        "Burst Damage":
                            "30",

                        "Burst Interval":
                            "1.5 sec",

                        "Slows on Hit":
                            "Yes"

                    }

                },


                {
                    name:
                        "Blackout Field",

                    color:
                        "white",

                    description:
                        "The furnace fills the surrounding area with suppressive smoke before violently collapsing inward when the Ultimate ends.",

                    details: {

                        "Enemy Slow":
                            "10%",

                        "Enemy Damage Reduction":
                            "10%",

                        "Expiration":
                            "Pulls all enemies toward the center"

                    }

                }

            ]

        }

    ]

});
