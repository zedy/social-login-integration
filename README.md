# Viaggiare
A social login integration application
---
Just a simple web app built using Vite and React that offers users to login/register using social platforms and/or credential based login.

### Tech stack:
- React
- Vite
#### Additional Libraries
- AntDesign
- React hook form
- Lodash
- Axios
- TailwindCSS
- {...other}

### How to run
1. `git clone git@github.com:zedy/social-login-integration-web.git` or download the Zip and extract somewhere localy.
2. Download the `.env` file [^1] or create a file called `.env` from the `.env.sample` and populate it yourself. (in order for the Oauth to work you will have to create OAuth apps for each provider. This readme doesn't cover that)
3. Install dependacies: `npm i`
4. Run the server `npm run dev` (make sure you also have the [nodejs server](https://github.com/zedy/social-login-integration-api) up and running first) 

### Running tests
`npm run test`


[^1]: You will have to contact me for the env