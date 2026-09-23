// =========================================================
// EKT AI — CART
// =========================================================


// =========================================================
// 1. TRANSLATIONS
// =========================================================

const CART_I18N = {

    ru: {

        personalAccount:
            "Личный кабинет",

        buyers:
            "Покупателям",

        request:
            "Оставить заявку",

        catalog:
            "Каталог",

        cart:             "Корзина",

        subtitle:
            "Проверьте товары перед продолжением",

        continueShopping:
            "Продолжить покупки",

        order:
            "Ваш заказ",

        products:
            "Товары",

        subtotal:
            "Стоимость товаров",

        total:
            "Итого",

        checkout:
            "Перейти к оформлению",

        prototype:
            "Оформление заказа не входит в текущий прототип",

        emptyTitle:
            "Корзина пуста",

        emptyText:
            "Добавьте товар через каталог или EKT AI",

        goCatalog:
            "Перейти к каталогу",

        article:
            "Артикул",

        available:
            "Доступно",

        pcs:
            "шт.",

        remove:
            "Удалить",

        stockLimit:
            "Нельзя выбрать количество больше доступного остатка.",

        checkoutDemo:
            "Оформление заказа не входит в текущий прототип EKT AI."

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

        cart:
            "Себет",

        subtitle:
            "Жалғастырмас бұрын тауарларды тексеріңіз",

        continueShopping:
            "Сатып алуды жалғастыру",

        order:
            "Сіздің тапсырысыңыз",

        products:
            "Тауарлар",

        subtotal:
            "Тауарлардың құны",

        total:
            "Барлығы",

        checkout:
            "Рәсімдеуге өту",

        prototype:
            "Тапсырысты рәсімдеу ағымдағы прототипке кірмейді",

        emptyTitle:
            "Себет бос",

        emptyText:
            "Каталог немесе EKT AI арқылы тауар қосыңыз",

        goCatalog:
            "Каталогқа өту",

        article:
            "Артикул",

        available:
            "Қолжетімді",

        pcs:
            "дана",

        remove:
            "Жою",

        stockLimit:
            "Қолжетімді қалдықтан артық мөлшерді таңдауға болмайды.",

        checkoutDemo:
            "Тапсырысты рәсімдеу EKT AI ағымдағы прототипіне кірмейді."

    }

};


// =========================================================
// 2. STATE
// =========================================================

let currentLanguage =
    localStorage.getItem(
        "ekt_language"
    ) || "ru";


let currentCity =
    localStorage.getItem(
        "ekt_city"
    ) || "Алматы";


let cart =
    JSON.parse(
        localStorage.getItem(
            "ekt_cart"
        ) || "[]"
    );


// =========================================================
// 3. DOM HELPERS
// =========================================================

const $ =
    (selector) =>
        document.querySelector(
            selector
        );


const $$ =
    (selector) =>
        document.querySelectorAll(
            selector
        );


// =========================================================
// 4. TRANSLATION HELPER
// =========================================================

function t(key) {

    return (
        CART_I18N[currentLanguage]?.[key]
        ??
        CART_I18N.ru[key]
        ??
        key
    );
}


// =========================================================
// 5. ESCAPE HTML
// =========================================================

function escapeHtml(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


// =========================================================
// 6. FORMAT PRICE
// =========================================================

function formatPrice(value) {

    return new Intl.NumberFormat(
        currentLanguage === "kz"
            ? "kk-KZ"
            : "ru-RU"
    ).format(
        Number(value || 0)
    );
}


// =========================================================
// 7. LANGUAGE
// =========================================================

function setLanguage(language) {

    if (
        !CART_I18N[language]
    ) {
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


    $$("[data-cart-i18n]")
        .forEach(
            (element) => {

                const key =
                    element.dataset
                        .cartI18n;


                if (
                    CART_I18N[
                        currentLanguage
                    ][key]
                ) {

                    element.textContent =
                        CART_I18N[
                            currentLanguage
                        ][key];

                }

            }
        );


    $$(".cart-language-button")
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


    /*
        После смены языка
        перерисовываем корзину,
        чтобы перевелись динамические
        элементы карточек.
    */

    renderCart();

}


$$(".cart-language-button")
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


// =========================================================
// 8. SAVE CART
// =========================================================

function saveCart() {

    localStorage.setItem(
        "ekt_cart",
        JSON.stringify(cart)
    );
}


// =========================================================
// 9. CART COUNT
// =========================================================

function getCartItemsCount() {

    return cart.reduce(
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
}


// =========================================================
// 10. CART TOTAL
// =========================================================

function getCartTotal() {

    return cart.reduce(
        (
            total,
            item
        ) => {

            const price =
                Number(
                    item.price || 0
                );


            const quantity =
                Number(
                    item.quantityInCart
                    || 0
                );


            return (
                total
                +
                price * quantity
            );

        },
        0
    );
}


// =========================================================
// 11. RENDER CART
// =========================================================

function renderCart() {

    const productsContainer =
        $("#cartProducts");


    const cartLayout =
        $("#cartLayout");


    const emptyCart =
        $("#emptyCart");


    if (
        !productsContainer
        ||
        !cartLayout
        ||
        !emptyCart
    ) {
        return;
    }


    /*
        Удаляем потенциально
        некорректные позиции.
    */

    cart =
        cart.filter(
            (item) =>
                item
                &&
                item.id !== undefined
        );


    if (
        cart.length === 0
    ) {

        cartLayout.classList.add(
            "hidden"
        );


        emptyCart.classList.remove(
            "hidden"
        );


        updateSummary();


        return;
    }


    emptyCart.classList.add(
        "hidden"
    );


    cartLayout.classList.remove(
        "hidden"
    );


    productsContainer.innerHTML =
        "";


    cart.forEach(
        (item) => {

            productsContainer
                .appendChild(
                    createCartItem(
                        item
                    )
                );

        }
    );


    updateSummary();
}


// =========================================================
// 12. CREATE CART ITEM
// =========================================================

function createCartItem(item) {

    const element =
        document.createElement(
            "article"
        );


    element.className =
        "cart-item";


    element.dataset.productId =
        String(item.id);


    const quantity =
        Math.max(
            1,
            Number(
                item.quantityInCart
                || 1
            )
        );


    const availableQuantity =
        Math.max(
            0,
            Number(
                item.availableQuantity
                || 0
            )
        );


    const price =
        Number(
            item.price || 0
        );


    const itemTotal =
        price * quantity;


    const imageHtml =
        item.image
            ? `
                <img
                    class="cart-item-image"
                    src="${escapeHtml(
                        item.image
                    )}"
                    alt="${escapeHtml(
                        item.name
                    )}"
                >
              `
            : `
                <div
                    class="cart-item-placeholder"
                >
                    ⚡
                </div>
              `;


    element.innerHTML = `

        <div class="cart-item-image-wrapper">

            ${imageHtml}

        </div>


        <div class="cart-item-info">

            <h3 class="cart-item-name">

                ${escapeHtml(
                    item.name
                )}

            </h3>


            <div class="cart-item-article">

                ${t("article")}:

                ${escapeHtml(
                    item.article
                )}

            </div>


            <div class="cart-item-price">

                ${formatPrice(
                    price
                )} ₸

            </div>


            <div class="cart-stock">

                ${t("available")}:

                ${availableQuantity}

                ${t("pcs")}

            </div>

        </div>


        <div class="cart-item-actions">

            <div class="cart-quantity">

                <button
                    class="cart-quantity-button decrease-cart-item"
                    type="button"

                    ${
                        quantity <= 1
                            ? "disabled"
                            : ""
                    }
                >
                    −
                </button>


                <span class="cart-quantity-value">

                    ${quantity}

                </span>


                <button
                    class="cart-quantity-button increase-cart-item"
                    type="button"

                    ${
                        (
                            availableQuantity > 0
                            &&
                            quantity >=
                            availableQuantity
                        )
                            ? "disabled"
                            : ""
                    }
                >
                    +
                </button>

            </div>


            <div class="cart-item-total">

                ${formatPrice(
                    itemTotal
                )} ₸

            </div>


            <button
                class="cart-remove"
                type="button"
            >
                ${t("remove")}
            </button>

        </div>
    `;


    /*
        MINUS
    */

    element
        .querySelector(
            ".decrease-cart-item"
        )
        ?.addEventListener(
            "click",
            () => {

                changeQuantity(
                    item.id,
                    -1
                );

            }
        );


    /*
        PLUS
    */

    element
        .querySelector(
            ".increase-cart-item"
        )
        ?.addEventListener(
            "click",
            () => {

                changeQuantity(
                    item.id,
                    1
                );

            }
        );


    /*
        REMOVE
    */

    element
        .querySelector(
            ".cart-remove"
        )
        ?.addEventListener(
            "click",
            () => {

                removeItem(
                    item.id
                );

            }
        );


    return element;
}


// =========================================================
// 13. CHANGE QUANTITY
// =========================================================

function changeQuantity(
    productId,
    delta
) {

    const item =
        cart.find(
            (product) =>
                String(product.id)
                ===
                String(productId)
        );


    if (!item) {
        return;
    }


    const currentQuantity =
        Number(
            item.quantityInCart
            || 1
        );


    const availableQuantity =
        Number(
            item.availableQuantity
            || 0
        );


    const newQuantity =
        currentQuantity
        +
        Number(delta);


    /*
        Минимум — 1.
    */

    if (
        newQuantity < 1
    ) {
        return;
    }


    /*
        Если известен остаток,
        не разрешаем превысить его.
    */

    if (
        availableQuantity > 0
        &&
        newQuantity >
        availableQuantity
    ) {

        showNotification(
            t("stockLimit")
        );


        return;
    }


    item.quantityInCart =
        newQuantity;


    saveCart();


    renderCart();
}


// =========================================================
// 14. REMOVE ITEM
// =========================================================

function removeItem(productId) {

    cart =
        cart.filter(
            (item) =>
                String(item.id)
                !==
                String(productId)
        );


    saveCart();


    renderCart();
}


// =========================================================
// 15. UPDATE SUMMARY
// =========================================================

function updateSummary() {

    const itemsCount =
        getCartItemsCount();


    const total =
        getCartTotal();


    const headerCount =
        $("#headerCartCount");


    const summaryItems =
        $("#summaryItems");


    const summarySubtotal =
        $("#summarySubtotal");


    const summaryTotal =
        $("#summaryTotal");


    if (headerCount) {

        headerCount.textContent =
            itemsCount;

    }


    if (summaryItems) {

        summaryItems.textContent =
            `${itemsCount} ${t("pcs")}`;

    }


    if (summarySubtotal) {

        summarySubtotal.textContent =
            `${formatPrice(total)} ₸`;

    }


    if (summaryTotal) {

        summaryTotal.textContent =
            `${formatPrice(total)} ₸`;

    }


    const checkoutButton =
        $("#checkoutButton");


    if (checkoutButton) {

        checkoutButton.disabled =
            cart.length === 0;

    }
}


// =========================================================
// 16. NOTIFICATION
// =========================================================

let notificationTimer = null;


function showNotification(text) {

    document
        .querySelector(
            ".cart-notification"
        )
        ?.remove();


    if (notificationTimer) {

        clearTimeout(
            notificationTimer
        );

    }


    const notification =
        document.createElement(
            "div"
        );


    notification.className =
        "cart-notification";


    notification.textContent =
        text;


    document.body
        .appendChild(
            notification
        );


    notificationTimer =
        setTimeout(
            () => {

                notification.remove();

            },
            2500
        );
}


// =========================================================
// 17. CHECKOUT DEMO
// =========================================================

$("#checkoutButton")
    ?.addEventListener(
        "click",
        () => {

            if (
                cart.length === 0
            ) {
                return;
            }


            /*
                В ТЗ бронирование/полное
                оформление не требуется.

                Поэтому честно показываем,
                что это граница прототипа.
            */

            showNotification(
                t("checkoutDemo")
            );

        }
    );


// =========================================================
// 18. CURRENT CITY
// =========================================================

function renderCurrentCity() {

    const city =
        $("#cartCity");


    if (city) {

        city.textContent =
            currentCity;

    }
}


// =========================================================
// 19. STORAGE SYNC
// =========================================================

/*
    Если корзина открыта в одной вкладке,
    а пользователь изменил её в другой,
    браузер обновит страницу корзины.
*/

window.addEventListener(
    "storage",
    (event) => {

        if (
            event.key
            !==
            "ekt_cart"
        ) {
            return;
        }


        try {

            cart =
                JSON.parse(
                    event.newValue
                    || "[]"
                );

        } catch {

            cart = [];

        }


        renderCart();

    }
);


// =========================================================
// 20. INITIALIZATION
// =========================================================

function initializeCart() {

    renderCurrentCity();


    setLanguage(
        currentLanguage
    );


    /*
        setLanguage() уже вызывает
        renderCart(), поэтому второй раз
        отдельно renderCart() не нужен.
    */


    console.log(
        "EKT cart initialized",
        {
            language:
                currentLanguage,

            city:
                currentCity,

            products:
                cart.length
        }
    );
}


initializeCart();

           