[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
Project Link: [https://darubiomunoz.github.io/portfolio-10-joblistingwithfiltering](https://darubiomunoz.github.io/portfolio-10-joblistingwithfiltering)
<br />
<p align="center">
  <a href="https://darubiomunoz.github.io/portfolio-10-joblistingwithfiltering">
    <img src="./src/assets/images/readme-logo.svg" alt="Logo" width="200" height="200">
  </a>
  <h1 align="center">Job Listing</h1>
  <p align="center">
    ReactJS
    <br />
    <a href="https://reactjs.org/docs/getting-started.html"><strong>Explore the ReactJS's docs »</strong></a>
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#status">Status</a></li>
    <li><a href="#what-i-learned">What I learned</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## 1. About The Project :round_pushpin:

![Product Name Screen Shot][product-screenshot]
![Product Name Screen Shot][product-screenshot-frontend]
![Product Name Screen Shot][product-screenshot-mobile]

As I write this README file, I'm starting this project and I'm very excited because It's the first time I'm applying Redux to one of my personal projects :stars:

I believe it's going to be difficult at first but I'm sure I can find a way to make it until the end of the project successfully with the help of my usual strategy search-read-ask :smile:

Also I'll be adding two sections to my README from now and on at final stage of the project to tell my experience about **What I learned** and **Continued Development**.
### Built With :computer:

This component is developed with:

* [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) _version: 5_
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) _version: 3_
* [React](https://reactjs.org/) _version: 17.0.1_
* [React-React-App](https://create-react-app.dev/) _version: 4.0.3_
* [React DOM](https://reactjs.org/docs/react-dom.html) _version: 17.0.1_
* [React Scripts](https://create-react-app.dev/docs/available-scripts/) _version: 4.0.3_
* [Redux](https://redux.js.org/) _version: 4.0.5_
* [React Redux](https://react-redux.js.org/) _version: 7.2.3_
* [Redux Toolkit](https://redux-toolkit.js.org/) _version: 1.5.0_
* [Normalize](https://necolas.github.io/normalize.css/) _version: 8.0.1_
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) _version: ECMAScript 6+_

<!-- GETTING STARTED -->
## 2. Getting Started :fire:

If you want to check out the website in production with github pages visit the link below.

* Link to the project:
  ```sh
  https://darubiomunoz.github.io/portfolio-10-joblistingwithfiltering
  ```

### Installation  :exclamation:

1. Install create-react-app globally in your device
   ```sh
    npm install -g create-react-app
   ```
   ```sh
    yaml install -g create-react-app
   ```

2. Clone the repo
   ```sh
   git clone https://github.com/darubiomunoz/portfolio-10-joblistingwithfiltering.git
   ```
   ```sh
   git clone git@github.com:darubiomunoz/portfolio-10-joblistingwithfiltering.git
   ```
   ```sh
   gh repo clone darubiomunoz/portfolio-10-joblistingwithfiltering
   ```

3. Install all the dependencies required with:
   ```sh
   npm install

   yaml install
   ```

4. Run the react development server:
    ```sh
    npm run start

    yaml run start
    ```
<!-- USAGE EXAMPLES -->
## 3. Usage :star2:

Feel free to download the code if you need a template for your own ***job listing*** and modify it as you want to fit your project, just remember to install all the required dependencies to run it properly.

_For more knowledge, please refer to the [Documentation](https://reactjs.org/)_

<!-- CONTRIBUTING -->
## 4. Contributing :tada:

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- Status -->
## 5. Status :memo:

The project is `Finished`.

<!-- WHAT I LEARNED -->
<!--
Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.
 -->
## 6. What I learned :mortar_board:

Well, as I expected, implementing Redux by myself for the first time was really confusing even when a made a course about **Redux**. I spend so much time trying to learn about Redux and its environment, the learning curve it's actually quite long because it isn't only Redux if not **React Redux**, **Redux Toolkit**, and **Redux Thunk** that I didn't used in this project but I will in the next personal project so that I dive more into the understand of Redux.

**I struggle a lot using Redux toolkit** at first, but later in the project I found the biggest wall that was **writing the reducer functions** inside of the store's slices to filter the list of job offers by categories. I was able to find a way to finish the reducer function by **reading much of the Redux and Redux Toolkit documentation**, **reading some articles** I found on the internet, and **searching on google a lot**.

These are some fractions of code where I struggled and came up with solutions.

```
  const initialState = {
    isActive: false,
    roles: [],
    levels: [],
    languages: [],
    tools: [],
  };
```

```
  filterByRoles: (state, action) => {
      const { roles } = action.payload;
      
      if (roles.length > 0) return state.filter((joboffer) => roles.includes(joboffer.role));
    },
    filterByLevels: (state, action) => {
      const { levels } = action.payload;

      if (levels.length > 0) return state.filter((joboffer) => levels.includes(joboffer.level));
    },
    filterByLanguages: (state, action) => {
      const { languages } = action.payload;

      if (languages.length > 0) return state.filter(joboffer => languages.every(item => joboffer.languages.includes(item)));
    },
    filterByTools: (state, action) => {
      const { tools } = action.payload;

      if (tools.length > 0) return state.filter(joboffer => tools.every(item => joboffer.tools.includes(item)));
    }
  }
```

```
  const handleDeleteFilter = (event) => {
    const category = event.target.parentNode.firstChild.firstChild.data;

    dispatch(deleteCategory({ category }));

    dispatch(noFiltersApplied());

    if (!roles.includes(category) && roles.length > 0) dispatch(filterByRoles({ roles }));
    if (!levels.includes(category) && levels.length > 0) dispatch(filterByLevels({ levels }));
    if (!languages.includes(category) && languages.length > 0)
      dispatch(filterByLanguages({ languages }));
    if (!tools.includes(category) && tools.length > 0)
      dispatch(filterByTools({ tools }));
  };
```

<!-- LICENSE -->
## 7. License :memo:

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## 8. Contact :e-mail:

Diego Rubio
[Linkedin](https://www.linkedin.com/in/darmdev/)
darubiomunoz@gmail.com

Project Link: [https://darubiomunoz.github.io/portfolio-10-joblistingwithfiltering](https://darubiomunoz.github.io/portfolio-10-joblistingwithfiltering)

<!-- ACKNOWLEDGEMENTS -->
## 9. Acknowledgements :clap:


* [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [React](https://reactjs.org/)
* [React-React-App](https://create-react-app.dev/) 
* [React DOM](https://reactjs.org/docs/react-dom.html)
* [React Scripts](https://create-react-app.dev/docs/available-scripts/)
* [Redux](https://redux.js.org/)
* [React Redux](https://react-redux.js.org/)

* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Normalize](https://necolas.github.io/normalize.css/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)

:copyright: _Diego Rubio - 2021_

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/darubiomunoz/portfolio-06-profilecardcomponent/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/darmdev/
[product-screenshot]: ./src/assets/images/code.png/
[product-screenshot-frontend]: ./src/assets/images/desktop_screenshot.png
[product-screenshot-mobile]: ./src/assets/images/mobile_screenshot.png