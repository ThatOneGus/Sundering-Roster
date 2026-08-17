const heroes = [

    /* =====================================================
       ALEJANDRO
    ===================================================== */

{
    name: "Alejandro",

    title: "The Crown Prince of Elaris",

    role: "Catalyst",

    secondaryRoles: [
        "Playmaker",
        "Controller"
    ],

    region: "Elaris",

    thumbnail:
        "Assets/Heroes/Alejandro/thumbnail.png",

    heroArt:
        "Assets/Heroes/Alejandro/hero-art.png",

    description:
        "Firstborn to the royal family of Elaris, Alejandro was groomed for leadership from the moment he could speak. With a silver tongue and unmatched charisma, he became the face of diplomacy, often venturing far from the kingdom’s borders to strengthen alliances, or so the court says.",

    abilities: [

        /* =====================================================
           PASSIVE
        ===================================================== */

        {
            type: "Passive",

            key: "PASSIVE",

            name: "Blooming Influence",

            icon:
                "assets/heroes/alejandro/abilities/blooming-influence.png",

            preview:
                "assets/heroes/alejandro/abilities/blooming-influence-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Enemies who remain near one of Alejandro's psychic power become Beguiled, allowing Alejandro to turn their aggression against them.",

            detailedDescription:
                "Enemies within 20m of Alejandro or a Seed who maintain line of sight for 2 seconds become Beguiled. Beguiled enemies are revealed to allies. If Beguiled enemies hit Alejandro with a form of Hard CC, they are Charmed in return and are left vulnerable while walking. Beguile ends if they leave the Seed’s influence radius. Enemies hit by an exploding Seed reduce Blooming Influence's internal cooldown.",

            stats: {

                "Beguile Range":
                    "20m",

                "Line of Sight Duration":
                    "2 sec",

                "Vulnerability":
                    "10%",

                "Charmed Duration":
                    "1 sec",

                "Internal Cooldown":
                    "15 sec",

                "Exploding Seed Cooldown Reduction":
                    "-2 sec"

            }

        },


        /* =====================================================
           PRIMARY FIRE
        ===================================================== */

        {
            type: "Primary Fire",

            key: "M2",

            name: "Blooming Budshot",

            icon:
                "assets/heroes/alejandro/abilities/blooming-budshot.png",

            preview:
                "assets/heroes/alejandro/abilities/blooming-budshot-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Fire piercing bolts of psychic energy from the Bud to damage enemies or heal allies. The first bolt to hit an obstacle or terrain explodes.",

            detailedDescription:
                "Fire piercing bolts of psychic energy from the Bud to damage enemies or heal allies. 4 bolts are fired in quick succession. The first bolt hit per round deals significantly more damage or healing than subsequent bolts. The first bolt to hit an obstacle or terrain will explode. The bolts will instantly Bloom any Seeds hit from Wildroot Surge.",

            stats: {

                "First Hit Healing/Damage":
                    "20",

                "Subsequent Shots Healing/Damage":
                    "10",

                "Shot Explosion Healing/Damage":
                    "15",

                "Explosion Radius":
                    "3m",

                "Fire Rate":
                    "0.8 sec per full round",

                "Attack Intervals":
                    "0.05 sec between each shot per round",

                "Projectile Speed":
                    "Hitscan",

                "Falloff":
                    "Starting at 20m, decreasing to 80% at 40m",

                "Can Crit":
                    "Yes"

            }

        },


        /* =====================================================
           ABILITY 1
        ===================================================== */

        {
            type: "Ability 1",

            key: "M2",

            name: "Verdant Pulse",

            icon:
                "assets/heroes/alejandro/abilities/verdant-pulse.png",

            preview:
                "assets/heroes/alejandro/abilities/verdant-pulse-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Release a wave of psychic floral energy that heals allies, damages and shoves enemies, and leaves behind a movement-enhancing trail.",

            detailedDescription:
                "Release a wave of psychic floral energy from the Bud. The wave heals allies while damaging and shoving enemies slightly. The first 2 enemies hit by the center of the pulse are Rooted. The pulse leaves behind a flourishing trail that grants Movement Speed to allies. The pulse will instantly Bloom any Seeds hit from Wildroot Surge.",

            stats: {

                "Healing/Damage":
                    "40",

                "Maximum Distance":
                    "35m",

                "Shove Distance":
                    "5m",

                "Projectile Speed":
                    "80m/s",

                "Root Hitbox":
                    "0.8m Radius",

                "Pulse Hitbox":
                    "2.5m Radius",

                "Trail Duration":
                    "5 sec",

                "Root Duration":
                    "2.5 sec",

                "Movement Speed Boost":
                    "+40%",

                "Cooldown":
                    "8 sec"

            }

        },


        /* =====================================================
           ABILITY 2
        ===================================================== */

        {
    type: "Ability 2",
    key: "E",
    name: "Wildroot Surge",

    icon: "assets/heroes/alejandro/abilities/ability2.png",

    preview: "assets/heroes/alejandro/abilities/ability2-preview.mp4",
    previewType: "video",

    shortDescription:
        "Plant a psychic Seed that grows based on healing or damage dealt within its area.",

    detailedDescription:
        "Plant a psychic Seed at a target location. Planting a Seed slightly knocks back enemies in the area. Seeds grow based on healing or damage done within their area before Blooming and exploding.",

    stats: {
        "Knockback Distance": "2m",
        "Range": "20m",
        "Maximum Active Seeds": "3",
        "Charges": "3",
        "Recharge Time": "5 sec",
        "Duration": "8 sec"
    },

    variants: {

        flourishingBud: {

            name: "Flourishing Bud",

            description:
                "The Seed heals allies over time. It grows based on healing done within its area, increasing both its size and healing.",

            details: {

                "Healing":
                    "15 HP/s → 35 HP/s",

                "Radius":
                    "3m → 6m",

                "Healing Required for Full Growth":
                    "250",

                "Healing Required on Trail/Garden":
                    "125",

                "Burst Healing":
                    "40 → 60",

                "Burst Damage":
                    "25"

            }

        },


        wiltingBud: {

            name: "Wilting Bud",

            description:
                "The Seed slows enemies in its area. It grows based on damage dealt within its area, increasing both its size and damage.",

            details: {

                "Slow Rate":
                    "20%",

                "Radius":
                    "4m → 8m",

                "Damage Required for Full Growth":
                    "250",

                "Damage Required on Trail/Garden":
                    "125",

                "Burst Damage":
                    "30 → 50",

                "Burst Healing":
                    "35"

            }

        }

    }

},


        /* =====================================================
           ABILITY 3
        ===================================================== */

        {
            type: "Ability 3",

            key: "SHIFT",

            name: "Grand Flourish",

            icon:
                "assets/heroes/alejandro/abilities/grand-flourish.png",

            preview:
                "assets/heroes/alejandro/abilities/grand-flourish-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Conjure a massive psychic flower that launches Alejandro and blooms beneath him, healing allies and damaging enemies.",

            detailedDescription:
                "Alejandro conjures a massive psychic flower beneath himself that violently blooms, launching him in the direction he is currently moving. The flower will heal allies and damage enemies around him. Upon landing, Alejandro gains increased Movement Speed for a short duration. The flower will instantly Bloom any Seeds hit from Wildroot Surge.",

            stats: {

                "Launch Distance":
                    "10m",

                "Healing/Damage":
                    "45",

                "Radius":
                    "6m",

                "Movement Speed Boost":
                    "+50%",

                "Movement Speed Boost Duration":
                    "3 sec",

                "Cooldown":
                    "11 sec"

            }

        },


        /* =====================================================
           ABILITY 4
        ===================================================== */

        {
            type: "Ability 4",

            key: "F",

            name: "Corolla Conversion",

            icon:
                "assets/heroes/alejandro/abilities/corolla-conversion.png",

            preview:
                "assets/heroes/alejandro/abilities/corolla-conversion-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Switch between the Bud's Flourishing and Wilting manifestations, specializing Alejandro in healing or damage.",

            detailedDescription:
                "Switch between the Bud's two manifestations. Casting Corolla Conversion grants +10% increased healing and damage on cast. The buff gradually increases to +50% after 1.5 seconds, increasing by +25% per second until it reaches +50%.",

            stats: {

                "Flourishing Bud":
                    "All healing dealt is increased by 50%",

                "Wilting Bud":
                    "All damage dealt is increased by 50%",

                "Initial Buff":
                    "+10% Healing/Damage",

                "Maximum Buff":
                    "+50% Healing/Damage",

                "Switch Time":
                    "0.2 sec",

                "Cooldown":
                    "None"

            },

            variants: {

                flourishingBud: {

                    name: "Flourishing Bud",

                    description:
                        "All healing dealt is increased by 50%."

                },

                wiltingBud: {

                    name: "Wilting Bud",

                    description:
                        "All damage dealt is increased by 50%."

                }

            }

        },


        /* =====================================================
           ULTIMATE
        ===================================================== */

        {
            type: "Ultimate",

            key: "Q",

            name: "Burgeoning Florescence",

            icon:
                "assets/heroes/alejandro/abilities/burgeoning-florescence.png",

            preview:
                "assets/heroes/alejandro/abilities/burgeoning-florescence-preview.mp4",

            previewType:
                "video",

            shortDescription:
                "Channel the full power of the Bud into an enormous psychic blossom that creates a powerful Garden based on Alejandro's current alignment.",

            detailedDescription:
                "Alejandro becomes CC immune and channels the full power of his Bud into an enormous psychic blossom before launching it forward. All Wildroot Surge Seeds inside the initial explosion of the Garden instantly Bloom. All Wildroot Surge Seeds planted in the Garden after the initial explosion Bloom significantly faster. The Garden will persist even after Alejandro is eliminated.",

            stats: {

                "Cast Time":
                    "1 sec",

                "Bonus Health Granted on Cast":
                    "200",

                "Projectile Speed":
                    "80 m/s",

                "Blossom Spell Field":
                    "3m Spherical Radius",

                "Wildroot Surge Seed Bloom Time":
                    "8 sec → 4 sec",

                "Ultimate Cost":
                    "4500 Energy"

            },

            variants: {

                flourishingBud: {

                    name: "Flourishing Bud",

                    description:
                        "The blossom passes through and damages enemies as it flies, only stopping upon colliding with allies or terrain. Upon impact, it erupts and heals all allies within range and creates a massive Garden that heals allies over time. Allies within the Flourishing Garden also have their Ability cooldowns reduced.",

                    details: {

                        "Projectile Damage":
                            "40 HP/s",

                        "Projectile Healing":
                            "50",

                        "Initial Burst Healing":
                            "80",

                        "Healing":
                            "90 HP/s",

                        "Burst Healing":
                            "70",

                        "Burst Healing Interval":
                            "1 sec",

                        "Cooldown Reduction Rate":
                            "20%",

                        "Radius":
                            "10m",

                        "Duration":
                            "10 sec"

                    }

                },

                wiltingBud: {

                    name: "Wilting Bud",

                    description:
                        "The blossom passes through and heals allies as it flies, only stopping upon colliding with enemies or terrain. Upon impact, it erupts and damages all enemies within range and creates a massive Garden that periodically damages enemies. Enemies within the Wilting Garden are also slowed.",

                    details: {

                        "Projectile Damage":
                            "50",

                        "Projectile Healing":
                            "100 HP/s",

                        "Root Duration":
                            "3 sec",

                        "Slow Rate":
                            "45%",

                        "Slow Duration":
                            "1 sec",

                        "Initial Burst Damage":
                            "60",

                        "Damage":
                            "20 HP/s",

                        "Burst Damage":
                            "70",

                        "Burst Damage Interval":
                            "1.5 sec",

                        "Slow Rate in Garden":
                            "20%",

                        "Radius":
                            "10m",

                        "Duration":
                            "8 sec"

                    }

                }

            }

        }

    ]

},


    /* =====================================================
       ARI
    ===================================================== */

    {

        name: "Ari",

        title: "The Sunflower Fairy",

        role: "Catalyst",

        secondaryRoles: [
            "Lifeline",
            "Catalyst"
        ],

        region: "Elaris",

        thumbnail:
        "assets/heroes/alejandro/thumbnail.png",

    heroArt:
        "assets/heroes/alejandro/hero-art.png",

        description:
            "A tiny guardian whose warmth can turn even the darkest battlefield into a place of hope.",


        abilities: [

            /* -------------------------------------------------
               PASSIVE
            ------------------------------------------------- */

            {

                type: "Passive",

                key: "PASSIVE",

                name: "Sunlit Spirit",

                icon:
                    "assets/heroes/ari/abilities/passive.png",

                preview:
                    "assets/heroes/ari/abilities/passive-preview.mp4",

                previewType:
                    "video",

                shortDescription:
                    "Ari's healing abilities gain additional effects under the right conditions.",

                detailedDescription:
                    `Ari's restorative abilities interact with her Sunlit Spirit mechanic, allowing her to provide additional utility to allies.`,

                stats: {

                    "Healing":
                        "Ability dependent",

                    "Duration":
                        "Varies",

                    "Cooldown":
                        "Passive"

                }

            },


            /* -------------------------------------------------
               ABILITY 1
            ------------------------------------------------- */

            {

                type: "Ability 1",

                key: "Q",

                name: "Sunbeam",

                icon:
                    "assets/heroes/ari/abilities/ability1.png",

                preview:
                    "assets/heroes/ari/abilities/ability1-preview.mp4",

                previewType:
                    "video",

                shortDescription:
                    "Release a beam of radiant energy that restores an ally.",

                detailedDescription:
                    `Ari channels sunlight into an ally, restoring their health.`,

                stats: {

                    "Healing":
                        "60 / 90 / 120 / 150",

                    "Range":
                        "18 m",

                    "Cast Time":
                        "0.25 s",

                    "Cooldown":
                        "6 s"

                }

            }

        ]

    }

];
