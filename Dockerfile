# This is used only for building previews of govuk-content-publishing-guidance
# branches prior to merge.
# It lets us deploy and push an image to the Kubernetes registry, required
# to enable previews of govuk-content-publishing-guidance on govuk-preview-app.
# This follows the convention of our other deployable GOV.UK applications.
# However, unlike those applications, we don't ever deploy
# govuk-content-publishing-guidance, we just deploy to GitHub Pages
# as a static site - not a running server. This only exists to run its own
# dev server (eleventy.config.js already honours PORT) the same way its
# Heroku review app's Procfile does.
FROM node:24-slim

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Preview App always runs pods as uid/gid 1001 regardless of the image's own
# USER (see KubernetesRunner::APP_UID) - without this, eleventy can't create
# ./_site (its build output dir) at runtime.
RUN chown -R 1001:1001 /app

EXPOSE 8080
CMD ["npm", "run", "start"]
