# Проект: Лендинг с кастомными шрифтами

## Структура проекта

```
index.html
assets/
  css/
    reset.css
    style.css
  fonts/
    DMSans/
      ... (много ttf-файлов разных начертаний)
    SpaceGrotesk/
      ... (шрифты)
  img/
    banner.svg
    logo-marso.png
  js/
```

## Импорт шрифтов в CSS

Для подключения кастомных шрифтов используйте директиву `@font-face` в начале файла CSS:

```css
@font-face {
  font-family: "DM Sans";
  src: url("../fonts/DMSans/DMSans-Regular.ttf");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "DM Sans";
  src: url("../fonts/DMSans/DMSans-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "DM Sans";
  src: url("../fonts/DMSans/DMSans-Italic.ttf");
  font-weight: 400;
  font-style: italic;
}
/* Аналогично для других начертаний и для SpaceGrotesk */
```

**Внимание:**

- `font-style` принимает только значения `normal`, `italic` или `oblique`.
- `font-weight` — число (100, 200, ..., 900) или ключевые слова (`normal`, `bold`).
- Не используйте числа для `font-style` и не используйте `bold` для `font-style`.

## Пример использования шрифта

```css
body {
  font-family: "DM Sans", Arial, sans-serif;
}
```

## Рекомендации

- Храните все шрифты в папке `assets/fonts/`.
- Для каждого начертания создавайте отдельный блок `@font-face`.
- Пути в `src` должны быть относительными от CSS-файла.

---

Если возникнут вопросы по подключению шрифтов или структуре проекта — смотрите этот файл или обращайтесь к документации CSS.
