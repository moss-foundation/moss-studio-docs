import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Moss Docs",
            social: {
                github: "https://github.com/keenawa-co/moss-studio-docs",
            },
            sidebar: [
                {
                    autogenerate: { directory: "guides" },
                    collapsed: false,
                },
                {
                    label: "Test",
                    autogenerate: { directory: "test" },
                    collapsed: false,
                },
            ],
            defaultLocale: "en",
            locales: {
                en: {
                    label: "English",
                },
                ru: {
                    label: "Русский",
                },
            },
            customCss: ["./src/tailwind.css"],
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
