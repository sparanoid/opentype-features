source "https://rubygems.org"

gem "jekyll", "4.1.1"

group :development do
  gem "jekyll-last-modified-at"
  gem "stringex"
end

group :jekyll_plugins do
  gem "match_regex"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "2.0.2"
  gem "tzinfo-data"
end

# this solves error from the grunt
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
