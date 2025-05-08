source "https://rubygems.org"

gem "jekyll", "4.4.1"
gem "csv" # Required for Ruby 3.4+
gem "logger" # Will be removed from default gems in Ruby 3.5+
gem "base64" # Required for Ruby 3.4+
gem "bigdecimal" # Required for Ruby 3.4+

group :development do
  gem "stringex"
  gem "webrick"
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
