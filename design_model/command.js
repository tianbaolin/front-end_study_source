// 命令模式
const exculater = {

  commands: [],
  installCommand(command) {
    this.commands.push(command);
  },
  exculate() {
    this.commands.map(item => item());
  },
};
exculater.installCommand(() => {
  console.log('1', 1);
});
exculater.installCommand(() => {
  console.log('2', 2);
});
exculater.exculate();
