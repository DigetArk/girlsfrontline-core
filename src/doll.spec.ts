/* tslint:disable variable-name */
import dollJson from '../data/doll.json';
import Doll from './doll';
import { IDoll } from './interface';

const dollData = dollJson as IDoll[];

describe('`CLEAR` Doll class', () => {
  const CLEAR = new Doll(dollData.find(({ codename }) => codename === 'CLEAR') as IDoll);
  test('returns Doll class of CLEAR', () => {
    expect(CLEAR).toBeTruthy();
  });
  test('set level to 70', () => {
    CLEAR.level = 70;
    expect(CLEAR.level).toBe(70);
  });
  test('throws error when set level to 0', () => {
    expect(() => CLEAR.level = 0).toThrow('`level` must be greater than 0');
  });
  test('throws error when set level to 121', () => {
    expect(() => CLEAR.level = 121).toThrow('`level` must be less than 121');
  });
  test('set favor to 200', () => {
    CLEAR.favor = 200;
    expect(CLEAR.favor).toBe(200);
  });
  test('throws error when set favor to 0', () => {
    expect(() => CLEAR.favor = 0).toThrow('`favor` must be greater than 0');
  });
  test('set dummyLink to 3', () => {
    CLEAR.dummyLink = 3;
    expect(CLEAR.dummyLink).toBe(3);
  });
  test('throws error when set dummyLink to 0', () => {
    expect(() => CLEAR.dummyLink = 0).toThrow('`dummyLink` must be greater than 0');
  });
  test('throws error when set dummyLink to 6', () => {
    expect(() => CLEAR.dummyLink = 6).toThrow('`dummyLink` must be less than 6');
  });
  test('set skillLevel to 7', () => {
    CLEAR.skillLevel = 7;
    expect(CLEAR.skillLevel).toBe(7);
  });
  test('throws error when set skillLevel to 0', () => {
    expect(() => CLEAR.skillLevel = 0).toThrow('`skillLevel` must be greater than 0');
  });
  test('throws error when set skillLevel to 11', () => {
    expect(() => CLEAR.skillLevel = 11).toThrow('`skillLevel` must be less than 11');
  });
  test('returns stats when level=70, dummyLink=3, favor=200', () => {
    expect(CLEAR.stats).toMatchObject({
      hp: 280,
      pow: 29,
      hit: 52,
      rate: 54,
      dodge: 75,
    });
  });
  test('returns effect when dummyLink=3', () => {
    expect(CLEAR.effect).toMatchObject({
      effectCenter: 5,
      effectPos: [1, 2, 4, 7, 8],
      effectType: 'all',
      gridEffect: {
        hit: 37,
        rate: 22,
      },
    });
  });
  test('returns skill1 when skillLevel=7', () => {
    expect(CLEAR.skill1).toMatchObject({
      codename: 'Clear',
      cooldown: 8.7,
      cooldownType: 'second',
      description: '공격을 멈추고 다섯 차례 연주한다, 매 연주는 무작위 아군 하나의 화력과 명중을 25%(Glory Light 장착시 33%) 상승시킨다, 중첩 불가, 연주당 지속시간 각 3초.',
      detail: {
        '명중 상승치': '25%',
        // tslint:disable-next-line:object-literal-key-quotes
        '쿨타임': '8.7초',
        '화력 상승치': '25%',
      },
      id: '109401',
      initialCooldown: 6,
      name: '"조금 더 완벽하게!"',
    });
  });
  test('skill2 must be null', () => {
    expect(CLEAR.skill2).toBe(null);
  });
});

describe('`M4A1Mod` Doll class', () => {
  const M4A1Mod = new Doll(dollData.find(({ codename }) => codename === 'M4A1Mod') as IDoll);
  test('returns Doll class of M4A1Mod', () => {
    expect(M4A1Mod).toBeTruthy();
  });
  test('returns skill2', () => {
    expect(M4A1Mod.skill2).toMatchObject({
      codename: 'M4_Nightmare',
      cooldown: 0,
      cooldownType: 'second',
      description: '화력전개 발동 시, 지속시간 동안 타깃에게 설한의 쐐기를 부여한다. 전투 중 자신을 포함한 아군이 3기 이하일 경우, 공격속도가 70% 감소하는 대신, 사격 시, 타깃' +
      '에게 공격력의 600%의 대미지를 입히며 2.5범위의 적들에게 쐐기를 부여하고 공격력의 100%의 대미지를 입힌다.',
      detail: {
        '포격 대미지': '600%',
      },
      id: '801108',
      initialCooldown: 0,
      name: '설한의 쐐기',
    });
  });
});