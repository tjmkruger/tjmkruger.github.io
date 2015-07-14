---
title: Installing and Managing Java Versions
layout: post
published: true
tags: [Java]
---

# Installing and Managing Java Versions

## Installation and setup using brew cask
- Install brew cask: `brew install caskroom/cask/brew-cask`
- Update brew: `brew update`
- Install java: `brew cask install java`
- Install jenv: `brew install https://raw.githubusercontent.com/entrypass/jenv/homebrew/homebrew/jenv.rb`
- Activate jenv automatically: `echo 'eval "$(jenv init -)"' >> ~/.bash_profile`
- Make sure the versions folder exits: `mkdir ~/.jenv/versions`

## Working with JEnv
jenv is an equivalent of rbenv, but for Java environment.

- Add java version: `jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home`
- List java versions: `jenv versions`
- Configure the JVM to use (Global): `jenv global oracle64-1.8.0.45`
- Configure the JVM to use (Directory): `jenv local oracle64-1.8.0.45`
- Configure the JVM to use (Shell instance): `jenv shell oracle64-1.8.0.45`
- Check that it worked: `java -version`

There are some additional options and info on the jenv readme page [here](https://github.com/gcuisinier/jenv/blob/master/README.md)


