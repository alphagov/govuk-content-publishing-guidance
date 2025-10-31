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
            let entries = fs.readdirSync(src, { recursive: true, withFileTypes: true })

            for (let entry of entries) {
                let srcPath = path.join(entry.path, entry.name);
                let destPath = srcPath.replace(src, dest);
                let destDir = path.dirname(destPath);

                if (entry.isFile()) {
                  fs.mkdirSync(destDir, { recursive: true })
                  fs.copyFileSync(srcPath, destPath);
                }
            }
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
    homeKey: 'GOV.UK Content and publishing guidance',
    titleSuffix: 'Content and publishing guidance - GOV.UK',
    showBreadcrumbs: true,
    stylesheets: [
      '/assets/styles.css'
    ],
    header: {
      productName: 'Content and publishing guidance',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap',
        label: "Search guidance"
      }
    },
    serviceNavigation: {
      navigation: [
        {
            text: "Writing to GOV.UK standards",
            href: "/writing-to-gov-uk-standards"
        },
        {
            text: "Publish, update or retire content",
            href: "/publish-update-retire-content"
        }
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