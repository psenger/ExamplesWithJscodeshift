/**
 * Created by psenger on 12/06/2016.
 *
 * Remove all calls to console.log
 * 
 * @example
 *  node_modules/.bin/jscodeshift  -t lib/remove-consoles.js test-harness/remove-consoles.input.js -d -p
 */

//remove-consoles.js

export default (fileInfo, api) => {
    const j = api.jscodeshift;

    const root = j(fileInfo.source); // returns a collection of one node-path, which wraps the root AST node.

    // search for descendant nodes of a certain type
    // const callExpressions = root.find(j.CallExpression); // returns another collection of node-paths containing just the nodes that are CallExpressions.

    // just find console calls
    const callExpressions = root.find(j.CallExpression, {
        callee: {
            type: 'MemberExpression',
            object: { type: 'Identifier', name: 'console' }
        }
    });

    // now remove
    callExpressions.remove();

    return root.toSource();
};
