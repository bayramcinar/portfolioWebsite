import React from 'react';
import ProjectBox from './projectBox';
import exchange from "../img/exchange.png";
import hr from "../img/hr.png";
import menu from "../img/menu.png";
import movie from "../img/movie.png";
import ortalama from "../img/ortalama.png";
import password from "../img/password.png";
import pomodoro from "../img/pomodoro.png";
import quiz from "../img/quiz.png";
import radio from "../img/radio.png";
import weather from "../img/weather.png";
import world from "../img/world.png";
import menu2 from "../img/menu2.jpeg";
import todo from "../img/todo.png";
import bilgis from "../img/bilgis.png";
import angularMovie from "../img/angularMovieCard.png";

import info from "../img/project.png";

function Projects() {
  return (
    <div id='projects'>
      <div className='infoArea' style={{ margin: "30px" }}>
        <img className='info' src={info} alt="Info Icon" />
        <h2 className='infoText'>Projects</h2>
      </div>
      <div className='projectList' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", maxWidth: "80%", margin: "0 auto" }}>
        <ProjectBox img={exchange} name={"Exchange App"} explain={"I made an Exchange App by using HTML, CSS and JavaScript."} link={"https://bayramcinar.github.io/exchangeApp/"} github={"https://github.com/bayramcinar/exchangeApp"}/>
        <ProjectBox img={hr} github={"https://github.com/bayramcinar/HumanResourcesApp"} name={"Human Resources App"} explain={"A human resources app that I created by using ReactJS, NodeJS, and MySQL in 20 days in my 2023 summer internship period."} />
        <ProjectBox img={world} name={"Word Pyramid"} explain={"In this project, I made my first game by using HTML, CSS, and JavaScript. I called it WORD PYRAMID. You must find the three words. One of them is 5 letters, another one is 4 letters and the last one is 3 letters. There is a matrix in the game that includes the letters that do not include the first letters. There is a point area in the game. You will get points according to the words which are you find. Also, there is a time. You must find 3 words in 1 min. In this project, I learned drop and drag in JavaScript."} link={"https://bayramcinar.github.io/wordPyramid/"} github={"https://github.com/bayramcinar/wordPyramid"}/>
        <ProjectBox img={weather} name={"Weather App"} explain={"In this project, I made a weather app by using HTML, CSS, and JavaScript. There are different videos according to the city's weather. There is a search panel, you can search the city that you want to learn the weather of it. There are temperature, humidity, and wind speed. In this project, I learned how I can use API in JavaScript."} link={"https://bayramcinar.github.io/weatherApp/"} github={"https://github.com/bayramcinar/weatherApp"}/>
        <ProjectBox img={radio} name={"Radio App"} explain={"In this project, I made a radio app by using HTML, CSS and JS. I learned using play button and volume control in Javascript. There are different categories on the website such as pop, slow, arabesque and news & sport. And there is a music player. This project is also responsive which means suitable for mobile devices."} link={"https://bayramcinar.github.io/radioApp/"} github={"https://github.com/bayramcinar/radioApp"}/>
        <ProjectBox img={quiz} name={"Quiz App"} explain={"In this project, I made a quiz website. While making this, I used HTML, CSS, JavaScript and Python. I got the questions from the internet by using web scarping in python. There are time and point in the app. You can see the true answer when you choosed a section. The app selects 10 random questions from the data. I learned making counter."} link={"https://bayramcinar.github.io/quizApp/"} github={"https://github.com/bayramcinar/quizApp"}/>
        <ProjectBox img={pomodoro} link={"https://bayramcinar.github.io/pomodoroApp/"} github={"https://github.com/bayramcinar/pomodoroApp"} name={"Pomodoro App"} explain={"In this project, I made a pomodoro app by using HTML, CSS and JavaScript. You can select pomodoro time and break time. Also you can select a music to get relax when you are studying. This app has basic theme. You can stop music while studying if you want. In addition, you can stop pomodoro time and break time."}  />
        <ProjectBox img={password} name={"Random Password Creator"} explain={"In this project, I made a random password creator by using HTML, CSS and JavaScript.When you are creating the password, you can add Upper case letters, lower case letters, numbers and characters. Also you can determine the length of your password. End of the process you will see the password on top of the card."} link={"https://bayramcinar.github.io/randomPasswordCreator/"} github={"https://github.com/bayramcinar/randomPasswordCreator"} />
        <ProjectBox img={menu2} name={"Full stack Cafe Menü"} explain={"I made a cafe menu by using react nodejs and mysql."} />
        <ProjectBox img={menu} name={"Restaurant Menu"} explain={"In this project, I tried to make a basic restaurant menu for the customer. The page number can be increased."} github={"https://github.com/bayramcinar/restaurantMenu"} link={"https://bayramcinar.github.io/restaurantMenu/"}/>
        <ProjectBox img={movie} name={"Recommend Movie WebSite"} explain={"In this project, I made a website which can recommend a random movie. You can see movie name, movie description, movie time, movie release time and IMDb point. Also you can watch the trailer of the movie. I used HTML, CSS, JS and Python. I got the data from IMBb website. I made a json by using Pyhton Selenium Modul."} link={"https://bayramcinar.github.io/recommendMovieWebSite/"} github={"https://github.com/bayramcinar/recommendMovieWebSite"} />
        <ProjectBox img={ortalama} github={"https://github.com/bayramcinar/ortalamaHesaplama"} link={"https://bayramcinar.github.io/ortalamaHesaplama/"} name={"Ortalama Hesaplama"} explain={"In this project, I made a university point calculator. I used HTML, CSS and JavaScript. You should write lecture name, its credit and letter point. Also, you can add your previous point and total credits."} />
        <ProjectBox img={todo} name={"ToDo App"} explain={"In this project, I made a TO-DO App. While making this I used HTML, CSS, and JavaScript. I learned how can I use Local Storage in JavaScript. There is an input area in the app. You can add your content from there. You can edit your contents. Also, you can delete them or mark them as you have done."} link={"https://bayramcinar.github.io/ToDoApp/"} github={"https://github.com/bayramcinar/ToDoApp"}/>
        <ProjectBox img={bilgis} name={"Bilgiş Harita"} explain={"In this project, I made a company website for Bilgiş Harita Mühendislik."} link={"https://bilgisharita.com.tr/"} github={"https://bilgisharita.com.tr/"}/>
        <ProjectBox img={angularMovie} name={"Movie Card"} explain={"In this project, I made a my first angular project. I made a movie card project."} link={"https://angular-movie-card.vercel.app/"} github={"https://github.com/bayramcinar/angularMovieCard"}/>
      </div>
    </div>
  )
}

export default Projects;
