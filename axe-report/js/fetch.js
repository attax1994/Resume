/**
 * Pluck Nodes from a single type.
 * @param source
 * @param type
 * @returns {Object}
 */
function pluckNodes(source, type) {
  var tempResults = {};
  for (var listKey = 0; listKey < source[type].length; listKey++) {
    var tempList = source[type][listKey];
    for (var nodeKey = 0; nodeKey < tempList.nodes.length; nodeKey++) {
      var tempNode = tempList.nodes[nodeKey];
      var result = {
        id: tempList.id,
        violationType: tempList.description,
        impact: tempList.impact,
        helpUrl: tempList.helpUrl,
        DOMElement: tempNode['target'] || 'Empty',
        Xpath: tempNode['xpath'].join(', ') || 'Empty',
        message: !!tempNode['failureSummary'] ? [tempNode['failureSummary']] : tempNode.any.map(function (value) {
          return value.message;
        }) || ['Empty'],
        HTML: tempNode['html']/*.replace(/</gi, '&lt;').replace(/>/gi, '&gt;')*/
      };
      if (!!tempResults[result.id]) {
        tempResults[result.id].push(result);
      } else {
        tempResults[result.id] = [];
        tempResults[result.id].push(result);
      }
    }
  }
  var keys = Object.keys(tempResults);
  var resultsList = [];
  keys.forEach(function (value) {
    resultsList.push({
      id: value,
      value: tempResults[value],
    });
  });
  return resultsList;
}

/**
 * Query JSON object.
 * This could work for result object.
 */
function queryJSON() {
  var data = webdom_at_result;
  var results = {};

  if (Object.prototype.toString.call(data) === "[object Object]") {
    results['violations'] = pluckNodes(data, 'violations');
    results['incomplete'] = pluckNodes(data, 'incomplete');
  }
  
  viewModel.source(results);
  viewModel.url(data.url);
  switchType('violations', -1);
  /*console.log(results);*/
}

/**
 * Switch handler for side menu items.
 * @param {String} type : 'violations' or 'incomplete'
 * @param {Number} index : -1 for all, $index in knockout for a certain sub-type
 */
function switchType(type, index) {
  var resultList = [];

  if (index === -1) {
    resultList = viewModel.source()[type];
  } else {
    resultList.push(viewModel.source()[type][index]);
  }

  // restore table to top
  tableElement.scrollTop = 0;
  // refresh view model
  viewModel.results(resultList);
  viewModel.currentType(type);
  viewModel.typeIndex(index);
}

var tableElement;
var viewModel = {
  source: ko.observable({}),
  results: ko.observableArray([]),
  url: ko.observable(''),
  typeIndex: ko.observable(-1),
  currentType: ko.observable('violations')
};

window.onload = function () {
  tableElement = document.querySelector('.table-card-wrapper');
  ko.applyBindings(viewModel);
  queryJSON();
};

