set -e 
npm run build 

cd build

git init 
git add -A
git commit -m "Deploy"
git push -f git@github.com:mgalviz/t.git master:gh-pages

cd -