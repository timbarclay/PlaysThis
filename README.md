# Plays This

Hosted at [playsthis.com](http://playsthis.com)

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
        gem 'rouge', '1.3.0'
        gem 'wdm', '>= 0.1.0' if Gem.win_platform?

* Install Bundler (http://bundler.io/) - `gem install bundler`
* Serve with `bundle exec jekyll serve`

### Extra helpful setup stuff

* https://help.github.com/articles/using-jekyll-with-pages/
