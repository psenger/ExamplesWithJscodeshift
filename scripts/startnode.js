#!/usr/bin/env node -harmony

var repl = require('repl');
var context = repl.start("node-harmony$ ").context;

// Configure what's available in the REPL
context.util = require('util');
