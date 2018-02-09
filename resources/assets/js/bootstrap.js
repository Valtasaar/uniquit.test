window._ = require('lodash');

/**
 * We'll load jQuery and other plugins
 */

try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    require('jquery.mmenu');
} catch (e) {}