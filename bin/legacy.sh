#!/usr/bin/env bash

# Change working directory to the directory of this script
cd "$(dirname "$0")"

if [ ! -d "./developer-roadmap" ]; then
  git clone --depth 1 -b master git@github.com:kamranahmedse/developer-roadmap.git
fi

git pull origin master

echo "Removing old directories"
rm -rf ../src/videos
rm -rf ../src/guides
rm -rf ../src/roadmaps

rm -rf ../src/assets/jsons
rm -rf ../src/assets/pdfs

node roadmap-migrator.js
