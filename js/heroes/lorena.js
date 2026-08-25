/* =========================================================
   LORENA
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Lorena",

    title: "The Queen of Elaris",

    role: "Catalyst",

    secondaryRoles: [
        "Lifeline",
        "Controller"
    ],

    region: "Elaris",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Lorena/thumbnail.png",

    heroArt:
        "Assets/Heroes/Lorena/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "Lorena commands the battlefield with the authority of a Queen, transforming the space around her into a sanctuary for her Court. She rewards allies who remain by her side with immense sustain while punishing enemies who dare challenge her sovereignty.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 4,

        survivability: 7,

        crowdControl: 7,

        mobility: 2,

        support: 10,

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
                "Assets/Heroes/Lorena/thumbnail.png",

            splash:
                "Assets/Heroes/Lorena/hero-art.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Royal Crown Study",

            image:
                "Assets/Heroes/Lorena/Concept-Art/royal-crown-study.png",

            description:
                "Early exploration of Lorena's psychic Crown and Throne."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — ROYAL COURT
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Royal Court",

            icon:
                "Assets/Heroes/Lorena/Abilities/royal-court.png",

            preview:
                "Assets/Heroes/Lorena/Abilities/royal-court-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Passively heal nearby allies and establish Lorena's Throne after leaving combat, creating an empowered restorative Court.",

            detailedDescription:
                "Lorena passively heals nearby allies through her Royal Presence. After remaining out of combat for 5 seconds, Lorena establishes her Throne. The Throne creates a larger restorative Court whose healing increases for every allied hero within range, excluding Lorena. Lorena may move freely within the Court and cannot be displaced while inside it. The Throne can be destroyed by enemies and is dismissed if Lorena moves outside its area.",

            stats: {

                "Royal Presence Radius":
                    "5 m",

                "Royal Presence Healing":
                    "35 HP/s",

                "Throne Setup Requirement":
                    "5 sec out of combat",

                "Throne Health":
                    "300",

                "Court Radius":
                    "10 m",

                "Court Base Healing":
                    "30 HP/s",

                "Healing per Ally":
                    "+7 HP/s",

                "Healing Falloff":
                    "Begins at 4 m, falling to 50% at 10 m",

                "Displacement Immunity":
                    "While Lorena is inside the Court"

            },


            sections: [

                {
                    name:
                        "Royal Presence",

                    color:
                        "yellow",

                    description:
                        "Lorena naturally restores the Health of allied heroes who remain close to her.",

                    details: {

                        "Healing":
                            "35 HP/s",

                        "Radius":
                            "5 m"

                    }

                },


                {
                    name:
                        "The Throne",

                    color:
                        "violet",

                    description:
                        "After remaining out of combat, Lorena establishes her Throne and creates a larger restorative Court around it.",

                    details: {

                        "Time Out of Combat":
                            "5 sec",

                        "Throne Health":
                            "300",

                        "Court Radius":
                            "10 m",

                        "Base Healing":
                            "30 HP/s",

                        "Additional Healing per Ally":
                            "+7 HP/s",

                        "Lorena Counts Toward Scaling":
                            "No"

                    }

                },


                {
                    name:
                        "Royal Authority",

                    color:
                        "white",

                    description:
                        "Lorena may freely move throughout her Court and cannot be displaced while she remains within its boundaries.",

                    details: {

                        "Displacement Immunity":
                            "Yes",

                        "Active Area":
                            "Within 10 m of Throne",

                        "Leaving Court":
                            "Destroys Throne"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — ROYAL SCEPTER
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Royal Scepter",

            icon:
                "Assets/Heroes/Lorena/Abilities/royal-scepter.png",

            preview:
                "Assets/Heroes/Lorena/Abilities/royal-scepter-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire psychic energy that damages enemies and bursts healing around Lorena. Critical hits Exile enemies instead of dealing critical damage.",

            detailedDescription:
                "Lorena fires psychic energy from her Royal Scepter. Dealing damage causes a burst of healing around Lorena equal to the damage dealt. Royal Scepter cannot deal Critical Hit damage. Instead, attacks that would Critically Hit apply Exiled to the enemy for 4 seconds. Allied heroes who damage an Exiled enemy restore Health.",

            stats: {

                "Damage":
                    "30",

                "Burst Healing":
                    "Equal to damage dealt",

                "Critical Damage":
                    "None",

                "Exiled Duration":
                    "4 sec",

                "Exiled Ally Healing":
                    "20 HP"

            },


            sections: [

                {
                    name:
                        "Royal Restoration",

                    color:
                        "green",

                    description:
                        "Whenever Royal Scepter damages an enemy, Lorena releases a restorative burst around herself equal to the damage dealt.",

                    details: {

                        "Base Damage":
                            "30",

                        "Base Burst Healing":
                            "30",

                        "Healing Scaling":
                            "Equal to damage dealt"

                    }

                },


                {
                    name:
                        "Exiled",

                    color:
                        "red",

                    description:
                        "Royal Scepter does not deal increased Critical Hit damage. Instead, attacks that would Critically Hit mark the enemy as Exiled.",

                    details: {

                        "Duration":
                            "4 sec",

                        "Ally Healing per Hit":
                            "20 HP",

                        "Critical Damage":
                            "Replaced by Exiled"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — GRACE OF THE CROWN
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Grace of the Crown",

            icon:
                "Assets/Heroes/Lorena/Abilities/grace-of-the-crown.png",

            preview:
                "Assets/Heroes/Lorena/Abilities/grace-of-the-crown-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Bestow royal grace upon an ally, healing based on their missing Health and converting excess healing into Bonus Health.",

            detailedDescription:
                "Lorena targets an allied hero and restores Health based on how much Health they are currently missing. The target also receives increased healing. Any healing from Grace of the Crown that exceeds the target's maximum Health is converted into Bonus Health.",

            stats: {

                "Range":
                    "20 m",

                "Base Healing":
                    "50",

                "Missing Health Healing":
                    "+25% of Missing HP",

                "Maximum Bonus Health":
                    "100",

                "Healing Boost":
                    "+15%"

            },


            sections: [

                {
                    name:
                        "Overflowing Grace",

                    color:
                        "green",

                    description:
                        "Healing that would exceed the ally's maximum Health is converted into Bonus Health.",

                    details: {

                        "Maximum Bonus Health":
                            "100"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — IMPERIAL BASTION
        ================================================= */

        {
            type: "Ability 2",

            key: "E",

            name: "Imperial Bastion",

            icon:
                "Assets/Heroes/Lorena/Abilities/imperial-bastion.png",

            preview:
                "Assets/Heroes/Lorena/Abilities/imperial-bastion-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Command the Crown to establish a royal sanctuary that heals, protects, and Cleanses allies who enter.",

            detailedDescription:
                "Lorena commands her Crown to create a royal sanctuary at a target location for 6 seconds. Allied heroes within Imperial Bastion receive continuous healing and Damage Reduction. The first time an ally enters the Bastion during each cast, their Crowd Control effects are Cleansed. The Bastion can be destroyed by enemies.",

            stats: {

                "Duration":
                    "6 sec",

                "Health":
                    "300",

                "Damage Reduction":
                    "20%",

                "Healing":
                    "25 HP/s",

                "Cleanse":
                    "On first entry",

                "Cooldown":
                    "16 sec"

            },


            sections: [

                {
                    name:
                        "Royal Sanctuary",

                    color:
                        "green",

                    description:
                        "Allied heroes inside Imperial Bastion receive continuous healing and reduced incoming damage.",

                    details: {

                        "Healing":
                            "25 HP/s",

                        "Damage Reduction":
                            "20%",

                        "Duration":
                            "6 sec"

                    }

                },


                {
                    name:
                        "Crown's Protection",

                    color:
                        "white",

                    description:
                        "The first time an ally enters Imperial Bastion during a cast, Crowd Control effects affecting them are Cleansed.",

                    details: {

                        "Cleanse":
                            "Yes",

                        "Trigger":
                            "First entry per cast"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — THE QUEEN'S COMMAND
        ================================================= */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "The Queen's Command",

            icon:
                "Assets/Heroes/Lorena/Abilities/the-queens-command.png",

            preview:
                "Assets/Heroes/Lorena/Abilities/the-queens-command-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Release a wave of psychic authority that forces enemies to face Lorena and kneel before their Queen.",

            detailedDescription:
                "After a brief psychic pressure delay, Lorena sends a wave outward that damages enemies and forces them to look toward her and kneel, Taunting them for a short duration. Kneeling enemies are revealed to Court Members. If Lorena damages a kneeling enemy, they become Exiled and Lorena gains increased Critical Hit Chance for a short duration.",

            stats: {

                "Psychic Pressure Delay":
                    "0.75 sec",

                "Wave Radius":
                    "2 m",

                "Projectile Speed":
                    "60 m/s",

                "Damage":
                    "25",

                "Taunted Duration":
                    "1 sec",

                "Critical Hit Chance":
                    "+10%",

                "Critical Hit Buff Duration":
                    "4 sec",

                "Reveal Duration":
                    "5 sec",

                "Cooldown":
                    "14 sec"

            },


            sections: [

                {
                    name:
                        "Kneel",

                    color:
                        "violet",

                    description:
                        "Enemies struck by The Queen's Command are forced to face Lorena and kneel before her.",

                    details: {

                        "Taunted Duration":
                            "1 sec",

                        "Reveal Duration":
                            "5 sec"

                    }

                },


                {
                    name:
                        "Royal Judgment",

                    color:
                        "red",

                    description:
                        "Damaging an enemy while they are kneeling Exiles them and temporarily increases Lorena's Critical Hit Chance.",

                    details: {

                        "Exiled Duration":
                            "4 sec",

                        "Critical Hit Chance":
                            "+10%",

                        "Buff Duration":
                            "4 sec"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — ABSOLUTE SOVEREIGNTY
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Absolute Sovereignty",

            icon:
                "Assets/Heroes/Lorena/Abilities/absolute-sovereignty.png",

            preview:
                "Assets/Heroes/Lorena/Abilities/absolute-sovereignty-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Establish a massive Royal Domain that continuously restores allies and turns hostile abilities back against those who cast them.",

            detailedDescription:
                "Lorena channels the full psychic authority of her Crown and establishes a massive Royal Domain. The Domain continuously heals allied heroes and manifests a destructible Crown at its center. Hostile abilities that would directly damage or impair Lorena or her allies within the Domain can be negated and Reflected back toward their original caster. Each enemy may only trigger Crown's Reprisal once every 2 seconds. The Domain ends when its duration expires or its Crown is destroyed.",

            stats: {

                "Cast Time":
                    "1 sec",

                "Radius":
                    "15 m",

                "Duration":
                    "7 sec",

                "Domain Health":
                    "1000",

                "Healing":
                    "50 HP/s",

                "Reflection Internal Cooldown":
                    "2 sec per enemy",

                "Can Reflect Ultimates":
                    "Yes",

                "Ultimate Cost":
                    "4300 Energy"

            },


            sections: [

                {
                    name:
                        "Royal Domain",

                    color:
                        "yellow",

                    description:
                        "Lorena establishes an enormous area under the absolute authority of her Crown. Allies within the Domain are continuously healed until the Domain expires or its Crown is destroyed.",

                    details: {

                        "Radius":
                            "15 m",

                        "Duration":
                            "7 sec",

                        "Healing":
                            "50 HP/s",

                        "Crown Health":
                            "1000"

                    }

                },


                {
                    name:
                        "Crown's Reprisal",

                    color:
                        "violet",

                    description:
                        "The first hostile ability from each enemy that would directly damage or impair an allied hero within the Domain is negated and Reflected toward its original caster. Each enemy can trigger Crown's Reprisal once every 2 seconds.",

                    details: {

                        "Original Effect":
                            "Negated",

                        "Reflection":
                            "Returned to original caster",

                        "Reflection Cooldown":
                            "2 sec per enemy",

                        "Reflected Damage Attribution":
                            "Lorena",

                        "Can Reflect Ultimates":
                            "Yes"

                    }

                },


                {
                    name:
                        "Royal Reversal",

                    color:
                        "white",

                    description:
                        "Hostile effects that cannot physically travel backward are recreated on or around their original caster instead. Abilities that do not directly damage or impair an allied hero are unaffected.",

                    details: {

                        "Projectiles":
                            "Reflected toward caster",

                        "Targeted Hostile Effects":
                            "Returned to caster",

                        "Non-Reflectable Hostile Effects":
                            "Recreated on caster",

                        "Self Buffs / Mobility / Non-Hostile Utility":
                            "Unaffected"

                    }

                }

            ]

        }

    ]

});
