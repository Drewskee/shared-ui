<a name="readme-top"></a>

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


[![Downloads](http://img.shields.io/npm/dm/@infini-ui/react-add-to-calendar.svg)](https://npmjs.org/package/@infini-ui/react-add-to-calendar)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://653da60659baa1a4a87a42b4-tcfvymajkr.chromatic.com/?path=/docs/atoms-add-to-calendar--docs)

<br />

![infini_ui_storybook_banner](https://github.com/Drewskee/react-add-to-calendar/assets/1480387/b90f1a05-0a02-4383-86ba-c9f00800e81b)


<!-- PROJECT LOGO -->
<br />

<div align="center">
  <h3 align="center">React Add to Calendar</h3>

  <p align="center">
    An awesome add to calendar button to help you get back to the important things
    <br />
    <br />
    <a href="https://653da60659baa1a4a87a42b4-tcfvymajkr.chromatic.com/?path=/story/atoms-add-to-calendar--ghost">View Demo</a>
    ·
    <a href="https://github.com/Drewskee/react-add-to-calendar/issues">Report Bug</a>
    ·
    <a href="https://github.com/Drewskee/react-add-to-calendar/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

 ```
npm install @infini-ui/react-add-to-calendar --save
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SAMPLE CODE -->
## Example
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://653da60659baa1a4a87a42b4-tcfvymajkr.chromatic.com/?path=/docs/atoms-add-to-calendar--docs)

```
import { AddToCalendarButton, ICalendarEvent, IButtonVariant } from '@infini-ui/react-add-to-calendar';
import '@infini-ui/react-add-to-calendar/dist/infini-ui.tailwind.css';

const DELTA_DAYS = 1;

const event: ICalendarEvent = {
    title: " Your event title ",
    description: " This is your event description ",
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + DELTA_DAYS )),
    address: "1234 Infini UI Lane, Atlanta, Ga 12345",
    showBrandIcons: true
}

<AddToCalendarButton calendarEvent={event} variant={IButtonVariant.filled} />

```

`by default the button variant will be IButtonVariant.ghost`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Component API  
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://653da60659baa1a4a87a42b4-tcfvymajkr.chromatic.com/?path=/docs/atoms-add-to-calendar--docs)

Using tailwind by default

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `calendarEvent` | `ICalendarEvent` | **Required** |
| `variant` | `IButtonVariant` | optional - default ( IButtonVariant.ghost ) |
| `startIcon` | `JSX.Elemnent` | optional - defaults to plus sign |
| `wrapperCls` | `string` | optional - applys class name values to wrapper of entire widget |
| `buttonCls` | `string` | optional - applys class name values to initial button |
| `tooltipListWrapperCls` | `string` | optional - applys class name button dropdown list |
| `tooltipListItemCls` | `string` | optional - applys class name individual items in dropdown |

```
interface ICalendarEvent {
    title: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    durationInMinutes?: number;
    address?: string;
    showBrandIcons?: boolean;
}

export enum IButtonVariant {
  outlined = "outlined",
  filled = "filled",
  ghost = "ghost",
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing Your Changes

```
npm run storybook
```

<!-- ROADMAP -->
## Roadmap

- [x] Add Base Button Component
- [x] Default Tailwind Compiler
- [x] Add Additional Templates w/ Examples
- [ ] Tailwind Override Support with BEM class fallback - in progress
- [x] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Spanish
    - [ ] + more ([Request your language](https://github.com/othneildrew/Best-README-Template/issues)  )

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
Drew Stephenson - [@DrewStephenson](https://twitter.com/DrewStephenson) - drew@iamdrewstephenson.com

[![Linked-in](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white.svg)](https://www.linkedin.com/in/andrew-tech-stephenson)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [React Icons](https://react-icons.github.io/react-icons/search)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 


[![HitCount](https://hits.dwyl.com/Drewskee/react-add-to-calendar.svg)](https://hits.dwyl.com/Drewskee/react-add-to-calendar)