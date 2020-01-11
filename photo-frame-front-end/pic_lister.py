from os import listdir
from os.path import isfile, join

def main():
    onlyfiles = [f for f in listdir("./pics/") if isfile(join("./pics/", f))]
    
    with open("pic_list.txt", "w") as text_file:
        for filName in onlyfiles:
            print(f"/pics/{filName}", file=text_file)


main()