/* =========================================================
   LY
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Ly",

    title: "The Prismweaver",

    role: "Catalyst",

    secondaryRoles: [
        "Lifeline",
        "Controller"
    ],

    region: "Solari",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Ly/thumbnail.png",

    heroArt:
        "Assets/Heroes/Ly/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "Ly shapes radiant crystal and refracted light into structures that sustain his allies and overwhelm enemy sightlines. His healing leaves prismatic remnants across the battlefield, allowing him to build defensive territory while repeatedly blinding anyone reckless enough to push through it.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 5,

        survivability: 4,

        crowdControl: 4,

        mobility: 1,

        support: 10,

        range: 6,

    },


    /* =====================================================
       SKINS
    ===================================================== */

    skins: [

        {
            name: "Default",

            rarity: "Base",

            thumbnail:
                "Assets/Heroes/Ly/thumbnail.png",

            splash:
                "Assets/Heroes/Ly/hero-art.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Crystal Language Study",

            image:
                "Assets/Heroes/Ly/Concept-Art/crystal-language.png",

            description:
                "Exploration of Ly's prism shapes, gemstone structures, and refracted spell effects."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — REFRACTION BLOOM
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Refraction Bloom",

            icon:
                "Assets/Heroes/Ly/Abilities/refraction-bloom.png",

            preview:
                "Assets/Heroes/Ly/Abilities/refraction-bloom-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Healing allies creates Prism Shards that can heal teammates, Blind enemies, or be absorbed by Ly to reduce his cooldowns.",

            detailedDescription:
                "Whenever Ly heals an ally, he leaves behind a Prism Shard at their location for 8 seconds. Up to 3 Prism Shards may exist at once. Allies who touch a shard are healed, enemies who pass through one are briefly Blinded, and Ly may collect his own shards to reduce his current ability cooldowns.",

            stats: {

                "Shard Duration":
                    "8 sec",

                "Maximum Active Shards":
                    "3",

                "Enemy Blind Duration":
                    "0.75 sec",

                "Cooldown Reduction when Collected":
                    "0.5 sec per shard"

            },


            sections: [

                {
                    name:
                        "Ally Contact",

                    color:
                        "green",

                    description:
                        "Allies who touch a Prism Shard are healed for a small amount.",

                    details: {

                        "Healing":
                            "TBD"

                    }

                },


                {
                    name:
                        "Enemy Contact",

                    color:
                        "white",

                    description:
                        "Enemies who pass through a Prism Shard are briefly Blinded.",

                    details: {

                        "Blind Duration":
                            "0.75 sec"

                    }

                },


                {
                    name:
                        "Ly Collection",

                    color:
                        "violet",

                    description:
                        "Ly may absorb his own Prism Shards to accelerate his abilities.",

                    details: {

                        "Cooldown Reduction":
                            "0.5 sec per shard"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — RADIANT EDGE
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Radiant Edge",

            icon:
                "Assets/Heroes/Ly/Abilities/radiant-edge.png",

            preview:
                "Assets/Heroes/Ly/Abilities/radiant-edge-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire a shard of concentrated light, with headshots accelerating Crystal Pillar's cooldown.",

            detailedDescription:
                "Ly projects a shard of light in a straight line. Headshots deal increased damage and reduce Crystal Pillar's current cooldown.",

            stats: {

                "Body Shot Damage":
                    "35",

                "Headshot Damage":
                    "60",

                "Fire Rate":
                    "2 shots/sec",

                "Range":
                    "30 m",

                "Crystal Pillar Cooldown Reduction per Headshot":
                    "0.75 sec"

            }

        },


        /* =================================================
           SECONDARY — RADIANT SHARD
        ================================================= */

        {
            type: "Secondary Fire",

            key: "M2",

            name: "Radiant Shard",

            icon:
                "Assets/Heroes/Ly/Abilities/radiant-shard.png",

            preview:
                "Assets/Heroes/Ly/Abilities/radiant-shard-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire restorative shards at allies, or charge to release all available charges at once.",

            detailedDescription:
                "Ly projects a single restorative shard of light in a straight line. Radiant Shard stores up to 5 charges. Ly may instead charge the attack for 2 seconds to expend all currently available charges at once.",

            stats: {

                "Healing":
                    "20 per shard",

                "Maximum Charges":
                    "5",

                "Full Charge Regeneration":
                    "10 sec",

                "Charge Time":
                    "2 sec",

                "Charged Cast":
                    "Uses all available charges"

            },


            sections: [

                {
                    name:
                        "Charged Release",

                    color:
                        "yellow",

                    description:
                        "Holding Secondary Fire for 2 seconds releases all currently available Radiant Shard charges at once.",

                    details: {

                        "Maximum Shards":
                            "5",

                        "Healing per Shard":
                            "20",

                        "Maximum Total Healing":
                            "100",

                        "Charge Time":
                            "2 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — CRYSTAL PILLAR
        ================================================= */

        {
            type: "Ability 1",

            key: "E",

            name: "Crystal Pillar",

            icon:
                "Assets/Heroes/Ly/Abilities/crystal-pillar.png",

            preview:
                "Assets/Heroes/Ly/Abilities/crystal-pillar-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Deploy durable crystal structures that heal allies, build Bonus Health, and Blind enemies when destroyed.",

            detailedDescription:
                "Ly deploys a gemstone column at a target location. Crystal Pillars continuously heal allies within their radius while gradually granting Bonus Health. Pillars can be destroyed by enemies, causing them to release a blinding burst. Crystal Pillar stores 2 charges, and Ly may maintain up to 2 active Pillars at once.",

            stats: {

                "Charges":
                    "2",

                "Pillar Health":
                    "400 HP",

                "Radius":
                    "7 m",

                "Healing":
                    "30 HP/sec",

                "Bonus Health":
                    "5 HP/sec",

                "Maximum Bonus Health":
                    "80",

                "Maximum Active Pillars":
                    "2",

                "Cooldown":
                    "20 sec per charge"

            },


            sections: [

                {
                    name:
                        "Restorative Field",

                    color:
                        "green",

                    description:
                        "Allies within a Crystal Pillar's radius continuously receive healing and gradually accumulate Bonus Health.",

                    details: {

                        "Healing":
                            "30 HP/sec",

                        "Bonus Health Generation":
                            "5 HP/sec",

                        "Bonus Health Cap":
                            "80",

                        "Radius":
                            "7 m"

                    }

                },


                {
                    name:
                        "Shatter Flash",

                    color:
                        "white",

                    description:
                        "When an enemy destroys a Crystal Pillar, the structure bursts into refracted light and Blinds nearby enemies.",

                    details: {

                        "Blind Radius":
                            "4 m",

                        "Blind Duration":
                            "1.5 sec"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — GEMLIGHT PULSE
        ================================================= */

        {
            type: "Ability 2",

            key: "SHIFT",

            name: "Gemlight Pulse",

            icon:
                "Assets/Heroes/Ly/Abilities/gemlight-pulse.png",

            preview:
                "Assets/Heroes/Ly/Abilities/gemlight-pulse-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Send cleansing healing pulses from Ly and every active Crystal Pillar, then temporarily strengthen the Pillars' healing.",

            detailedDescription:
                "Ly releases a ripple of Gemlight from himself and every active Crystal Pillar. Each pulse Cleanses status effects and instantly heals affected allies. Afterward, all active Crystal Pillars gain increased healing for 5 seconds.",

            stats: {

                "Instant Healing":
                    "60",

                "Pulse Radius":
                    "6 m from Ly and each Pillar",

                "Pillar Healing Increase":
                    "+30 HP/sec",

                "Pillar Healing Increase Duration":
                    "5 sec",

                "Cleanses Status Effects":
                    "Yes",

                "Cooldown":
                    "15 sec"

            },


            sections: [

                {
                    name:
                        "Ly Pulse",

                    color:
                        "yellow",

                    description:
                        "Ly emits a cleansing restorative pulse around himself.",

                    details: {

                        "Healing":
                            "60",

                        "Radius":
                            "6 m",

                        "Cleanse":
                            "Yes"

                    }

                },


                {
                    name:
                        "Pillar Pulse",

                    color:
                        "green",

                    description:
                        "Every active Crystal Pillar simultaneously emits the same pulse and gains stronger healing afterward.",

                    details: {

                        "Healing":
                            "60",

                        "Radius":
                            "6 m around each Pillar",

                        "Additional Pillar Healing":
                            "+30 HP/sec",

                        "Empower Duration":
                            "5 sec",

                        "Cleanse":
                            "Yes"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — LUSTRE SANCTUARY
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Lustre Sanctuary",

            icon:
                "Assets/Heroes/Ly/Abilities/lustre-sanctuary.png",

            preview:
                "Assets/Heroes/Ly/Abilities/lustre-sanctuary-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Raise a massive prism-shaped crystal sanctuary that heals and empowers allies while completely disrupting enemy vision.",

            detailedDescription:
                "Ly summons a prism-shaped forest of crystals that lasts for 7 seconds. Allies inside are periodically healed, move faster, and receive increased healing from all sources. The crystal walls block enemy vision into the Sanctuary, while enemies who enter the Sanctuary remain Blinded for as long as they stay inside. Allies may freely leave the area.",

            stats: {

                "Duration":
                    "7 sec",

                "Width":
                    "14 m",

                "Radius":
                    "7 m",

                "Healing Pulse":
                    "100 HP",

                "Healing Pulse Interval":
                    "Every 2 sec",

                "Movement Speed":
                    "+15%",

                "Healing Received Increase":
                    "+20%",

                "Enemy Vision Into Sanctuary":
                    "Blocked",

                "Ultimate Cost":
                    "4200"

            },


            sections: [

                {
                    name:
                        "Prismatic Restoration",

                    color:
                        "green",

                    description:
                        "Allies inside the Sanctuary are repeatedly healed and receive increased healing from every source.",

                    details: {

                        "Healing":
                            "100 HP per pulse",

                        "Pulse Interval":
                            "2 sec",

                        "Healing Received Increase":
                            "+20%"

                    }

                },


                {
                    name:
                        "Refracted Movement",

                    color:
                        "blue",

                    description:
                        "Allies within Lustre Sanctuary gain increased Movement Speed and may leave the crystal forest freely.",

                    details: {

                        "Movement Speed":
                            "+15%",

                        "Allies Can Exit":
                            "Yes"

                    }

                },


                {
                    name:
                        "Lightless Interior",

                    color:
                        "white",

                    description:
                        "Enemies outside cannot see through the Sanctuary, while enemies who enter are Blinded for as long as they remain inside.",

                    details: {

                        "Vision From Outside":
                            "Blocked",

                        "Enemies Inside":
                            "Blinded continuously",

                        "Duration":
                            "While inside Sanctuary"

                    }

                }

            ]

        }

    ]

});
