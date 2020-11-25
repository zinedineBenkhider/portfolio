# MyPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy
 Open package.json and then, in script section add the following script.

"scripts": {
    // ...
    "deploy": "ng b --prod --base-href https://USERNAME.github.io/DEPOT_NAME/ && npx ngh --dir=dist/Project_Name"
},

And now, you can build and deploy to GitHub Pages with a single command: npm run deploy



