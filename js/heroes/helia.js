/* =========================================================
   HELIA — HERO DATA
========================================================= */

window.heroes = window.heroes || [];


window.heroes.push({

    /* =====================================================
       CORE INFORMATION
    ===================================================== */

    name:
        "Helia",

    title:
        "The Envoy of the Sun",

    region:
        "Solari",

    role:
        "Catalyst",

    secondaryRoles: [
        "Utility",
        "Controller"
    ],


    /* =====================================================
       BASE STATS
    ===================================================== */

    baseHealth:
        275,

    movementSpeed:
        "6 m/s",


    /* =====================================================
       ASSETS
    ===================================================== */

    thumbnail:
        "Assets/Heroes/Helia/thumbnail.png",

    heroArt:
        "Assets/Heroes/Helia/hero-art.png",


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    description:
        "A radiant support who channels solar energy through her scepter and divine armor. Helia sustains herself through the healing she provides to others, protects allies from Crowd Control, and transforms the battlefield into a domain of overwhelming sunlight.",


    /* =====================================================
       GAMEPLAY PROFILE
    ===================================================== */

    profile: {

        damage:
            5,

        survivability:
            7,

        crowdControl:
            3,

        mobility:
            1,

        support:
            10,

        range:
            7

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
                "Assets/Heroes/Helia/Skins/Default/thumbnail.png",

            splash:
                "Assets/Heroes/Helia/Skins/Default/splash.png"
        }

    ],


    /* =====================================================
       CONCEPT ART
    ===================================================== */

    conceptArt: [

        {
            name:
                "Helia Concept",

            image:
                "Assets/Heroes/Helia/Concept/concept-01.png"
        }

    ],


    /* =====================================================
       ABILITIES
    ===================================================== */

    abilities: [


        /* =================================================
           PASSIVE — LIGHT'S RESURGENCE
        ================================================= */

        {
            type:
                "Passive",

            key:
                "Passive",

            name:
                "Sunlit Siphon",

            icon:
                "Assets/Heroes/Helia/Abilities/lights-resurgence.png",

            preview:
                "Assets/Heroes/Helia/Abilities/Previews/lights-resurgence.mp4",

            previewType:
                "video",

            shortDescription:
                "Healing allies restores Helia's own Health, while Solar Scepter headshots heal her and shorten her cooldowns.",

            detailedDescription:
                "Whenever Helia heals an ally, she restores Health to herself equal to 30% of the healing done. In addition, every headshot landed with Solar Scepter restores a set amount of Helia's Health and reduces her active cooldowns.",

            stats: {

                "Self-Healing":
                    "30% of healing done",

                "Headshot Self-Heal":
                    "12 HP",

                "Cooldown Reduction per Headshot":
                    "0.5s"

            },

            sections: [

                {
                    name:
                        "Resurgent Light",

                    color:
                        "yellow",

                    description:
                        "A portion of every heal Helia provides to an ally is returned to her as self-healing.",

                    details: {

                        "Self-Healing":
                            "30% of healing done",

                        "Requirement":
                            "Heal an ally"

                    }
                },


                {
                    name:
                        "Solar Precision",

                    color:
                        "orange",

                    description:
                        "Headshots with Solar Scepter reward Helia with immediate self-healing and cooldown reduction.",

                    details: {

                        "Self-Heal":
                            "12 HP",

                        "Cooldown Reduction":
                            "0.5s per headshot",

                        "Requirement":
                            "Solar Scepter headshot"

                    }
                }

            ]

        },


        /* =================================================
           PRIMARY — SOLAR SCEPTER
        ================================================= */

        {
            type:
                "Primary",

            key:
                "Primary",

            name:
                "Solar Scepter",

            icon:
                "Assets/Heroes/Helia/Abilities/solar-scepter.png",

            preview:
                "Assets/Heroes/Helia/Abilities/Previews/solar-scepter.mp4",

            previewType:
                "video",

            shortDescription:
                "Channel radiant energy through Helia's scepter and fire powerful solar projectiles.",

            detailedDescription:
                "Helia channels radiant energy through her scepter, firing precise solar projectiles at enemies. Headshots activate the headshot portion of Light's Resurgence.",

            stats: {

                "Damage":
                    60,

                "Projectile Speed":
                    "180 m/s",

                "Ammo":
                    8

            }

        },


        /* =================================================
           ABILITY 1 — SOLAR FLARE
        ================================================= */

        {
            type:
                "Ability 1",

            key:
                "1",

            name:
                "Solar Flare",

            icon:
                "Assets/Heroes/Helia/Abilities/solar-flare.png",

            preview:
                "Assets/Heroes/Helia/Abilities/Previews/solar-flare.mp4",

            previewType:
                "video",

            shortDescription:
                "Summon a solar flare that orbits Helia, healing nearby allies, damaging enemies, and making enemies Vulnerable.",

            detailedDescription:
                "Helia summons a radiant solar flare that continuously orbits her for 8 seconds. The flare damages enemies it touches, heals allies within its radius, and applies Vulnerable to affected enemies, increasing the damage they take. While Solar Flare is active, Solar Scepter is temporarily replaced by manually fired solar flare projectiles that explode on contact, damaging enemies and healing allies in the explosion.",

            stats: {

                "Damage":
                    "25 damage/s",

                "Healing":
                    "30 HP/s",

                "Vulnerability":
                    "+15% damage taken",

                "Duration":
                    "8s",

                "Cooldown":
                    "18s"

            },

            sections: [

                {
                    name:
                        "Orbiting Flare",

                    color:
                        "yellow",

                    description:
                        "The solar flare continuously circles Helia, damaging enemies it touches while healing nearby allies.",

                    details: {

                        "Damage":
                            "25 damage/s",

                        "Healing":
                            "30 HP/s",

                        "Duration":
                            "8s"

                    }
                },


                {
                    name:
                        "Vulnerable",

                    color:
                        "orange",

                    description:
                        "Enemies touched by Solar Flare become Vulnerable and take increased damage.",

                    details: {

                        "Increased Damage Taken":
                            "15%"

                    }
                },


                {
                    name:
                        "Solar Flare Projectiles",

                    color:
                        "white",

                    description:
                        "While Solar Flare is active, Helia's Primary changes to manually firing explosive solar flare projectiles.",

                    details: {

                        "Projectile Damage":
                            40,

                        "Projectile Healing":
                            45,

                        "Effect":
                            "Explodes on contact",

                        "Attack Replacement":
                            "Solar Scepter"

                    }
                }

            ]

        },


        /* =================================================
           ABILITY 2 — RADIANT ARMOR
        ================================================= */

        {
            type:
                "Ability 2",

            key:
                "2",

            name:
                "Radiant Armor",

            icon:
                "Assets/Heroes/Helia/Abilities/radiant-armor.png",

            preview:
                "Assets/Heroes/Helia/Abilities/Previews/radiant-armor.mp4",

            previewType:
                "video",

            shortDescription:
                "Protect an ally with solar armor that grants Crowd Control Immunity, sustained healing, and a slowing aura.",

            detailedDescription:
                "Helia deploys a set of radiant solar armor onto an ally for 6 seconds. While armored, the ally gains Crowd Control Immunity and receives continuous healing that scales with their maximum Health. Enemies within 5m of the armored ally are Slowed.",

            stats: {

                "Duration":
                    "6s",

                "Healing":
                    "10 + 5.5% target Max HP/s",

                "Enemy Slow":
                    "20%",

                "Slow Radius":
                    "5m",

                "Cooldown":
                    "24s"

            },

            sections: [

                {
                    name:
                        "Solar Protection",

                    color:
                        "yellow",

                    description:
                        "The protected ally is guarded from Crowd Control for the entire duration of Radiant Armor.",

                    details: {

                        "Effect":
                            "Crowd Control Immunity",

                        "Duration":
                            "6s"

                    }
                },


                {
                    name:
                        "Radiant Recovery",

                    color:
                        "green",

                    description:
                        "Radiant Armor continuously heals its wearer, scaling with the ally's maximum Health.",

                    details: {

                        "Base Healing":
                            "10 HP/s",

                        "Maximum Health Scaling":
                            "5.5% target Max HP/s",

                        "Duration":
                            "6s"

                    }
                },


                {
                    name:
                        "Suppressive Radiance",

                    color:
                        "blue",

                    description:
                        "Enemies approaching the armored ally are Slowed.",

                    details: {

                        "Slow":
                            "20%",

                        "Radius":
                            "5m"

                    }
                }

            ]

        },


        /* =================================================
           ABILITY 3 — HELIACAL ARMOR
        ================================================= */

        {
            type:
                "Ability 3",

            key:
                "3",

            name:
                "Heliacal Armor",

            icon:
                "Assets/Heroes/Helia/Abilities/heliacal-armor.png",

            preview:
                "Assets/Heroes/Helia/Abilities/Previews/heliacal-armor.mp4",

            previewType:
                "video",

            shortDescription:
                "Surround Helia in solar armor, granting Crowd Control Immunity and powerful sustained self-healing.",

            detailedDescription:
                "Helia deploys a set of solar armor around herself for 6 seconds. While Heliacal Armor is active, Helia gains Crowd Control Immunity and continuously restores Health.",

            stats: {

                "Duration":
                    "6s",

                "Healing":
                    "45 HP/s",

                "Cooldown":
                    "24s"

            },

            sections: [

                {
                    name:
                        "Heliacal Protection",

                    color:
                        "yellow",

                    description:
                        "Helia is protected from Crowd Control while Heliacal Armor remains active.",

                    details: {

                        "Effect":
                            "Crowd Control Immunity",

                        "Duration":
                            "6s"

                    }
                },


                {
                    name:
                        "Solar Recovery",

                    color:
                        "green",

                    description:
                        "Heliacal Armor continuously restores Helia's Health.",

                    details: {

                        "Healing":
                            "45 HP/s",

                        "Duration":
                            "6s",

                        "Total Potential Healing":
                            "270 HP"

                    }
                }

            ]

        },


        /* =================================================
           ABILITY 4 — TBD
        ================================================= */

        {
            type:
                "Ability 4",

            key:
                "4",

            name:
                "Brilliant Arrival",

            icon:
                "Assets/Heroes/Helia/Abilities/ability-4.png",

            preview:
                "Assets/Heroes/Helia/Abilities/Previews/ability-4.mp4",

            previewType:
                "video",

            shortDescription:
                "Teleport directly to an ally, shielding and accelerating both heroes while Slowing nearby enemies.",

            detailedDescription:
                "Helia instantly teleports to a targeted ally within range. Upon arrival, both Helia and the targeted ally gain shields and increased Movement Speed. Enemies near the ally are Slowed.",

            stats: {

                "Range":
                    "20m",

                "Helia Shield":
                    50,

                "Ally Shield":
                    50,

                "Movement Speed":
                    "+15%",

                "Movement Speed Duration":
                    "3s",

                "Enemy Slow":
                    "25%",

                "Slow Radius":
                    "5m",

                "Cooldown":
                    "20s"

            },

            sections: [

                {
                    name:
                        "Radiant Arrival",

                    color:
                        "yellow",

                    description:
                        "Helia and the ally she teleports to both receive a temporary shield and Movement Speed increase.",

                    details: {

                        "Shield":
                            "50 each",

                        "Movement Speed":
                            "+15%",

                        "Speed Duration":
                            "3s"

                    }
                },


                {
                    name:
                        "Solar Suppression",

                    color:
                        "blue",

                    description:
                        "Enemies near Helia's destination are Slowed upon her arrival.",

                    details: {

                        "Slow":
                            "25%",

                        "Radius":
                            "5m"

                    }
                }

            ]

        },


        /* =================================================
           ULTIMATE — SOLAR ASCENDANCE
        ================================================= */

        {
            type:
                "Ultimate",

            key:
                "Ultimate",

            name:
                "Solar Ascendance",

            icon:
                "Assets/Heroes/Helia/Abilities/solar-ascendance.png",

            preview:
                "Assets/Heroes/Helia/Abilities/Previews/solar-ascendance.mp4",

            previewType:
                "video",

            shortDescription:
                "Helia becomes a stationary sun, projecting a movable domain that empowers and heals allies while suppressing enemies.",

            detailedDescription:
                "Helia becomes the sun for 10 seconds, projecting divine radiance onto the battlefield. During Solar Ascendance, Helia cannot move or cast abilities, but she retains control over the position of the sunlight beam. Allies inside the illuminated area deal increased damage and rapidly restore Health. Enemies inside are Slowed and become Blinded if they look directly at the radiance. While transformed, Helia's solar form has its own Health pool.",

            stats: {

                "Duration":
                    "10s",

                "Area Radius":
                    "7m",

                "Ally Damage Bonus":
                    "+30%",

                "Ally Healing":
                    "100 HP/s",

                "Enemy Slow":
                    "30%",

                "Sun Health":
                    1000,

                "Ultimate Cost":
                    4600

            },

            sections: [

                {
                    name:
                        "Divine Radiance",

                    color:
                        "yellow",

                    description:
                        "Allies standing within Helia's sunlight become dramatically stronger and continuously regenerate Health.",

                    details: {

                        "Damage Bonus":
                            "+30%",

                        "Healing":
                            "100 HP/s",

                        "Radius":
                            "7m"

                    }
                },


                {
                    name:
                        "Blinding Sun",

                    color:
                        "white",

                    description:
                        "Enemies inside Solar Ascendance are Slowed. Enemies who look directly at the radiance are also Blinded.",

                    details: {

                        "Slow":
                            "30%",

                        "Additional Effect":
                            "Blinded when looking at the sun",

                        "Radius":
                            "7m"

                    }
                },


                {
                    name:
                        "Solar Form",

                    color:
                        "orange",

                    description:
                        "Helia becomes stationary during Solar Ascendance and cannot cast abilities, but can reposition the projected sunlight beam.",

                    details: {

                        "Movement":
                            "Disabled",

                        "Ability Casting":
                            "Disabled",

                        "Beam Control":
                            "Available",

                        "Sun Health":
                            1000,

                        "Duration":
                            "10s"

                    }
                }

            ]

        }

    ]

});
