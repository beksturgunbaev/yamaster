# SEO Рекомендации для проекта Usta

## ✅ Что было сделано

### 1. **Canonical URLs**

- ✅ Добавлены canonical URL ко всем основным страницам
- ✅ Home, About, Services, Contacts, FAQ
- ✅ Динамические service detail pages

### 2. **Sitemap.xml**

- ✅ Создан динамический sitemap.xml route handler
- ✅ Включает все статические страницы
- ✅ Включает все 12 динамических service pages
- ✅ Настроены правильные приоритеты и частоты обновления

### 3. **Robots.txt**

- ✅ Создан динамический robots.ts route handler
- ✅ Настроены правила для всех ботов
- ✅ Специальные правила для Googlebot и Yandex
- ✅ Ссылка на sitemap

### 4. **Structured Data (Schema.org)**

- ✅ **LocalBusiness schema** в root layout
- ✅ **Organization schema** на странице About
- ✅ **ItemList schema** на странице Services
- ✅ **Enhanced Service schema** на всех service detail pages
- ✅ **FAQPage schema** на странице FAQ
- ✅ **BreadcrumbList schema** на всех страницах

### 5. **Meta Tags**

- ✅ Добавлены viewport настройки
- ✅ Theme color для браузеров
- ✅ Apple Web App метаданные
- ✅ Open Graph для всех страниц
- ✅ Twitter Card metadata
- ✅ Robots meta tags с настройками для Googlebot

### 6. **PWA Support**

- ✅ Создан manifest.json
- ✅ Настроены иконки и цвета
- ✅ Добавлена ссылка в root layout

### 7. **Enhanced Metadata**

- ✅ Улучшены все Open Graph теги
- ✅ Добавлены изображения для социальных сетей
- ✅ Настроены alt-теги для изображений в schema
- ✅ Добавлены Twitter Card метаданные

---

## 📋 Что нужно сделать дополнительно

### 1. **Google Search Console & Яндекс.Вебмастер**

#### Google Search Console

1. Зарегистрируйтесь на [Google Search Console](https://search.google.com/search-console)
2. Добавьте сайт usta-kg.netlify.app
3. Подтвердите владение сайтом:
   - Замените `your-google-site-verification-code` в [src/app/layout.tsx:53](src/app/layout.tsx#L53) на реальный код
4. Отправьте sitemap.xml:
   - В Search Console перейдите в "Индексирование" → "Файлы Sitemap"
   - Добавьте URL: `https://usta.net.kg/sitemap.xml`
5. Проверьте индексацию страниц
6. Настройте отчеты о производительности

#### Яндекс.Вебмастер

1. Зарегистрируйтесь на [Яндекс.Вебмастер](https://webmaster.yandex.ru)
2. Добавьте сайт usta-kg.netlify.app
3. Подтвердите владение:
   - Замените `your-yandex-verification-code` в [src/app/layout.tsx:54](src/app/layout.tsx#L54) на реальный код
4. Отправьте sitemap.xml
5. Настройте регион (Бишкек, Кыргызстан)

### 2. **Изображения для SEO**

#### Создайте и оптимизируйте изображения:

```
public/
├── logo.png (уже есть) - оптимизируйте размер
├── banner.jpg (уже есть) - используйте для Open Graph
└── services/
    ├── ustanovka-smesiteley.jpg (создать)
    ├── ustranenie-protechek.jpg (создать)
    ├── zamena-unitaza.jpg (создать)
    ├── chistka-zasorov.jpg (создать)
    ├── zamena-trub.jpg (создать)
    ├── ustanovka-vodonagrevatelya.jpg (создать)
    ├── ustanovka-schetchikov.jpg (создать)
    ├── ustanovka-filtrov.jpg (создать)
    ├── remont-bachka.jpg (создать)
    ├── ustanovka-dushevoy.jpg (создать)
    ├── zamena-radiatorov.jpg (создать)
    └── gidroizolyaciya.jpg (создать)
```

**Рекомендации для изображений:**

- Размер: 1200x630px для Open Graph
- Формат: WebP (для производительности) или JPEG
- Качество: 80-85%
- Размер файла: < 200KB
- Alt-теги: уже настроены в schema

#### Создайте иконки для PWA:

```
public/
├── icon-192.png (192x192px)
├── icon-512.png (512x512px)
└── apple-touch-icon.png (180x180px)
```

Обновите [public/manifest.json](public/manifest.json) с правильными путями к иконкам.

### 3. **Google Analytics & Яндекс.Метрика**

#### Google Analytics 4

1. Создайте аккаунт на [Google Analytics](https://analytics.google.com)
2. Получите Measurement ID (G-XXXXXXXXXX)
3. Установите через next.js:

```bash
npm install @next/third-parties
```

Добавьте в [src/app/layout.tsx](src/app/layout.tsx):

```typescript
import { GoogleAnalytics } from '@next/third-parties/google';

// В компоненте:
<GoogleAnalytics gaId='G-XXXXXXXXXX' />;
```

#### Яндекс.Метрика

1. Создайте счетчик на [Метрика](https://metrika.yandex.ru)
2. Получите ID счетчика
3. Добавьте код в [src/app/layout.tsx](src/app/layout.tsx)

### 4. **Локальный бизнес и карты**

#### Google Business Profile (Google Мой Бизнес)

1. Создайте профиль на [Google Business](https://www.google.com/business/)
2. Укажите:
   - Название: Usta
   - Категория: Сантехнические услуги
   - Адрес: ул. Исанова 42, Бишкек
   - Телефон: +996 705 727 374
   - Сайт: https://usta.net.kg
   - Часы работы: Круглосуточно
3. Добавьте фотографии
4. Соберите отзывы клиентов

#### 2ГИС

1. Зарегистрируйте компанию в [2ГИС](https://2gis.kg)
2. Добавьте все услуги
3. Загрузите фотографии

### 5. **Контент и внутренняя перелинковка**

#### Создайте блог (опционально)

```
src/app/blog/
├── page.tsx (список статей)
└── [slug]/
    └── page.tsx (отдельная статья)
```

**Темы статей:**

- "Как выбрать смеситель для кухни и ванной"
- "Признаки того, что нужно менять трубы"
- "Как предотвратить засоры в канализации"
- "Когда нужно менять счетчики воды"
- "Как выбрать бойлер для квартиры"

#### Добавьте визуальные breadcrumbs

Сейчас есть только schema, но не визуальные breadcrumbs на страницах.

### 6. **Производительность**

#### Оптимизируйте изображения

В [next.config.ts](next.config.ts) уберите `images.unoptimized: true`:

```typescript
const nextConfig: NextConfig = {
  images: {
    domains: ["usta-kg.netlify.app"],
    formats: ["image/webp", "image/avif"],
  },
};
```

#### Добавьте кэширование

Настройте заголовки кэширования для статических ресурсов.

### 7. **Социальные сети**

#### Создайте и заполните профили:

- Instagram: [@usta-kg.netlify.app](https://instagram.com/usta-kg.netlify.app)
- Facebook: [/usta-kg.netlify.app](https://facebook.com/usta-kg.netlify.app)
- WhatsApp Business: +996 705 727 374
- Telegram канал для заказов

Эти ссылки уже добавлены в Organization schema в [src/app/about/page.tsx:104-107](src/app/about/page.tsx#L104-L107)

### 8. **Локальное SEO**

#### Создайте страницы для районов Бишкека (опционально):

```
src/app/districts/
├── [district]/
    └── page.tsx
```

Например:

- /districts/sverdlovskiy
- /districts/oktyabrskiy
- /districts/pervomayskiy
- /districts/leninskiy

### 9. **Мониторинг и аналитика**

#### Настройте отслеживание:

1. **Конверсии:**
   - Клики по телефону
   - Отправка форм
   - Переходы на страницы услуг

2. **Отслеживание ошибок:**
   - Настройте [Sentry](https://sentry.io) или альтернативу
   - Мониторинг 404 ошибок

3. **Скорость загрузки:**
   - Регулярно проверяйте на [PageSpeed Insights](https://pagespeed.web.dev/)
   - Целевой показатель: > 90 для мобильных и десктопа

### 10. **Технические улучшения**

#### SSL сертификат

- ✅ Убедитесь, что сайт работает только на HTTPS
- ✅ Настройте автоматическое перенаправление с HTTP на HTTPS

#### Structured Data Testing

После деплоя проверьте все schema на:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

#### XML Sitemap

После деплоя проверьте sitemap:

- https://usta.net.kg/sitemap.xml

#### Мобильная оптимизация

Проверьте на [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 11. **Контентная стратегия**

#### Регулярно обновляйте:

1. **FAQ** - добавляйте новые часто задаваемые вопросы
2. **Отзывы** - собирайте и публикуйте отзывы клиентов
3. **Акции** - создайте страницу с текущими акциями
4. **Кейсы** - описывайте выполненные работы с фото

### 12. **Локальные цитаты**

#### Разместите информацию о компании на:

- Yell.kg
- Salam.kg
- Заказ сантехника Бишкек (локальные сервисы)
- Местные доски объявлений

---

## 🎯 Приоритетные задачи (Сделать в первую очередь)

### Высокий приоритет:

1. ✅ ~~Добавить коды верификации Google Search Console и Яндекс.Вебмастер~~
2. ✅ ~~Создать и оптимизировать изображения для всех услуг~~
3. ✅ ~~Настроить Google Analytics 4 и Яндекс.Метрику~~
4. ✅ ~~Создать Google Business Profile~~
5. ✅ ~~Отправить sitemap в Google и Яндекс~~

### Средний приоритет:

6. Создать профили в социальных сетях
7. Зарегистрироваться в 2ГИС
8. Оптимизировать изображения (включить Next.js Image Optimization)
9. Добавить визуальные breadcrumbs на страницы
10. Создать первые 3-5 статей в блог

### Низкий приоритет:

11. Создать страницы для районов Бишкека
12. Настроить A/B тестирование
13. Добавить чат на сайт
14. Создать видео-отзывы клиентов

---

## 📊 Метрики успеха

Отслеживайте следующие показатели:

### Технические метрики:

- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

- **SEO метрики:**
  - Позиции в поисковой выдаче по ключевым запросам
  - Количество проиндексированных страниц
  - CTR (Click-Through Rate) в поисковой выдаче

### Бизнес-метрики:

- Органический трафик
- Конверсия звонков
- Конверсия форм обратной связи
- Количество запросов на услуги

---

## 🔍 Ключевые запросы для отслеживания

### Главные запросы:

1. "сантехник Бишкек"
2. "вызов сантехника Бишкек"
3. "сантехнические услуги Бишкек"
4. "срочный сантехник Бишкек"
5. "сантехник круглосуточно Бишкек"

### Запросы по услугам:

- "установка унитаза Бишкек"
- "замена труб Бишкек"
- "прочистка канализации Бишкек"
- "установка бойлера Бишкек"
- "устранение протечек Бишкек"
- "замена смесителя Бишкек"

### Локальные запросы:

- "сантехник Свердловский район"
- "сантехник Первомайский район"
- "сантехник рядом со мной"

---

## 🛠️ Полезные инструменты

### SEO анализ:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)
- [Яндекс.Вебмастер](https://webmaster.yandex.ru)
- [Schema Markup Validator](https://validator.schema.org/)

### Анализ конкурентов:

- [SEMrush](https://www.semrush.com) (платный)
- [Ahrefs](https://ahrefs.com) (платный)
- [Ubersuggest](https://neilpatel.com/ubersuggest/) (freemium)

### Keyword Research:

- [Google Keyword Planner](https://ads.google.com/keywordplanner)
- [Yandex Wordstat](https://wordstat.yandex.com)
- [AnswerThePublic](https://answerthepublic.com)

---

## ✅ Чек-лист после деплоя

После публикации сайта на продакшн:

- [ ] Проверить все страницы открываются без ошибок
- [ ] Проверить sitemap.xml доступен
- [ ] Проверить robots.txt доступен
- [ ] Проверить все изображения загружаются
- [ ] Протестировать формы обратной связи
- [ ] Проверить structured data на Rich Results Test
- [ ] Отправить sitemap в Google Search Console
- [ ] Отправить sitemap в Яндекс.Вебмастер
- [ ] Проверить мобильную версию
- [ ] Протестировать скорость загрузки
- [ ] Проверить работу телефонных ссылок
- [ ] Проверить Open Graph превью в социальных сетях
- [ ] Настроить мониторинг uptime
- [ ] Настроить резервное копирование

---

## 📞 Поддержка

Если нужна помощь с внедрением рекомендаций, обращайтесь к разработчикам или SEO специалистам.

**Важно:** Результаты SEO оптимизации видны не сразу. Обычно требуется 3-6 месяцев для значимого роста позиций в поисковой выдаче.

Удачи с продвижением! 🚀
