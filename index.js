'use strict';
var cheerio = require('cheerio');
var _ = require('underscore');
var parse = require('url-parse');
var defaultConfig = {
  // height: 300,
  // theme: 0,
  // defaultTab: 'result',
  // description: ''
  snapshot: "1",
  htmlTab: '', // htmlTab: 'html,',
  cssTab: '', // cssTab: 'css,',
  jsTab: 'js,',
  consoleTab: 'console,',
  outputTab: '' // outputTab: 'output,'
};

var template = _.template(
  '<a class="jsbin-embed" href="http://jsbin.com/<%= bin %>/<%= snapshot %>/embed?<%= htmlTab %><%= cssTab %><%= jsTab %><%= consoleTab %><%= %>">JS Bin on jsbin.com</a>'
);

// http://jsbin.com/fumiqa/1/embed?js,console

// [](jsbin://AsFJh/1/embed?htmlTab=html,&cssTab=css,&jsTab=js,&consoleTab=console,&outputTab=output)
// [](codepen://Lingyucoder/AsFJh?height=800&theme=0)

// '<p data-height="<%= height %>" data-theme-id="<%= theme %>" data-slug-hash="<%= pen %>" data-default-tab="<%= defaultTab %>" data-user="<%= user %>" class="jsbin">See the Pen <a href="http://jsbin.io/<%= user %>/pen/<%= pen %>/"><%= description %></a> by <%= user %> (<a href="http://jsbin.io/<%= user %>">@<%= user %></a>) on <a href="http://jsbin.io">jsbin</a>.</p>'

// <p data-height="265" data-theme-id="light" data-slug-hash="Kgdbvd" data-default-tab="result" data-user="mikeumus" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/mikeumus/pen/Kgdbvd/">Kgdbvd</a> by Michael D Mooring (<a href="http://codepen.io/mikeumus">@mikeumus</a>) on <a href="http://codepen.io">CodePen</a>.</p>
// <script async src="//assets.codepen.io/assets/embed/ei.js"></script>

module.exports = {
  book: {
    assets: './assets',
    js: [
      'embed-jsbin.min-3.39.15.js'
    ]
  },
  hooks: {
    page: function(page) {
      var config = _.defaults(this.options.pluginsConfig
        .jsbin, defaultConfig);
      _.each(page.sections, function(section) {
        var $ = cheerio.load(section.content);
        $('a').filter(function() {
          var href = $(this).attr('href');
          return parse(href).protocol ===
            'jsbin:';
        }).each(function(index, a) {
          a = $(a);
          var rst = parse(a.attr('href'), true);
          a.replaceWith(template(_.extend({},
            // [](codepen://Lingyucoder/AsFJh?height=800&theme=0)
            // [](jsbin://AsFJh/1/embed?htmlTab=html,&cssTab=css,&jsTab=js,&consoleTab=console,&outputTab=output)
            config, rst.query, {
              // user: rst.host,
              // pen: rst.pathname.slice(1)
              bin: rst.pathname.slice(0),
              snapshot: rst.pathname.slice(1),
              htmlTab: rst.pathname.slice(2),
              cssTab: rst.pathname.slice(3),
              jsTab: rst.pathname.slice(4),
              consoleTab: rst.pathname.slice(5),
              outputTab: rst.pathname.slice(6)
            })));
        });
        section.content = $.html();
      });
      return page;
    }
  }
};
