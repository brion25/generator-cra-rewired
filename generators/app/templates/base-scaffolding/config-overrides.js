<% if (style === 'SASS') { %>
const rewireSass = require('react-app-rewire-sass');
<% } %>
<% if (style === 'LESS') { %>
const rewireLess = require('react-app-rewire-less');
<% } %>
<% if (usePreact) { %>
const rewirePreact = require('react-app-rewire-preact');
<% } %>

module.exports = function override(config, env) {
  <% if (style === 'SASS') { %>config = rewireSass(config, env);<% } %>
  <% if (style === 'LESS') { %>config = rewireLess(config, env);<% } %>
  <% if (usePreact) { %>config = rewirePreact(config, env);<% } %>
  return config;
}
