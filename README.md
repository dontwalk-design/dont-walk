# postcss-kickoff
Building up a set of files/config for each project

## Gotchas
When running `gulp` after running `npm install` on an existing project, If you 
encounter an `events.js:160` error, these steps resolve it:

- remove the node_modules directory
- run `npm cache clean`
- `npm install`

This problem occurred for me when working between Windows and OSX
