npm run build
cd dist
git init
git add -A 
it commit -m 'deploy'
git push -f git@github.com:seika5/hello-world.git master:gh-pages
cd ..