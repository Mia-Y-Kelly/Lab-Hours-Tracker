## NCSA Lab Hours Tracker
Use React to dynamically render a table of the lab hours.
Use Express to connect to MySQL backend. Node needs to be version 14 or higher.

#### Insert after line 303 in node_modules/react-scripts/webpack.config.js
```
fallback: {
  "buffer": false,  // Don't need to install
  "crypto": false,  // Don't need to install
  "timers": false,  // Don't need to install
  "stream": false,  // Don't need to install
  "fs": false,      // Need to install
  "util": false,    // Need to install
  "url": false,     // Need to install
},
```
