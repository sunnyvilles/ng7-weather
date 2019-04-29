
## first time installation:

Run `npm install`  in command line where package.json file is present

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Implementation

Used Angular CLI for initial project workflow .All work done is inside the folder `src/app`.

* Single page application using angular 7
* Created services, component, test and tempaltes without any scaffolding .
* Lazy loading of Weather details .
* Used Angular material UI
* Unit test for the service
* Separate independent component for weather app
* Responsive UI

#things could be improved

* more tests
* used mat-table instead of mat-accordion in template UI , Improve UI
* data refresh ( automatic update ) after certain interval
* webpack and npm script setup rather than angular CLI
