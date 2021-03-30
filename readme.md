mandeep@273-k:~/Desktop/nodejsprojects/crudapp$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (crudapp) project-tracker
version: (1.0.0) 
description: WEB app to track your projects
entry point: (server.js) 
test command: 
git repository: git@github.com:mandeep-kafle/project-tracker.git
keywords: node,mongodb
author: Mandeep Kafle
license: (ISC) 
About to write to /home/mandeep/Desktop/nodejsprojects/crudapp/package.json:

{
  "name": "project-tracker",
  "version": "1.0.0",
  "description": "WEB app to track your projects",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/mandeep-kafle/project-tracker.git"
  },
  "keywords": [
    "node",
    "mongodb"
  ],
  "author": "Mandeep Kafle",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/mandeep-kafle/project-tracker/issues"
  },
  "homepage": "https://github.com/mandeep-kafle/project-tracker#readme"
}


Is this OK? (yes) n
Aborted.


mandeep@273-k:~/Desktop/nodejsprojects/crudapp$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (crudapp) Project-tracker
Sorry, name can no longer contain capital letters.
package name: (crudapp) project-tracker
version: (1.0.0) 
description: web app to track projects
entry point: (server.js) 
test command: 
git repository: 
keywords: node
author: Mandeep Kafle
license: (ISC) 
About to write to /home/mandeep/Desktop/nodejsprojects/crudapp/package.json:

{
  "name": "project-tracker",
  "version": "1.0.0",
  "description": "web app to track projects",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [
    "node"
  ],
  "author": "Mandeep Kafle",
  "license": "ISC"
}


Is this OK? (yes) 
mandeep@273-k:~/Desktop/nodejsprojects/crudapp$ npm i express morgan ejs body-parser dotenv mongosse axiosnpm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/mongosse - Not found
npm ERR! 404 
npm ERR! 404  'mongosse@latest' is not in the npm registry.
npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
npm ERR! 404 
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/mandeep/.npm/_logs/2021-03-30T17_42_33_892Z-debug.log
mandeep@273-k:~/Desktop/nodejsprojects/crudapp$ sudo npm i express morgan ejs body-parser dotenv mongosse axios
[sudo] password for mandeep: 
npm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/mongosse - Not found
npm ERR! 404 
npm ERR! 404  'mongosse@latest' is not in the npm registry.
npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
npm ERR! 404 
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2021-03-30T17_42_49_022Z-debug.log
mandeep@273-k:~/Desktop/nodejsprojects/crudapp$ sudo npm i express morgan ejs body-parser dotenv mongoose axios
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN project-tracker@1.0.0 No repository field.

+ dotenv@8.2.0
+ axios@0.21.1
+ ejs@3.1.6
+ morgan@1.10.0
+ body-parser@1.19.0
+ express@4.17.1
+ mongoose@5.12.2
added 103 packages from 134 contributors and audited 103 packages in 9.108s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

mandeep@273-k:~/Desktop/nodejsprojects/crudapp$ sudo npm i express morgan ejs body-parser dotenv mongoose axios
npm WARN project-tracker@1.0.0 No repository field.

+ morgan@1.10.0
+ body-parser@1.19.0
+ ejs@3.1.6
+ dotenv@8.2.0
+ axios@0.21.1
+ mongoose@5.12.2
+ express@4.17.1
updated 7 packages and audited 103 packages in 4.416s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities

mandeep@273-k:~/Desktop/nodejsprojects/crudapp$ npm install --save-dev nodemo
npm WARN project-tracker@1.0.0 No repository field.

+ nodemo@1.0.0
added 1 package from 1 contributor and audited 104 packages in 3.459s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

mandeep@273-k:~/Desktop/nodejsprojects/crudapp$ ^C
mandeep@273-k:~/Desktop/nodejsprojects/crudapp$ npm uninstall nodemo
npm WARN project-tracker@1.0.0 No repository field.

removed 1 package and audited 103 packages in 1.96s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

mandeep@273-k:~/Desktop/nodejsprojects/crudapp$ npm install --save-dev nodemon

> nodemon@2.0.7 postinstall /home/mandeep/Desktop/nodejsprojects/crudapp/node_modules/nodemon
> node bin/postinstall || exit 0

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.1 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN project-tracker@1.0.0 No repository field.

+ nodemon@2.0.7
added 116 packages from 52 contributors and audited 220 packages in 10.252s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities