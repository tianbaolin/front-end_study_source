// 组合模式
function Folder(name) {
  this.name = name;
  this.children = [];
  this.parent = null;
}
Folder.prototype.add = function add(...files) {
  this.children = this.children.concat(files);
  files.map(item => item.parent = this);
};

function File(name) {
  this.name = name;
  this.parent = null;
}
File.prototype.add = function add() {
  throw new Error('不允许调用add方法');
};
const root = new Folder('根目录');
const folder1 = new Folder('学习');
const folder2 = new Folder('工作');
const file1 = new File('js');
const file2 = new File('css');
const file3 = new File('深圳项目');
const file4 = new File('南通项目');

folder1.add(file1, file2);
folder2.add(file3, file4);
root.add(folder1, folder2);
console.log(root);

function scan(file) {
  if (file.children) {
    file.children.map((item) => {
      console.log('扫描到', item.name);
      return scan(item);
    });
  }
}
scan(root);

console.log('object :', file3.parent.parent === root);
