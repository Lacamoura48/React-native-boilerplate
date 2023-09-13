import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {fr, ar} from './src/translations'
const resources = {
    fr: {
        translation: fr
    },
    ar: {
        translation: ar
    }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  compatibilityJSON: "v3",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;