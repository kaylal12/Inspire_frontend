# Project 2 - Inspire

## Overview

In October, there is an art challenge known as [Inktober](http://mrjakeparker.com/inktober). I have taken part in this challenge by drawing every day in October with ink and posting it through instagram. As I thought of what application to create, I decided I wanted to incorporate art into it.

I have created a full stack application that allows users to create profiles and upload photos of their art to share with others. This is similar to how instagram works, however is focused solely on art.

This application is built using javascript and ajax to communicate with the backend.

I have hopes to incorporate features such as "following" other users, liking and commenting on photos, and also adding in a "prompt of the day" or perhaps even a "challenge of the month" similar to what Inktober is.

[Inspire API Repo](https://github.com/kaylal12/Inspire_api)

[Check out Inspire here](http://kaylal12.github.io/Inspire_frontend/)

## Process

### User Stories

As a user:
* I can register.
* I can log in.
* I can explore user profiles.
* I can explore photos.

As a logged in user:
* I can create a profile.
* I can edit my profile.
* I can delete my profile.
* I can upload photos.
* I can edit photos.
* I can delete photos.
* I can log out.

A profile has:
* profile photo
* name (username?)
* description
* photos

Later add ons:
* A logged in user can comment on photos.
* A logged in user can like photos.
* A logged in user can follow another user.

### Wireframes

[Home&Register](img/wireframe1.JPG)
[Profile&Explore](img/wireframe2.JPG)

After coming up with the idea for the application, I started by creating some user stories to help me figure out how the application needs to work and some wireframes to help me form the layout.

I created a basic structure for the frontend with html and css and then went on to create the database.

Once everything was working with the database, I started to create the ajax requests necessary so that the frontend could communicate with the backend.

I think I was a little ambitious at the start, with everything that I had wanted to do, so I had to scale back and make sure that the basics could work before heading into other features (such as commenting and liking photos).

## Unsolved Problems

As of right now, the application allows users to register, log in, and create a profile. There are still quite a few bugs in the application involving the display of the response from the ajax requests.

Also, users are able to upload photos however, they are not being displayed correctly.

This application will continue to be worked on and will hopefully have all the features that were initially planned for it.











