import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          loading : 'Catching em all...',
          navigation: {
            title_gen: "Select gen.",
          },

          details: {
            about: {
              title: "About",
              species: "Species",
              height: "Height",
              weight: "Weight",
              abilities: "Abilities",
            },
            stats: {
              title: "Base Stats",
              attack: "Attack",
              defense: "Defense",
              sp_atk: "Sp. Atk",
              sp_def: "Sp. Def",
              speed: "Speed",
            },
            evol: {
              title: "Evolution",
              subtitle: "Evolution Chain",
            },
          },
        },
      },

      es: {
        translation: {
          loading : 'Atraparlos todos...',   
          navigation: {
            title_gen: "Seleccione gen.",
          },

          details: {
            about: {
              title: "Información General",
              species: "Especies",
              height: "Tamaño",
              weight: "Peso",
              abilities: "Habilidades",
            },

            stats: {
              title: "Estadísticas Base",
              attack: "Ataque",
              defense: "Defensa",
              sp_atk: "Atq Esp",
              sp_def: "Def Esp",
              speed: "Velocidad",
            },
            evol: {
                title: "Evolución",
                subtitle: "Cadena de Evolución",
              },
          },
        },
      },
    },
  });

export default i18n;
