/* =========================================================
   SUNDERING — SKINS.JS
========================================================= */


/* =========================================================
   GLOBAL DATABASES
========================================================= */

const heroes =
    window.heroes || [];


const skinlines =
    window.skinlines || {};


/* =========================================================
   ELEMENTS
========================================================= */

const skinSearch =
    document.getElementById(
        "skinSearch"
    );


const skinFilters =
    document.querySelectorAll(
        ".skinFilter"
    );


const skinlinesSection =
    document.getElementById(
        "skinlinesSection"
    );


const standaloneSection =
    document.getElementById(
        "standaloneSection"
    );


const skinlinesGrid =
    document.getElementById(
        "skinlinesGrid"
    );


const standaloneGrid =
    document.getElementById(
        "standaloneGrid"
    );


const skinlineCount =
    document.getElementById(
        "skinlineCount"
    );


const standaloneCount =
    document.getElementById(
        "standaloneCount"
    );


const noSkinResults =
    document.getElementById(
        "noSkinResults"
    );


/* =========================================================
   SKINLINE MODAL
========================================================= */

const skinlineModal =
    document.getElementById(
        "skinlineModal"
    );


const skinlineModalClose =
    document.getElementById(
        "skinlineModalClose"
    );


const skinlineHeroBanner =
    document.getElementById(
        "skinlineHeroBanner"
    );


const skinlineModalEyebrow =
    document.getElementById(
        "skinlineModalEyebrow"
    );


const skinlineModalTitle =
    document.getElementById(
        "skinlineModalTitle"
    );


const skinlineModalDescription =
    document.getElementById(
        "skinlineModalDescription"
    );


const skinlineSkinGrid =
    document.getElementById(
        "skinlineSkinGrid"
    );


/* =========================================================
   SKIN PREVIEW MODAL
========================================================= */

const skinPreviewModal =
    document.getElementById(
        "skinPreviewModal"
    );


const skinPreviewClose =
    document.getElementById(
        "skinPreviewClose"
    );


const skinPreviewImage =
    document.getElementById(
        "skinPreviewImage"
    );


const skinPreviewFallback =
    document.getElementById(
        "skinPreviewFallback"
    );


const skinPreviewSkinline =
    document.getElementById(
        "skinPreviewSkinline"
    );


const skinPreviewName =
    document.getElementById(
        "skinPreviewName"
    );


const skinPreviewHero =
    document.getElementById(
        "skinPreviewHero"
    );


const skinPreviewRarity =
    document.getElementById(
        "skinPreviewRarity"
    );


const skinPreviewDescription =
    document.getElementById(
        "skinPreviewDescription"
    );


const skinPreviewMeta =
    document.getElementById(
        "skinPreviewMeta"
    );


/* =========================================================
   PAGE STATE
========================================================= */

let currentFilter =
    "all";


let currentSearch =
    "";


let allSkins =
    [];


/* =========================================================
   BUILD MASTER SKIN DATABASE
========================================================= */

function buildSkinDatabase() {

    const database =
        [];


    heroes.forEach(hero => {

        const heroSkins =
            hero.skins || [];


        heroSkins.forEach(skin => {


            /* ---------------------------------------------
               IGNORE DEFAULT / BASE SKINS
            --------------------------------------------- */

            if (
                skin.rarity === "Base" ||
                skin.name === "Default"
            ) {

                return;

            }


            database.push({

                ...skin,

                heroName:
                    hero.name,

                heroTitle:
                    hero.title,

                heroRole:
                    hero.role,

                heroThumbnail:
                    hero.thumbnail,

                heroArt:
                    hero.heroArt

            });

        });

    });


    return database;

}


/* =========================================================
   GROUP SKINS BY SKINLINE
========================================================= */

function groupSkinlines(
    skins
) {

    const groups =
        {};


    skins.forEach(skin => {

        if (!skin.skinline) {
            return;
        }


        if (
            !groups[
                skin.skinline
            ]
        ) {

            groups[
                skin.skinline
            ] = [];

        }


        groups[
            skin.skinline
        ].push(
            skin
        );

    });


    return groups;

}


/* =========================================================
   GET SKINLINE DATA
========================================================= */

function getSkinlineInfo(
    name
) {

    return (
        skinlines[name] || {
            name:
                name,

            subtitle:
                "Skin Collection",

            description:
                `Explore the ${name} skin collection.`,

            banner:
                null
        }
    );

}


/* =========================================================
   FILTER SKINS
========================================================= */

function getFilteredSkins() {

    const query =
        currentSearch
            .toLowerCase()
            .trim();


    if (!query) {

        return allSkins;

    }


    return allSkins.filter(skin => {

        const info =
            skin.skinline
                ? getSkinlineInfo(
                    skin.skinline
                )
                : null;


        const searchableText = [

            skin.name,

            skin.heroName,

            skin.heroTitle,

            skin.heroRole,

            skin.skinline,

            info?.subtitle,

            info?.description,

            skin.rarity,

            skin.release

        ]

            .filter(Boolean)

            .join(" ")

            .toLowerCase();


        return searchableText.includes(
            query
        );

    });

}


/* =========================================================
   MAIN RENDER
========================================================= */

function renderArchive() {

    const filteredSkins =
        getFilteredSkins();


    const skinlineSkins =
        filteredSkins.filter(
            skin =>
                skin.skinline
        );


    const standaloneSkins =
        filteredSkins.filter(
            skin =>
                !skin.skinline
        );


    renderSkinlines(
        skinlineSkins
    );


    renderStandaloneSkins(
        standaloneSkins
    );


    /* -----------------------------------------------------
       FILTER VISIBILITY
    ----------------------------------------------------- */

    if (
        currentFilter ===
        "skinlines"
    ) {

        skinlinesSection.style.display =
            "";

        standaloneSection.style.display =
            "none";

    }


    else if (
        currentFilter ===
        "standalone"
    ) {

        skinlinesSection.style.display =
            "none";

        standaloneSection.style.display =
            "";

    }


    else {

        skinlinesSection.style.display =
            "";

        standaloneSection.style.display =
            "";

    }


    /* -----------------------------------------------------
       NO RESULTS
    ----------------------------------------------------- */

    let visibleResults =
        0;


    if (
        currentFilter ===
        "skinlines"
    ) {

        visibleResults =
            skinlineSkins.length;

    }


    else if (
        currentFilter ===
        "standalone"
    ) {

        visibleResults =
            standaloneSkins.length;

    }


    else {

        visibleResults =
            filteredSkins.length;

    }


    noSkinResults.style.display =
        visibleResults
            ? "none"
            : "flex";

}


/* =========================================================
   RENDER SKINLINES
========================================================= */

function renderSkinlines(
    skins
) {

    skinlinesGrid.innerHTML =
        "";


    const groups =
        groupSkinlines(
            skins
        );


    const names =
        Object.keys(
            groups
        );


    skinlineCount.textContent =
        `${names.length} COLLECTION${
            names.length === 1
                ? ""
                : "S"
        }`;


    if (!names.length) {

        skinlinesGrid.innerHTML = `

            <div class="archiveEmpty">

                No matching skinlines.

            </div>

        `;

        return;

    }


    names.forEach(name => {

        const collection =
            groups[name];


        const info =
            getSkinlineInfo(
                name
            );


        const primarySkin =
            collection[0];


        const banner =
            info.banner ||
            primarySkin.splash ||
            primarySkin.thumbnail;


        const heroNames =
            collection

                .map(
                    skin =>
                        skin.heroName
                )

                .join(" • ");


        const card =
            document.createElement(
                "article"
            );


        card.className =
            "skinlineCard";


        card.innerHTML = `

            <div class="skinlineArt">

                ${
                    banner

                    ? `

                        <img
                            src="${banner}"
                            alt="${info.name || name}"
                        >

                    `

                    : `

                        <div class="skinlineFallback">

                            ${info.name || name}

                        </div>

                    `
                }


                <div class="skinlineOverlay">
                </div>


                <div class="skinlineCountBadge">

                    ${collection.length}

                    SKIN${
                        collection.length === 1
                            ? ""
                            : "S"
                    }

                </div>

            </div>


            <div class="skinlineInfo">

                <div class="skinlineSubtitle">

                    ${
                        info.subtitle ||
                        "Skin Collection"
                    }

                </div>


                <h3>

                    ${
                        info.name ||
                        name
                    }

                </h3>


                <p>

                    ${
                        info.description ||
                        `Explore the ${name} collection.`
                    }

                </p>


                <div class="skinlineHeroes">

                    ${heroNames}

                </div>


                <button
                    class="viewSkinline"
                    type="button"
                >

                    Explore Collection

                    <span>
                        →
                    </span>

                </button>

            </div>

        `;


        const image =
            card.querySelector(
                ".skinlineArt img"
            );


        if (image) {

            image.addEventListener(
                "error",
                () => {

                    const art =
                        card.querySelector(
                            ".skinlineArt"
                        );


                    art.innerHTML = `

                        <div class="skinlineFallback">

                            ${info.name || name}

                        </div>


                        <div class="skinlineOverlay">
                        </div>


                        <div class="skinlineCountBadge">

                            ${collection.length}

                            SKIN${
                                collection.length === 1
                                    ? ""
                                    : "S"
                            }

                        </div>

                    `;

                }
            );

        }


        card.addEventListener(
            "click",
            () => {

                openSkinline(
                    name,
                    collection
                );

            }
        );


        skinlinesGrid.appendChild(
            card
        );

    });

}


/* =========================================================
   RENDER STANDALONE SKINS
========================================================= */

function renderStandaloneSkins(
    skins
) {

    standaloneGrid.innerHTML =
        "";


    standaloneCount.textContent =
        `${skins.length} SKIN${
            skins.length === 1
                ? ""
                : "S"
        }`;


    if (!skins.length) {

        standaloneGrid.innerHTML = `

            <div class="archiveEmpty">

                No matching standalone skins.

            </div>

        `;

        return;

    }


    skins.forEach(skin => {

        standaloneGrid.appendChild(

            createSkinCard(
                skin
            )

        );

    });

}


/* =========================================================
   CREATE SKIN CARD
========================================================= */

function createSkinCard(
    skin
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "archiveSkinCard";


    const image =
        skin.thumbnail ||
        skin.splash;


    card.innerHTML = `

        <div class="archiveSkinArt">

            ${
                image

                ? `

                    <img
                        src="${image}"
                        alt="${skin.heroName} — ${skin.name}"
                    >

                `

                : `

                    <div class="skinFallback">

                        ${
                            skin.name
                                ?.charAt(0) ||
                            "?"
                        }

                    </div>

                `
            }


            <div class="skinCardOverlay">
            </div>


            <div class="skinRarityBadge">

                ${
                    skin.rarity ||
                    "Skin"
                }

            </div>

        </div>


        <div class="archiveSkinInfo">

            <div class="skinHeroName">

                ${skin.heroName}

            </div>


            <h3>

                ${skin.name}

            </h3>


            ${
                skin.skinline

                ? `

                    <div class="skinCollectionName">

                        ${skin.skinline}

                    </div>

                `

                : ""
            }

        </div>

    `;


    const img =
        card.querySelector(
            "img"
        );


    if (img) {

        img.addEventListener(
            "error",
            () => {

                const art =
                    card.querySelector(
                        ".archiveSkinArt"
                    );


                art.innerHTML = `

                    <div class="skinFallback">

                        ${
                            skin.name
                                ?.charAt(0) ||
                            "?"
                        }

                    </div>


                    <div class="skinCardOverlay">
                    </div>


                    <div class="skinRarityBadge">

                        ${
                            skin.rarity ||
                            "Skin"
                        }

                    </div>

                `;

            }
        );

    }


    card.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            openSkinPreview(
                skin
            );

        }
    );


    return card;

}


/* =========================================================
   OPEN SKINLINE
========================================================= */

function openSkinline(
    name,
    skins
) {

    const info =
        getSkinlineInfo(
            name
        );


    skinlineModalTitle.textContent =
        info.name ||
        name;


    skinlineModalEyebrow.textContent =
        info.subtitle ||
        "Skin Collection";


    skinlineModalDescription.textContent =
        info.description ||
        `Explore every skin currently available in the ${name} collection.`;


    skinlineSkinGrid.innerHTML =
        "";


    skins.forEach(skin => {

        skinlineSkinGrid.appendChild(

            createSkinCard(
                skin
            )

        );

    });


    /* -----------------------------------------------------
       BANNER
    ----------------------------------------------------- */

    const banner =
        info.banner ||
        skins[0]?.splash ||
        skins[0]?.thumbnail;


    skinlineHeroBanner.innerHTML =
        "";


    if (banner) {

        const image =
            document.createElement(
                "img"
            );


        image.src =
            banner;


        image.alt =
            info.name ||
            name;


        image.addEventListener(
            "error",
            () => {

                skinlineHeroBanner.innerHTML = `

                    <div class="skinlineFallback">

                        ${info.name || name}

                    </div>

                `;

            }
        );


        skinlineHeroBanner.appendChild(
            image
        );

    }


    else {

        skinlineHeroBanner.innerHTML = `

            <div class="skinlineFallback">

                ${info.name || name}

            </div>

        `;

    }


    skinlineModal.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE SKINLINE
========================================================= */

function closeSkinline() {

    skinlineModal.classList.remove(
        "open"
    );


    if (
        !skinPreviewModal.classList.contains(
            "open"
        )
    ) {

        document.body.style.overflow =
            "";

    }

}


/* =========================================================
   OPEN SKIN PREVIEW
========================================================= */

function openSkinPreview(
    skin
) {

    const info =
        skin.skinline
            ? getSkinlineInfo(
                skin.skinline
            )
            : null;


    skinPreviewName.textContent =
        skin.name;


    skinPreviewHero.textContent =
        skin.heroName;


    skinPreviewRarity.textContent =
        skin.rarity ||
        "Skin";


    skinPreviewDescription.textContent =
        skin.description ||
        "";


    /* -----------------------------------------------------
       SKINLINE LABEL
    ----------------------------------------------------- */

    if (skin.skinline) {

        skinPreviewSkinline.textContent =
            info?.name ||
            skin.skinline;

    }


    else {

        skinPreviewSkinline.textContent =
            "Standalone Skin";

    }


    /* -----------------------------------------------------
       META
    ----------------------------------------------------- */

    skinPreviewMeta.innerHTML =
        "";


    if (skin.release) {

        skinPreviewMeta.innerHTML += `

            <div class="previewMetaItem">

                <span>
                    Release
                </span>

                <strong>
                    ${skin.release}
                </strong>

            </div>

        `;

    }


    if (skin.rarity) {

        skinPreviewMeta.innerHTML += `

            <div class="previewMetaItem">

                <span>
                    Rarity
                </span>

                <strong>
                    ${skin.rarity}
                </strong>

            </div>

        `;

    }


    if (skin.skinline) {

        skinPreviewMeta.innerHTML += `

            <div class="previewMetaItem">

                <span>
                    Collection
                </span>

                <strong>

                    ${
                        info?.name ||
                        skin.skinline
                    }

                </strong>

            </div>

        `;

    }


    /* -----------------------------------------------------
       ART
    ----------------------------------------------------- */

    const source =
        skin.splash ||
        skin.thumbnail;


    skinPreviewImage.style.display =
        "none";


    skinPreviewFallback.style.display =
        "none";


    skinPreviewImage.onerror =
        null;


    if (source) {

        skinPreviewImage.src =
            source;


        skinPreviewImage.alt =
            `${skin.heroName} — ${skin.name}`;


        skinPreviewImage.style.display =
            "block";


        skinPreviewImage.onerror =
            () => {

                skinPreviewImage.style.display =
                    "none";


                skinPreviewFallback.style.display =
                    "flex";

            };

    }


    else {

        skinPreviewFallback.style.display =
            "flex";

    }


    skinPreviewModal.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE SKIN PREVIEW
========================================================= */

function closeSkinPreview() {

    skinPreviewModal.classList.remove(
        "open"
    );


    skinPreviewImage.src =
        "";


    if (
        !skinlineModal.classList.contains(
            "open"
        )
    ) {

        document.body.style.overflow =
            "";

    }

}


/* =========================================================
   SEARCH
========================================================= */

skinSearch.addEventListener(
    "input",
    () => {

        currentSearch =
            skinSearch.value;


        renderArchive();

    }
);


/* =========================================================
   FILTERS
========================================================= */

skinFilters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            skinFilters.forEach(
                other => {

                    other.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            currentFilter =
                button.dataset.filter;


            renderArchive();

        }
    );

});


/* =========================================================
   SKINLINE MODAL EVENTS
========================================================= */

skinlineModalClose.addEventListener(
    "click",
    closeSkinline
);


skinlineModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            skinlineModal
        ) {

            closeSkinline();

        }

    }
);


/* =========================================================
   SKIN PREVIEW EVENTS
========================================================= */

skinPreviewClose.addEventListener(
    "click",
    closeSkinPreview
);


skinPreviewModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            skinPreviewModal
        ) {

            closeSkinPreview();

        }

    }
);


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
            skinPreviewModal.classList.contains(
                "open"
            )
        ) {

            closeSkinPreview();

            return;

        }


        if (
            skinlineModal.classList.contains(
                "open"
            )
        ) {

            closeSkinline();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initializeSkinsPage() {

    allSkins =
        buildSkinDatabase();


    console.log(
        "Sundering heroes loaded:",
        heroes.length
    );


    console.log(
        "Sundering skins loaded:",
        allSkins.length
    );


    console.log(
        "Sundering skinlines:",
        skinlines
    );


    renderArchive();

}


initializeSkinsPage();
