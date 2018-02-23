import {EventEmitter, Injectable} from '@angular/core';
import {ProjectModel} from './project.model';

@Injectable()
export class ProjectsService {

  projects: ProjectModel[] = [];

  onClickProjectEvent = new EventEmitter<ProjectModel>() ;

  onClickProject(project: ProjectModel) {
    this.onClickProjectEvent.emit(project);
  }

  loadProjects() {
    let project = new ProjectModel('Healthcare Management System',
                                    'To facilitate doctors and service desk personnel to manage healthcare needs.',
                                    'Platform for the healthcare specialists to store information, ping alerts, ' +
                                    'save patient and doctor details, send emergency messages and more.',
                                    'Java, Html, CSS, JQuery, JavaScript, AJAX,Spring MVC, Hiberenate, Junit',
                                    'https://github.com/ShivaChaithanyaReddy/Healthcare-Management-System',
                                    null,
                                    'FullStack',
                                    '../../assets/Images/hospitalManagement/main.PNG');
    this.projects.push(project);

      project = new ProjectModel('Vehicle Tracker',
      'System which is used to track the current condition and location\n' +
      'of all available vehicles',
      'This application is used to display the current condition of the \n' +
       'vehicle at any point of time. User will get all the reading of the vehicle every \n' +
       '60 seconds and can locate the vehicle on the map. Provides a user with well designed\n' +
       'user interface to track his/her vehicle. The data is obtained from a Mock API that generates ' +
        'vehicle readings every 60 secs. Please feel free to visit the live demo of this project' +
        ' using below project link...',
      'Angular 4, HTML, CSS, BootStrap, Spring MVC, MySql, Hibernate ',
      'https://github.com/ShivaChaithanyaReddy/VehicleTracker',
      'http://vehicle-tracker-application.s3-website-us-east-1.amazonaws.com', 'FullStack',
        '../../assets/Images/vehicleTracker/vehicle.PNG');

    this.projects.push(project);

    project = new ProjectModel('Chat Room App',
      'Application used to chat with friends and family',
      'Web application built on angular 4, that facilitates user to search for the people and add them to friend circle.' +
      'And a well designed User Interface to communicate with the friends. JavaScript technologies are used for both frontend and backend.',
      'Angular 4, HTML, CSS, BootStrap, NodeJS, Express, MongoDB, Mongoose, Hibernate',
      'https://github.com/ShivaChaithanyaReddy/chat-room-app',
      '', 'FullStack',
      '../../assets/Images/fullStack.PNG');

    this.projects.push(project);

    project = new ProjectModel('Phi Beta Lambda Clothing Closet',
      'To design a web-based application that sells donated “gently used” and new clothing articles for men and women. ',
      ' Implemented two different user Interface, one for the Admin and Members, the\n' +
      'other open to public for viewing and purchasing the clothes.',
      'Html, CSS, Javascript, PHP, Bootstrap, MySql',
      'https://github.com/ShivaChaithanyaReddy/phi-beta-lambda-clothing-closet',
      '', 'FullStack',
      '../../assets/Images/fullStack.PNG');
    this.projects.push(project);


    project = new ProjectModel('Student Exam App - Android based application',
      'To facilitate students take the test on android powered devices.',
      'The Surprise Test app is a hybrid application used to conduct tests on an android powered device - Aakash tablet. ' +
      'This application is directly linked with the server. Any number of students can take this test simultaneously.',
      'Java, HTML, CSS, Javascript, Android, AndroidStudio ',
      'https://github.com/ShivaChaithanyaReddy/student-exam-app',
      '', 'Android',
      '../../assets/Images/androidDefault.PNG');
    this.projects.push(project);

    project = new ProjectModel('ITunes Top Paid Apps',
      'Android application used to display the top paid apps of iTunes and to maintain a record of users favourite applications',
      'Application contains a ListView of iTunes Top Paid Apps. The data is parsed from "iTunes Top Paid Apps" rss feed and is used to ' +
      'display the details of apps. Async task is used to access the API and data is parsed using JSON Parser, This  ' +
      'also facilitates user to add applications to favourite and delete them when required. Shared Preferences is used to store the favourite applications' +
      'marked by the user. ',
      'Android, ListView, JSON Parsing, AsyncTask, Shared Preferences ',
      'https://github.com/ShivaChaithanyaReddy/itunes-top-paid-apps',
      '', 'Android',
      '../../assets/Images/Itunes/MainItunes.PNG');
    this.projects.push(project);

    project = new ProjectModel('TedPodCast',
      'Android application used to play episodes from "TED Radio Hour"',
      'This application is used to display and play episodes from “TED Radio Hour” channel.Based on the user preference podcast items are' +
      'displayed in two different modes - linear list and grid view. AsyncTask is used to communicate with the podcast and to parse the generated' +
      'XML results. Since this is a large data set, only limited number of view are displayed to provide better user experience and based on scrolling ' +
      'new items are displayed. This also provides complete description about the specific episode when clicked. ',
      'Android, AndroidStudio, AsyncTask, RecyclerView, XML parsing',
      'https://github.com/ShivaChaithanyaReddy/TedPodCast',
      '', 'Android',
      '../../assets/Images/ted/MainTed.PNG');
    this.projects.push(project);

    project = new ProjectModel('Social Networking Application',
      'Social networking application to connect with friends, to provide real time location tracking and share trip details ',
      'Enables user to signup and login using username/password by using Google authentication in firebase.\r\n' +
      'User will be able to edit and update all the profile contents including the picture.\n' +
      'Each user will be able to search for people and send friend request and can accept friend requests,\n' +
      'Users will be able to create trips, with chat room for the members, and will be able to see the trips created by his/her friends to join them.\n' +
      'Each user will have their own version of chat room and can delete the messages they had sent.\n' +
      'Facilitates users in a trip to search for places to be visited and add them to that trip along with a feature to delete already added place.\n' +
      'Users in a trip will be able to see round-trip route on a google map with places, which are added already to that trip.\n' +
      'Users in a trip will be able to launch Google Maps app(Android App for Google Maps) to navigate between the places, which are added already to that trip.',
      'Html, CSS, JQuery, Bootstrap',
      'https://github.com/ShivaChaithanyaReddy/social-networking-application',
      '', 'Android',
      '../../assets/Images/androidDefault.PNG');
    this.projects.push(project);

    project = new ProjectModel('The GameDB',
      'The GameDB is a game searching app using gamedb.net API',
      'This application is used to search for games and view its details. Using AsyncTask and XML parsing Games are retrieved from the GamesDB API based on the search' +
      'keyword given by the user. User will be able to play trailer of the game, which is a webView. User will be able to see all the ' +
      'similar games of the current game.',
      'Android, AndroidStudio, XMLPullParser, AsyncTask',
      'https://github.com/ShivaChaithanyaReddy/TheGameDB--Android-Application',
      '', 'Android',
      '../../assets/Images/MoviesDB/moviesDB.PNG');
    this.projects.push(project);

    project = new ProjectModel('Movie Trends',
      'Angular based application used to display movies in real time and complete details about the movies and TV series.',
      'Data is retrieved in real time from TheMoviesDB API using HttpModule. Displays top trending movies and Tv series.' +
      'User will be able to navigate through various movies based upon the selection. Angular routing is used to navigate the user.' +
      'The movie page also uses routing to navigate through movie overview, review, cast etc . . . This responsive application includes Home, Movie, ' +
      'TV show, News and Celebrity Pages\n',
      'Angular 4, HTML, CSS, Bootstrap, TheMoviesDB API ',
      'https://github.com/ShivaChaithanyaReddy/movie-trends',
      '', 'FullStack',
      '../../assets/Images/fullStack.PNG');
    this.projects.push(project);

    project = new ProjectModel('MapReduce - Movie Recommendation System',
      'To provide movie recommendation based upon a movie user selected.',
      'This MapReduce project uses two datasets and cosine similarity to suggest movies based upon the user selection. ' +
      'User will  be able to filter the suggested results based on top results, similarity value and ratings.' +
      'To achieve most precise results two similarity metrics - statistical correlation and cosine similarity - are used.' +
      'Amazon EC2 is used to run the hadoop nodes.Same project is developed in Spark to perform the comparative study on efficiency',
      'Hadoop, MapReduce, EC2, Java',
      'https://github.com/ShivaChaithanyaReddy/MapReduce---Movie-Recommendation',
      '', 'Datascience',
      '../../assets/Images/Mapreduce/mapreducemain.PNG');
    this.projects.push(project);

    project = new ProjectModel('Spark - Movie Recommendation System',
      'To provide movie recommendation based upon a movie user selected.',
      'This Spark project uses two datasets and cosine similarity to suggest movies based upon the user selection. ' +
      'User will  be able to filter the suggested results based on top results, similarity value and ratings.' +
      'To achieve most precise results two similarity metrics - statistical correlation and cosine similarity - are used.' +
      ' Same project is developed in MapReduce to perform the comparative study on efficiency',
      'Spark, scala, EC2',
      'https://github.com/ShivaChaithanyaReddy/Spark---Movie-Recommendation-System',
      '', 'Datascience',
      '../../assets/Images/Mapreduce/mapreducemain.PNG  ');
    this.projects.push(project);
    return this.projects;
  }

  getProjects(condition: string) {
    if (condition === 'all') {
      return this.projects;
    }
    const filteredProjects: ProjectModel[] = [];
    console.log(filteredProjects);
    for (let project of this.projects) {
      if (project.type === condition) {
        filteredProjects.push(project);
      }
    }
    console.log(filteredProjects);
    return filteredProjects;
  }
}
