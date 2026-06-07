/**
 * drawio.js | https://theme-next.org/docs/tag-plugins/drawio
 */

'use strict';

module.exports = function drawio(args, content) {
  return `<div class="drawio-placeholder" data-src="${args[0]}"></div>`;
};
