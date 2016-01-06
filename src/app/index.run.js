(function() {
  'use strict';

  angular
    .module('nodeJsKamilossan')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
