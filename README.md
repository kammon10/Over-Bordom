

# Over-Bordom
![Screen Shot 2022-04-24 at 2 13 53 PM](https://user-images.githubusercontent.com/48331256/164994824-d752cf8f-2253-423a-aff6-4ab18b22230b.png)



## Description

When an abundance of unwanted free time is on your hands and creativity has utterly abandoned you, reach for the Over-Boredom app! This app allows a user to chose a category of activity based on their current mood, just select from the dropdown menu and hit submit! An idea based on the chosen category will appear with the option to accept the idea or role the dice and find something else. Feeling especially indecisive? select all categories and find out what happens! You could find yourself planting a tree or giving everyone in your phone a personal ringtone. Once a user has accepted an idea, it will be saved to the accepted Ideas page where the user can view, complete or delete the idea. Upon completion, the idea will be saved in the completed Ideas page as a record of your adventures.

## Motivation
- Demonstrate an understanding of React, Router, and intercepted testing
- Create a multi-page application with React Router

## Technology Stack
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

## How to Use
clone down this repo and install npm
then 'npm start'

## Features
A user can accept an idea and add it to their accepted ideas page. Once an idea is completed, the user can save to completed ideas
### Main Dashboard
![Screen Shot 2022-04-24 at 2 14 57 PM](https://user-images.githubusercontent.com/48331256/164994865-0d8c72de-61c7-4aaa-ae44-18b7f8ab5792.png)

A form appears on the main dashboard giving the user an optional category selection or the user can select all categories
before hitting submit. Once a category is selected a card will display under the form showing a random idea the user can choose to complete. If the user is unhappy with the idea they can choose to generate another idea in the same category or 
choose a different category.


### Accepted Ideas
Once an Idea is saved. The user can see all accepted Ideas on the corresponding page with the option to complete an idea
or delete it. 

### Completed Ideas
![Screen Shot 2022-04-24 at 2 25 15 PM](https://user-images.githubusercontent.com/48331256/164995151-119db0d8-c744-40d1-8728-91812b03774b.png)
Once an idea is completed, it will show up on the Completed Ideas page as a record of completed activities. the cards on this page do not have the option to be deleted.

<details>
  <summary>Under the Hood</summary>
  an idea retrieved using the fetch API and on 'submit'
</br>

### Testing

Rec-Me is fully end-to-end tested with Cypress. URLs are tested and network requests are stubbed.
