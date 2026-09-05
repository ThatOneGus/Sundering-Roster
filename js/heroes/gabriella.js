/* =========================================================
   GABRIELLA
========================================================= */

window.heroes = window.heroes || [];

window.heroes.push({

    name: "Gabriella",

    title: "The Kingdom's Jewel",

    role: "Catalyst",

    secondaryRoles: [
        "Utility",
        "Controller"
    ],

    region: "Elaris",


    /* =====================================================
       ART
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Gabriella/IMG_6757.png",

    heroArt:
        "Assets/Heroes/Gabriella/IMG_6756.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "Gabriella fights alongside three enchanted Stuffies, each carrying its own psychic aura. By repositioning Cotton, Flurry, and Spooky across the battlefield, she can sustain allies, hinder enemies, and turn seemingly harmless companions into powerful anchors of control.",


    /* =====================================================
       COMBAT PROFILE
    ===================================================== */

    profile: {

        damage: 4,

        survivability: 6,

        crowdControl: 8,

        mobility: 2,

        support: 9,

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
                "Assets/Heroes/Gabriella/thumbnail.png",

            splash:
                "Assets/Heroes/Gabriella/hero-art.png"
        },

        {
            name: "Lazy Lagoon",

            rarity: "Legendary",

           skinline: "Summer Skins",

            thumbnail:
                "Assets/Heroes/Gabriella/Skins/Lazy-Lagoon/thumbnail.png",

            splash:
                "Assets/Heroes/Gabriella/Skins/Lazy-Lagoon/splash.png"
        },

       {
            name: "Big Bad Girl",

            rarity: "Legendary",

          skinline: "Broken Faiytale",

            thumbnail:
                "Assets/Heroes/Gabriella/Skins/Lazy-Lagoon/thumbnail.png",

            splash:
                "Assets/Heroes/Gabriella/Skins/Lazy-Lagoon/splash.png"
        },

       {
            name: "Porcelain Puppeteer",

            rarity: "Legendary",

          skinline: "Dreary Dollhouse",

            thumbnail:
                "Assets/Heroes/Gabriella/Skins/Lazy-Lagoon/thumbnail.png",

            splash:
                "Assets/Heroes/Gabriella/Skins/Lazy-Lagoon/splash.png"
        },

       {
            name: "Slumber Party",

            rarity: "Legendary",

            thumbnail:
                "Assets/Heroes/Gabriella/Skins/Lazy-Lagoon/thumbnail.png",

            splash:
                "Assets/Heroes/Gabriella/Skins/Lazy-Lagoon/splash.png"
        }

        /*{
            name: "Kingdom's Jewel",

            rarity: "Epic",

            thumbnail:
                "Assets/Heroes/Gabriella/Skins/Kingdoms-Jewel/thumbnail.png",

            splash:
                "Assets/Heroes/Gabriella/Skins/Kingdoms-Jewel/splash.png"
        }*/

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        /*
        {
            title: "Stuffy Exploration",

            image:
                "Assets/Heroes/Gabriella/Concept-Art/stuffy-exploration.png",

            description:
                "Early design exploration for Cotton, Luna, and Spooky."
        }
        */

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — THREADBOUND FRIENDS
        ================================================= */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Threadbound Friends",

            icon:
                "Assets/Heroes/Gabriella/Abilities/threadbound-friends.png",

            preview:
                "Assets/Heroes/Gabriella/Abilities/threadbound-friends-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Command Cotton, Flurry, or Spooky to maintain unique aura effects wherever they are positioned.",

            detailedDescription:
                "Gabriella carries 3 enchanted Stuffies: Cotton, Flurry, and Spooky. Each Stuffy resonates with a unique passive aura that affects nearby allies or enemies. Gabriella can command one Stuffy at a time to walk autonomously within range and maintain its aura where positioned. Stuffies are targetable but invulnerable, and automatically return if they travel too far away.",

            stats: {

                "Stuffies":
                    "3",

                "Active Stuffy":
                    "1 at a time",

                "Targetable":
                    "Yes",

                "Invulnerable":
                    "Yes",

                "Command Cooldown":
                    "2 sec"

            },


            sections: [

                {
                    name:
                        "Cotton",

                    color:
                        "pink",

                    description:
                        "Cotton creates a restorative aura for nearby allies.",

                    details: {

                        "Healing Received Increase":
                            "+10%",

                        "Healing":
                            "30 HP/s"

                    }

                },


                {
                    name:
                        "Flurry",

                    color:
                        "teal",

                    description:
                        "Flurry creates a slowing aura around herself.",

                    details: {

                        "Enemy Slow":
                            "15%"

                    }

                },


                {
                    name:
                        "Spooky",

                    color:
                        "violet",

                    description:
                        "Spooky empowers nearby allies with offensive sustain and mobility.",

                    details: {

                        "Lifesteal":
                            "10%",

                        "Movement Speed":
                            "+15%"

                    }

                }

            ]

        },

      {
      type: "Passive",

            key: "PASSIVE",

            name: "You Wouldn't Hurt Me",

            icon:
                "Assets/Heroes/Gabriella/Abilities/threadbound-friends.png",

            preview:
                "Assets/Heroes/Gabriella/Abilities/threadbound-friends-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Take reduced damage. Take further reduced damage from Critical Hits",

            detailedDescription:
                "Gabriella uses her cuteness to deter enemies from hitting her hard, allowing her to take reduced damage. Critical hits are also reduced in damage.",

            stats: {

                "Damage Reduction":
                    "30%",

                "Critical Hit Damage Reduction":
                    "50%"


            }

      },


        /* =================================================
           PRIMARY — THREADLINE
        ================================================= */

        {
            type: "Primary Fire",

            key: "M1",

            name: "Threadline",

            icon:
                "Assets/Heroes/Gabriella/Abilities/threadline.png",

            preview:
                "Assets/Heroes/Gabriella/Abilities/threadline-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire a tracking psychic thread that passes harmlessly through allies before striking enemies.",

            detailedDescription:
                "Gabriella fires a psychic thread that tracks enemies while passing through allied heroes.",

            stats: {

                "Damage":
                    "35",

                "Projectile Speed":
                    "100 m/s",

                "Fire Rate":
                    "1.5 shots/sec",

                "Passes Through Allies":
                    "Yes"

            }

        },


        /* =================================================
           ABILITY 1 — MINDLACE
        ================================================= */

        {
            type: "Ability 1",

            key: "M2",

            name: "Mindlace",

            icon:
                "Assets/Heroes/Gabriella/Abilities/mindlace.png",

            preview:
                "Assets/Heroes/Gabriella/Abilities/mindlace-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Tether to an ally and absorb incoming damage before rewarding a completed link with healing and Bonus Health.",

            detailedDescription:
                "Gabriella links herself to a target ally with a glowing psychic thread. While tethered, incoming damage is absorbed for up to 3 seconds or until the link breaks. If the link remains intact for its full duration, the ally is healed for a percentage of their maximum Health and gains Bonus Health. Gabriella may recast Mindlace to manually break the tether early and immediately provide a smaller burst heal.",

            stats: {

                "Duration":
                    "3 sec",

                "Cast Range":
                    "12 m",

                "Maximum Damage Absorption":
                    "300",

                "Final Healing":
                    "35% Max HP",

                "Bonus Health":
                    "50",

                "Early Break Healing":
                    "25% Max HP",

                "Cooldown":
                    "13 sec"

            },


            sections: [

                {
                    name:
                        "Full Link",

                    color:
                        "green",

                    description:
                        "Maintaining Mindlace for the full duration grants its strongest restorative reward.",

                    details: {

                        "Healing":
                            "35% Max HP",

                        "Bonus Health":
                            "50"

                    }

                },


                {
                    name:
                        "Early Recast",

                    color:
                        "yellow",

                    description:
                        "Gabriella can manually break the tether early to immediately restore Health instead.",

                    details: {

                        "Burst Healing":
                            "25% Max HP"

                    }

                }

            ]

        },


        /* =================================================
           ABILITY 2 — PLUSHIE PULSE
        ================================================= */

        {
            type: "Ability 2",

            key: "E",

            name: "Plushie Pulse",

            icon:
                "Assets/Heroes/Gabriella/Abilities/plushie-pulse.png",

            preview:
                "Assets/Heroes/Gabriella/Abilities/plushie-pulse-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Release psychic energy around the active Stuffy, damaging enemies while healing nearby allies.",

            detailedDescription:
                "Gabriella sends a burst of psychic energy around her currently active Stuffy. Enemies caught in the pulse take damage, while allies receive immediate healing followed by healing over time.",

            stats: {

                "Pulse Radius":
                    "6 m",

                "Damage":
                    "50",

                "Instant Healing":
                    "60",

                "Healing Over Time":
                    "30 HP/s",

                "Healing Duration":
                    "3 sec"

            }

        },


        /* =================================================
           ABILITY 3 — SOUL STUFFING
        ================================================= */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "Soul Stuffing",

            icon:
                "Assets/Heroes/Gabriella/Abilities/soul-stuffing.png",

            preview:
                "Assets/Heroes/Gabriella/Abilities/soul-stuffing-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Empower the active Stuffy, dramatically enhancing its aura with a unique effect.",

            detailedDescription:
                "Gabriella channels psychic energy into her currently active Stuffy, temporarily empowering its aura. The effect changes depending on whether Cotton, Luna, or Spooky is active.",

            stats: {

                "Cooldown":
                    "15 sec"

            },


            sections: [

                {
                    name:
                        "Cotton",

                    color:
                        "pink",

                    description:
                        "Cotton reinforces nearby allies, reducing incoming damage.",

                    details: {

                        "Damage Reduction":
                            "15%",

                        "Radius":
                            "8 m"

                    }

                },


                {
                    name:
                        "Flurry",

                    color:
                        "teal",

                    description:
                        "Flurry freezes newly entering enemies while Soul Stuffing is active.",

                    details: {

                        "Freeze Duration":
                            "1.5 sec",

                        "Radius":
                            "4 m"

                    }

                },


                {
                    name:
                        "Spooky",

                    color:
                        "violet",

                    description:
                        "Spooky damages nearby enemies over time while repeatedly granting Bonus Health.",

                    details: {

                        "Damage":
                            "35 HP/s",

                        "Bonus Health":
                            "25 per sec",

                        "Maximum Bonus Health":
                            "50",

                        "Radius":
                            "5 m"

                    }

                }

            ]

        },


        /* =================================================
           ULTIMATE — IT'S BEDTIME!
        ================================================= */

        {
            type: "Ultimate",

            key: "Q",

            name: "It's Bedtime!",

            icon:
                "Assets/Heroes/Gabriella/Abilities/its-bedtime.png",

            preview:
                "Assets/Heroes/Gabriella/Abilities/its-bedtime-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Send all three Stuffies marching forward while healing allies, then put nearby enemies to Sleep in a final psychic burst.",

            detailedDescription:
                "Gabriella commands Cotton, Luna, and Spooky to march forward together in a straight line. As they march, the Stuffies repeatedly send out restorative pulses that heal nearby allies. At the end of the march, all three Stuffies group together and release a psychic explosion that puts nearby enemies to Sleep. Gabriella cannot use Soul Stuffing or Plushie Pulse while It's Bedtime! is active.",

            stats: {

                "Pulses":
                    "5",

                "Pulse Interval":
                    "0.6 sec",

                "Pulse Radius":
                    "5 m",

                "Healing per Pulse":
                    "100",

                "March Distance":
                    "5 m",

                "Explosion Radius":
                    "9 m",

                "Sleep Duration":
                    "2.5 sec",

                "Soul Stuffing During Ultimate":
                    "Disabled",

                "Plushie Pulse During Ultimate":
                    "Disabled"

            },


            sections: [

                {
                    name:
                        "Marching Pulse",

                    color:
                        "green",

                    description:
                        "The Stuffies repeatedly heal nearby allies while marching forward.",

                    details: {

                        "Number of Pulses":
                            "5",

                        "Interval":
                            "0.6 sec",

                        "Healing":
                            "100 per pulse",

                        "Radius":
                            "5 m"

                    }

                },


                {
                    name:
                        "Bedtime Explosion",

                    color:
                        "blue",

                    description:
                        "At the end of their march, the three Stuffies regroup and release a psychic burst that puts nearby enemies to Sleep.",

                    details: {

                        "Explosion Radius":
                            "9 m",

                        "Sleep Duration":
                            "2.5 sec"

                    }

                }

            ]

        }

    ]

});
