/* =========================================================
   SUNDERING — ROSTER.JS
========================================================= */


/* =========================================================
   GLOBAL ELEMENTS
========================================================= */

const roster =
    document.getElementById("roster");

const search =
    document.getElementById("search");


/* =========================================================
   HERO MODAL ELEMENTS
========================================================= */

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const detailArt =
    document.getElementById("detailArt");

const detailName =
    document.getElementById("detailName");

const detailTitle =
    document.getElementById("detailTitle");

const detailRole =
    document.getElementById("detailRole");

const detailDescription =
    document.getElementById("detailDescription");

const detailTags =
    document.getElementById("detailTags");

const formTabs =
    document.getElementById("formTabs");


/* =========================================================
   CHARACTER PANELS
========================================================= */

const characterTabs =
    document.querySelectorAll(".characterTab");

const characterPanels =
    document.querySelectorAll(".characterPanel");

const overviewPanel =
    document.getElementById("overviewPanel");

const abilitiesPanel =
    document.getElementById("abilitiesPanel");

const skinsPanel =
    document.getElementById("skinsPanel");

const conceptPanel =
    document.getElementById("conceptPanel");


/* =========================================================
   PANEL CONTENT
========================================================= */

const radarChart =
    document.getElementById("radarChart");

const profileStats =
    document.getElementById("profileStats");

const abilityGrid =
    document.getElementById("abilityGrid");

const skinsGrid =
    document.getElementById("skinsGrid");

const conceptGrid =
    document.getElementById("conceptGrid");


/* =========================================================
   PREVIEW MODAL
========================================================= */

const previewModal =
    document.getElementById("previewModal");

const previewMedia =
    document.getElementById("previewMedia");

const previewTitle =
    document.getElementById("previewTitle");

const previewClose =
    document.getElementById("previewClose");


/* =========================================================
   CURRENT CHARACTER STATE
========================================================= */

let currentHero =
    null;

let currentForm =
    null;


/* =========================================================
   ROLE ICONS
========================================================= */

const roleIcons = {

    /* VANGUARD SUBCLASSES */

    Guardian:
        "Assets/Roles/Vanguard/IMG_6671.png",

    Warden:
        "Assets/Roles/Vanguard/IMG_6670.png",

    Bludgeon:
        "Assets/Roles/Vanguard/IMG_6669.png",


    /* STRIKER SUBCLASSES */

    Brawler:
        "Assets/Roles/Striker/IMG_6685.png",

    Marksman:
        "Assets/Roles/Striker/IMG_6689.png",

    Hunter:
        "Assets/Roles/Striker/IMG_6688.png",

    Ravager:
        "Assets/Roles/Striker/IMG_6687.png",

    Disruptor:
        "Assets/Roles/Striker/IMG_6686.png",


    /* CATALYST SUBCLASSES */

    Lifeline:
        "Assets/Roles/Catalyst/Lifeline.png",

    Playmaker:
        "Assets/Roles/Catalyst/Playmaker.png",

    Utility:
        "Assets/Roles/Catalyst/Utility.png",

    Controller:
        "Assets/Roles/Catalyst/Controller.png"

};


/* =========================================================
   RENDER ROSTER
========================================================= */

function renderRoster(list) {

    if (!roster) {
        return;
    }


    roster.innerHTML =
        "";


    if (!list.length) {

        roster.innerHTML = `

            <div class="noResults">

                NO CHARACTERS FOUND

            </div>

        `;

        return;
    }


    list.forEach(hero => {

        const card =
            document.createElement("div");


        card.className =
            "heroCard";


        /* -------------------------------------------------
           THUMBNAIL
        ------------------------------------------------- */

        let thumbnailHTML;


        if (hero.thumbnail) {

            thumbnailHTML = `

                <img
                    src="${hero.thumbnail}"
                    alt="${hero.name}"
                    class="heroThumbnail"
                >

                <div
                    class="heroThumbnailFallback"
                    style="display:none;"
                >
                    ${hero.name.charAt(0)}
                </div>

            `;

        }

        else {

            thumbnailHTML = `

                <div class="heroThumbnailFallback">

                    ${hero.name.charAt(0)}

                </div>

            `;

        }


        /* -------------------------------------------------
           SUBROLE ICONS
        ------------------------------------------------- */

        const subRoleIconsHTML =
            (hero.secondaryRoles || [])

                .map(role => {

                    const icon =
                        roleIcons[role];


                    if (!icon) {
                        return "";
                    }


                    return `

                        <div
                            class="heroRoleIcon"
                            title="${role}"
                        >

                            <img
                                src="${icon}"
                                alt="${role}"
                            >

                        </div>

                    `;

                })

                .join("");


        /* -------------------------------------------------
           CARD
        ------------------------------------------------- */

        card.innerHTML = `

            <div class="heroArt">

                ${thumbnailHTML}

            </div>


            <div class="heroInfo">


                <div class="heroText">


                    <div class="heroName">

                        ${hero.name}

                    </div>


                    <div class="heroTitle">

                        ${hero.title || ""}

                    </div>


                    <div class="heroRole">

                        ${hero.role || ""}

                    </div>


                </div>


                <div class="heroRoleIcons">

                    ${subRoleIconsHTML}

                </div>


            </div>

        `;


        /* -------------------------------------------------
           IMAGE FALLBACK
        ------------------------------------------------- */

        const image =
            card.querySelector(
                ".heroThumbnail"
            );


        const fallback =
            card.querySelector(
                ".heroThumbnailFallback"
            );


        if (image && fallback) {

            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";

                    fallback.style.display =
                        "flex";

                }
            );

        }


        /* -------------------------------------------------
           OPEN CHARACTER
        ------------------------------------------------- */

        card.addEventListener(
            "click",
            () => {

                openHero(hero);

            }
        );


        roster.appendChild(card);

    });

}


/* =========================================================
   INITIAL ROSTER
========================================================= */

if (
    typeof window.heroes !== "undefined"
) {

    renderRoster(
        window.heroes
    );

}


/* =========================================================
   SEARCH
========================================================= */

if (search) {

    search.addEventListener(
        "input",
        () => {

            const query =
                search.value
                    .toLowerCase()
                    .trim();


            const results =
                window.heroes.filter(hero => {

                    const name =
                        hero.name || "";

                    const title =
                        hero.title || "";

                    const region =
                        hero.region || "";

                    const role =
                        hero.role || "";

                    const secondaryRoles =
                        hero.secondaryRoles || [];


                    return (

                        name
                            .toLowerCase()
                            .includes(query)

                        ||

                        title
                            .toLowerCase()
                            .includes(query)

                        ||

                        region
                            .toLowerCase()
                            .includes(query)

                        ||

                        role
                            .toLowerCase()
                            .includes(query)

                        ||

                        secondaryRoles.some(
                            secondaryRole =>

                                secondaryRole
                                    .toLowerCase()
                                    .includes(query)
                        )

                    );

                });


            renderRoster(
                results
            );

        }
    );

}


/* =========================================================
   ROLE FILTERS
========================================================= */

const roleButtons =
    document.querySelectorAll(
        ".roleFilter"
    );

const allButton =
    document.querySelector(
        ".allFilter"
    );

const roleGroups =
    document.querySelectorAll(
        ".roleGroup"
    );

const subclassButtons =
    document.querySelectorAll(
        ".subFilters button"
    );


/* =========================================================
   FILTER HEROES
========================================================= */

function filterHeroes(role) {

    if (!window.heroes) {
        return;
    }


    if (
        !role ||
        role === "all"
    ) {

        renderRoster(
            window.heroes
        );

        return;

    }


    const filtered =
        window.heroes.filter(hero => {

            const secondaryRoles =
                hero.secondaryRoles || [];


            return (

                hero.role === role

                ||

                secondaryRoles.includes(
                    role
                )

            );

        });


    renderRoster(
        filtered
    );

}


/* =========================================================
   ALL FILTER
========================================================= */

if (allButton) {

    allButton.addEventListener(
        "click",
        () => {

            roleGroups.forEach(
                group => {

                    group.classList.remove(
                        "open"
                    );

                }
            );


            roleButtons.forEach(
                button => {

                    button.classList.remove(
                        "active"
                    );

                }
            );


            subclassButtons.forEach(
                button => {

                    button.classList.remove(
                        "active"
                    );

                }
            );


            allButton.classList.add(
                "active"
            );


            filterHeroes(
                "all"
            );

        }
    );

}


/* =========================================================
   MAIN ROLE BUTTONS
========================================================= */

roleButtons.forEach(button => {

    if (
        button.classList.contains(
            "allFilter"
        )
    ) {
        return;
    }


    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const group =
                button.closest(
                    ".roleGroup"
                );


            const wasOpen =
                group
                    ? group.classList.contains(
                        "open"
                    )
                    : false;


            roleGroups.forEach(
                otherGroup => {

                    if (
                        otherGroup !== group
                    ) {

                        otherGroup.classList.remove(
                            "open"
                        );

                    }

                }
            );


            filterHeroes(
                button.dataset.role
            );


            roleButtons.forEach(
                roleButton => {

                    roleButton.classList.remove(
                        "active"
                    );

                }
            );


            subclassButtons.forEach(
                subclassButton => {

                    subclassButton.classList.remove(
                        "active"
                    );

                }
            );


            if (allButton) {

                allButton.classList.remove(
                    "active"
                );

            }


            button.classList.add(
                "active"
            );


            if (group) {

                group.classList.toggle(
                    "open",
                    !wasOpen
                );

            }

        }
    );

});


/* =========================================================
   SUBCLASS BUTTONS
========================================================= */

subclassButtons.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const role =
                button.dataset.role;


            filterHeroes(
                role
            );


            roleButtons.forEach(
                roleButton => {

                    roleButton.classList.remove(
                        "active"
                    );

                }
            );


            subclassButtons.forEach(
                subclassButton => {

                    subclassButton.classList.remove(
                        "active"
                    );

                }
            );


            if (allButton) {

                allButton.classList.remove(
                    "active"
                );

            }


            button.classList.add(
                "active"
            );


            const group =
                button.closest(
                    ".roleGroup"
                );


            if (group) {

                group.classList.add(
                    "open"
                );

            }

        }
    );

});


/* =========================================================
   CLICK OUTSIDE ROLE DROPDOWNS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const insideRoleGroup =
            event.target.closest(
                ".roleGroup"
            );


        if (!insideRoleGroup) {

            roleGroups.forEach(
                group => {

                    group.classList.remove(
                        "open"
                    );

                }
            );

        }

    }
);


/* =========================================================
   URL ROLE FILTER

   Example:
   index.html?role=Hunter
========================================================= */

function applyURLRoleFilter() {

    const parameters =
        new URLSearchParams(
            window.location.search
        );


    const role =
        parameters.get(
            "role"
        );


    if (!role) {
        return;
    }


    filterHeroes(
        role
    );


    roleButtons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    subclassButtons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    if (allButton) {

        allButton.classList.remove(
            "active"
        );

    }


    const matchingButton =
        document.querySelector(
            `[data-role="${role}"]`
        );


    if (matchingButton) {

        matchingButton.classList.add(
            "active"
        );


        const group =
            matchingButton.closest(
                ".roleGroup"
            );


        if (group) {

            group.classList.add(
                "open"
            );

        }

    }

}


applyURLRoleFilter();


/* =========================================================
   OPEN HERO
========================================================= */

function openHero(hero) {

    if (!modal) {
        return;
    }


    currentHero =
        hero;


    const forms =
        hero.forms || [];


    if (forms.length) {

        currentForm =
            forms[0];

    }

    else {

        currentForm =
            null;

    }


    /* -----------------------------------------------------
       BASIC INFORMATION
    ----------------------------------------------------- */

    detailName.textContent =
        hero.name || "";


    detailTitle.textContent =
        hero.title || "";


    detailRole.textContent =
        hero.role || "";


    detailDescription.textContent =
        hero.description || "";


    /* -----------------------------------------------------
       TAGS
    ----------------------------------------------------- */

    renderHeroTags(
        hero
    );


    /* -----------------------------------------------------
       FORM TABS
    ----------------------------------------------------- */

    renderFormTabs(
        hero
    );


    /* -----------------------------------------------------
       FORM-SENSITIVE CONTENT
    ----------------------------------------------------- */

    if (currentForm) {

        renderHeroArt(
            currentForm.heroArt ||
            hero.heroArt,
            hero.name
        );


        renderCombatProfileData(
            currentForm.profile ||
            hero.profile
        );


        renderAbilities(
            getCurrentAbilities(
                hero,
                currentForm
            )
        );

    }

    else {

        renderHeroArt(
            hero.heroArt,
            hero.name
        );


        renderCombatProfileData(
            hero.profile
        );


        renderAbilities(
            hero.abilities || []
        );

    }


    /* -----------------------------------------------------
       CHARACTER-WIDE CONTENT
    ----------------------------------------------------- */

    renderSkins(
        hero
    );


    renderConceptArt(
        hero
    );


    /* -----------------------------------------------------
       DEFAULT TAB
    ----------------------------------------------------- */

    switchCharacterTab(
        "overview"
    );


    modal.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   HERO TAGS
========================================================= */

function renderHeroTags(hero) {

    if (!detailTags) {
        return;
    }


    detailTags.innerHTML =
        "";


    const tags = [

        hero.role,

        ...(hero.secondaryRoles || []),

        hero.region

    ].filter(Boolean);


    tags.forEach(tag => {

        const element =
            document.createElement(
                "div"
            );


        element.className =
            "tag";


        element.textContent =
            tag;


        detailTags.appendChild(
            element
        );

    });

}


/* =========================================================
   HERO ART
========================================================= */

function renderHeroArt(
    source,
    name
) {

    if (!detailArt) {
        return;
    }


    detailArt.innerHTML =
        "";


    if (source) {

        const image =
            document.createElement(
                "img"
            );


        image.src =
            source;


        image.alt =
            name || "Character";


        image.addEventListener(
            "error",
            () => {

                detailArt.innerHTML = `

                    <div class="detailArtFallback">

                        ${
                            name
                                ? name.charAt(0)
                                : "?"
                        }

                    </div>

                `;

            }
        );


        detailArt.appendChild(
            image
        );

    }

    else {

        detailArt.innerHTML = `

            <div class="detailArtFallback">

                ${
                    name
                        ? name.charAt(0)
                        : "?"
                }

            </div>

        `;

    }

}


/* =========================================================
   CHARACTER FORMS
========================================================= */

function renderFormTabs(hero) {

    if (!formTabs) {
        return;
    }


    formTabs.innerHTML =
        "";


    const forms =
        hero.forms || [];


    if (!forms.length) {

        formTabs.style.display =
            "none";

        currentForm =
            null;

        return;

    }


    formTabs.style.display =
        "flex";


    forms.forEach(form => {

        const button =
            document.createElement(
                "button"
            );


        button.className =
            "formTab";


        button.type =
            "button";


        button.dataset.form =
            form.id;


        /* -------------------------------------------------
           OPTIONAL SUBTITLE

           Example:
           Dragon-Form
           ULTIMATE
        ------------------------------------------------- */

        if (form.subtitle) {

            button.innerHTML = `

                <span class="formTabName">

                    ${form.name}

                </span>

                <span class="formTabSubtitle">

                    ${form.subtitle}

                </span>

            `;

        }

        else {

            button.textContent =
                form.name;

        }


        if (
            currentForm &&
            currentForm.id === form.id
        ) {

            button.classList.add(
                "active"
            );

        }


        if (form.color) {

            button.dataset.color =
                form.color;

        }


        button.addEventListener(
            "click",
            () => {

                selectHeroForm(
                    hero,
                    form
                );

            }
        );


        formTabs.appendChild(
            button
        );

    });

}


/* =========================================================
   SELECT HERO FORM
========================================================= */

function selectHeroForm(
    hero,
    form
) {

    currentForm =
        form;


    /* -----------------------------------------------------
       ACTIVE TAB
    ----------------------------------------------------- */

    document
        .querySelectorAll(
            ".formTab"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.form ===
                    form.id
                );

            }
        );


    /* -----------------------------------------------------
       HERO ART
    ----------------------------------------------------- */

    renderHeroArt(

        form.heroArt ||
        hero.heroArt,

        hero.name

    );


    /* -----------------------------------------------------
       COMBAT PROFILE
    ----------------------------------------------------- */

    renderCombatProfileData(

        form.profile ||
        hero.profile

    );


    /* -----------------------------------------------------
       ABILITIES
    ----------------------------------------------------- */

    renderAbilities(

        getCurrentAbilities(
            hero,
            form
        )

    );

}


/* =========================================================
   GET CURRENT ABILITIES

   Shared hero abilities are displayed alongside
   abilities belonging to the selected form.
========================================================= */

function getCurrentAbilities(
    hero,
    form
) {

    const sharedAbilities =
        hero.abilities || [];


    const formAbilities =
        form
            ? form.abilities || []
            : [];


    return [

        ...sharedAbilities,

        ...formAbilities

    ];

}


/* =========================================================
   CHARACTER TAB NAVIGATION
========================================================= */

characterTabs.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const tab =
                button.dataset.tab;


            switchCharacterTab(
                tab
            );

        }
    );

});


function switchCharacterTab(tab) {

    characterTabs.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.tab === tab
            );

        }
    );


    characterPanels.forEach(
        panel => {

            panel.classList.remove(
                "active"
            );

        }
    );


    const targetPanel =
        document.getElementById(
            `${tab}Panel`
        );


    if (targetPanel) {

        targetPanel.classList.add(
            "active"
        );

    }

}


/* =========================================================
   COMBAT PROFILE
========================================================= */

function renderCombatProfileData(profile) {

    if (
        !radarChart ||
        !profileStats
    ) {
        return;
    }


    const safeProfile =
        profile || {};


    const stats = [

        {
            key: "damage",
            label: "Damage"
        },

        {
            key: "survivability",
            label: "Survivability"
        },

        {
            key: "crowdControl",
            label: "CC"
        },

        {
            key: "mobility",
            label: "Mobility"
        },

        {
            key: "support",
            label: "Support"
        },

        {
            key: "range",
            label: "Range"
        }

    ];


    /* -----------------------------------------------------
       STAT LIST
    ----------------------------------------------------- */

    profileStats.innerHTML =
        "";


    stats.forEach(stat => {

        const value =
            Number(
                safeProfile[stat.key] || 0
            );


        const row =
            document.createElement(
                "div"
            );


        row.className =
            "profileStat";


        row.innerHTML = `

            <div class="profileStatLabel">

                ${stat.label}

            </div>


            <div class="profileStatBar">

                <div
                    class="profileStatFill"
                    style="width:${value * 10}%"
                >
                </div>

            </div>


            <div class="profileStatValue">

                ${value}

            </div>

        `;


        profileStats.appendChild(
            row
        );

    });


    /* -----------------------------------------------------
       RADAR CHART
    ----------------------------------------------------- */

    renderRadarChart(
        safeProfile,
        stats
    );

}


/* =========================================================
   RADAR CHART
========================================================= */

function renderRadarChart(
    profile,
    stats
) {

    if (!radarChart) {
        return;
    }


    const size =
        320;

    const center =
        size / 2;

    const radius =
        110;

    const levels =
        5;


    /* -----------------------------------------------------
       POINT CALCULATION
    ----------------------------------------------------- */

    function getPoint(
        index,
        value
    ) {

        const angle =
            (
                Math.PI * 2 *
                index /
                stats.length
            )
            -
            Math.PI / 2;


        const distance =
            radius *
            (
                value / 10
            );


        return {

            x:
                center +
                Math.cos(angle) *
                distance,

            y:
                center +
                Math.sin(angle) *
                distance

        };

    }


    function getLevelPoint(
        index,
        level
    ) {

        const angle =
            (
                Math.PI * 2 *
                index /
                stats.length
            )
            -
            Math.PI / 2;


        const distance =
            radius *
            (
                level / levels
            );


        return {

            x:
                center +
                Math.cos(angle) *
                distance,

            y:
                center +
                Math.sin(angle) *
                distance

        };

    }


    /* -----------------------------------------------------
       GRID
    ----------------------------------------------------- */

    let grid =
        "";


    for (
        let level = 1;
        level <= levels;
        level++
    ) {

        const points =
            stats
                .map(
                    (_, index) => {

                        const point =
                            getLevelPoint(
                                index,
                                level
                            );


                        return (
                            `${point.x},${point.y}`
                        );

                    }
                )
                .join(" ");


        grid += `

            <polygon
                points="${points}"
                class="radarGrid"
            />

        `;

    }


    /* -----------------------------------------------------
       AXES
    ----------------------------------------------------- */

    let axes =
        "";


    stats.forEach(
        (_, index) => {

            const point =
                getLevelPoint(
                    index,
                    levels
                );


            axes += `

                <line
                    x1="${center}"
                    y1="${center}"
                    x2="${point.x}"
                    y2="${point.y}"
                    class="radarAxis"
                />

            `;

        }
    );


    /* -----------------------------------------------------
       DATA SHAPE
    ----------------------------------------------------- */

    const dataPoints =
        stats
            .map(
                (stat, index) => {

                    const value =
                        Number(
                            profile[
                                stat.key
                            ] || 0
                        );


                    const point =
                        getPoint(
                            index,
                            value
                        );


                    return (
                        `${point.x},${point.y}`
                    );

                }
            )
            .join(" ");


    /* -----------------------------------------------------
       LABELS
    ----------------------------------------------------- */

    let labels =
        "";


    stats.forEach(
        (stat, index) => {

            const angle =
                (
                    Math.PI * 2 *
                    index /
                    stats.length
                )
                -
                Math.PI / 2;


            const labelRadius =
                radius + 32;


            const x =
                center +
                Math.cos(angle) *
                labelRadius;


            const y =
                center +
                Math.sin(angle) *
                labelRadius;


            labels += `

                <text
                    x="${x}"
                    y="${y}"
                    class="radarLabel"
                    text-anchor="middle"
                    dominant-baseline="middle"
                >

                    ${stat.label}

                </text>

            `;

        }
    );


    /* -----------------------------------------------------
       SVG
    ----------------------------------------------------- */

    radarChart.innerHTML = `

        <svg
            viewBox="0 0 ${size} ${size}"
            class="radarSVG"
            role="img"
            aria-label="Character combat profile"
        >

            ${grid}

            ${axes}


            <polygon
                points="${dataPoints}"
                class="radarData"
            />


            ${labels}

        </svg>

    `;

}


/* =========================================================
   ABILITIES
========================================================= */

function renderAbilities(abilities) {

    if (!abilityGrid) {
        return;
    }


    abilityGrid.innerHTML =
        "";


    const safeAbilities =
        abilities || [];


    if (!safeAbilities.length) {

        abilityGrid.innerHTML = `

            <div class="emptyPanel">

                No ability information available.

            </div>

        `;

        return;
    }


    safeAbilities.forEach(
        (ability, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "ability";


            /* -------------------------------------------------
               STATS
            ------------------------------------------------- */

            const stats =
                Object.entries(
                    ability.stats || {}
                )

                .map(
                    ([label, value]) => `

                        <div class="stat">

                            <div class="statLabel">

                                ${label}

                            </div>

                            <div class="statValue">

                                ${value}

                            </div>

                        </div>

                    `
                )

                .join("");


            /* -------------------------------------------------
               SECTIONS / VARIANTS
            ------------------------------------------------- */

            const sections =
                renderAbilitySections(
                    ability.sections || []
                );


            /* -------------------------------------------------
               ICON
            ------------------------------------------------- */

            const iconHTML =
                ability.icon

                ? `

                    <img
                        src="${ability.icon}"
                        alt="${ability.name}"
                    >

                    <div
                        class="abilityIconFallback"
                        style="display:none;"
                    >

                        ${index + 1}

                    </div>

                `

                : `

                    <div class="abilityIconFallback">

                        ${index + 1}

                    </div>

                `;


            /* -------------------------------------------------
               CARD HTML
            ------------------------------------------------- */

            card.innerHTML = `

                <div class="abilityTop">


                    <div class="abilityIcon">

                        ${iconHTML}

                    </div>


                    <div class="abilityHeading">


                        <div class="abilityType">

                            ${ability.type || ""}

                        </div>


                        <h3>

                            ${ability.name || ""}

                        </h3>


                        <div class="abilityKey">

                            ${ability.key || ""}

                        </div>


                    </div>


                    <button
                        class="previewButton"
                        type="button"
                        title="Preview ability"
                        aria-label="Preview ${ability.name}"
                    >

                        ▶

                    </button>


                </div>


                <div class="abilityShort">

                    ${ability.shortDescription || ""}

                </div>


                <div class="abilityActions">


                    <button
                        class="abilityAction detailsButton"
                        type="button"
                    >

                        View Details

                    </button>


                    <button
                        class="abilityAction previewAction"
                        type="button"
                    >

                        Preview

                    </button>


                </div>


                <div class="abilityDetails">


                    <div class="detailText">

                        ${ability.detailedDescription || ""}

                    </div>


                    ${
                        stats

                        ? `

                            <div class="abilityStats">

                                ${stats}

                            </div>

                        `

                        : ""
                    }


                    ${sections}


                </div>

            `;


            /* -------------------------------------------------
               PREVIEW BUTTON
            ------------------------------------------------- */

            const previewButton =
                card.querySelector(
                    ".previewButton"
                );


            if (previewButton) {

                previewButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        openPreview(
                            ability
                        );

                    }
                );

            }


            /* -------------------------------------------------
               PREVIEW ACTION
            ------------------------------------------------- */

            const previewAction =
                card.querySelector(
                    ".previewAction"
                );


            if (previewAction) {

                previewAction.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        openPreview(
                            ability
                        );

                    }
                );

            }


            /* -------------------------------------------------
               DETAILS BUTTON
            ------------------------------------------------- */

            const detailsButton =
                card.querySelector(
                    ".detailsButton"
                );


            if (detailsButton) {

                detailsButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        toggleDetails(
                            detailsButton
                        );

                    }
                );

            }


            /* -------------------------------------------------
               ICON FALLBACK
            ------------------------------------------------- */

            const icon =
                card.querySelector(
                    ".abilityIcon img"
                );


            const fallback =
                card.querySelector(
                    ".abilityIconFallback"
                );


            if (
                icon &&
                fallback
            ) {

                icon.addEventListener(
                    "error",
                    () => {

                        icon.style.display =
                            "none";

                        fallback.style.display =
                            "flex";

                    }
                );

            }


            abilityGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   ABILITY SECTIONS / VARIANTS
========================================================= */

function renderAbilitySections(
    sections
) {

    if (!sections.length) {
        return "";
    }


    const sectionHTML =
        sections
            .map(section => {

                const details =
                    Object.entries(
                        section.details || {}
                    )

                    .map(
                        ([label, value]) => `

                            <div class="variantStat">

                                <div class="variantStatLabel">

                                    ${label}

                                </div>

                                <div class="variantStatValue">

                                    ${value}

                                </div>

                            </div>

                        `
                    )

                    .join("");


                const color =
                    section.color || "white";


                return `

                    <div
                        class="abilityVariant"
                        data-variant="${color}"
                    >


                        <div class="variantHeader">


                            <div
                                class="variantIndicator"
                                data-color="${color}"
                            >
                            </div>


                            <div class="variantName">

                                ${section.name || ""}

                            </div>


                        </div>


                        ${
                            section.description

                            ? `

                                <div class="variantDescription">

                                    ${section.description}

                                </div>

                            `

                            : ""
                        }


                        ${
                            details

                            ? `

                                <div class="variantStats">

                                    ${details}

                                </div>

                            `

                            : ""
                        }


                    </div>

                `;

            })

            .join("");


    return `

        <div class="abilityVariants">

            ${sectionHTML}

        </div>

    `;

}


/* =========================================================
   ABILITY DETAILS
========================================================= */

function toggleDetails(button) {

    const card =
        button.closest(
            ".ability"
        );


    if (!card) {
        return;
    }


    const details =
        card.querySelector(
            ".abilityDetails"
        );


    if (!details) {
        return;
    }


    const isOpen =
        details.classList.toggle(
            "open"
        );


    button.textContent =
        isOpen
            ? "Hide Details"
            : "View Details";

}


/* =========================================================
   SKINS
========================================================= */

function renderSkins(hero) {

    if (!skinsGrid) {
        return;
    }


    skinsGrid.innerHTML =
        "";


    const skins =
        hero.skins || [];


    if (!skins.length) {

        skinsGrid.innerHTML = `

            <div class="emptyPanel">

                No skins available.

            </div>

        `;

        return;
    }


    skins.forEach(skin => {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "skinCard";


        const imageSource =
            skin.thumbnail ||
            skin.splash;


        const imageHTML =
            imageSource

            ? `

                <img
                    src="${imageSource}"
                    alt="${skin.name}"
                >

            `

            : `

                <div class="skinFallback">

                    ${skin.name.charAt(0)}

                </div>

            `;


        card.innerHTML = `

            <div class="skinImage">

                ${imageHTML}

            </div>


            <div class="skinInfo">


                <div class="skinName">

                    ${skin.name}

                </div>


                <div class="skinRarity">

                    ${skin.rarity || ""}

                </div>


            </div>

        `;


        const image =
            card.querySelector(
                ".skinImage img"
            );


        if (image) {

            image.addEventListener(
                "error",
                () => {

                    image.parentElement.innerHTML = `

                        <div class="skinFallback">

                            ${skin.name.charAt(0)}

                        </div>

                    `;

                }
            );

        }


        /* -------------------------------------------------
           CLICK SKIN TO VIEW SPLASH
        ------------------------------------------------- */

        if (skin.splash) {

            card.addEventListener(
                "click",
                () => {

                    openImagePreview(
                        skin.splash,
                        skin.name
                    );

                }
            );

        }


        skinsGrid.appendChild(
            card
        );

    });

}


/* =========================================================
   CONCEPT ART
========================================================= */

function renderConceptArt(hero) {

    if (!conceptGrid) {
        return;
    }


    conceptGrid.innerHTML =
        "";


    const conceptArt =
        hero.conceptArt || [];


    if (!conceptArt.length) {

        conceptGrid.innerHTML = `

            <div class="emptyPanel">

                No concept art available.

            </div>

        `;

        return;
    }


    conceptArt.forEach(concept => {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "conceptCard";


        card.innerHTML = `

            <div class="conceptImage">

                <img
                    src="${concept.image}"
                    alt="${concept.title}"
                >

            </div>


            <div class="conceptInfo">


                <div class="conceptTitle">

                    ${concept.title}

                </div>


                <div class="conceptDescription">

                    ${concept.description || ""}

                </div>


            </div>

        `;


        const image =
            card.querySelector(
                "img"
            );


        if (image) {

            image.addEventListener(
                "error",
                () => {

                    image.parentElement.innerHTML = `

                        <div class="conceptFallback">

                            ART

                        </div>

                    `;

                }
            );

        }


        if (concept.image) {

            card.addEventListener(
                "click",
                () => {

                    openImagePreview(
                        concept.image,
                        concept.title
                    );

                }
            );

        }


        conceptGrid.appendChild(
            card
        );

    });

}


/* =========================================================
   ABILITY PREVIEW
========================================================= */

function openPreview(ability) {

    if (
        !previewModal ||
        !previewMedia ||
        !previewTitle
    ) {
        return;
    }


    previewTitle.textContent =
        ability.name ||
        "Ability Preview";


    previewMedia.innerHTML =
        "";


    /* -----------------------------------------------------
       VIDEO
    ----------------------------------------------------- */

    if (
        ability.preview &&
        ability.previewType ===
        "video"
    ) {

        const video =
            document.createElement(
                "video"
            );


        video.src =
            ability.preview;


        video.controls =
            true;


        video.autoplay =
            true;


        video.loop =
            true;


        video.muted =
            true;


        video.playsInline =
            true;


        previewMedia.appendChild(
            video
        );

    }


    /* -----------------------------------------------------
       IMAGE
    ----------------------------------------------------- */

    else if (
        ability.preview &&
        ability.previewType ===
        "image"
    ) {

        const image =
            document.createElement(
                "img"
            );


        image.src =
            ability.preview;


        image.alt =
            ability.name ||
            "Ability Preview";


        previewMedia.appendChild(
            image
        );

    }


    /* -----------------------------------------------------
       FALLBACK
    ----------------------------------------------------- */

    else {

        previewMedia.innerHTML = `

            <div class="previewFallback">

                PREVIEW NOT AVAILABLE

            </div>

        `;

    }


    previewModal.classList.add(
        "open"
    );

}


/* =========================================================
   GENERIC IMAGE PREVIEW

   Used by skins and concept art.
========================================================= */

function openImagePreview(
    source,
    title
) {

    if (
        !previewModal ||
        !previewMedia ||
        !previewTitle
    ) {
        return;
    }


    previewTitle.textContent =
        title || "Preview";


    previewMedia.innerHTML =
        "";


    const image =
        document.createElement(
            "img"
        );


    image.src =
        source;


    image.alt =
        title || "Preview";


    image.addEventListener(
        "error",
        () => {

            previewMedia.innerHTML = `

                <div class="previewFallback">

                    IMAGE NOT AVAILABLE

                </div>

            `;

        }
    );


    previewMedia.appendChild(
        image
    );


    previewModal.classList.add(
        "open"
    );

}


/* =========================================================
   CLOSE PREVIEW
========================================================= */

function closePreview() {

    if (!previewModal) {
        return;
    }


    previewModal.classList.remove(
        "open"
    );


    if (previewMedia) {

        previewMedia.innerHTML =
            "";

    }

}


if (previewClose) {

    previewClose.addEventListener(
        "click",
        closePreview
    );

}


if (previewModal) {

    previewModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                previewModal
            ) {

                closePreview();

            }

        }
    );

}


/* =========================================================
   CLOSE HERO
========================================================= */

function closeHero() {

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";


    currentHero =
        null;


    currentForm =
        null;

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeHero
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeHero();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        /*
            Close the preview first if it is open.
        */

        if (
            previewModal &&
            previewModal.classList.contains(
                "open"
            )
        ) {

            closePreview();

            return;

        }


        /*
            Otherwise close the hero modal.
        */

        if (
            modal &&
            modal.classList.contains(
                "open"
            )
        ) {

            closeHero();

        }

    }
);
