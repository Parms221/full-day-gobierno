export const ROUTES = [
    {
        name: "Inicio",
        href: "/",
        active: (route: string) => route == "/",
    },
    {
        name: "Ponentes",
        href: "/ponentes",
        active: (route: string) => route.startsWith("/ponentes"),
    },
    {
        name: "Nosotros",
        href: "/nosotros",
        active: (route: string) => route == "/nosotros",
    },
    {
        name: "Eventos",
        href: "/eventos",
        active: (route: string) => route.startsWith("/eventos"),
    },
]