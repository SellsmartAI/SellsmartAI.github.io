class CookieBanner extends HTMLElement {
    shadowRoot;

    constructor() {
        super();

        const cookieAccepted = this.getCookie('cookie.banner.accepted');
        let bannerState = '';

        if (cookieAccepted !== null) {
            bannerState = 'hidden';
        }

        this.shadowRoot = this.attachShadow({mode: 'closed'});

        const style = document.createElement('style');
        style.textContent = `
            .none{
            display:none !important;
            }
            .green{
                background-color: #056605;
    color: white;
    border-radius: 9px;
    padding: 10px;
    margin-top: 22px;
    border: none;
            }
            button:hover{
            cursor:pointer;
            }
        `;
        this.shadowRoot.appendChild(style.cloneNode(true));

        const template = document.createElement('template');
        template.innerHTML = `
        <div class="cookie-banner ${bannerState}">
            <slot name="title"><h3>Cookie 🍪🍪🍪</h3></slot>
            <slot name="text"><p>Wir verwenden nur essentielle Cookies, um sicherzustellen, dass unsere Website auch auf Ihrem Gerät funktioniert</p></slot>
            <p class="cookie-sources">
                <label><input type="checkbox" name="required" disabled checked> Notwendige</label>
               
            </p>
            <button class="confirm" style="    border: none;
            background: none;"onclick="location.href='http://google.com';" >Website verlassen</button>
            <button class="green">Bestätigen</button>
        </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));


    }

    connectedCallback() {
        const element = this;
        this.shadowRoot.querySelector('button.confirm').addEventListener('click', function (event) {
            element.setCookie('cookie.banner.required', true, 30);
            element.setCookie('cookie.banner.accepted', true, 30);

            element.shadowRoot.querySelectorAll('.cookie-sources input[type="checkbox"]:checked').forEach(function (source) {
                element.setCookie(`cookie.banner.${source.name}`, true, 30);
            });
            element.hideCookieBanner();
        });
        this.shadowRoot.querySelector('button.green').addEventListener('click', function (event) {
            element.setCookie('cookie.banner.all', true, 30);
            element.setCookie('cookie.banner.accepted', true, 30);
            element.hideCookieBanner();
        });

    }

    hideCookieBanner() {
        document.querySelector('cookie-banner').classList.add('none');
    }
    

    setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    eraseCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

customElements.define('cookie-banner', CookieBanner);