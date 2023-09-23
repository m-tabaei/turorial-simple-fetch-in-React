# tutorial-simple-fetch-in-React

 It makes use of two important React principles: `useState` and `useEffect`.

1. `useState`: In this code, `useState` is used to define a local state variable called `posts`. Initially, it is set to `null`, and later it gets updated using `setPosts`.

2. `useEffect`: This function is used in React components to manage side effects, such as network requests. In this case, `useEffect` is used to send a request to the URL "https://jsonplaceholder.typicode.com/posts" to fetch posts.

   - `useEffect` takes a callback function as its argument. Inside this function, a `fetch` request is sent.
   - Using `.then()` and `.catch()`, after receiving a response from the API, the JSON data is converted into a JavaScript object and stored in the `posts` variable. Any errors that occur are logged to the console.

Finally, the retrieved data from the API is passed to the `Posts` component to display the posts on the webpage.

This approach of using `fetch` in a React component allows you to send requests to a server, receive data, and display it in your components.


![Code](https://github.com/m-tabaei/tutorial-simple-fetch-in-React/blob/main/fetch.JPG?raw=true)
![Slide1](https://github.com/m-tabaei/tutorial-simple-fetch-in-React/blob/main/fetch1.JPG?raw=true)


- 🔗 ([https://github.com/m-tabaei/tutorial-simple-fetch-in-React])
-
- 💻 Developed by Seyed Mohammad Tabaei
- 📆 Created - 2023
- 🔧 Technologies Used - React Hook, UseState and useEffect, fetch(Simple method)
- 🧑‍ Role - Frontend

- How to reach me : with my [e-mail](https://www.m-tabaie@gmail.com) and [linkedin](https://www.linkedin.com/in/mohammad-tabaei/)
