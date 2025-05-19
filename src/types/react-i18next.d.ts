
declare module 'react-i18next' {
  import { i18n as i18nInterface } from 'i18next';
  
  export interface UseTranslationResponse {
    t: (key: string, options?: object) => string;
    i18n: i18nInterface;
    ready: boolean;
  }
  
  export function useTranslation(ns?: string | string[]): UseTranslationResponse;
  export function initReactI18next: {
    type: string;
    [key: string]: any;
  };
}

declare module 'i18next-browser-languagedetector' {
  import i18next from 'i18next';
  export default class LanguageDetector {
    constructor(services?: any, options?: any);
    init(services: any, options?: any): void;
    detect(): string;
    cacheUserLanguage(lng: string): void;
  }
}

declare module 'i18next-http-backend' {
  import i18next from 'i18next';
  export default class Backend {
    constructor(services?: any, options?: any);
    init(services: any, options?: any): void;
    read(language: string, namespace: string, callback: (err: any, data: any) => void): void;
  }
}
