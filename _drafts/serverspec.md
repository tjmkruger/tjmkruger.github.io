
= Running Server Spec with EC2

== Using the pem file with ssh host config
===Add a new host as follows to ~/.ssh/config

Host ec2
  HostName 54.200.94.17
  User ubuntu
  IdentityFile ~/YOUR-File.pem

// Add pem file to ssh `ssh-add ~/.ssh/KEY_PAIR_NAME.pem
// Restart agent: `eval 'ssh-agent -s'
//Add both of these commands to your .profile or .[bash/zsh]rc to run them on startup.

== Install ServerSpec
=== Create a folder for the tests:
`mkdir ~/spec-tests/
`cd ~/spec-tests/
=== Create a Gemfile:
source 'https://rubygems.org'

gem 'serverspec'
gem 'rake'
=== Install the gems:
bundle  install --path ./gems/
=== Initialize a new target machine:
bundle exec serverspec-init
=== Run the tests:
bundle exec rake spec

== Create specs
Edit and create more _spec.rb files in the target macines folder
See example here: http://serverspec.org/resource_types.html
