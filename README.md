# Plays This

Hosted at [playsthis.com](http://playsthis.com).

I generate international Amazon links for products using a little Chrome Extension I wrote called [Amazing Linkalizer](http://amznlnk.com).

## Set-up related stuff

* http://jekyllrb.com/
* http://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/
* https://github.com/barryclark/jekyll-now

## Set up for local development (God help you)

* On Windows:
  * http://jekyll-windows.juthilo.com/
* On Mac/Linux:
  * http://jekyllrb.com/docs/installation/
* Add a file in the root dir called `Gemfile` containing:

        source 'https://rubygems.org'
        gem 'github-pages'
        gem 'wdm', '>= 0.1.0' if Gem.win_platform?

* Install Bundler (http://bundler.io/) - `gem install bundler`
* Serve with `bundle exec jekyll serve`

### Extra helpful setup stuff

* https://help.github.com/articles/using-jekyll-with-pages/

### Tagging

The tagging system is appreciatively stolen from [MindDust](http://www.minddust.com/post/tags-and-categories-on-github-pages/). 

When adding a new tag:

* Add it to `_data/tags.yml`:

        - slug: drums
          name: Drums

* Add a new empty template `tag/drums.md` with the front matter:

        ---
        layout: tag-page
        tag: drums
        permalink: /tag/drums/
        ---

### Case sensitive paths

Paths in Github pages are case sensitive and I, slightly short-sightedly, started off using title case for the paths of posts. This is bad as [any](http://wiredimpact.com/blog/never-use-capital-letters-urls/) [number](http://www.goinflow.com/redirect-uppercase-urls-to-lowercase/) [of](http://brianflove.com/2014/08/11/lowercase-your-uris/) [blogs](http://www.chrisabernethy.com/force-lower-case-urls-with-mod_rewrite/) are more than willing to shout about, so I decided to switch to using all lower case from mid January 2016 onwards.

Github pages [doesn't support](https://help.github.com/articles/redirects-on-github-pages/) server config files, like `.htaccess` so to handle the existing posts, I added [JekyllRedirectFrom](https://github.com/jekyll/jekyll-redirect-from) to redirect lower case paths to the existing mixed case paths. In some ways it might have been better to change the existing paths to lower case and add redirects from the old mixed case versions but then anyone following an existing link would see an ugly redirect page for a second and I'd rather minimise how much that happens. Not to mention it would be a hassle to rename them all.

### Related posts

A basic related posts script appreciatively stolen from [Andrea Fortuna](http://www.andreafortuna.org/programming/2016/02/10/jekyll-related-posts/).