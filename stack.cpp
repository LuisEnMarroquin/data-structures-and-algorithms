#include <iostream>
using namespace std;

class Stack {
  private:
    int top = 0;
    string data[3] = {};
    int maximumSize = 3;
  public:
    void get() {
      cout << "\n " << top << " [ ";
      for(int i = 0; i < top; i++) {
        if (data[i] != "") {
          cout << data[i] << " ";
        }
      }
      cout << "]\n";
    }
    void push(string newItem) {
      if (top < maximumSize) {
        data[top] = newItem;
        top = top + 1;
        get();
      } else {
        cout << "\n Stack (" << top << ") is full, can't add " << newItem << "\n";
      }
    }
    void pop() {
      if (top != 0) {
        top = top - 1;
        get();
      }
    }
};

int main() {

  Stack array;

  array.push("Kevin");

  array.push("Sally");

  array.push("David");

  array.push("Sonya");

  array.pop();

  array.push("Jessy");

  array.push("Harry");

  getchar();

  return 0;
}
