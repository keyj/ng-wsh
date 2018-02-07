# ng-wsh
WSH.js package for Angular (>= 2)

# description
This repo encapsulates the WSH.js project (https://github.com/mattiasrunge/wsh.js) with additional config. This is necessary to compile the source to JavaScript ES5 in order to include it into an Angular app. 
Steps roughly include:
* transpiling the ES6 source to ES5 (into a directory wsh.js.es5)
* bundling all files from /lib with webpack (into a single file)
** path: build/bundle.js


# build (manual on local machine)

```
npm install
npm install --only=dev
npm run build
```

# build (with docker)

```
docker-compose run node /bin/bash /app/build-module.sh
```
* results in new versions of bundle.js and dist.js in build/

# Authors
* Janko Ahlbrandt (keyj)

# acknoledgements
* This uses the great work put into WSH.js (https://github.com/mattiasrunge/wsh.js) - thanks for a great project!