# svelte-testing-library-meetup

To run it:

```bash
cd svelte-testing-library-meetup
npm install
npm run dev
```

For testing:

```bash
npm run test
npm run test:watch
npm run test:coverage
```

## Setup

```bash
npm install @testing-library/svelte

npm install --save-dev jest

npm install --save-dev @testing-library/jest-dom

npm install svelte-jest
```

We add this scripts to the **package.json**

```javascript
    {
        "scripts": {
            "test": "jest src",
            "test:watch": "npm run test -- --watch",
            "test:coverage": "npm run test -- --coverage"
        }
    }
```

We add the next script to the **jest.config.js**

```javascript
module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "svelte-jest"
  },
  moduleFileExtensions: ["js", "json", "svelte"],
  coverageReporters: ["html"],
  bail: false,
  verbose: false,
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
```

To run babel

```bash
npm install babel-jest

npm install @babel/preset-env
```

And we add in the **.babelrc** file

```javascript
    {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "node": "current"
                    }
                }
            ]
        ]
    }
```
