// =========================================================
// EKT AI — FRONTEND APPLICATION
// =========================================================


// =========================================================
// 1. API CONFIGURATION
// =========================================================

const API_CONFIG = {

    n8nWebhook:
        "https://booth-sandbar-amusing.ngrok-free.dev/webhook/assistant",

    timeout:
        15000,

    /*
        Пока оставляем true.

        Если n8n временно недоступен,
        frontend сможет показать mock-товар.

        Перед финальной защитой можно поставить false,
        когда n8n работает стабильно.
    */

    enableMockFallback:
        true
};


// =========================================================
// 2. TRANSLATIONS
// =========================================================

const I18N = {

    ru: {

        personalAccount:
            "Личный кабинет",

        buyers:
            "Покупателям",

        request:
            "Оставить заявку",

        catalog:
            "Каталог",

        siteSearch:
            "Поиск",

        compare:
            "Сравнить",

        favorites:
            "Избранное",

        cart:
            "Корзина",

        yourCity:
            "Ваш город:",

        selectCity:
            "Неправильно определили? Выберите из списка:",

        heroTitle:
            "Электротехническая продукция",

        heroText:
            "Найдите необходимое оборудование в каталоге или воспользуйтесь AI-консультантом EKT.",

        askAi:
            "Спросить EKT AI",

        productCatalog:
            "Каталог продукции",

        catLowVoltage:
            "Низковольтная аппаратура",

        catLighting:
            "Светильники / Лампы",

        catSockets:
            "Розетки / Выключатели / Коробки",

        catAutomation:
            "Автоматизация",

        catPanels:
            "Шкафы / Щиты",

        catTools:
            "Инструмент / КИП",

        catSecurity:
            "Видеонаблюдение / СКУД",

        catCable:
            "Кабель / Провод",

        aiConsultant:
            "AI-консультант",

        welcome:
            "Здравствуйте! Я AI-консультант EKT. Помогу подобрать товар по названию, артикулу или характеристикам, проверить наличие, найти аналог и ответить на вопросы о покупке.",

        quickFind:
            "🔎 Подобрать товар",

        quickStock:
            "📦 Проверить наличие",

        quickAnalog:
            "⇄ Найти аналог",

        quickDelivery:
            "🚚 Доставка и оплата",

        chatPlaceholder:
            "Спросите о товаре...",

        catalogDisclaimer:
            "Цена и наличие проверяются по каталогу EKT",

        confirmTitle:
            "Добавить в корзину?",

        cancel:
            "Отмена",

        confirm:
            "Да, добавить",

        article:
            "Артикул",

        price:
            "Цена",

        available:
            "В наличии",

        outOfStock:
            "Нет в наличии",

        details:
            "Подробнее",

        addToCart:
            "В корзину",

        stores:
            "Наличие по складам",

        total:
            "Итого",

        added:
            "добавлено в корзину",

        goToCart:
            "Перейти в корзину",

        pcs:
            "шт.",

        analog:
            "Подходящий аналог",

        whyAnalog:
            "Почему предложен этот аналог",

        differences:
            "Отличия",

        purchaseInfo:
            "Условия покупки",

        fileAttached:
            "Файл прикреплён",

        filePending:
            "Файл будет обработан AI после подключения файлового workflow.",

        stockLimit:
            "Количество не может превышать доступный остаток.",

        emptyResponse:
            "AI вернул пустой ответ.",

        unsupportedResponse:
            "Получен ответ неизвестного формата.",

        connectionError:
            "Не удалось получить ответ AI. Проверьте соединение с n8n.",

        fallbackNotice:
            "n8n временно недоступен. Показываю демонстрационный товар.",

        findPrompt:
            "Опишите нужный товар: название, артикул, бренд или технические характеристики.",

        stockPrompt:
            "Укажите название или артикул товара — я проверю наличие в выбранном городе.",

        analogPrompt:
            "Укажите товар — я подберу технически близкий аналог и объясню отличия.",

        deliveryPrompt:
            "Расскажите, что именно вас интересует: доставка, оплата или минимальная партия.",

        cityStock:
            "В выбранном городе доступно",

        cityNoStock:
            "В выбранном городе товар сейчас отсутствует."
    },


    kz: {

        personalAccount:
            "Жеке кабинет",

        buyers:
            "Сатып алушылар үшін",

        request:
            "Өтінім жіберу",

        catalog:
            "Каталог",

        siteSearch:
            "Іздеу",

        compare:
            "Салыстыру",

        favorites:
            "Таңдаулылар",

        cart:
            "Себет",

        yourCity:
            "Сіздің қалаңыз:",

        selectCity:
            "Қала дұрыс анықталмады ма? Тізімнен таңдаңыз:",

        heroTitle:
            "Электротехникалық өнімдер",

        heroText:
            "Қажетті жабдықты каталогтан табыңыз немесе EKT AI-кеңесшісін пайдаланыңыз.",

        askAi:
            "EKT AI-дан сұрау",

        productCatalog:
            "Өнімдер каталогы",

        catLowVoltage:
            "Төмен вольтты жабдық",

        catLighting:
            "Шамдар / Жарықтандыру",

        catSockets:
            "Розеткалар / Ажыратқыштар / Қораптар",

        catAutomation:
            "Автоматтандыру",

        catPanels:
            "Шкафтар / Қалқандар",

        catTools:
            "Құрал / БӨА",

        catSecurity:
            "Бейнебақылау / СКУД",

        catCable:
            "Кабель / Сым",

        aiConsultant:
            "AI-кеңесші",

        welcome:
            "Сәлеметсіз бе! Мен EKT AI-кеңесшісімін. Тауарды атауы, артикулы немесе сипаттамалары бойынша табуға, қоймадағы бар-жоғын тексеруге, баламасын таңдауға және сатып алу шарттары бойынша жауап беруге көмектесемін.",

        quickFind:
            "🔎 Тауар таңдау",

        quickStock:
            "📦 Бар-жоғын тексеру",

        quickAnalog:
            "⇄ Баламасын табу",

        quickDelivery:
            "🚚 Жеткізу және төлем",

        chatPlaceholder:
            "Тауар туралы сұраңыз...",

        catalogDisclaimer:
            "Баға мен тауардың бар-жоғы EKT каталогы бойынша тексеріледі",

        confirmTitle:
            "Себетке қосу керек пе?",

        cancel:
            "Бас тарту",

        confirm:
            "Иә, қосу",

        article:
            "Артикул",

        price:
            "Бағасы",

        available:
            "Қоймада бар",

        outOfStock:
            "Қоймада жоқ",

        details:
            "Толығырақ",

        addToCart:
            "Себетке",

        stores:
            "Қоймалардағы қалдық",

        total:
            "Барлығы",

        added:
            "себетке қосылды",

        goToCart:
            "Себетке өту",

        pcs:
            "дана",

        analog:
            "Сәйкес балама",

        whyAnalog:
            "Бұл балама неге ұсынылды",

        differences:
            "Айырмашылықтар",

        purchaseInfo:
            "Сатып алу шарттары",

        fileAttached:
            "Файл тіркелді",

        filePending:
            "Файл AI файлдық workflow қосылғаннан кейін өңделеді.",

        stockLimit:
            "Саны қолжетімді қалдықтан аспауы керек.",

        emptyResponse:
            "AI бос жауап қайтарды.",

        unsupportedResponse:
            "Белгісіз форматтағы жауап алынды.",

        connectionError:
            "AI-дан жауап алу мүмкін болмады. n8n қосылымын тексеріңіз.",

        fallbackNotice:
            "n8n уақытша қолжетімсіз. Демонстрациялық тауарды көрсетемін.",

        findPrompt:
            "Қажетті тауарды сипаттаңыз: атауы, артикулы, бренді немесе техникалық сипаттамалары.",

        stockPrompt:
            "Тауардың атауын немесе артикулын көрсетіңіз — таңдалған қаладағы қалдықты тексеремін.",

        analogPrompt:
            "Тауарды көрсетіңіз — техникалық жағынан жақын баламаны ұсынып, айырмашылықтарын түсіндіремін.",

        deliveryPrompt:
            "Нені білгіңіз келетінін көрсетіңіз: жеткізу, төлем немесе минималды партия.",

        cityStock:
            "Таңдалған қалада қолжетімді",

        cityNoStock:
            "Таңдалған қалада тауар қазір жоқ."
    }

};


// =========================================================
// 3. STATE
// =========================================================

let currentLanguage =
    localStorage.getItem("ekt_language") || "ru";


let currentCity =
    localStorage.getItem("ekt_city") || "Алматы";


let cart =
    JSON.parse(
        localStorage.getItem("ekt_cart") || "[]"
    );


let sessionId =
    localStorage.getItem("ekt_session_id");


if (!sessionId) {

    if (
        typeof crypto !== "undefined"
        &&
        typeof crypto.randomUUID === "function"
    ) {

        sessionId =
            "ekt-" + crypto.randomUUID();

    } else {

        sessionId =
            "ekt-"
            +
            Date.now()
            +
            "-"
            +
            Math.random()
                .toString(16)
                .slice(2);

    }


    localStorage.setItem(
        "ekt_session_id",
        sessionId
    );
}


let selectedProduct = null;

let selectedQuantity = 1;


// =========================================================
// 4. DOM HELPERS
// =========================================================

const $ =
    (selector) =>
        document.querySelector(selector);


const $$ =
    (selector) =>
        document.querySelectorAll(selector);


// =========================================================
// 5. GENERAL HELPERS
// =========================================================

function t(key) {

    return (
        I18N[currentLanguage]?.[key]
        ??
        I18N.ru[key]
        ??
        key
    );
}


function escapeHtml(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function formatPrice(value) {

    return new Intl.NumberFormat(
        currentLanguage === "kz"
            ? "kk-KZ"
            : "ru-RU"
    ).format(
        Number(value || 0)
    );
}


function scrollChatToBottom() {

    const chat =
        $("#chatMessages");


    if (!chat) {
        return;
    }


    chat.scrollTo({
        top:
            chat.scrollHeight,

        behavior:
            "smooth"
    });
}


function sleep(milliseconds) {

    return new Promise(
        (resolve) =>
            setTimeout(
                resolve,
                milliseconds
            )
    );
}


// =========================================================
// 6. MOCK PRODUCT
// Fallback only.
// Later it can be removed after n8n is stable.
// =========================================================

const mockProduct = {

    id:
        515291,

    name:
        "027228 АВ DRX250 MT 3ф 160А 18kA Legrand",

    article:
        "200300285_",

    description:
        "Автоматический выключатель DRX250 MT 3P 160А 18kA Legrand.",

    price:
        64920,

    quantity:
        23,

    image:
        "https://ekt.kz/upload/iblock/1ca/8mdfx6517jvalt5da1n9865q2fzpj6jp/027228_av_drx250_mt_3f_160a_18ka_legrand_1.jpg",

    url:
        "https://ekt.kz/",

    certificate:
        null,

    properties: {

        brand:
            "Legrand",

        poles:
            "3P",

        current:
            "160A",

        breakingCapacity:
            "18kA",

        voltage:
            "400V"
    },

    stores: [

        {
            name:
                "Алматы",

            quantity:
                5
        },

        {
            name:
                "Астана",

            quantity:
                8
        },

        {
            name:
                "Шымкент",

            quantity:
                3
        },

        {
            name:
                "Тараз",

            quantity:
                2
        },

        {
            name:
                "Атырау",

            quantity:
                3
        },

        {
            name:
                "Караганда",

            quantity:
                2
        },

        {
            name:
                "Актау",

            quantity:
                0
        },

        {
            name:
                "Талдыкорган",

            quantity:
                0
        },

        {
            name:
                "Усть-Каменогорск",

            quantity:
                0
        }

    ]
};


// =========================================================
// 7. LANGUAGE
// =========================================================

function setLanguage(language) {

    if (!I18N[language]) {
        return;
    }


    currentLanguage =
        language;


    localStorage.setItem(
        "ekt_language",
        currentLanguage
    );


    document.documentElement.lang =
        currentLanguage === "kz"
            ? "kk"
            : "ru";


    $$("[data-i18n]")
        .forEach(
            (element) => {

                const key =
                    element.dataset.i18n;


                if (
                    I18N[currentLanguage][key]
                ) {

                    element.textContent =
                        I18N[currentLanguage][key];

                }

            }
        );


    $$("[data-i18n-placeholder]")
        .forEach(
            (element) => {

                const key =
                    element.dataset
                        .i18nPlaceholder;


                if (
                    I18N[currentLanguage][key]
                ) {

                    element.placeholder =
                        I18N[currentLanguage][key];

                }

            }
        );


    $$(".language-button")
        .forEach(
            (button) => {

                button.classList.toggle(
                    "active",
                    button.dataset.lang
                    ===
                    currentLanguage
                );

            }
        );


    const topLanguageButton =
        $("#topLanguageButton");


    if (topLanguageButton) {

        topLanguageButton.textContent =
            currentLanguage === "ru"
                ? "ҚАЗ"
                : "РУС";

    }
}


$$(".language-button")
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    setLanguage(
                        button.dataset.lang
                    );

                }
            );

        }
    );


$("#topLanguageButton")
    ?.addEventListener(
        "click",
        () => {

            setLanguage(
                currentLanguage === "ru"
                    ? "kz"
                    : "ru"
            );

        }
    );


// =========================================================
// 8. AI PANEL
// =========================================================

function openAI() {

    const panel =
        $("#aiPanel");


    if (!panel) {
        return;
    }


    panel.classList.add(
        "open"
    );


    panel.setAttribute(
        "aria-hidden",
        "false"
    );


    $("#aiLauncher")
        ?.classList
        .add("hidden");


    setTimeout(
        () =>
            $("#messageInput")
                ?.focus(),
        100
    );
}


function closeAI() {

    const panel =
        $("#aiPanel");


    if (!panel) {
        return;
    }


    panel.classList.remove(
        "open"
    );


    panel.setAttribute(
        "aria-hidden",
        "true"
    );


    $("#aiLauncher")
        ?.classList
        .remove("hidden");
}


$("#aiLauncher")
    ?.addEventListener(
        "click",
        openAI
    );


$("#heroAiButton")
    ?.addEventListener(
        "click",
        openAI
    );


$("#closeAi")
    ?.addEventListener(
        "click",
        closeAI
    );


// =========================================================
// 9. CITY
// =========================================================

function renderCurrentCity() {

    const current =
        $("#currentCity");


    const modalCurrent =
        $("#cityModalCurrent");


    if (current) {

        current.textContent =
            currentCity;

    }


    if (modalCurrent) {

        modalCurrent.textContent =
            currentCity;

    }
}


$("#citySelector")
    ?.addEventListener(
        "click",
        () => {

            $("#cityOverlay")
                ?.classList
                .remove("hidden");

        }
    );


$("#cityModalClose")
    ?.addEventListener(
        "click",
        () => {

            $("#cityOverlay")
                ?.classList
                .add("hidden");

        }
    );


$("#cityOverlay")
    ?.addEventListener(
        "click",
        (event) => {

            if (
                event.target
                ===
                $("#cityOverlay")
            ) {

                $("#cityOverlay")
                    .classList
                    .add("hidden");

            }

        }
    );


$$(".city-option")
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    currentCity =
                        button.dataset.city;


                    localStorage.setItem(
                        "ekt_city",
                        currentCity
                    );


                    renderCurrentCity();


                    $("#cityOverlay")
                        ?.classList
                        .add("hidden");

                }
            );

        }
    );


// =========================================================
// 10. CHAT MESSAGES
// =========================================================

function addUserMessage(text) {

    const message =
        document.createElement("div");


    message.className =
        "message user-message";


    message.innerHTML = `
        <div class="message-bubble"></div>
    `;


    message
        .querySelector(".message-bubble")
        .textContent =
        text;


    $("#chatMessages")
        ?.appendChild(message);


    scrollChatToBottom();
}


function addAssistantMessage(text) {

    const message =
        document.createElement("div");


    message.className =
        "message assistant-message";


    message.innerHTML = `
        <div class="message-avatar">
            AI
        </div>

        <div class="message-bubble"></div>
    `;


    message
        .querySelector(".message-bubble")
        .textContent =
        text;


    $("#chatMessages")
        ?.appendChild(message);


    scrollChatToBottom();
}


// =========================================================
// 11. TYPING INDICATOR
// =========================================================

function showTyping() {

    removeTyping();


    const typing =
        document.createElement("div");


    typing.id =
        "typingMessage";


    typing.className =
        "message assistant-message typing-message";


    typing.innerHTML = `
        <div class="message-avatar">
            AI
        </div>

        <div class="message-bubble">

            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>

        </div>
    `;


    $("#chatMessages")
        ?.appendChild(typing);


    scrollChatToBottom();
}


function removeTyping() {

    $("#typingMessage")
        ?.remove();
}


// =========================================================
// 12. QUICK ACTIONS
// =========================================================

const QUICK_ACTION_MESSAGES = {

    ru: {

        find:
            "Помоги подобрать товар",

        stock:
            "Проверить наличие товара",

        analog:
            "Помоги найти аналог товара",

        delivery:
            "Расскажи об условиях доставки и оплаты"

    },


    kz: {

        find:
            "Тауар таңдауға көмектес",

        stock:
            "Тауардың бар-жоғын тексер",

        analog:
            "Тауардың баламасын табуға көмектес",

        delivery:
            "Жеткізу және төлем шарттарын айтып бер"

    }

};


$$(".quick-action")
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const action =
                        button.dataset.action;


                    const text =
                        QUICK_ACTION_MESSAGES[
                            currentLanguage
                        ]?.[action];


                    if (!text) {
                        return;
                    }


                    /*
                        Для find/stock/analog сначала
                        просим пользователя уточнить товар.

                        Delivery можно сразу отправлять
                        в n8n, потому что это самостоятельный
                        вопрос.
                    */

                    if (action === "find") {

                        addUserMessage(text);

                        addAssistantMessage(
                            t("findPrompt")
                        );

                        $("#messageInput")
                            ?.focus();

                        return;
                    }


                    if (action === "stock") {

                        addUserMessage(text);

                        addAssistantMessage(
                            t("stockPrompt")
                        );

                        $("#messageInput")
                            ?.focus();

                        return;
                    }


                    if (action === "analog") {

                        addUserMessage(text);

                        addAssistantMessage(
                            t("analogPrompt")
                        );

                        $("#messageInput")
                            ?.focus();

                        return;
                    }


                    if (action === "delivery") {

                        sendMessage(text);

                    }

                }
            );

        }
    );


// =========================================================
// 13. REQUEST TO N8N
// =========================================================

async function requestN8n(message) {

    const controller =
        new AbortController();


    const timeoutId =
        setTimeout(
            () => {

                controller.abort();

            },
            API_CONFIG.timeout
        );


    try {

        const response =
            await fetch(
                API_CONFIG.n8nWebhook,
                {
                    method:
                        "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            session_id:
                                sessionId,

                            message:
                                message,

                            language:
                                currentLanguage,

                            city:
                                currentCity
                        }),

                    signal:
                        controller.signal
                }
            );


        if (!response.ok) {

            throw new Error(
                `n8n HTTP error: ${response.status}`
            );

        }


        /*
            Некоторые workflow могут вернуть
            пустое тело.

            Поэтому сначала читаем как text,
            затем пытаемся разобрать JSON.
        */

        const raw =
            await response.text();


        if (!raw) {

            return {
                type: "error",
                message: t("emptyResponse")
            };

        }


        try {

            return JSON.parse(raw);

        } catch {

            /*
                Если Respond to Webhook пока
                возвращает простой текст,
                frontend тоже сможет его показать.
            */

            return {
                type: "text",
                message: raw
            };

        }

    } finally {

        clearTimeout(
            timeoutId
        );

    }
}


// =========================================================
// 14. SEND MESSAGE
// =========================================================

$("#chatForm")
    ?.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            const input =
                $("#messageInput");


            const message =
                input
                    ?.value
                    .trim();


            if (!message) {
                return;
            }


            await sendMessage(
                message
            );

        }
    );


async function sendMessage(message) {

    addUserMessage(
        message
    );


    const input =
        $("#messageInput");


    if (input) {

        input.value = "";

    }


    showTyping();


    try {

        const data =
            await requestN8n(
                message
            );


        removeTyping();


        handleN8nResponse(
            data
        );

    } catch (error) {

        removeTyping();


        console.error(
            "EKT AI / n8n error:",
            error
        );


        /*
            Пока идёт разработка:
            если n8n выключен, интерфейс
            всё равно можно продемонстрировать.
        */

        if (
            API_CONFIG.enableMockFallback
        ) {

            addAssistantMessage(
                t("fallbackNotice")
            );


            await sleep(250);


            renderProduct(
                mockProduct
            );


            return;
        }


        addAssistantMessage(
            t("connectionError")
        );

    }
}


// =========================================================
// 15. HANDLE N8N RESPONSE
// =========================================================

function handleN8nResponse(responseData) {

    console.log(
        "n8n response:",
        responseData
    );


    if (!responseData) {

        addAssistantMessage(
            t("emptyResponse")
        );

        return;
    }


    /*
        n8n иногда возвращает:

        [
            {...}
        ]

        вместо:

        {...}

        Нормализуем.
    */

    let data =
        Array.isArray(responseData)
            ? responseData[0]
            : responseData;


    /*
        Иногда n8n помещает результат
        внутрь body.
    */

    if (
        data?.body
        &&
        typeof data.body === "object"
    ) {

        data =
            data.body;

    }


    if (!data) {

        addAssistantMessage(
            t("emptyResponse")
        );

        return;
    }


    /*
        Если workflow вернул просто:

        {
            "output": "..."
        }

        или:

        {
            "response": "..."
        }

        поддерживаем и такой формат.
    */

    if (
        !data.message
        &&
        typeof data.output === "string"
    ) {

        data.message =
            data.output;

    }


    if (
        !data.message
        &&
        typeof data.response === "string"
    ) {

        data.message =
            data.response;

    }


    if (data.message) {

        addAssistantMessage(
            data.message
        );

    }


    switch (data.type) {

        // -----------------------------------------
        // TEXT
        // -----------------------------------------

        case "text":

            break;


        // -----------------------------------------
        // PRODUCT
        // -----------------------------------------

        case "product":

            if (data.product) {

                renderProduct(
                    normalizeProduct(
                        data.product
                    )
                );

            }

            break;


        // -----------------------------------------
        // ANALOG
        // -----------------------------------------

        case "analog":

            if (data.product) {

                renderAnalog(
                    normalizeProduct(
                        data.product
                    ),
                    data.match || {}
                );

            }

            break;


        // -----------------------------------------
        // PURCHASE INFORMATION
        // -----------------------------------------

        case "purchase_info":

            renderPurchaseInfo(
                data
            );

            break;


        // -----------------------------------------
        // ERROR
        // -----------------------------------------

        case "error":

            if (!data.message) {

                addAssistantMessage(
                    t("connectionError")
                );

            }

            break;


        // -----------------------------------------
        // UNKNOWN / FIRST TEST
        // -----------------------------------------

        default:

            /*
                Для первого теста n8n может
                вернуть только:

                {
                    "message":
                    "Связь работает"
                }

                Это считается корректным ответом.
            */

            if (!data.message) {

                addAssistantMessage(
                    t("unsupportedResponse")
                );

            }

    }
}


// =========================================================
// 16. NORMALIZE PRODUCT
// =========================================================

function normalizeProduct(product) {

    const rawProperties =
        product.properties || {};


    /*
        Поддерживаем и нормализованный JSON n8n,
        и исходные property names EKT.
    */

    const properties = {

        brand:
            rawProperties.brand
            ??
            rawProperties.TORGOVAYA_MARKA
            ??
            "",

        poles:
            rawProperties.poles
            ??
            rawProperties.KOLICHESTVO_POLYUSOV
            ??
            "",

        current:
            rawProperties.current
            ??
            rawProperties.NOMINALNYY_TOK
            ??
            "",

        breakingCapacity:
            rawProperties.breakingCapacity
            ??
            rawProperties.NOMINALNAYA_OTKLYUCHAYUSHCHAYA_SPOSOBNOST
            ??
            "",

        voltage:
            rawProperties.voltage
            ??
            rawProperties.NOMINALNOE_NAPRYAZHENIE
            ??
            ""

    };


    return {

        id:
            product.id,

        name:
            product.name || "",

        article:
            product.article || "",

        description:
            product.description || "",

        price:
            Number(
                product.price || 0
            ),

        quantity:
            Number(
                product.quantity || 0
            ),

        image:
            product.image || "",

        url:
            product.url || "#",

        certificate:
            product.certificate || null,

        stores:
            Array.isArray(
                product.stores
            )
                ? product.stores
                : [],

        properties:
            properties

    };
}


// =========================================================
// 17. STOCK FOR SELECTED CITY
// =========================================================

function normalizeCityName(name) {

    const value =
        String(name || "")
            .trim()
            .toLowerCase();


    /*
        В присланном EKT JSON склад
        Астаны назывался "Нур-Султан".
    */

    if (
        value === "нур-султан"
        ||
        value.includes("нур-султан")
    ) {

        return "астана";

    }


    /*
        Два склада Шымкента:
        Шымкент (ул.Байдукова)
        Шымкент (Тассай)
    */

    if (
        value.startsWith("шымкент")
    ) {

        return "шымкент";

    }


    return value;
}


function getStockForCity(
    product,
    city
) {

    if (
        !Array.isArray(
            product.stores
        )
    ) {

        return 0;

    }


    const normalizedCity =
        normalizeCityName(city);


    return product.stores
        .filter(
            (store) =>

                normalizeCityName(
                    store.name
                )
                ===
                normalizedCity
        )
        .reduce(
            (sum, store) =>

                sum
                +
                Number(
                    store.quantity || 0
                ),

            0
        );
}


// =========================================================
// 18. PRODUCT CARD
// =========================================================

function renderProduct(product) {

    const normalized =
        normalizeProduct(
            product
        );


    const card =
        document.createElement("div");


    card.className =
        "product-card";


    const cityStock =
        getStockForCity(
            normalized,
            currentCity
        );


    const propertyValues =
        Object.values(
            normalized.properties
        )
            .filter(
                (value) =>
                    Boolean(value)
            );


    const propertiesHtml =
        propertyValues
            .map(
                (value) => `

                    <span class="property">

                        ${escapeHtml(value)}

                    </span>

                `
            )
            .join("");


    const storesHtml =
        normalized.stores
            .filter(
                (store) =>
                    Number(
                        store.quantity || 0
                    ) > 0
            )
            .map(
                (store) => `

                    <div class="store-item">

                        <span>
                            ${escapeHtml(
                                store.name
                            )}
                        </span>


                        <span class="store-quantity">

                            ${Number(
                                store.quantity || 0
                            )}

                            ${t("pcs")}

                        </span>

                    </div>

                `
            )
            .join("");


    const stockClass =
        normalized.quantity > 0
            ? "stock"
            : "stock out-of-stock";


    const stockText =
        normalized.quantity > 0
            ? `${t("available")}: ${normalized.quantity} ${t("pcs")}`
            : t("outOfStock");


    const cityStockText =
        cityStock > 0

            ? `
                ${t("cityStock")}:
                <strong>
                    ${cityStock} ${t("pcs")}
                </strong>
              `

            : t("cityNoStock");


    const imageHtml =
        normalized.image

            ? `
                <img
                    class="product-image"
                    src="${escapeHtml(
                        normalized.image
                    )}"
                    alt="${escapeHtml(
                        normalized.name
                    )}"
                >
              `

            : `
                <div
                    style="
                        font-size: 28px;
                        color: #9ba5ae;
                    "
                >
                    ⚡
                </div>
              `;


    card.innerHTML = `

        <div class="product-content">

            <div class="product-image-wrapper">

                ${imageHtml}

            </div>


            <div class="product-info">

                <div class="product-brand">

                    ${escapeHtml(
                        normalized.properties.brand
                    )}

                </div>


                <h3 class="product-title">

                    ${escapeHtml(
                        normalized.name
                    )}

                </h3>


                <div class="product-article">

                    ${t("article")}:

                    ${escapeHtml(
                        normalized.article
                    )}

                </div>


                <div class="product-price">

                    ${formatPrice(
                        normalized.price
                    )} ₸

                </div>


                <div class="${stockClass}">

                    ${stockText}

                </div>


                <div
                    style="
                        margin-top: 6px;
                        font-size: 9px;
                        color: #65717d;
                    "
                >

                    📍 ${escapeHtml(
                        currentCity
                    )}:

                    ${cityStockText}

                </div>


                <div class="product-properties">

                    ${propertiesHtml}

                </div>


                ${
                    storesHtml

                        ? `
                            <div class="store-list">

                                <div class="store-list-title">

                                    ${t("stores")}

                                </div>

                                ${storesHtml}

                            </div>
                          `

                        : ""
                }

            </div>

        </div>


        <div class="product-actions">

            <a
                class="details-button"
                href="${escapeHtml(
                    normalized.url
                )}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ${t("details")}
            </a>


            <button
                class="primary-button add-to-cart-button"
                type="button"

                ${
                    normalized.quantity <= 0
                        ? "disabled"
                        : ""
                }
            >
                ${t("addToCart")}
            </button>

        </div>
    `;


    card
        .querySelector(
            ".add-to-cart-button"
        )
        ?.addEventListener(
            "click",
            () => {

                openConfirmation(
                    normalized
                );

            }
        );


    $("#chatMessages")
        ?.appendChild(card);


    scrollChatToBottom();
}


// =========================================================
// 19. ANALOG CARD
// =========================================================

function renderAnalog(
    product,
    match = {}
) {

    const normalized =
        normalizeProduct(
            product
        );


    const card =
        document.createElement("div");


    card.className =
        "analog-card";


    const score =
        Number(
            match.score || 0
        );


    const reasons =
        Array.isArray(
            match.reasons
        )
            ? match.reasons
            : [];


    const differences =
        Array.isArray(
            match.differences
        )
            ? match.differences
            : [];


    const reasonsHtml =
        reasons
            .map(
                (reason) => `

                    <li class="match">

                        ${escapeHtml(reason)}

                    </li>

                `
            )
            .join("");


    const differencesHtml =
        differences
            .map(
                (difference) => `

                    <li class="difference">

                        ${escapeHtml(
                            difference
                        )}

                    </li>

                `
            )
            .join("");


    card.innerHTML = `

        <div class="analog-top">

            <span class="analog-label">

                ${t("analog")}

            </span>


            ${
                score > 0

                    ? `
                        <span class="match-score">

                            ${score}% match

                        </span>
                      `

                    : ""
            }

        </div>


        <div class="product-content">

            <div class="product -image-wrapper">

                ${
                    normalized.image
                        ? `
                            <img
                                class="product-image"
                                src="${escapeHtml(normalized.image)}"
                                alt="${escapeHtml(normalized.name)}"
                            >
                          `
                        : `
                            <div
                                style="
                                    font-size: 28px;
                                    color: #9ba5ae;
                                "
                            >
                                ⚡
                            </div>
                          `
                }

            </div>


            <div class="product-info">

                <div class="product-brand">

                    ${escapeHtml(
                        normalized.properties.brand
                    )}

                </div>


                <h3 class="product-title">

                    ${escapeHtml(
                        normalized.name
                    )}

                </h3>


                <div class="product-article">

                    ${t("article")}:

                    ${escapeHtml(
                        normalized.article
                    )}

                </div>


                <div class="product-price">

                    ${formatPrice(
                        normalized.price
                    )} ₸

                </div>


                <div
                    class="${
                        normalized.quantity > 0
                            ? "stock"
                            : "stock out-of-stock"
                    }"
                >

                    ${
                        normalized.quantity > 0

                            ? `
                                ${t("available")}:
                                ${normalized.quantity}
                                ${t("pcs")}
                              `

                            : t("outOfStock")
                    }

                </div>

            </div>

        </div>


        ${
            reasonsHtml || differencesHtml

                ? `
                    <div class="analog-reason">

                        <strong>
                            ${t("whyAnalog")}
                        </strong>


                        <ul>

                            ${reasonsHtml}

                            ${differencesHtml}

                        </ul>

                    </div>
                  `

                : ""
        }


        <div class="product-actions">

            <a
                class="details-button"
                href="${escapeHtml(
                    normalized.url
                )}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ${t("details")}
            </a>


            <button
                class="primary-button analog-add-to-cart"
                type="button"

                ${
                    normalized.quantity <= 0
                        ? "disabled"
                        : ""
                }
            >
                ${t("addToCart")}
            </button>

        </div>
    `;


    card
        .querySelector(
            ".analog-add-to-cart"
        )
        ?.addEventListener(
            "click",
            () => {

                openConfirmation(
                    normalized
                );

            }
        );


    $("#chatMessages")
        ?.appendChild(card);


    scrollChatToBottom();
}


// =========================================================
// 20. PURCHASE INFORMATION
// =========================================================

function renderPurchaseInfo(data) {

    const card =
        document.createElement("div");


    card.className =
        "purchase-info";


    const items = [];


    /*
        Поддерживаем несколько возможных
        форматов ответа n8n.
    */

    if (data.delivery) {

        items.push({
            icon: "🚚",
            text: data.delivery
        });

    }


    if (data.payment) {

        items.push({
            icon: "💳",
            text: data.payment
        });

    }


    if (data.minimum_order) {

        items.push({
            icon: "📦",
            text: data.minimum_order
        });

    }


    if (
        Array.isArray(
            data.items
        )
    ) {

        data.items.forEach(
            (item) => {

                if (
                    typeof item === "string"
                ) {

                    items.push({
                        icon: "•",
                        text: item
                    });

                    return;
                }


                if (
                    item
                    &&
                    typeof item === "object"
                    &&
                    item.text
                ) {

                    items.push({
                        icon:
                            item.icon || "•",

                        text:
                            item.text
                    });

                }

            }
        );

    }


    /*
        Если workflow вернул только message,
        отдельную пустую карточку не показываем.
    */

    if (items.length === 0) {
        return;
    }


    card.innerHTML = `

        <div class="purchase-info-title">

            ${t("purchaseInfo")}

        </div>


        ${items
            .map(
                (item) => `

                    <div class="purchase-info-item">

                        <span class="purchase-info-icon">

                            ${escapeHtml(
                                item.icon
                            )}

                        </span>


                        <span>

                            ${escapeHtml(
                                item.text
                            )}

                        </span>

                    </div>

                `
            )
            .join("")}
    `;


    $("#chatMessages")
        ?.appendChild(card);


    scrollChatToBottom();
}


// =========================================================
// 21. OPEN CART CONFIRMATION
// =========================================================

function openConfirmation(product) {

    selectedProduct =
        normalizeProduct(
            product
        );


    selectedQuantity =
        1;


    renderConfirmation();


    $("#confirmationModal")
        ?.classList
        .remove("hidden");
}


// =========================================================
// 22. CLOSE CART CONFIRMATION
// =========================================================

function closeConfirmation() {

    $("#confirmationModal")
        ?.classList
        .add("hidden");


    selectedProduct =
        null;


    selectedQuantity =
        1;
}


// =========================================================
// 23. RENDER CONFIRMATION
// =========================================================

function renderConfirmation() {

    if (!selectedProduct) {
        return;
    }


    const total =
        selectedProduct.price
        *
        selectedQuantity;


    const content =
        $("#confirmationContent");


    if (!content) {
        return;
    }


    content.innerHTML = `

        <div class="modal-product">

            <div class="modal-product-name">

                ${escapeHtml(
                    selectedProduct.name
                )}

            </div>


            <div class="modal-product-row">

                <span>
                    ${t("article")}
                </span>

                <strong>

                    ${escapeHtml(
                        selectedProduct.article
                    )}

                </strong>

            </div>


            <div class="modal-product-row">

                <span>
                    ${t("price")}
                </span>

                <strong>

                    ${formatPrice(
                        selectedProduct.price
                    )} ₸

                </strong>

            </div>


            <div class="modal-product-row">

                <span>
                    ${t("available")}
                </span>

                <strong>

                    ${selectedProduct.quantity}
                    ${t("pcs")}

                </strong>

            </div>


            <div class="quantity-control">

                <button
                    class="quantity-button"
                    id="decreaseQuantity"
                    type="button"
                >
                    −
                </button>


                <span class="quantity-value">

                    ${selectedQuantity}

                </span>


                <button
                    class="quantity-button"
                    id="increaseQuantity"
                    type="button"
                >
                    +
                </button>

            </div>


            <div class="modal-product-row">

                <span>
                    ${t("total")}
                </span>

                <strong>

                    ${formatPrice(total)} ₸

                </strong>

            </div>

        </div>
    `;


    $("#decreaseQuantity")
        ?.addEventListener(
            "click",
            decreaseQuantity
        );


    $("#increaseQuantity")
        ?.addEventListener(
            "click",
            increaseQuantity
        );
}


// =========================================================
// 24. QUANTITY
// =========================================================

function decreaseQuantity() {

    if (
        selectedQuantity <= 1
    ) {
        return;
    }


    selectedQuantity--;


    renderConfirmation();
}


function increaseQuantity() {

    if (!selectedProduct) {
        return;
    }


    if (
        selectedQuantity
        >=
        selectedProduct.quantity
    ) {

        addAssistantMessage(
            t("stockLimit")
        );

        return;
    }


    selectedQuantity++;


    renderConfirmation();
}


// =========================================================
// 25. CONFIRM / CANCEL MODAL
// =========================================================

$("#confirmAdd")
    ?.addEventListener(
        "click",
        () => {

            if (!selectedProduct) {
                return;
            }


            /*
                Сохраняем данные ДО closeConfirmation(),
                потому что closeConfirmation очищает
                selectedProduct.
            */

            const productToAdd =
                selectedProduct;


            const quantityToAdd =
                selectedQuantity;


            addProductToCart(
                productToAdd,
                quantityToAdd
            );


            closeConfirmation();


            renderCartSuccess(
                productToAdd,
                quantityToAdd
            );

        }
    );


$("#cancelAdd")
    ?.addEventListener(
        "click",
        closeConfirmation
    );


$("#modalClose")
    ?.addEventListener(
        "click",
        closeConfirmation
    );


$("#confirmationModal")
    ?.addEventListener(
        "click",
        (event) => {

            if (
                event.target
                ===
                $("#confirmationModal")
            ) {

                closeConfirmation();

            }

        }
    );


// =========================================================
// 26. ADD PRODUCT TO CART
// =========================================================

function addProductToCart(
    product,
    quantity
) {

    const existing =
        cart.find(
            (item) =>
                String(item.id)
                ===
                String(product.id)
        );


    if (existing) {

        const newQuantity =
            Number(
                existing.quantityInCart
                || 0
            )
            +
            Number(quantity);


        existing.quantityInCart =
            Math.min(
                newQuantity,
                Number(
                    product.quantity
                    || 0
                )
            );

    } else {

        cart.push({

            id:
                product.id,

            name:
                product.name,

            article:
                product.article,

            price:
                Number(
                    product.price || 0
                ),

            image:
                product.image,

            url:
                product.url,

            quantityInCart:
                Number(quantity),

            availableQuantity:
                Number(
                    product.quantity || 0
                )

        });

    }


    saveCart();


    updateCartCount();
}


// =========================================================
// 27. SAVE CART
// =========================================================

function saveCart() {

    localStorage.setItem(
        "ekt_cart",
        JSON.stringify(cart)
    );
}


// =========================================================
// 28. UPDATE CART COUNTER
// =========================================================

function updateCartCount() {

    const count =
        cart.reduce(
            (
                total,
                item
            ) => {

                return (
                    total
                    +
                    Number(
                        item.quantityInCart
                        || 0
                    )
                );

            },
            0
        );


    const counter =
        $("#cartCount");


    if (counter) {

        counter.textContent =
            count;

    }
}


// =========================================================
// 29. CART SUCCESS MESSAGE
// =========================================================

function renderCartSuccess(
    product,
    quantity
) {

    const success =
        document.createElement("div");


    success.className =
        "cart-success";


    success.innerHTML = `

        ✓

        ${Number(quantity)}
        ${t("pcs")}

        <strong>

            ${escapeHtml(
                product.name
            )}

        </strong>

        ${t("added")}.


        <br>


        <a
            class="cart-link"
            href="cart.html"
        >

            ${t("goToCart")} →

        </a>
    `;


    $("#chatMessages")
        ?.appendChild(success);


    scrollChatToBottom();
}


// =========================================================
// 30. HEADER CART
// =========================================================

$("#cartButton")
    ?.addEventListener(
        "click",
        () => {

            window.location.href =
                "cart.html";

        }
    );


// =========================================================
// 31. FILE ATTACHMENT
// =========================================================

$("#attachButton")
    ?.addEventListener(
        "click",
        () => {

            $("#fileInput")
                ?.click();

        }
    );


$("#fileInput")
    ?.addEventListener(
        "change",
        (event) => {

            const file =
                event.target.files?.[0];


            if (!file) {
                return;
            }


            renderFilePreview(
                file
            );


            addAssistantMessage(
                `${t("fileAttached")}. ${t("filePending")}`
            );


            /*
                Чтобы один и тот же файл
                можно было выбрать повторно.
            */

            event.target.value =
                "";

        }
    );


function renderFilePreview(file) {

    const preview =
        document.createElement("div");


    preview.className =
        "file-preview";


    const sizeKb =
        Math.max(
            1,
            Math.round(
                Number(file.size || 0)
                /
                1024
            )
        );


    preview.innerHTML = `

        <span class="file-preview-icon">

            📎

        </span>


        <div class="file-preview-info">

            <div class="file-preview-name">

                ${escapeHtml(
                    file.name
                )}

            </div>


            <div class="file-preview-size">

                ${sizeKb} KB

            </div>

        </div>
    `;


    $("#chatMessages")
        ?.appendChild(preview);


    scrollChatToBottom();
}


// =========================================================
// 32. ESCAPE KEY
// =========================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        const confirmation =
            $("#confirmationModal");


        if (
            confirmation
            &&
            !confirmation
                .classList
                .contains("hidden")
        ) {

            closeConfirmation();

            return;
        }


        const cityOverlay =
            $("#cityOverlay");


        if (
            cityOverlay
            &&
            !cityOverlay
                .classList
                .contains("hidden")
        ) {

            cityOverlay
                .classList
                .add("hidden");

            return;
        }


        const aiPanel =
            $("#aiPanel");


        if (
            aiPanel
            ?.classList
            .contains("open")
        ) {

            closeAI();

        }

    }
);


// =========================================================
// 33. INITIALIZATION
// =========================================================

function initializeApp() {

    setLanguage(
        currentLanguage
    );


    renderCurrentCity();


    updateCartCount();


    console.log(
        "EKT AI initialized",
        {
            sessionId:
                sessionId,

            language:
                currentLanguage,

            city:
                currentCity,

            n8nWebhook:
                API_CONFIG.n8nWebhook
        }
    );
}


initializeApp();


// =========================================================
// 34. EXPECTED N8N CONTRACT
// =========================================================

/*

FRONTEND SENDS:

{
    "session_id": "ekt-...",
    "message": "Нужен автомат Legrand 160A",
    "language": "ru",
    "city": "Астана"
}


-------------------------------------------
TEXT RESPONSE
-------------------------------------------

{
    "type": "text",
    "message": "Уточните количество полюсов."
}


-------------------------------------------
PRODUCT RESPONSE
-------------------------------------------

{
    "type": "product",

    "message":
        "Нашёл подходящий товар.",

    "product": {

        "id": 515291,

        "name":
            "027228 АВ DRX250 MT 3ф 160А 18kA Legrand",

        "article":
            "200300285_",

        "price":
            64920,

        "quantity":
            23,

        "image":
            "https://...",

        "url":
            "https://ekt.kz/...",

        "stores": [

            {
                "name":
                    "Алматы",

                "quantity":
                    5
            },

            {
                "name":
                    "Нур-Султан",

                "quantity":
                    8
            }

        ],

        "properties": {

            "brand":
                "Legrand",

            "poles":
                "3P",

            "current":
                "160A",

            "breakingCapacity":
                "18kA",

            "voltage":
                "400V"
        }
    }
}


-------------------------------------------
ANALOG RESPONSE
-------------------------------------------

{
    "type": "analog",

    "message":
        "Исходного товара нет. Нашёл аналог.",

    "product": {
        ...
    },

    "match": {

        "score":
            92,

        "reasons": [
            "3 полюса",
            "160A",
            "400V"
        ],

        "differences": [
            "25kA вместо 18kA"
        ]
    }
}


-------------------------------------------
PURCHASE INFO RESPONSE
-------------------------------------------

{
    "type":
        "purchase_info",

    "message":
        "Актуальные условия покупки:",

    "delivery":
        "Доставка ...",

    "payment":
        "Оплата ...",

    "minimum_order":
        "Минимальная партия ..."
}


-------------------------------------------
ERROR RESPONSE
-------------------------------------------

{
    "type":
        "error",

    "message":
        "Не удалось найти товар."
}

*/

