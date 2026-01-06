import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin';
import * as esbuild from 'esbuild'
import * as fs from 'fs';
import * as path from 'path';

export default function(eleventyConfig) {
  eleventyConfig.addBundle("js", {
    toFileDirectory: "bundle",
    outputFileExtension: "js",
    shortcodeName: "js",
    transforms: [
      async function(code) {
        
async function copyDir(src, dest) {
  function walk(currentSrc) {
    const entries = fs.readdirSync(currentSrc, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(currentSrc, entry.name);
      const destPath = srcPath.replace(src, dest);

      if (entry.isDirectory()) {
        walk(srcPath);
      } else if (entry.isFile()) {
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  walk(src);
}
        if (!fs.existsSync('_includes/javascripts')) {
  return code;
}
        await copyDir('_includes/javascripts', 'tmp')

        const app = fs.readFileSync('./tmp/application.mjs')
        
        fs.writeFileSync('./tmp/index.mjs', app + "\n" + code)
        
        esbuild.buildSync({
          entryPoints: ['./tmp/index.mjs'],
          outfile: './tmp/out.js',
          minify: process.env.ELEVENTY_RUN_MODE == 'build',
          bundle: true,
        })
        return fs.readFileSync('./tmp/out.js', 'utf8')
      }
    ],
    hoist: true,
    bundleExportKey: "bundle",
  });

  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    homeKey: 'Home',
    titleSuffix: 'Content and publishing guidance - GOV.UK',
    showBreadcrumbs: true,
    stylesheets: [
      '/assets/styles.css'
    ],
    header: {
      productName: 'Content and publishing guidance',
      search: {
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap',
        label: "Search guidance"
      }
    },
    serviceNavigation: {
      navigation: [
        {
            text: "Writing standards",
            href: "/writing-to-gov-uk-standards"
        },
        {
          text: "Publishing content",
          href: "/publish-update-retire-content"
        },
        {   
          text: "Formatting content",
          href: "/formatting-content"
        },
        {
          text: "National events",
          href: "/publishing-national-events"  
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
    },
    templates: {
      searchIndex: true,
    }
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