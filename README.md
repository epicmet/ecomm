# Ecomm

This project is a simple e-commerce web project running with nodeJs. This project was origanilly made by Stephen Grider on [this](https://www.udemy.com/course/javascript-beginners-complete-tutorial/) course.

![Website overview](./.github/web-overview.png)

## Usage

in order to see the complete website, you can clone this repo and use the command below on root of this repo

```bash
npm run dev
```

then navigate to localhost:3000

## Bugs :bug:

I'm not yet an expert when it comes to backend and nodeJs. There are two weird bug that I could not figure out why the happen!

1. when you add something to your cart, the item will be added to the cart successfully BUT after that when express tries to redirect user to /cart, the css file won't load OR browser will show "The site can't be reached" Error! Keep that in mind I used the same code to redirect user in many other places in this exact repo, they work well but this one won't :/

2. For some reason Chrome won't upload css on /admin/products route! On console you'll see a MIME type error BUT the same css will load on firefox and MIME type is ok!!!
