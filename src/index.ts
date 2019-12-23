import * as ts from 'typescript'

export = function createTransformer(context: ts.TransformationContext) {
  return function(sourceFile: ts.SourceFile) {
    return ts.visitNode(sourceFile, transformer(context))
  }
}

function transformer(context: ts.TransformationContext): ts.Visitor {
  function visitor(node: ts.Node): ts.Node {
    if (ts.isCallExpression(node)) {
      if (['assert', 'assertIsDefined'].indexOf(node.expression.getText()) !== -1) {
        return ts.createNode(ts.SyntaxKind.NotEmittedStatement)
      }
    }
    return ts.visitEachChild(node, visitor, context)
  }

  return visitor
}
