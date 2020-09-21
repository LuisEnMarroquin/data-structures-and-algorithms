class StackClass {
  int top = 0;
  String[] data = { "", "", "" };
  int maximumSize = 3;

  public void get() {
    System.out.print("\n " + this.top + " [ ");
    for (int i = 0; i < this.top; i++) {
      System.out.print(this.data[i] + " ");
    }
    System.out.print("]\n");
  }

  public void push(String newItem) {
    if (this.top < this.maximumSize) {
      this.data[this.top] = newItem;
      this.top++;
      this.get();
    } else {
      System.out.println("\n Stack (" + this.top + ") is full, can't add " + newItem);
    }
  }

  public void pop() {
    if (this.top != 0) {
      this.top--;
      this.get();
    }
  }
}

public class stack {
  public static void main(String[] args) {

    StackClass array = new StackClass();

    array.push("Kevin");

    array.push("Sally");

    array.push("David");

    array.push("Sonya");

    array.pop();

    array.push("Jessy");

    array.push("Harry");

  }
}
