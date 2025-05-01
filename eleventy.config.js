const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin');
const slugify = require("slugify")

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    homeKey: 'GOV.UK Content and publishing guidance',
    titleSuffix: 'Content and publishing guidance - GOV.UK',
    showBreadcrumbs: true,
    stylesheets: ['/assets/application.css'],
    header: {
      productName: 'Content and publishing guidance',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap',
        label: "Search guidance"
      }
    },
    navigation: {
      items: [
        {
            text: "Writing to GOV.UK standards",
            href: "/writing-to-gov-uk-standards"
        },
      ]
    },
    footer: {
      meta: {
        items: [
          {
            href: "/accessibility-statement",
            text: "Accessibility statement"
          },
          {
            href: "/cookies",
            text: "Cookies"
          },
          {
            href: "/sitemap",
            text: "Sitemap"
          },
          {
            href: "/about-the-guidance",
            text: "About the guidance"
          },
        ],
        html: 'Built by the <a href="https://www.gov.uk/government/organisations/government-digital-service" class="govuk-footer__link">Government Digital Service</a>.',
      }
    }
  });
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    }
  
    return slugify(str, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });
  });
  eleventyConfig.addPreprocessor("macro-inject", ".njk,.md", (data, content) => {
		return `{%- from "call-to-action.njk" import cta with context -%}\n` + content;
	});


  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'app',
      // Use layouts from the plugin
      includes: '../_includes',
      layouts: '../_includes/layouts'
    },
    serverOptions: {
      port: process.env.PORT || 8080
    }
  }
};