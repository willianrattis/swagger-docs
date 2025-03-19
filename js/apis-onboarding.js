const apis = [
    {
        loja: "Casas Bahia",
        ambientes: [
            { nome: "SIT", links: [
                { nome: "account", url: "https://sit-account-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "account corp", url: "https://sit-account-corp-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "account 2fa", url: "https://sit-account2fa-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "auth", url: "https://sit-auth-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "captcha", url: "https://sit-captcha-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "recovery", url: "https://sit-recovery-api.casasbahia.com.br/api/swagger/index.html" }
            ]},
            { nome: "HLG", links: [
                { nome: "account", url: "https://hlg-account-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "account corp", url: "https://hlg-account-corp-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "account 2fa", url: "https://hlg-account2fa-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "auth", url: "https://hlg-auth-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "captcha", url: "https://hlg-captcha-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "recovery", url: "https://hlg-recovery-api.casasbahia.com.br/api/swagger/index.html" }
            ]},
            { nome: "PRD", links: [
                { nome: "account", url: "https://account-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "account corp", url: "https://account-corp-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "account 2fa", url: "https://account2fa-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "auth", url: "https://auth-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "captcha", url: "https://captcha-api.casasbahia.com.br/api/swagger/index.html" },
                { nome: "recovery", url: "https://recovery-api.casasbahia.com.br/api/swagger/index.html" }
            ]}
        ]
    },
    {
        loja: "Ponto Frio",
        ambientes: [
            { nome: "SIT", links: [
                { nome: "account", url: "https://sit-account-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "account corp", url: "https://sit-account-corp-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "account 2fa", url: "https://sit-account2fa-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "auth", url: "https://sit-auth-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "captcha", url: "https://sit-captcha-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "recovery", url: "https://sit-recovery-api.pontofrio.com.br/api/swagger/index.html" }
            ]},
            { nome: "HLG", links: [
                { nome: "account", url: "https://hlg-account-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "account corp", url: "https://hlg-account-corp-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "account 2fa", url: "https://hlg-account2fa-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "auth", url: "https://hlg-auth-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "captcha", url: "https://hlg-captcha-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "recovery", url: "https://hlg-recovery-api.pontofrio.com.br/api/swagger/index.html" }
            ]},
            { nome: "PRD", links: [
                { nome: "account", url: "https://account-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "account corp", url: "https://account-corp-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "account 2fa", url: "https://account2fa-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "auth", url: "https://auth-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "captcha", url: "https://captcha-api.pontofrio.com.br/api/swagger/index.html" },
                { nome: "recovery", url: "https://recovery-api.pontofrio.com.br/api/swagger/index.html" }
            ]}
        ]
    },
    {
        loja: "Extra",
        ambientes: [
            { nome: "SIT", links: [
                { nome: "account", url: "https://sit-account-api.extra.com.br/api/swagger/index.html" },
                { nome: "account corp", url: "https://sit-account-corp-api.extra.com.br/api/swagger/index.html" },
                { nome: "account 2fa", url: "https://sit-account2fa-api.extra.com.br/api/swagger/index.html" },
                { nome: "auth", url: "https://sit-auth-api.extra.com.br/api/swagger/index.html" },
                { nome: "captcha", url: "https://sit-captcha-api.extra.com.br/api/swagger/index.html" },
                { nome: "recovery", url: "https://sit-recovery-api.extra.com.br/api/swagger/index.html" }
            ]},
            { nome: "HLG", links: [
                { nome: "account", url: "https://hlg-account-api.extra.com.br/api/swagger/index.html" },
                { nome: "account corp", url: "https://hlg-account-corp-api.extra.com.br/api/swagger/index.html" },
                { nome: "account 2fa", url: "https://hlg-account2fa-api.extra.com.br/api/swagger/index.html" },
                { nome: "auth", url: "https://hlg-auth-api.extra.com.br/api/swagger/index.html" },
                { nome: "captcha", url: "https://hlg-captcha-api.extra.com.br/api/swagger/index.html" },
                { nome: "recovery", url: "https://hlg-recovery-api.extra.com.br/api/swagger/index.html" }
            ]},
            { nome: "PRD", links: [
                { nome: "account", url: "https://account-api.extra.com.br/api/swagger/index.html" },
                { nome: "account corp", url: "https://account-corp-api.extra.com.br/api/swagger/index.html" },
                { nome: "account 2fa", url: "https://account2fa-api.extra.com.br/api/swagger/index.html" },
                { nome: "auth", url: "https://auth-api.extra.com.br/api/swagger/index.html" },
                { nome: "captcha", url: "https://captcha-api.extra.com.br/api/swagger/index.html" },
                { nome: "recovery", url: "https://recovery-api.extra.com.br/api/swagger/index.html" }
            ]}
        ]
    }
];