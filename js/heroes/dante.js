window.heroes = window.heroes || [];

window.heroes.push({
    name: "Dante",

    title: "Elaris's Most Wanted",

    role: "Striker",

    secondaryRoles: [
        "Hunter",
        "Disruptor"
    ],

    region: "TBD",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Dante/IMG_6716.png",

    heroArt:
        "Assets/Heroes/Dante/IMG_6713.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A highly mobile thief who turns his enemies' own advantages against them. Dante scales walls, steals resources, hijacks abilities, and slips through fights while constantly redistributing whatever he can get his hands on.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 6,

        survivability: 6,

        crowdControl: 5,

        mobility: 7,

        support: 3,

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
                "Assets/Heroes/Dante/Skins/Default/thumbnail.png"
        },
        
        {
            name: "Elarian Theif",

            rarity: "Epic",

            thumbnail:
                "Assets/Heroes/Dante/Skins/Default/thumbnail.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        {
            title: "Dante Concept Art",

            image:
                "Assets/Heroes/Dante/IMG_6712.png",

            description:
                "Concept art of Dante before final render."
        },

        {
            title: "Elarian Thief Concept Art",

            image:
                "Assets/Heroes/Dante/IMG_6681.png",

            description:
                "Early exploration of Dante's look, later turned into skin."
        }

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — EASY PICKINGS
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Easy Pickings",

            icon:
                "Assets/Heroes/Dante/Abilities/easy-pickings.png",

            preview:
                "Assets/Heroes/Dante/Abilities/easy-pickings-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Every fifth successful hit steals a random resource from the target and gives it to Dante.",

            detailedDescription:
                "Every fifth successful hit steals one random valid resource from the target. The target loses the stolen resource while Dante gains it. If the selected resource cannot be stolen from that target, such as Bonus Health when the target has none, another valid resource is selected instead.",

            stats: {

                "Trigger":
                    "Every 5th successful hit",

                "Invalid Resource":
                    "Rerolls to another valid resource"

            },


            sections: [

                {
                    name:
                        "Ultimate Energy",

                    color:
                        "violet",

                    details: {

                        "Ultimate Charge Stolen":
                            "3%"

                    }

                },


                {
                    name:
                        "Health",

                    color:
                        "green",

                    details: {

                        "Healing":
                            "25 HP"

                    }

                },


                {
                    name:
                        "Movement Speed",

                    color:
                        "yellow",

                    details: {

                        "Movement Speed Stolen":
                            "10%",

                        "Duration":
                            "8 sec"

                    }

                },


                {
                    name:
                        "Damage",

                    color:
                        "red",

                    details: {

                        "Damage Stolen":
                            "10%",

                        "Duration":
                            "8 sec"

                    }

                },


                {
                    name:
                        "Healing",

                    color:
                        "teal",

                    details: {

                        "Healing Received Stolen":
                            "20%",

                        "Duration":
                            "4 sec"

                    }

                },


                {
                    name:
                        "Bonus Health",

                    color:
                        "blue",

                    details: {

                        "Bonus Health Stolen":
                            "25",

                        "Duration":
                            "4 sec"

                    }

                }

            ]

        },


        /* =================================================
           PASSIVE — STEALTHY GRIP
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Stealthy Grip",

            icon:
                "Assets/Heroes/Dante/Abilities/stealthy-grip.png",

            preview:
                "Assets/Heroes/Dante/Abilities/stealthy-grip-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Crawl freely across walls and cling to vertical surfaces indefinitely.",

            detailedDescription:
                "Dante can crawl along walls and cling to vertical surfaces. While attached, he can move vertically and horizontally and may remain on the wall indefinitely. Releasing the wall causes Dante to fall normally. Dante may use Twin Daggers and Heavy Throw while clinging to a wall. Using another ability causes him to release the wall unless that ability specifically allows otherwise.",

            stats: {

                "Wall Crawl Speed":
                    "4.5 m/s",

                "Maximum Wall Duration":
                    "Indefinite",

                "Vertical Movement":
                    "Yes",

                "Horizontal Movement":
                    "Yes",

                "Can Use Twin Daggers":
                    "Yes",

                "Can Use Heavy Throw":
                    "Yes"

            }

        },


        /* =================================================
           PRIMARY — TWIN DAGGERS
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Twin Daggers",

            icon:
                "Assets/Heroes/Dante/Abilities/twin-daggers.png",

            preview:
                "Assets/Heroes/Dante/Abilities/twin-daggers-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Rapidly throw lightweight daggers that build Easy Pickings with every successful hit.",

            detailedDescription:
                "Dante throws a rapid succession of lightweight daggers. Every successful hit contributes one hit toward Easy Pickings.",

            stats: {

                "Damage":
                    "18",

                "Fire Rate":
                    "4 shots/sec",

                "Projectile Speed":
                    "120 m/s",

                "Range":
                    "25 m",

                "Easy Pickings Progress":
                    "1 hit per successful strike"

            }

        },


        /* =================================================
           SECONDARY — HEAVY THROW
        ================================================= */

        {
            type: "Secondary Fire",

            key: "M2",

            name: "Heavy Throw",

            icon:
                "Assets/Heroes/Dante/Abilities/heavy-throw.png",

            preview:
                "Assets/Heroes/Dante/Abilities/heavy-throw-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Hurl a heavy throwing knife that rapidly advances Easy Pickings and triggers it immediately on a Critical Hit.",

            detailedDescription:
                "Dante hurls a heavy throwing knife with deadly precision. A successful hit counts as 2 hits toward Easy Pickings. Landing a Critical Hit immediately activates Easy Pickings regardless of current progress.",

            stats: {

                "Damage":
                    "60",

                "Projectile Speed":
                    "120 m/s",

                "Fire Rate":
                    "0.8 shots/sec",

                "Range":
                    "40 m",

                "Easy Pickings Progress":
                    "2 hits",

                "Critical Hit":
                    "Immediately activates Easy Pickings"

            }

        },


        /* =================================================
           ABILITY 1 — BLACK MARKET TONIC
        ================================================= */

        {
            type: "Ability 1",

            key: "E",

            name: "Black Market Tonic",

            icon:
                "Assets/Heroes/Dante/Abilities/black-market-tonic.png",

            preview:
                "Assets/Heroes/Dante/Abilities/black-market-tonic-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Drink a stolen concoction that heals Dante and gains an additional effect based on his most recently stolen resource.",

            detailedDescription:
                "Dante drinks a concoction brewed from stolen goods and forbidden ingredients. The tonic immediately restores Health and provides additional healing over time. Its secondary effect changes based on the most recent resource stolen through Easy Pickings.",

            stats: {

                "Instant Healing":
                    "40 HP",

                "Healing Over Time":
                    "10 HP/sec",

                "Healing Duration":
                    "4 sec",

                "Cooldown":
                    "14 sec"

            },


            sections: [

                {
                    name:
                        "Bonus Health Stolen",

                    color:
                        "blue",

                    details: {

                        "Bonus Health":
                            "50",

                        "Duration":
                            "4 sec"

                    }

                },


                {
                    name:
                        "Movement Speed Stolen",

                    color:
                        "yellow",

                    details: {

                        "Movement Speed":
                            "+25%",

                        "Duration":
                            "4 sec"

                    }

                },


                {
                    name:
                        "Damage Stolen",

                    color:
                        "red",

                    details: {

                        "Damage Increase":
                            "+15%",

                        "Duration":
                            "4 sec"

                    }

                },


                {
                    name:
                        "Healing Stolen",

                    color:
                        "teal",

                    description:
                        "The tonic's healing-over-time effect is doubled.",

                    details: {

                        "Healing Over Time":
                            "20 HP/sec",

                        "Duration":
                            "4 sec"

                    }

                },


                {
                    name:
                        "Ultimate Energy Stolen",

                    color:
                        "violet",

                    details: {

                        "Current Ability Cooldowns":
                            "-1.5 sec"

                    }

                },


                {
                    name:
                        "Health Stolen",

                    color:
                        "green",

                    description:
                        "The tonic's immediate healing is increased.",

                    details: {

                        "Instant Healing":
                            "50 HP"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — TAX COLLECTOR
        ================================================= */

        {
            type: "Ability 2",

            key: "SHIFT",

            name: "Tax Collector",

            icon:
                "Assets/Heroes/Dante/Abilities/tax-collector.png",

            preview:
                "Assets/Heroes/Dante/Abilities/tax-collector-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Collect tribute from nearby enemies, stealing Ultimate Charge, Bonus Health, and Movement Speed from all of them.",

            detailedDescription:
                "Dante collects tribute from every enemy within 5m. Each affected enemy loses Ultimate Charge, Bonus Health, and Movement Speed. When multiple enemies are affected, the resources Dante gains stack up to their respective maximum values.",

            stats: {

                "Radius":
                    "5 m",

                "Ultimate Charge Stolen per Enemy":
                    "4%",

                "Bonus Health Stolen per Enemy":
                    "25",

                "Movement Speed Stolen per Enemy":
                    "5%",

                "Movement Speed Duration":
                    "5 sec",

                "Cooldown":
                    "23 sec"

            },


            sections: [

                {
                    name:
                        "Maximum Tribute",

                    color:
                        "yellow",

                    description:
                        "Stealing from multiple nearby enemies stacks Dante's rewards up to these limits.",

                    details: {

                        "Maximum Bonus Health":
                            "+50",

                        "Maximum Movement Speed":
                            "+20%",

                        "Maximum Ultimate Charge":
                            "+12%"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 3 — FIVE FINGER DISCOUNT
        ================================================= */

        {
            type: "Ability 3",

            key: "F",

            name: "Five Finger Discount",

            icon:
                "Assets/Heroes/Dante/Abilities/five-finger-discount.png",

            preview:
                "Assets/Heroes/Dante/Abilities/five-finger-discount-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Mark an enemy and steal the next non-Ultimate ability they attempt to cast.",

            detailedDescription:
                "Dante Marks an enemy for 5 seconds. During this time, the next non-Ultimate ability they attempt to use is stolen before it activates. The enemy's cast fails, while Dante stores the stolen ability in his Inventory. Dante may cast the stolen ability once during the next 10 seconds. Passives and Ultimate abilities cannot be stolen.",

            stats: {

                "Mark Duration":
                    "5 sec",

                "Stolen Ability Storage":
                    "10 sec",

                "Maximum Stored Abilities":
                    "1",

                "Uses per Stolen Ability":
                    "1",

                "Can Steal Passives":
                    "No",

                "Can Steal Ultimates":
                    "No",

                "Cooldown":
                    "28 sec"

            },


            sections: [

                {
                    name:
                        "Inventory",

                    color:
                        "violet",

                    description:
                        "A successfully stolen ability is stored for Dante to use once before its storage duration expires.",

                    details: {

                        "Normal Capacity":
                            "1 ability",

                        "Stored Duration":
                            "10 sec",

                        "Cast Limit":
                            "Once"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 4 — GRAPPLING HOOK
        ================================================= */

        {
            type: "Ability 4",

            key: "C",

            name: "Grappling Hook",

            icon:
                "Assets/Heroes/Dante/Abilities/grappling-hook.png",

            preview:
                "Assets/Heroes/Dante/Abilities/grappling-hook-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire a hooked chain to rapidly traverse terrain or steal from and dive onto an enemy.",

            detailedDescription:
                "Dante fires a hooked chain. If the hook attaches to terrain, Dante pulls himself to the targeted location. If it attaches to an enemy, Dante steals one random resource from them before rapidly pulling himself toward the target. Upon reaching them, Dante delivers a kick that damages and briefly Slows them.",

            stats: {

                "Range":
                    "18 m",

                "Cooldown":
                    "12 sec"

            },


            sections: [

                {
                    name:
                        "Terrain",

                    color:
                        "blue",

                    description:
                        "Hooking terrain rapidly pulls Dante to the targeted location.",

                    details: {

                        "Maximum Range":
                            "18 m"

                    }

                },


                {
                    name:
                        "Enemy",

                    color:
                        "red",

                    description:
                        "Hooking an enemy steals a random resource before pulling Dante toward them. Upon arrival, Dante kicks the target.",

                    details: {

                        "Resource Theft":
                            "1 random resource",

                        "Kick Damage":
                            "50",

                        "Easy Pickings Progress":
                            "1 hit",

                        "Slow":
                            "20%",

                        "Slow Duration":
                            "1.5 sec"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — GRAND HEIST
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "Grand Heist",

            icon:
                "Assets/Heroes/Dante/Abilities/grand-heist.png",

            preview:
                "Assets/Heroes/Dante/Abilities/grand-heist-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Mark nearby enemies for robbery, causing every successful hit to steal resources while Dante locks and steals more enemy abilities.",

            detailedDescription:
                "Dante begins a Grand Heist, Marking every nearby enemy for Robbery for 8 seconds. During the Heist, Easy Pickings activates on every successful hit instead of every fifth hit. Every affected enemy has one random non-Ultimate ability locked for the duration, preventing that ability from being used. Half of every resource Dante steals is also shared with nearby allies. Five Finger Discount can store up to 2 stolen abilities while Grand Heist is active. When Grand Heist ends, temporary stolen resources expire according to their normal durations, while stolen abilities remain stored until used or otherwise expired by their normal storage rules.",

            stats: {

                "Duration":
                    "8 sec",

                "Radius":
                    "20 m",

                "Easy Pickings":
                    "Activates on every successful hit",

                "Locked Abilities":
                    "1 random non-Ultimate ability per enemy",

                "Resource Sharing":
                    "50% shared with nearby allies",

                "Five Finger Discount Capacity":
                    "2 stolen abilities",

                "Ultimate Cost":
                    "4000"

            },


            sections: [

                {
                    name:
                        "Marked for Robbery",

                    color:
                        "red",

                    description:
                        "Every enemy within the Grand Heist radius has one random non-Ultimate ability locked and becomes a constant source of stolen resources.",

                    details: {

                        "Radius":
                            "20 m",

                        "Easy Pickings Frequency":
                            "Every successful hit",

                        "Ability Locks":
                            "1 per enemy"

                    }

                },


                {
                    name:
                        "Shared Profits",

                    color:
                        "yellow",

                    description:
                        "Dante distributes part of every resource stolen during Grand Heist to nearby allies.",

                    details: {

                        "Resource Share":
                            "50%"

                    }

                },


                {
                    name:
                        "Expanded Inventory",

                    color:
                        "violet",

                    description:
                        "Five Finger Discount can hold twice as many stolen abilities during Grand Heist.",

                    details: {

                        "Normal Capacity":
                            "1 ability",

                        "Grand Heist Capacity":
                            "2 abilities"

                    }

                }

            ]

        }

    ]

});
