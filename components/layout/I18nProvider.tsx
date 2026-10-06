'use client';
import i18n from 'i18next';
import {initReactI18next,I18nextProvider} from 'react-i18next';
import {useAppSelector} from '@/hooks/redux';
if(!i18n.isInitialized){i18n.use(initReactI18next).init({lng:'en',fallbackLng:'en',resources:{en:{translation:{dashboard:'Dashboard',favorites:'Favorites',settings:'Settings',trending:'Trending',welcome:'Good evening',personalized:'Your personalized feed',all:'All'}},ta:{translation:{dashboard:'டாஷ்போர்டு',favorites:'பிடித்தவை',settings:'அமைப்புகள்',trending:'டிரெண்டிங்',welcome:'மாலை வணக்கம்',personalized:'உங்களுக்கான ஊட்டம்',all:'அனைத்தும்'}}}});}
export function I18nProvider({children}:{children:React.ReactNode}){const lang=useAppSelector(s=>s.preferences.language);i18n.changeLanguage(lang);return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>}
