file="${1%.*}"
ext="${1##*.}"

if [ "$ext" = "c" ]; then
  gcc $1 && ./a.out || start a.exe
elif [ "$ext" = "cpp" ]; then
  g++ $1 && ./a.out || start a.exe
elif [ "$ext" = "go" ]; then
  go run $1
elif [ "$ext" = "rs" ]; then
  rustc $1
elif [ "$ext" = "java" ]; then
  javac $1 && java $file
else
  echo "Extension '$ext' is not supported"
fi
