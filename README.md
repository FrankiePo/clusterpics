# Clusterpics

Front-end для классификатора изображений. Позволяет классифицировать картинки по геотегу, времени, содержимому. Отображать в виде таблицы и в виде карты.

### Компоненты:

* Карта с кластеризацией по геотегу.
* Таблица с отображением поиска.
* Форма для поиска.
* Предпросмотр одной фотографии.
* Сервис с данными(возможно с фильтрацией).

### План:

* 24 марта — разбиение на компоненты
* 14 апреля — реализация основных компонент
* 21 апреля — получение общего фидбека, правки
* 28 апреля — защита

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build -prod --base-href \"/clusterpics/\"` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Publish to gh-pages
Run `ngh` to push dist folder to `gh-pages` branch.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
