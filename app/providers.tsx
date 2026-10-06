'use client'; import {Provider} from 'react-redux'; import {store} from '@/store/store'; import {ThemeProvider} from '@/components/layout/ThemeProvider'; import {I18nProvider} from '@/components/layout/I18nProvider';
export function Providers({children}:{children:React.ReactNode}){return <Provider store={store}><ThemeProvider><I18nProvider>{children}</I18nProvider></ThemeProvider></Provider>}
