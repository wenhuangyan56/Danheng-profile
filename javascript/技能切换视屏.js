document.addEventListener('DOMContentLoaded', () => {
  const videoMap = {
    normal: 'images/普攻.gif',
    skill: 'images/战技.gif',
    ultimate: 'images/终结技.gif',
    tianfu:'images/天赋.gif',
    miji:'images/秘技.gif',

  };

  const textMap = {
    normal:'🔹强化普攻：「瞬华」「天矢阴」「盘拏耀跃」对单体敌人造成虚数伤害。此攻击可以通过消耗战技点强化，根据强化次数不同，普攻「泽芝」将分别变为「瞬华」「天矢阴」「盘拏耀跃」普攻的攻击段数和伤害会随着强化次数增加，其中「天矢阴」和「盘拏耀跃」还将从单体伤害变为扩散伤害；',
    skill: '🔹战技：龙力自在 非直接伤害技能，而是赋予自身"乘式状态"：消耗 1~3点战技点，强化下一次普通攻击；',
    ultimate: '🔹终结技：苍龙傲睨，劫水濯世 对单体敌人造成多段高倍率虚数伤害，施放终结技时丹恒—饮月除了能对敌方单体及其相邻目标造成虚数属性伤害之外还能获得一定数量的「逆鳞」这个「逆鳞」是用来抵扣丹恒—饮月的战技点消耗的；',
    tianfu:'🔹天赋：亢心 每次由释放当前回合强化攻击段数提升暴击率与伤害，持续若干回合可叠加。',
    miji:'🔹秘技：掣空如虹 丹恒—饮月的秘技「掣空如虹」还能使他进入一段时间的「蟠跃」状态在此状态下使用攻击会快速向前移动一段距离并攻击接触到的敌人通过这种方式进入战斗饮月将获得一「逆鳞」；',

  };

  const box = document.getElementById('skillVideoBox');
  const textBox = document.getElementById('skillTextBox');
  const buttons = document.querySelectorAll('.skill-component button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const type = button.getAttribute('data-type');
      const file = videoMap[type];
      const ext = file.split('.').pop();

      // 切换图片/视频
      if (ext === 'gif') {
        box.innerHTML = `<img src="${file}" alt="${type}">`;
      } else {
        box.innerHTML = `<video src="${file}" autoplay loop muted></video>`;
      }

      // 切换文本
      textBox.innerHTML = `<p>${textMap[type]}</p>`;
    });
  });
});
