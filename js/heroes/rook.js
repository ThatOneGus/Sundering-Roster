/* =========================================================
   ROOK
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Rook",

    title: "The Bloodhound",

    role: "Striker",

    secondaryRoles: [
        "Brawler",
        "Hunter"
    ],

    region: "Thaloria",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Rook/thumbnail.png",

    heroArt:
        "Assets/Heroes/Rook/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A relentless close-range predator, Rook marks wounded enemies by scent and pursues them with brutal persistence. His mobility, physical disruption, and escalating damage allow him to tear through defensive lines and chase prey long after most opponents would have escaped.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 8,

        survivability: 6,

        crowdControl: 6,

        mobility: 9,

        support: 1,

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
                "Assets/Heroes/Rook/thumbnail.png",

            splash:
                "Assets/Heroes/Rook/hero-art.png"
        },

        {
            name: "Beachcomber",

            rarity: "Epic",

            thumbnail:
                "Assets/Heroes/Rook/Skins/Beachcomber/thumbnail.png",

            splash:
                "Assets/Heroes/Rook/Skins/Beachcomber/splash.png"
        },

        {
            name: "Spray Stray",

            rarity: "Legendary",

            thumbnail:
                "Assets/Heroes/Rook/Skins/Spray-Stray/thumbnail.png",

            splash:
                "Assets/Heroes/Rook/Skins/Spray-Stray/splash.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Early Bloodhound Study",

            image:
                "Assets/Heroes/Rook/Concept-Art/bloodhound-study.png",

            description:
                "Early exploration of Rook's canine silhouette and predatory fighting stance."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — BLOODHOUND'S SCENT
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Bloodhound's Scent",

            icon:
                "Assets/Heroes/Rook/Abilities/bloodhounds-scent.png",

            preview:
                "Assets/Heroes/Rook/Abilities/bloodhounds-scent-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Abilities and the final strike of Feral Combo Scent enemies, revealing them and causing Rook to deal increased damage to them.",

            detailedDescription:
                "Rook's instincts allow him to relentlessly hunt wounded prey. Enemies damaged by Rook's abilities or the final strike of Feral Combo become Scented for 6 seconds. Scented enemies are revealed through walls to Rook, leave behind a visible scent trail only he can see, and take increased damage from him. Reapplying Bloodhound's Scent refreshes its duration.",

            stats: {

                "Scent Duration":
                    "6 sec",

                "Damage Increase":
                    "+10%",

                "Reveal Through Walls":
                    "Yes",

                "Visible Scent Trail":
                    "Rook only",

                "Reapplication":
                    "Refreshes duration"

            },


            sections: [

                {
                    name:
                        "Scented",

                    color:
                        "red",

                    description:
                        "Scented enemies become much easier for Rook to track and take increased damage from all of his attacks.",

                    details: {

                        "Duration":
                            "6 sec",

                        "Damage Taken from Rook":
                            "+10%",

                        "Wall Reveal":
                            "Yes",

                        "Scent Trail":
                            "Visible to Rook"

                    }

                }

            ]

        },


        /* =================================================
           PRIMARY — FERAL COMBO
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Feral Combo",

            icon:
                "Assets/Heroes/Rook/Abilities/feral-combo.png",

            preview:
                "Assets/Heroes/Rook/Abilities/feral-combo-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Unleash a relentless five-hit martial arts combo that ends with a powerful knockback strike and applies Bloodhound's Scent.",

            detailedDescription:
                "Rook performs a five-hit martial arts combo. The first 4 strikes deal lighter damage, while the fifth strike hits significantly harder, knocks the enemy backward, and applies Bloodhound's Scent. If Rook waits too long between attacks, the combo resets back to its first strike.",

            stats: {

                "Hits 1–4 Damage":
                    "25",

                "Hit 5 Damage":
                    "50",

                "Hit 5 Knockback":
                    "1.5 m",

                "Attack Speed":
                    "2 attacks/sec",

                "Combo Grace Window":
                    "1 sec",

                "Hit 5 Applies Scent":
                    "Yes"

            },


            sections: [

                {
                    name:
                        "Final Strike",

                    color:
                        "red",

                    description:
                        "The fifth strike delivers the finishing blow of Feral Combo, knocking the target away and applying Bloodhound's Scent.",

                    details: {

                        "Damage":
                            "50",

                        "Knockback":
                            "1.5 m",

                        "Applies Bloodhound's Scent":
                            "Yes"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 1 — GUTBREAKER
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Gutbreaker",

            icon:
                "Assets/Heroes/Rook/Abilities/gutbreaker.png",

            preview:
                "Assets/Heroes/Rook/Abilities/gutbreaker-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Launch an enemy into the air with a devastating uppercut, then recast to chase them and slam them back into the ground.",

            detailedDescription:
                "Rook delivers a powerful uppercut that damages and Throws an enemy into the air. Gutbreaker may be recast within 1 second as Pounce Kick, causing Rook to leap after the launched target and slam them into the ground. The impact damages enemies in an area and applies Bloodhound's Scent.",

            stats: {

                "Gutbreaker Damage":
                    "70",

                "Range":
                    "4 m",

                "Thrown Duration":
                    "0.5 sec",

                "Recast Window":
                    "1 sec",

                "Cooldown":
                    "9 sec"

            },


            sections: [

                {
                    name:
                        "Gutbreaker",

                    color:
                        "orange",

                    description:
                        "Rook launches the target upward with a brutal uppercut.",

                    details: {

                        "Damage":
                            "70",

                        "Range":
                            "4 m",

                        "Thrown Duration":
                            "0.5 sec"

                    }

                },


                {
                    name:
                        "Recast — Pounce Kick",

                    color:
                        "red",

                    description:
                        "Recast within 1 second to leap after the launched enemy and drive them into the ground.",

                    details: {

                        "Damage":
                            "80",

                        "Explosion Radius":
                            "3 m",

                        "Applies Bloodhound's Scent":
                            "Yes"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — WHIPLASH STEP
        ================================================= */

        {
            type: "Ability 2",

            key: "E",

            name: "Whiplash Step",

            icon:
                "Assets/Heroes/Rook/Abilities/whiplash-step.png",

            preview:
                "Assets/Heroes/Rook/Abilities/whiplash-step-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Dash rapidly in a chosen direction and automatically lunge toward nearby Scented prey.",

            detailedDescription:
                "Rook rapidly dashes in the chosen direction while gaining Damage Reduction. If a Scented enemy is within 8 meters of his destination, Rook automatically lunges toward them and delivers a claw strike.",

            stats: {

                "Dash Distance":
                    "6 m",

                "Scent Detection Range":
                    "8 m from destination",

                "Claw Strike Damage":
                    "40",

                "Damage Reduction":
                    "25%",

                "Cooldown":
                    "10 sec"

            },


            sections: [

                {
                    name:
                        "Predatory Lunge",

                    color:
                        "red",

                    description:
                        "If Rook finishes his dash close enough to a Scented enemy, he automatically lunges toward them and attacks.",

                    details: {

                        "Detection Range":
                            "8 m",

                        "Strike Damage":
                            "40",

                        "Target Requirement":
                            "Scented enemy"

                    }

                },


                {
                    name:
                        "Whiplash Guard",

                    color:
                        "white",

                    description:
                        "Rook becomes harder to damage during the dash.",

                    details: {

                        "Damage Reduction":
                            "25%",

                        "Duration":
                            "While dashing"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — APEX MAUL
        ================================================= */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "Apex Maul",

            icon:
                "Assets/Heroes/Rook/Abilities/apex-maul.png",

            preview:
                "Assets/Heroes/Rook/Abilities/apex-maul-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Leap forward with a crushing overhead strike that deals more damage to wounded enemies and tears through the defenses of Scented prey.",

            detailedDescription:
                "Rook leaps forward and delivers a crushing overhead maul. Apex Maul deals additional damage based on the target's Missing Health, making it increasingly dangerous against wounded enemies. Against Scented enemies, the attack ignores part of their Damage Reduction and fully refreshes Bloodhound's Scent.",

            stats: {

                "Base Damage":
                    "90",

                "Range":
                    "7 m",

                "Missing Health Scaling":
                    "1.5 × 10% of target's Missing Health",

                "Cooldown":
                    "13 sec"

            },


            sections: [

                {
                    name:
                        "Predatory Damage",

                    color:
                        "orange",

                    description:
                        "Apex Maul deals additional damage based on the target's Missing Health.",

                    details: {

                        "Base Damage":
                            "90",

                        "Bonus Damage":
                            "1.5 × 10% Missing Health"

                    }

                },


                {
                    name:
                        "Against Scented Enemies",

                    color:
                        "red",

                    description:
                        "Scented prey cannot rely as heavily on defensive mitigation against Apex Maul.",

                    details: {

                        "Damage Reduction Ignored":
                            "20%",

                        "Bloodhound's Scent":
                            "Refreshed to full duration"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 4 — CHEW TOY
        ================================================= */

        {
            type: "Ability 4",

            key: "F",

            name: "Chew Toy",

            icon:
                "Assets/Heroes/Rook/Abilities/chew-toy.png",

            preview:
                "Assets/Heroes/Rook/Abilities/chew-toy-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Pounce onto an enemy and bite them, consuming Bloodhound's Scent for healing, bonus damage, and cooldown recovery.",

            detailedDescription:
                "Rook pounces onto a target and viciously bites into them, dealing damage and briefly Slowing them. If the target is Scented, Chew Toy consumes Bloodhound's Scent to restore Rook's Health, deal bonus damage, and refund a portion of his current ability cooldowns. Chew Toy can also target many summons and deployables with Health, dealing massive damage to them instead.",

            stats: {

                "Leap Range":
                    "6 m",

                "Base Damage":
                    "45",

                "Slow":
                    "25%",

                "Slow Duration":
                    "1.5 sec",

                "Enemy Cooldown":
                    "8 sec",

                "Object Cooldown":
                    "5 sec"

            },


            sections: [

                {
                    name:
                        "Scent Consumption",

                    color:
                        "red",

                    description:
                        "Using Chew Toy on a Scented enemy consumes the mark and dramatically strengthens the bite.",

                    details: {

                        "Bloodhound's Scent":
                            "Consumed",

                        "Healing":
                            "60 HP",

                        "Cooldown Refund":
                            "20% of all current ability cooldowns",

                        "Bonus Damage":
                            "40",

                        "Total Damage":
                            "85"

                    }

                },


                {
                    name:
                        "Deployable Destruction",

                    color:
                        "orange",

                    description:
                        "Chew Toy can target many summoned objects and deployables that possess Health. Instead of its normal enemy interaction, the bite deals massive damage to the object.",

                    details: {

                        "Can Target Summons":
                            "Yes",

                        "Can Target Deployables":
                            "Yes",

                        "Requires Health":
                            "Yes",

                        "Damage to Objects":
                            "Massive",

                        "Cooldown":
                            "5 sec"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — THE HUNT
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "The Hunt",

            icon:
                "Assets/Heroes/Rook/Abilities/the-hunt.png",

            preview:
                "Assets/Heroes/Rook/Abilities/the-hunt-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Lock onto the weakest nearby Scented enemy and relentlessly pursue them before finishing the hunt with an Execution Pounce.",

            detailedDescription:
                "Rook releases a terrifying howl and locks onto the lowest-Health Scented enemy within 30 meters. For 6 seconds, the hunted target remains permanently revealed to Rook and leaves behind a dramatically stronger scent trail. Rook gains increasing Movement Speed while moving toward the target based on their distance from him. The hunted enemy hears a growing heartbeat as Rook approaches. Rook may recast The Hunt to perform Execution Pounce.",

            stats: {

                "Target":
                    "Lowest-Health Scented enemy",

                "Target Range":
                    "30 m",

                "Hunt Duration":
                    "6 sec",

                "Movement Speed":
                    "+20% → +65%",

                "Movement Speed Scaling":
                    "Based on distance to target",

                "Permanent Reveal":
                    "For Hunt duration",

                "Ultimate Cost":
                    "3500"

            },


            sections: [

                {
                    name:
                        "Hunted",

                    color:
                        "red",

                    description:
                        "The weakest nearby Scented enemy becomes Rook's prey and cannot escape his tracking for the duration of The Hunt.",

                    details: {

                        "Target Selection":
                            "Lowest-Health Scented enemy",

                        "Maximum Acquisition Range":
                            "30 m",

                        "Reveal Duration":
                            "6 sec",

                        "Enhanced Scent Trail":
                            "Yes"

                    }

                },


                {
                    name:
                        "Predator's Pursuit",

                    color:
                        "orange",

                    description:
                        "Rook gains increasingly powerful Movement Speed while traveling toward his hunted target.",

                    details: {

                        "Minimum Movement Speed":
                            "+20%",

                        "Maximum Movement Speed":
                            "+65%",

                        "Scaling":
                            "Increases with distance"

                    }

                },


                {
                    name:
                        "Recast — Execution Pounce",

                    color:
                        "violet",

                    description:
                        "Rook leaps toward his hunted prey for a devastating finishing attack. The leap ends early if blocked by terrain.",

                    details: {

                        "Maximum Leap Distance":
                            "16 m",

                        "Base Damage":
                            "100",

                        "Missing Health Scaling":
                            "4.5 × 10% of target's Missing Health",

                        "Stun Duration":
                            "0.75 sec",

                        "Terrain Collision":
                            "Stops Rook"

                    }

                }

            ]

        }

    ]

});
