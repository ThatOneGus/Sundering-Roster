/* =========================================================
   SUNDERING — ROSTER
========================================================= */


/* =========================================================
   HERO DATABASE

   Every individual hero file pushes its character into:
   window.heroes
========================================================= */

const heroes =
    window.heroes || [];


/* =========================================================
   ROLE ICON PATHS
========================================================= */

const roleIconPaths = {

    /* VANGUARD */

    Vanguard:
        "Assets/Roles/Vanguard/IMG_6672.png",

    Guardian:
        "Assets/Roles/Vanguard/IMG_6671.png",

    Warden:
        "Assets/Roles/Vanguard/IMG_6670.png",

    Bludgeon:
        "Assets/Roles/Vanguard/IMG_6669.png",


    /* STRIKER */

    Striker:
        "Assets/Roles/Striker/Striker.png",

    Brawler:
        "Assets/Roles/Striker/Brawler.png",

    Marksman:
        "Assets/Roles/Striker/Marksman.png",

    Hunter:
        "Assets/Roles/Striker/Hunter.png",

    Ravager:
        "Assets/Roles/Striker/Ravager.png",

    Disruptor:
        "Assets/Roles/Striker/Disruptor.png",


    /* CATALYST */

    Catalyst:
        "Assets/Roles/Catalyst/Catalyst.png",

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
   ROSTER ELEMENT
========================================================= */

const roster =
    document.getElementById(
        "roster"
    );


/* =========================================================
   RENDER ROSTER
========================================================= */

function renderRoster(list) {

    roster.innerHTML =
        "";


    if (!list.length) {

        roster.innerHTML = `

            <div class="emptyRoster">

                NO CHARACTERS FOUND

            </div>

        `;

        return;
    }


    list.forEach(hero => {

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "heroCard";


        /* -----------------------------------------------------
           HERO THUMBNAIL
        ----------------------------------------------------- */

        const art =
            document.createElement(
                "div"
            );

        art.className =
            "heroArt";


        if (hero.thumbnail) {

            const image =
                document.createElement(
                    "img"
                );

            image.src =
                hero.thumbnail;

            image.alt =
                hero.name;

            image.loading =
                "lazy";


            image.addEventListener(
                "error",
                () => {

                    image.remove();


                    art.classList.add(
                        "heroArtFallback"
                    );


                    art.textContent =
                        hero.name.charAt(0);

                }
            );


            art.appendChild(
                image
            );

        }

        else {

            art.classList.add(
                "heroArtFallback"
            );


            art.textContent =
                hero.name.charAt(0);

        }


        /* -----------------------------------------------------
           ROLE ICONS
        ----------------------------------------------------- */

        const heroRoles = [

            hero.role,

            ...(hero.secondaryRoles || [])

        ];


        const uniqueHeroRoles =
            [...new Set(heroRoles)];


        const roleIcons =
            uniqueHeroRoles
                .filter(
                    role =>
                        roleIconPaths[role]
                )
                .map(
                    role => `

                        <div
                            class="heroRoleIcon"
                            title="${role}"
                        >

                            <img
                                src="${roleIconPaths[role]}"
                                alt="${role}"
                            >

                        </div>

                    `
                )
                .join("");


        /* -----------------------------------------------------
           ROLE TEXT
        ----------------------------------------------------- */

        const secondaryRoles =
            hero.secondaryRoles || [];


        const secondaryRoleText =
            secondaryRoles.length
                ? `

                    <span class="heroRoleDivider">
                        /
                    </span>

                    ${secondaryRoles.join(" / ")}

                `
                : "";


        /* -----------------------------------------------------
           HERO INFORMATION
        ----------------------------------------------------- */

        const info =
            document.createElement(
                "div"
            );

        info.className =
            "heroInfo";


        info.innerHTML = `

            <div class="heroInfoText">


                <div class="heroName">

                    ${hero.name}

                </div>


                <div class="heroTitle">

                    ${hero.title}

                </div>


                <div class="heroRole">

                    ${hero.role}

                    ${secondaryRoleText}

                </div>


            </div>


            <div class="heroRoleIcons">

                ${roleIcons}

            </div>

        `;


        /* -----------------------------------------------------
           BUILD CARD
        ----------------------------------------------------- */

        card.appendChild(
            art
        );


        card.appendChild(
            info
        );


        card.addEventListener(
            "click",
            () => openHero(hero)
        );


        roster.appendChild(
            card
        );

    });

}


/* =========================================================
   SEARCH + FILTER STATE
========================================================= */

const search =
    document.getElementById(
        "search"
    );


let currentRole =
    "all";


function getFilteredHeroes() {

    const query =
        search
            ? search.value
                .toLowerCase()
                .trim()
            : "";


    return heroes.filter(hero => {

        const searchableRoles = [

            hero.role,

            ...(hero.secondaryRoles || [])

        ];


        /* -----------------------------------------------------
           SEARCH MATCH
        ----------------------------------------------------- */

        const matchesSearch =

            !query

            ||

            hero.name
                .toLowerCase()
                .includes(query)

            ||

            (hero.title || "")
                .toLowerCase()
                .includes(query)

            ||

            (hero.region || "")
                .toLowerCase()
                .includes(query)

            ||

            searchableRoles.some(
                role =>
                    role
                        .toLowerCase()
                        .includes(query)
            );


        /* -----------------------------------------------------
           ROLE MATCH
        ----------------------------------------------------- */

        const matchesRole =

            currentRole === "all"

            ||

            hero.role === currentRole

            ||

            (hero.secondaryRoles || [])
                .includes(currentRole);


        return (
            matchesSearch &&
            matchesRole
        );

    });

}


/* =========================================================
   REFRESH ROSTER
========================================================= */

function refreshRoster() {

    renderRoster(
        getFilteredHeroes()
    );

}


/* =========================================================
   SEARCH
========================================================= */

if (search) {

    search.addEventListener(
        "input",
        refreshRoster
    );

}


/* =========================================================
   ROLE FILTER ELEMENTS
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
   SET ROLE FILTER
========================================================= */

function setRoleFilter(role) {

    currentRole =
        role;


    /* -----------------------------------------------------
       CLEAR STATES
    ----------------------------------------------------- */

    roleButtons.forEach(
        button =>
            button.classList.remove(
                "active"
            )
    );


    subclassButtons.forEach(
        button =>
            button.classList.remove(
                "active"
            )
    );


    /* -----------------------------------------------------
       ALL
    ----------------------------------------------------- */

    if (
        allButton &&
        role === "all"
    ) {

        allButton.classList.add(
            "active"
        );

    }


    /* -----------------------------------------------------
       MAIN ROLE
    ----------------------------------------------------- */

    const matchingMainRole =
        [...roleButtons].find(
            button =>
                button.dataset.role ===
                role
        );


    if (
        matchingMainRole &&
        role !== "all"
    ) {

        matchingMainRole.classList.add(
            "active"
        );

    }


    /* -----------------------------------------------------
       SUBCLASS
    ----------------------------------------------------- */

    const matchingSubclass =
        [...subclassButtons].find(
            button =>
                button.dataset.role ===
                role
        );


    if (matchingSubclass) {

        matchingSubclass.classList.add(
            "active"
        );


        const parentGroup =
            matchingSubclass.closest(
                ".roleGroup"
            );


        if (parentGroup) {

            const parentRoleButton =
                parentGroup.querySelector(
                    ".roleFilter"
                );


            if (parentRoleButton) {

                parentRoleButton.classList.add(
                    "active"
                );

            }

        }

    }


    refreshRoster();

}


/* =========================================================
   UPDATE ROLE URL
========================================================= */

function updateRoleURL(role) {

    const url =
        new URL(
            window.location.href
        );


    if (
        role &&
        role !== "all"
    ) {

        url.searchParams.set(
            "role",
            role
        );

    }

    else {

        url.searchParams.delete(
            "role"
        );

    }


    window.history.replaceState(
        {},
        "",
        url
    );

}


/* =========================================================
   ALL BUTTON
========================================================= */

if (allButton) {

    allButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            roleGroups.forEach(
                group =>
                    group.classList.remove(
                        "open"
                    )
            );


            setRoleFilter(
                "all"
            );


            updateRoleURL(
                null
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


            const role =
                button.dataset.role;


            setRoleFilter(
                role
            );


            if (group) {

                group.classList.toggle(
                    "open",
                    !wasOpen
                );

            }


            updateRoleURL(
                role
            );

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


            setRoleFilter(
                role
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


            updateRoleURL(
                role
            );

        }
    );

});


/* =========================================================
   CLOSE DROPDOWNS
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".roleGroup"
            )
        ) {

            roleGroups.forEach(
                group =>
                    group.classList.remove(
                        "open"
                    )
            );

        }

    }
);


/* =========================================================
   URL ROLE FILTER
========================================================= */

function applyURLFilter() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const requestedRole =
        params.get(
            "role"
        );


    if (!requestedRole) {

        setRoleFilter(
            "all"
        );

        return;

    }


    const validRoles = [

        "Vanguard",
        "Guardian",
        "Warden",
        "Bludgeon",

        "Striker",
        "Brawler",
        "Marksman",
        "Hunter",
        "Ravager",
        "Disruptor",

        "Catalyst",
        "Lifeline",
        "Playmaker",
        "Utility",
        "Controller"

    ];


    const matchingRole =
        validRoles.find(
            validRole =>
                validRole.toLowerCase() ===
                requestedRole.toLowerCase()
        );


    if (matchingRole) {

        setRoleFilter(
            matchingRole
        );

    }

    else {

        setRoleFilter(
            "all"
        );

    }

}


/* =========================================================
   HERO MODAL ELEMENTS
========================================================= */

const modal =
    document.getElementById(
        "modal"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


const detailArt =
    document.getElementById(
        "detailArt"
    );


const detailName =
    document.getElementById(
        "detailName"
    );


const detailTitle =
    document.getElementById(
        "detailTitle"
    );


const detailRole =
    document.getElementById(
        "detailRole"
    );


const detailDescription =
    document.getElementById(
        "detailDescription"
    );


const detailTags =
    document.getElementById(
        "detailTags"
    );


const abilityGrid =
    document.getElementById(
        "abilityGrid"
    );


const skinsGrid =
    document.getElementById(
        "skinsGrid"
    );


const conceptGrid =
    document.getElementById(
        "conceptGrid"
    );


const radarChart =
    document.getElementById(
        "radarChart"
    );


const profileStats =
    document.getElementById(
        "profileStats"
    );


/* =========================================================
   CHARACTER TABS
========================================================= */

const characterTabs =
    document.querySelectorAll(
        ".characterTab"
    );


const characterPanels =
    document.querySelectorAll(
        ".characterPanel"
    );


function switchCharacterTab(
    tabName
) {

    characterTabs.forEach(
        tab => {

            tab.classList.toggle(
                "active",
                tab.dataset.tab === tabName
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


    const panel =
        document.getElementById(
            `${tabName}Panel`
        );


    if (panel) {

        panel.classList.add(
            "active"
        );

    }

}


characterTabs.forEach(
    tab => {

        tab.addEventListener(
            "click",
            () => {

                switchCharacterTab(
                    tab.dataset.tab
                );

            }
        );

    }
);


/* =========================================================
   OPEN HERO
========================================================= */

function openHero(hero) {

    /* -----------------------------------------------------
       HERO ART
    ----------------------------------------------------- */

    detailArt.innerHTML =
        "";


    if (hero.heroArt) {

        const image =
            document.createElement(
                "img"
            );


        image.src =
            hero.heroArt;


        image.alt =
            hero.name;


        image.addEventListener(
            "error",
            () => {

                detailArt.innerHTML = `

                    <div class="detailArtFallback">

                        ${hero.name.charAt(0)}

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

                ${hero.name.charAt(0)}

            </div>

        `;

    }


    /* -----------------------------------------------------
       BASIC INFORMATION
    ----------------------------------------------------- */

    detailName.textContent =
        hero.name;


    detailTitle.textContent =
        hero.title || "";


    detailRole.textContent =
        hero.role || "";


    detailDescription.textContent =
        hero.description || "";


    /* -----------------------------------------------------
       TAGS
    ----------------------------------------------------- */

    detailTags.innerHTML =
        "";


    const tags = [

        hero.role,

        ...(hero.secondaryRoles || [])
            .filter(
                role =>
                    role !== hero.role
            ),

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


    /* -----------------------------------------------------
       RENDER CHARACTER DATA
    ----------------------------------------------------- */

    renderCombatProfile(
        hero
    );


    renderAbilities(
        hero
    );


    renderSkins(
        hero
    );


    renderConceptArt(
        hero
    );


    /* -----------------------------------------------------
       RESET TO OVERVIEW
    ----------------------------------------------------- */

    switchCharacterTab(
        "overview"
    );


    /* -----------------------------------------------------
       OPEN MODAL
    ----------------------------------------------------- */

    modal.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   COMBAT PROFILE
========================================================= */

const profileLabels = {

    damage:
        "Damage",

    survivability:
        "Survivability",

    crowdControl:
        "CC",

    mobility:
        "Mobility",

    support:
        "Support",

    range:
        "Range"

};


function renderCombatProfile(hero) {

    const profile =
        hero.profile || {};


    const values = [

        profile.damage || 0,

        profile.survivability || 0,

        profile.crowdControl || 0,

        profile.mobility || 0,

        profile.support || 0,

        profile.range || 0

    ];


    renderRadarChart(
        values
    );


    profileStats.innerHTML =
        "";


    Object.entries(
        profileLabels
    )
        .forEach(
            ([key, label]) => {

                const value =
                    profile[key] || 0;


                const stat =
                    document.createElement(
                        "div"
                    );


                stat.className =
                    "profileStat";


                stat.innerHTML = `

                    <div class="profileStatTop">

                        <span>

                            ${label}

                        </span>


                        <span>

                            ${value}/10

                        </span>

                    </div>


                    <div class="profileBar">

                        <div
                            class="profileBarFill"
                            style="
                                width:${value * 10}%;
                            "
                        >
                        </div>

                    </div>

                `;


                profileStats.appendChild(
                    stat
                );

            }
        );

}


/* =========================================================
   RADAR CHART
========================================================= */

function renderRadarChart(
    values
) {

    if (!radarChart) {

        return;

    }


    const labels = [

        "DAMAGE",
        "SURVIVABILITY",
        "CC",
        "MOBILITY",
        "SUPPORT",
        "RANGE"

    ];


    const size =
        420;


    const center =
        size / 2;


    const radius =
        135;


    const levels =
        5;


    const count =
        labels.length;


    function getPoint(
        index,
        distance
    ) {

        const angle =
            (
                Math.PI *
                2 *
                index /
                count
            )
            -
            Math.PI / 2;


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

        const distance =
            radius *
            (
                level /
                levels
            );


        const points =
            labels
                .map(
                    (_, index) => {

                        const point =
                            getPoint(
                                index,
                                distance
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


    labels.forEach(
        (_, index) => {

            const point =
                getPoint(
                    index,
                    radius
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
       DATA POLYGON
    ----------------------------------------------------- */

    const dataPoints =
        values
            .map(
                (value, index) => {

                    const normalized =
                        Math.max(
                            0,
                            Math.min(
                                10,
                                value
                            )
                        ) / 10;


                    const point =
                        getPoint(
                            index,
                            radius *
                            normalized
                        );


                    return (
                        `${point.x},${point.y}`
                    );

                }
            )
            .join(" ");


    /* -----------------------------------------------------
       DATA POINTS
    ----------------------------------------------------- */

    let dots =
        "";


    values.forEach(
        (value, index) => {

            const normalized =
                Math.max(
                    0,
                    Math.min(
                        10,
                        value
                    )
                ) / 10;


            const point =
                getPoint(
                    index,
                    radius *
                    normalized
                );


            dots += `

                <circle
                    cx="${point.x}"
                    cy="${point.y}"
                    r="4"
                    class="radarPoint"
                />

            `;

        }
    );


    /* -----------------------------------------------------
       LABELS
    ----------------------------------------------------- */

    let labelElements =
        "";


    labels.forEach(
        (label, index) => {

            const point =
                getPoint(
                    index,
                    radius + 38
                );


            let anchor =
                "middle";


            if (
                point.x <
                center - 20
            ) {

                anchor =
                    "end";

            }

            else if (
                point.x >
                center + 20
            ) {

                anchor =
                    "start";

            }


            labelElements += `

                <text
                    x="${point.x}"
                    y="${point.y}"
                    text-anchor="${anchor}"
                    dominant-baseline="middle"
                    class="radarLabel"
                >

                    ${label}

                </text>

            `;

        }
    );


    radarChart.innerHTML = `

        <svg
            viewBox="0 0 ${size} ${size}"
            class="radarSVG"
        >

            ${grid}

            ${axes}


            <polygon
                points="${dataPoints}"
                class="radarData"
            />


            ${dots}

            ${labelElements}

        </svg>

    `;

}


/* =========================================================
   ABILITIES
========================================================= */

function renderAbilities(hero) {

    abilityGrid.innerHTML =
        "";


    const abilities =
        hero.abilities || [];


    if (!abilities.length) {

        abilityGrid.innerHTML = `

            <div class="emptySection">

                NO ABILITY DATA AVAILABLE

            </div>

        `;

        return;
    }


    abilities.forEach(
        (ability, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "ability";


            /* -------------------------------------------------
               BASE STATS
            ------------------------------------------------- */

            const stats =
                createStatsHTML(
                    ability.stats
                );


            /* -------------------------------------------------
               COLORED SECTIONS
            ------------------------------------------------- */

            const sections =
                createSectionsHTML(
                    ability.sections
                );


            /* -------------------------------------------------
               CARD HTML
            ------------------------------------------------- */

            card.innerHTML = `

                <div class="abilityTop">


                    <div class="abilityIcon">


                        ${
                            ability.icon
                                ? `

                                    <img
                                        src="${ability.icon}"
                                        alt="${ability.name}"
                                    >

                                  `
                                : ""
                        }


                        <div
                            class="abilityIconFallback"
                            ${
                                ability.icon
                                    ? `style="display:none;"`
                                    : ""
                            }
                        >

                            ${index + 1}

                        </div>


                    </div>


                    <div class="abilityHeading">


                        <div class="abilityType">

                            ${ability.type || ""}

                        </div>


                        <h3>

                            ${ability.name}

                        </h3>


                        <div class="abilityKey">

                            ${ability.key || ""}

                        </div>


                    </div>


                    <button
                        class="previewButton"
                        type="button"
                        title="Preview ability"
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


            previewButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    openPreview(
                        ability
                    );

                }
            );


            /* -------------------------------------------------
               PREVIEW ACTION
            ------------------------------------------------- */

            const previewAction =
                card.querySelector(
                    ".previewAction"
                );


            previewAction.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    openPreview(
                        ability
                    );

                }
            );


            /* -------------------------------------------------
               DETAILS
            ------------------------------------------------- */

            const detailsButton =
                card.querySelector(
                    ".detailsButton"
                );


            detailsButton.addEventListener(
                "click",
                () => {

                    toggleDetails(
                        detailsButton
                    );

                }
            );


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


            if (icon) {

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
   CREATE STAT HTML
========================================================= */

function createStatsHTML(
    stats
) {

    if (!stats) {

        return "";

    }


    return Object.entries(
        stats
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

}


/* =========================================================
   COLORED ABILITY SECTIONS

   Supported colors:

   red
   orange
   yellow
   green
   teal
   blue
   violet
   pink
   white
========================================================= */

function createSectionsHTML(
    sections
) {

    if (
        !sections ||
        !sections.length
    ) {

        return "";

    }


    const allowedColors = [

        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "violet",
        "pink",
        "white"

    ];


    return `

        <div class="abilitySections">

            ${sections
                .map(
                    section => {

                        const details =
                            createStatsHTML(
                                section.details
                            );


                        const requestedColor =
                            section.color ||
                            "white";


                        const color =
                            allowedColors.includes(
                                requestedColor
                            )
                                ? requestedColor
                                : "white";


                        return `

                            <div
                                class="
                                    abilitySection
                                    variant-${color}
                                "
                            >


                                <div class="abilitySectionHeader">

                                    <span class="variantIndicator">
                                    </span>

                                    <span>

                                        ${section.name}

                                    </span>

                                </div>


                                ${
                                    section.description
                                        ? `

                                            <div class="abilitySectionDescription">

                                                ${section.description}

                                            </div>

                                          `
                                        : ""
                                }


                                ${
                                    details
                                        ? `

                                            <div class="abilityStats variantStats">

                                                ${details}

                                            </div>

                                          `
                                        : ""
                                }


                            </div>

                        `;

                    }
                )
                .join("")}

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

    skinsGrid.innerHTML =
        "";


    const skins =
        hero.skins || [];


    if (!skins.length) {

        skinsGrid.innerHTML = `

            <div class="emptySection">

                NO SKINS AVAILABLE

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


        card.innerHTML = `

            <div class="skinImage">


                ${
                    skin.thumbnail
                        ? `

                            <img
                                src="${skin.thumbnail}"
                                alt="${skin.name}"
                                loading="lazy"
                            >

                          `
                        : `

                            <div class="skinFallback">

                                ?

                            </div>

                          `
                }


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

                            ?

                        </div>

                    `;

                }
            );

        }


        if (skin.splash) {

            card.addEventListener(
                "click",
                () => {

                    openMediaPreview(
                        skin.name,
                        skin.splash,
                        "image"
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

    conceptGrid.innerHTML =
        "";


    const concepts =
        hero.conceptArt || [];


    if (!concepts.length) {

        conceptGrid.innerHTML = `

            <div class="emptySection">

                NO CONCEPT ART AVAILABLE

            </div>

        `;

        return;
    }


    concepts.forEach(concept => {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "conceptCard";


        card.innerHTML = `

            <div class="conceptImage">


                ${
                    concept.image
                        ? `

                            <img
                                src="${concept.image}"
                                alt="${concept.title}"
                                loading="lazy"
                            >

                          `
                        : `

                            <div class="conceptFallback">

                                ?

                            </div>

                          `
                }


            </div>


            <div class="conceptInfo">


                <div class="conceptTitle">

                    ${concept.title}

                </div>


                ${
                    concept.description
                        ? `

                            <div class="conceptDescription">

                                ${concept.description}

                            </div>

                          `
                        : ""
                }


            </div>

        `;


        const image =
            card.querySelector(
                ".conceptImage img"
            );


        if (image) {

            image.addEventListener(
                "error",
                () => {

                    image.parentElement.innerHTML = `

                        <div class="conceptFallback">

                            ?

                        </div>

                    `;

                }
            );

        }


        if (concept.image) {

            card.addEventListener(
                "click",
                () => {

                    openMediaPreview(
                        concept.title,
                        concept.image,
                        "image"
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
   CLOSE HERO
========================================================= */

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


function closeHero() {

    if (!modal) {

        return;

    }


    modal.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   PREVIEW MODAL ELEMENTS
========================================================= */

const previewModal =
    document.getElementById(
        "previewModal"
    );


const previewMedia =
    document.getElementById(
        "previewMedia"
    );


const previewTitle =
    document.getElementById(
        "previewTitle"
    );


const previewClose =
    document.getElementById(
        "previewClose"
    );


/* =========================================================
   ABILITY PREVIEW
========================================================= */

function openPreview(ability) {

    openMediaPreview(
        ability.name,
        ability.preview,
        ability.previewType
    );

}


/* =========================================================
   GENERIC MEDIA PREVIEW
========================================================= */

function openMediaPreview(
    title,
    source,
    type
) {

    previewTitle.textContent =
        title || "Preview";


    previewMedia.innerHTML =
        "";


    /* -----------------------------------------------------
       VIDEO
    ----------------------------------------------------- */

    if (
        source &&
        type === "video"
    ) {

        const video =
            document.createElement(
                "video"
            );


        video.src =
            source;


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


        video.addEventListener(
            "error",
            () => {

                previewMedia.innerHTML = `

                    <div class="previewFallback">

                        PREVIEW NOT AVAILABLE

                    </div>

                `;

            }
        );


        previewMedia.appendChild(
            video
        );

    }


    /* -----------------------------------------------------
       IMAGE
    ----------------------------------------------------- */

    else if (
        source &&
        type === "image"
    ) {

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

                        PREVIEW NOT AVAILABLE

                    </div>

                `;

            }
        );


        previewMedia.appendChild(
            image
        );

    }


    /* -----------------------------------------------------
       NO PREVIEW
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
   CLOSE PREVIEW
========================================================= */

function closePreview() {

    if (!previewModal) {

        return;

    }


    previewModal.classList.remove(
        "open"
    );


    previewMedia.innerHTML =
        "";

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
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        if (
            previewModal &&
            previewModal.classList.contains(
                "open"
            )
        ) {

            closePreview();

            return;

        }


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


/* =========================================================
   INITIALIZE ROSTER
========================================================= */

/*
    Every individual hero file should already have run:

        window.heroes.push({...});

    before roster.js loads.
*/


renderRoster(
    heroes
);


/*
    Apply links coming from roles.html.

    Example:

        index.html?role=Hunter
*/

applyURLFilter();
