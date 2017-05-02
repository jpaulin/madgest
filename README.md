## References to materials, in regular expressions and languages
[Regular Expression Matching Can Be Simple And Fast](https://swtch.com/~rsc/regexp/regexp1.html)

## Jaylist

My internal reminder for kicking butt. (Jukka)

- [ ] Read in a single file, parse with 'esprima'
- [ ] Check out what 'lex' does
- [ ] Tabulate some speed results of parsing a JS to syntax tree

#!/bin/bash

# Full text search of string within all JavaScript files
# 
# Searches in current dir ('.') and recurses into all subfolders.
#
# Switches: 
#   --files           Show only file names where match
#   --count           Show only total count of occurrences
#   --exclude_node    Do not search under ./node_modules/
# 
# Examples
#
#   in-js --files table           Show only file names where match
#   in-js --count table           Show only total count of occurrences
#   in-js --exclude_node table    Do not search under ./node_modules/

# I started on this project on 2.5.2017. The need was immediate, though
# not so critical. I was working on a JavaScript project, and wanted
# to check where in the source certain packages were used. In JS, this
# is a line like: 
#   var x = require('sth');
#
# Instead of writing a cumbersome long terminal command, I wanted a short
# 'in-js'

# Improvements: 
# - how much should this project lean in to JavaScript -only ?
# - make basic search reasonably fast
# - check that tools exist, which this script needs: find + grep + wc + xargs
# - limit: stop after N hits
# - show only file names, etc. (essentially, allow passing
#   appropiate parameters to 'grep') 

# Case: 1 parameter = expression, no switches

# Find all files, filter only '.js' files, and feed to 
# grep via the 'xargs'

# Expensive: first show all files, then count them
find . -type f | grep '\.js$'
fcount=`find . -type f | grep '\.js$' | wc -l`
echo "Done, found $fcount JavaScript files"
