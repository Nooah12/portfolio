import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './skills/mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import github_icon from './github-svg.svg';
import github_icon_dark from './github-dark.svg';
import linkedin_icon from './linkedin-svg.svg';
import linkedin_icon_dark from './linkedin-dark.svg';
import html from './skills/html.svg';
import css from './skills/css.svg';
import js from './skills/js.svg';
import react from './skills/react.svg';
import next from './skills/next.svg';
import node from './skills/node.svg';
import tailwind from './skills/tailwind.svg';
import wordpress from './skills/wordpress.svg';
import php from './skills/php.svg';
import docker from './skills/docker.svg';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    github_icon,
    github_icon_dark,
    linkedin_icon,
    linkedin_icon_dark,
    html, css, js, react, next, node, tailwind, wordpress, php, docker,
};

export const workData = [
    {
        title: 'Movie app',
        description: 'Gradutation project using Next, TypeScript and Supabase',
        bgImage: '/movieTime-shows.jpg',
        liveUrl: 'https://movie-app-three-olive.vercel.app/',
        githubUrl: 'https://github.com/Nooah12/movie-app'
    },
    {
        title: 'Parking Time',
        description: 'A real-world project in collaboration with Parking Time.',
        bgImage: '/parking-time.jpg',
        liveUrl: 'https://parking-time-next.vercel.app/',
        githubUrl: 'https://github.com/hasuwini77/parking-time-next',
    },
    {
        title: 'reddit clone',
        description: 'Database interaction, authentication, CRUD',
        bgImage: '/reddit-clone.png',
        liveUrl: 'https://reddit-clone-two-rho.vercel.app/',
        githubUrl: 'https://github.com/Nooah12/reddit-clone'
    },
    {
        title: 'TheMealDB',
        description: 'Context and Dynamic Routing',
        bgImage: '/themealdbb.png',
        liveUrl: 'https://the-meal-db-phi.vercel.app/',
        githubUrl: 'https://github.com/Nooah12/TheMealDB'
    },
    {
        title: 'Task management app',
        description: 'Built using Test-Driven Development (TDD)',
        bgImage: '/task-manager.png',
        liveUrl: 'https://tmt-snowy.vercel.app/',
        githubUrl: 'https://github.com/Nooah12/TMT'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Mostly Next.js with TypeScript and Tailwind' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Frontend Developer at Futuregames' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Check out some of my projects below' }
];

export const toolsData = [
    { icon: assets.html, name: 'HTML' },
    { icon: assets.css, name: 'CSS' },
    { icon: assets.js, name: 'JavaScript' },
    { icon: assets.react, name: 'React' },
    { icon: assets.next, name: 'Next.js' },
    { icon: assets.node, name: 'Node.js' },
    { icon: assets.git, name: 'Git' },
    { icon: assets.mongodb, name: 'MongoDB' },
    { icon: assets.figma, name: 'Figma' },
    { icon: assets.tailwind, name: 'Tailwind' },
    { icon: assets.wordpress, name: 'WordPress' },
    { icon: assets.php, name: 'PHP' },
    { icon: assets.docker, name: 'Docker' },
];

export const linkIcons = [
    { icon: assets.github_icon, iconDark: assets.github_icon_dark, link: 'https://github.com/Nooah12' },
    { icon: assets.linkedin_icon, iconDark: assets.linkedin_icon_dark, link: 'https://linkedin.com/in/noah-gordon12/' },
]