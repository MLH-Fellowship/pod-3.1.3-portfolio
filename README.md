# Portfolio Template

This is a Jekyll website template designed for Pre Fellowship Fellows. This will be your first project for your pre-fellowship. You will first build this portfolio website with your peers then use it as a template for yourself.

[![Netlify Status](https://api.netlify.com/api/v1/badges/3a8dce37-f16e-426c-b3f2-f9fa9faf0fb4/deploy-status)](https://app.netlify.com/sites/practically-pi-portfolio-template/deploys)

## Features

* Easy setup with .yml, .sass and css variables
* Projects showcase
* Google Analytics integration
* GitHub stats and MUL integration
* Links to your Twitter, GitHub and LinkedIn
* Downloadable Resume
* Dark mode
* Lighthouse Automated Auditing
* Sweet UI :sunglasses:

## Directory strucure

```
.
├── _data                       # files to fill up with your data
├── _includes                   # HTML files included in the website
├── _layouts                    # Content Structure Rendering
├── _sass                       # beauty files
├── assets                      # Tools, utilities and resume storage
│   ├── css                     # Configure your UI Colors
│   ├── img                     # Configurable and stored images
│   └── js                      # dark mode file
├── projects                    # Cards container project section
├── _config.yml                 # Configure your information
├── .gitignore
├── .ruby-version
├── 404.html
├── CODE_OF_CONDUCT.md
├── gemfile
├── gemfile.lock
├── LICENSE
├── README.md
├── index.html
├── lighthousec.js
└── pull_request_template.md
```

## Make your own!

1. Use the Template button.
2. Update `_config.yml` to contain your information.
    1. Change `url` to the URL you'll be hosting it at
    2. Make sure it has the /
3. Use something like Netlify or GitHub Pages to deploy (note, this only works on username.github.io, not username.github.io/repo-name)

## Add your portfolio

Head to `_data` and fill out files `projects.yml`, `experience.yml`, `education.yml` and `recommendation.yml`.


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

Recommendation example.
```yaml
- title: HackTheMidlands
  author: Robbie
  text: Top Zoom Host
  date: Summer 2021
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

## Add your Resume

Inside the folder /assets add your resume file using .pdf format.
It should be named `resume.pdf`. It will be avaliable for download as `{name surname} - resume.pdf"`!

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

If you want to test it locally or add some new features, run the commands below. Make sure to have [Ruby](https://www.ruby-lang.org/en/downloads/ "Ruby Installation") and Bundler (``gem install bundler``) installed.

```
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve --livereload
```
note: If flag --livereload gives you an error don't use it.


### It should look like something like this:

![template screenshot](/assets/img/portfolio.png)