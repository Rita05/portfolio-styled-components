import React from 'react';
import chatIcon from '../../../assets/images/chat.svg';
import weatherApiIcon from '../../../assets/images/weather-Api.svg';
import todoListIcon from '../../../assets/images/todo-list.svg';
import portfolioIcon from '../../../assets/images/portfolio.svg';

export const projects = [
    {
        icon: `${chatIcon}`,
        title: 'User Chat',
        description: 'An individual chat application on  React, Redux, and Node.js, featuring user registration, authentication, private real-time messaging, and efficient backend data management',
        stack: ['React', 'Redux', 'React-Bootstrap', 'Javascript', 'Node.js', 'CSS'],
        link: 'https://github.com/Rita05/chatApp'
    },
    {
        icon: `${weatherApiIcon}`,
        title: 'Weather Api',
        description: 'Weather widget on React displays the average temperature every three days in Rostov-on-Don, using data obtained from a weather API',
        stack: ['React', 'React-Bootstrap', 'Javascript', 'CSS'],
        link: 'https://github.com/Rita05/Weather-Api-Project'
    },
    {
        icon: `${todoListIcon}`,
        title: 'Todo List',
        description: 'To-do List is an application for managing your daily chores, work projects, etc. It helps to improve time management and has library of components on Storybook',
        stack: ['React', 'Redux', 'StoryBook', 'Jest', 'Vite', 'WindiCSS'],
        link: 'https://github.com/Rita05/todolist'
    },
    {
        icon: `${portfolioIcon}`,
        title: 'PortFolio',
        description: 'The portfolio application offers a brief overview of a person as a specialist, detailing its education, places of work, and professional skills. It also provides contact information for further communication',
        stack: ['React', 'TypeScript', 'Styled Components', 'Webpack'],
        link: 'https://github.com/Rita05/portfolio-styled-components'
    },
]





