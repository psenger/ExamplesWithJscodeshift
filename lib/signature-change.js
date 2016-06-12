/**
 * Created by psenger on 12/06/2016.
 *
 * Change the signature from a many to single object literal
 *
 * // A lovely recursive helper
 *     const flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
 *
 * @example
 *  node_modules/.bin/jscodeshift -t lib/signature-change.js test-harness/signature-change.input.js -d -p
 */

export default (fileInfo, api) => {
    const j = api.jscodeshift;
    const { expression, statement, statements } = j.template;
    const root = j(fileInfo.source);
    
    return j(fileInfo.source)
                .find(j.CallExpression)
                .replaceWith(
                    function(p){
                        console.log (  p.node ); 
                    }
                    // p => j.identifier(p.node.name.split('').reverse().join(''))
                )
                .toSource(); 
    
    // const j = api.jscodeshift;
    // const { expression, statement, statements } = j.template;
    // const root = j(fileInfo.source);
    //
    // return j(fileInfo.source)
    //             .find(j.CallExpression)
    //             .replaceWith(
    //                 function(p){
    //                     console.log (  p.node ); 
    //                 }
    //                 // p => j.identifier(p.node.name.split('').reverse().join(''))
    //             )
    //             .toSource();  
    
    //
    // const j = api.jscodeshift;
    // const {expression, statement, statements} = j.template;
    // const root = j(fileInfo.source);
    // // return j(fileInfo.source)
    // //     .find(j.Identifier)
    // //     .replaceWith(
    // //         p => j.identifier(p.node.name.split('').reverse().join(''))
    // //     )
    // //     .toSource();
    // const importDeclaration = root.find(j.ImportDeclaration, { source: {
    //                                                                         type: 'Literal',
    //                                                                         value: 'car'
    //                                                                     }
    //                                                                 });
    // console.log( importDeclaration );
    // const localName = importDeclaration.find(j.Identifier)
    //                                     .get(0)
    //                                     .node.name;
    // console.log( localName );
    // return root.find(j.CallExpression, { callee: {
    //                                             type: 'MemberExpression',
    //                                             object: {
    //                                                 name: localName
    //                                             },
    //                                             property: {
    //                                                 name: 'factory'
    //                                             }
    //                                         }
    //                                     })
    //                                     .toSource();
    //
    // // const jscodeshift = api.jscodeshift;
    // // const root = jscodeshift(fileInfo.source);
    // //
    // // // find declaration for "car" import
    // // const importDeclaration = root.find(jscodeshift.ImportDeclaration, {
    // //     source: {
    // //         type: 'Literal',
    // //         value: 'car'
    // //     }
    // // });
    // //
    // //
    // // // get the first local name for the imported module
    // // const localName = importDeclaration.find(jscodeshift.Identifier)
    // //                                             .get(0)
    // //                                             .node.name;
    // //
    // // // root
    // // //     .find(jscodeshift.Identifier)
    // // //     .forEach(function(path) {
    // // //         console.log( path );
    // // //     });
    // //
    // // // find where `.factory` is being called
    // // /**
    // //  {
    // //     callee: {
    // //         type: 'MemberExpression',
    // //         object: {
    // //             name: 'car'
    // //         },
    // //         property: {
    // //             name: 'factory'
    // //         }
    // //     }
    // // }
    // //  */
    // // let x = root.find( );
    // //
    // // return x.toSource();
    // //     // .replaceWith(nodePath => {
    // //     //     const { node } = nodePath;
    // //     //     node.arguments = [{ foo: 'bar' }];
    // //     //     return node;
    // //     // })
                                        
};
