'use strict';

function isLintNode(node) {
  return node.label.name === 'broccoli-persistent-filter:EslintValidationFilter'; // || node.label.name === 'TemplateLinter';
}

function getSelfTime(node) {
  let selfTime = 0;

  for (let [statName, statValue] of node.statsIterator()) {
    if (statName === 'time.self') {
      selfTime += statValue;
    }
  }

  return selfTime;
}

module.exports = {
  name: require('./package').name,

  instrumentation(name, info) {
    if (name !== 'build') { return; }

    let totalTime = 0;
    let matchingNodeTime = 0;

    for (let node of info.tree.dfsIterator()) {

      if (isLintNode(node)) {
        for (let child of node.dfsIterator()) {
          matchingNodeTime += getSelfTime(child);
        }
      }

      totalTime += getSelfTime(node);
    }

    this.ui.writeLine(`Took: ${matchingNodeTime / 1e6}ms out of ${totalTime / 1e6}ms`);
  }
};
