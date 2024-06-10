# Introduction

This is the frontend application for weather application. ReactJS and scss is used to create the application and client side rendering approach has been taken. It calls the weather application backend to get the details about the weather forecast and displays them.

# Design diagram

![design diagram](https://github.com/Paul-Ayanava/weather-fe/blob/main/public/weather-diagram.svg)

The applications is dockerised and the docker image is pushed to azure container regsitry. The image is then hosted using azure web app. 

# Overview

In the application, the solid principles have been followed. The components are broken down into small single responsibility components. React functional components along with react hooks are used to create the application. The application is created using typeScript to ensure type safety across the application.

For unit testing the application jest along with react testing library has been used. For end to end testing, playwright has been used.