## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + проекта
```

----

## Скрипты

- `npm run start` - Запуск проекта на webpack dev server
- `npm run start:vite` - Запуск проекта на vite
- `npm run start:dev` - Запуск проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка
на [документацию](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

[Документация](https://react.i18next.com/) i18next

----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация storybook

----

## Тесты

В проекте используются 4 вида тестов:

1) Unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`

----

## Линтинг и форматирования кода

В проекте используется eslint для проверки typescript кода и stylelint для
проверки файлов со стилями. Для форматирования кода используется prettier.

##### Команды

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run prettier` - Форматирование ts(x), json файлов

----

## Storybook

В проекте для каждого компонента описываются стори-кейсы. Файл со сторикейсами
создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой  `npm run storybook`

Ссылка на [Storybook](https://storybook.js.org/)

----