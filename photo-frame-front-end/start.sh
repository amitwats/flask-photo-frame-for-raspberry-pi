cd src
npm run build
cp ../pic_lister.py ./build
rsync -av ../pics/ ./build/pics
cd build 
python pic_lister.py
python -m http.server 8000
