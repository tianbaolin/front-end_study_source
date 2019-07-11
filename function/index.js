// 计算奖金
function calculateBounds(baseSalary, level) {
  const levelMap = {
    A: 10,
    B: 7,
    C: 5,
    D: 3,
    E: 1,
  };
  return baseSalary * (levelMap[level] || 1);
}
const yearBounds = calculateBounds(12, 'B');
console.log('yearBounds', yearBounds);
