# VentToPolite｜快速回覆範本

> **內心盡情吐槽，外在保留體面。**
>
> VentToPolite is a bilingual, static website that turns common interpersonal situations into a quick roast, practical de-escalation tip, ready-to-send reply options, and a Cognitive Thinking Lens.

[![Bilingual](https://img.shields.io/badge/Language-繁體中文%20%7C%20English-purple.svg)](#)
[![Static Web](https://img.shields.io/badge/Platform-Static%20Web-blue.svg)](#)
[![Live Demo](https://img.shields.io/badge/Demo-Live%20Website-brightgreen.svg)](https://onliinen.github.io/vent-to-polite/)

👉 [Open the live app](https://onliinen.github.io/vent-to-polite/)

## How it works

The site runs in the browser and uses its built-in bilingual scenario templates. It does not call an AI service, require an API key, send the situation to a server, or need a backend. Familiar situations are matched against curated phrases; other inputs receive a general draft that can be edited before sending.

Because this is a template tool rather than a language model, it cannot reliably understand every unusual or nuanced situation. For the closest match, choose a scenario chip or mention the concrete behavior and the relationship involved. The app also includes a rage meter, copyable reply styles, and a Cognitive Thinking Lens with second-order thinking, pre-mortem risks, and first-principles prompts.

## Scenario coverage

Built-in examples and phrase matching cover common friction across friends, work, school, shared living, and daily life. Topics include communication tone, time and cancellations, money, chores and noise, guests and shared items, boundaries, uneven work, deadlines, credit, after-hours work messages, public email call-outs, household planning load, holiday scheduling pressure, and being pulled into friends’ disputes. Both Traditional Chinese and English scenario phrases are supported, regardless of the selected reply language.

## Run or publish

This is a static site. Open `index.html` in a browser, or publish the repository with GitHub Pages. No package install, API key, environment variable, or server is required.

## Project files

- `index.html` — page structure and text
- `style.css` — responsive visual design
- `app.js` — bilingual template matching, output rendering, and interaction
- `presets.js` — curated example scenarios and category data

## License

MIT. See [LICENSE](LICENSE).
