/**
 * Created by psenger on 12/06/2016.
 *
 * Replace a deprecated function name with a new one.
 *
 * with http://astexplorer.net/ we can see the file test-harness/replace-deprecated.input.js has
 * @code
 *  {
 *   "type": "ImportDeclaration",
 *   "specifiers": [
 *     {
 *       "type": "ImportDefaultSpecifier",
 *       "local": {
 *         "type": "Identifier",
 *         "name": "g"
 *       }
 *     }
 *   ],
 *   "source": {
 *     "type": "Literal",
 *     "value": "geometry"
 *   }
 * }
 *
 * @example
 *  node_modules/.bin/jscodeshift  -t lib/replace-deprecated.js test-harness/replace-deprecated.input.js -d -p
 */

export default (fileInfo, api) => {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);
    /* find declaration for "geometry" import*/
    const importDeclaration = root.find(j.ImportDeclaration, {source: {type: 'Literal', value: 'geometry'}});
    /* get the local name for the imported module*/
    const localName = 
        importDeclaration.find(j.Identifier) /* find the Identifiers*/
            .get(0) /* get the first NodePath from the Collection*/
            .node.name; /* get the Node in the NodePath and grab its "name"*/
    return root.find(j.MemberExpression, {
        object: {name: localName},
        property: {name: 'circleArea'}
    }).replaceWith(nodePath => { /* get the underlying Node*/
        const {node} = nodePath;
        /* change to our new prop*/
        node.property.name = 'getCircleArea';
        /* replaceWith should return a Node, not a NodePath*/
        return node;
    }).toSource();
};
