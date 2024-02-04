// import fds          from '../images/project/fds.png'
import portfolio    from '../images/project/portfolio.jpg'
import templafine   from '../images/project/templafine.jpg'
import swh          from '../images/project/swh.jpg'
import trading      from '../images/project/trading.jpg'
import varta        from '../images/project/varta.jpg'


const projectRecords = [
    {
        name        : 'Trading Plus',
        duration    : 'FEB 2023 - JAN 2024',
        summary     : 'Trading Plus is a trading platform designed to perform simulations of multiple predefined and custom strategies using advance tools like strategy builder and options simulator under F&O segments.',
        link        : 'https://tradingplus.in/',
        technologies: ["NodeJS/ExpressJS", "MongoDB", "ReactJS", "Redis", 'AWS', "BullMQ", "Stripe/PhonePe", 'Sendgrid/Twilio', 'Puppeteer', 'Brokers-Shoonya/Zerodha/Angelone'],
        thumbnail   : trading
    },
    {
        name        : 'Varta - A chat app',
        duration    : 'DEC 2022 - FEB 2023',
        summary     : 'A one to one realtime chat application developed along with some basic feature like friend list, login/logout and persisting chat list.',
        link        : 'https://varta-app-fe.onrender.com/',
        technologies: ["ExpressJS", "Socket.IO", "ReactJS", "React-Redux", "Bootstrap", "Javascript"],
        thumbnail   : varta
    },
    {
        name        : 'Templafine',
        duration    : 'MAR 2023 - APR 2023',
        summary     : 'Templafine app is a drag & drop editor for designing mobile responsive emails and landing pages. Use it online or embed it in your application.',
        link        : 'https://templafine.web.app/',
        technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "Javascript"],
        thumbnail   : templafine
    },
    {
        name        : 'Portfolio',
        duration    : 'SEP 2020 - NOV 2020',
        summary     : "An e-portfolio is an online representation of work you have created, as well as your skills and experiences along with worked on projects.",
        link        : 'https://www.tezu.ernet.in/hostels/swh/',
        technologies: ["ReactJS", "MaterialUI", "Javascript", "HTML", "CSS"],
        thumbnail   : portfolio
    },
    {
        name        : 'SWH Hostel',
        duration    : 'SEP 2020 - NOV 2020',
        summary     : "A web app developed for one of the Tezpur University's hostel to manage records of the borders, hostel rooms and other managerial activity related to the hostel.",
        link        : 'https://www.tezu.ernet.in/hostels/swh/',
        technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "Javascript"],
        thumbnail   : swh
    },

    // {
    //     name        : 'Location Based Book Sharing System',
    //     duration    : 'SEP. 2021 - NOV. 2021 ',
    //     technologies: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
    //     summary     : 'Location Based Book Sharing Application is a web-based application designed to facilitate borrowing and lending of books.',
    //     link        : '#',
    //     thumbnail   : fds
    // }
]

export default projectRecords;