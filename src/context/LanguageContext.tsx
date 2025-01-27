import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'km';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.gallery': 'Gallery',
    'nav.donate': 'Donate',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Nature Conservation Blog',
    'hero.subtitle': 'Creating Change Together',
    'hero.donate': 'Donate Now',
    'hero.follow': 'Follow Us',
    
    // Phases
    'phases.title': 'Project Phases',
    'phases.subtitle': 'Our journey towards sustainable impact',
    'phases.planning.title': 'Planning',
    'phases.planning.description': 'Initial planning and strategy development phase',
    'phases.fundraising.title': 'Fundraising',
    'phases.fundraising.description': 'Gathering resources and community support',
    'phases.implementation.title': 'Implementation',
    'phases.implementation.description': 'Executing the planned initiatives',
    'phases.monitoring.title': 'Post-planting Monitoring',
    'phases.monitoring.description': 'Tracking progress and ensuring sustainability',
    
    // Mangroves Section
    'mangroves.title': 'Why Mangroves Matter in Cambodia',
    'mangroves.subtitle': 'Protecting Nature, Preserving Communities',
    'mangroves.hero.title': 'Trapeang Sangke Mangrove Forest',
    'mangroves.hero.subtitle': 'A vital ecosystem supporting local communities and marine life',
    'mangroves.impact.title': 'Impact of Mangroves',
    'mangroves.challenges.title': 'Challenges & Conservation',
    'mangroves.cta.text': 'Join us in protecting Cambodia\'s mangrove forests. Your support helps preserve these vital ecosystems for future generations.',
    'mangroves.cta.button': 'Support Mangrove Conservation',
  },
  km: {
    // Navigation
    'nav.home': 'ទំព័រដើម',
    'nav.about': 'អំពីយើង',
    'nav.gallery': 'វិចិត្រសាល',
    'nav.donate': 'បរិច្ចាគ',
    'nav.contact': 'ទំនាក់ទំនង',
    
    // Hero
    'hero.title': 'ប្លុកអភិរក្សធម្មជាតិ',
    'hero.subtitle': 'បង្កើតការផ្លាស់ប្តូរជាមួយគ្នា',
    'hero.donate': 'បរិច្ចាគឥឡូវនេះ',
    'hero.follow': 'តាមដានយើង',
    
    // Phases
    'phases.title': 'ដំណាក់កាលគម្រោង',
    'phases.subtitle': 'ដំណើររបស់យើងឆ្ពោះទៅរកផលប៉ះពាល់ប្រកបដោយចីរភាព',
    'phases.planning.title': 'ការរៀបចំផែនការ',
    'phases.planning.description': 'ដំណាក់កាលនៃការរៀបចំផែនការ និងការអភិវឌ្ឍយុទ្ធសាស្ត្រដំបូង',
    'phases.fundraising.title': 'ការប្រមូលមូលនិធិ',
    'phases.fundraising.description': 'ការប្រមូលធនធាន និងការគាំទ្រពីសហគមន៍',
    'phases.implementation.title': 'ការអនុវត្ត',
    'phases.implementation.description': 'ការអនុវត្តគំនិតផ្តួចផ្តើមដែលបានគ្រោងទុក',
    'phases.monitoring.title': 'ការតាមដានក្រោយការដាំ',
    'phases.monitoring.description': 'ការតាមដានវឌ្ឍនភាព និងការធានាចីរភាព',
    
    // Mangroves Section
    'mangroves.title': 'ហេតុអ្វីបានជាដើមកោងកាងមានសារៈសំខាន់នៅកម្ពុជា',
    'mangroves.subtitle': 'ការពារធម្មជាតិ ថែរក្សាសហគមន៍',
    'mangroves.hero.title': 'ព្រៃកោងកាងត្រពាំងសង្កែ',
    'mangroves.hero.subtitle': 'ប្រព័ន្ធអេកូឡូស៊ីដ៏សំខាន់គាំទ្រសហគមន៍មូលដ្ឋាននិងជីវិតសមុទ្រ',
    'mangroves.impact.title': 'ផលប៉ះពាល់នៃដើមកោងកាង',
    'mangroves.challenges.title': 'បញ្ហាប្រឈម និងការអភិរក្ស',
    'mangroves.cta.text': 'ចូលរួមជាមួយយើងក្នុងការការពារព្រៃកោងកាងនៅកម្ពុជា។ ការគាំទ្ររបស់អ្នកជួយថែរក្សាប្រព័ន្ធអេកូឡូស៊ីដ៏សំខាន់ទាំងនេះសម្រាប់មនុស្សជំនាន់ក្រោយ។',
    'mangroves.cta.button': 'គាំទ្រការអភិរក្សព្រៃកោងកាង',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'km' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};