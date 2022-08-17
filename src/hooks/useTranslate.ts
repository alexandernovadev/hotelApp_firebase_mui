import { useTranslation } from 'react-i18next';
import { Lang } from '../interfaces/types'

export const useTranslate = () => {
  const { i18n } = useTranslation();

  const setTranslate = (lang: Lang) => {
    localStorage.setItem('locale', lang)
    i18n.changeLanguage(lang)
  }

  const getLocale = () => {
    return localStorage.getItem('locale') || 'es'
  }

  return {
    setTranslate,
    getLocale
  }
}
