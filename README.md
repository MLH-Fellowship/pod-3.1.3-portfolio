# Portfolio Template

This is a Jekyll website template designed for Pre Fellowship Fellows. During the Pre Fellowship, you'll build a project

[![Netlify Status](https://api.netlify.com/api/v1/badges/3a8dce37-f16e-426c-b3f2-f9fa9faf0fb4/deploy-status)](https://app.netlify.com/sites/practically-pi-portfolio-template/deploys)


## Make your own!

1. Use the Template button.
2. Update `_config.yml` to contain your information.
    1. Change `url` to the URL you'll be hosting it at
    2. Make sure it has the /
3. Use something like Netlify or GitHub Pages to deploy (note, this only works on username.github.io, not username.github.io/repo-name)

## Add your portfolio

Head to `_data` and fill out either `projects.yml`, `experience.yml` and `education.yml`.

Project example.
```yaml
- title: Machine Learning Project
  event: MLH Fellowship Pre Fellowship - Batch 3.5
  date: Fall 2020
```

Experience example.
```yaml
- role: Pre Fellowship Fellow
  company: MLH Fellowship
  dates: Summer 2021
  logo: fellowship.svg
```

Education example.
```yaml
- course: Pre Fellowship Fellow
  institute: MLH Fellowship
  dates: Summer 2021
  logo: fellowship.svg
```
## Add project posts

1. Make a new `.md` file inside of `projects`.
2. Add the header to your markdown file (see below) and change the title to the name of your blog post.
3. Write your project page! Can be a README from GitHub or your Devpost page.
4. Add the `page-name` field to your `projects.yml` (see below).

Top of post markdown file post.
```
---
title: Project
layout: page
---
```

`projects.yml` with the `page-name` field.

```yaml
- title: Machine Learning Project
  event: MLH Fellowship Pre Fellowship - Batch 3.5
  date: Summer 2021
  page-name: project
```

## Add Google Analytics

1. Create a Google account if you don't have one

2. Sign in to your [Analytics account](https://analytics.google.com/)

3. Click Admin

4. Select an account from the menu in the *ACCOUNT* column.

5. Select a property from the menu in the *PROPERTY* column.
   
6. Under *PROPERTY*, click *Tracking Info* -> *Tracking Code*. Your Tracking ID will be displayed at the top of the page

7. Inside `_config.yml` file, simply enter your tracking id under `google-analytics` field.

If you get stuck in any of these steps, refer [here](https://support.google.com/analytics/answer/1008080).

## Development

If you want to test it locally or add some new features, run the below commands. Make sure to have Ruby and Bundler installed.

```
bundle install --path vendor/bundle
bundle exec jekyll serve
```
