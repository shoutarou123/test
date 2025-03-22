class Test {
  // 初期状態で実行する内容(引数も可能)
  constructor(val) {
    // console.log("コンストラクターが実行");
    console.log(val);
    this.author = "山田"; // thisで変数を宣言している。thisにTestが入ってるようなもの
    // this.number = val; // this変数で引数も使える
    this.hoge = "hoge";
  }

  // メソッド returnを指定しないとundefinedになる
  hello() {
    console.log("helloが実行");
    return this.author;
  } 

  // static にするとclassの外で実行するときにインスタンス化しなくても呼び出せるようになる
  static hello4() {
    console.log('static hello4を実行');
  }

}

// インスタンス化しないとclassで定義した内容を使えない
// インスタンス化とはclsssを実行する
// new Test(10);

// class内で定義した変数はそとでインスタンス化した後に変数に入れないと使えない
// let test = new Test(10);
// console.log(test.author);

// let test2 = new Test(15);
// console.log(test2.number); // class内で定義した変数を取れる

// let test3 = new Test();
// console.log(test3.hello());


// Test.hello4();

class CopyTest extends Test {
  constructor(val) {
    super(val);
  }
  copyHello() {
    super.hello();
    console.log(this);
    return this.author;
  }
}

let copy = new CopyTest(100)
console.log(copy.copyHello());